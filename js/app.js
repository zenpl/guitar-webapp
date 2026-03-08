// ─── App: Render + Transpose + Modal ─────────────────────────

// ── Transpose helpers ──
const NOTES     = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const NOTE_ALIAS = { Db:'C#', Eb:'D#', Gb:'F#', Ab:'G#', Bb:'A#' };
const BARRE_ROOTS = new Set(['F','Bb','B','C#','D#','Eb','Ab','G#','A#','F#','Db']);

function noteIndex(n) {
  return NOTES.indexOf(NOTE_ALIAS[n] || n);
}
function transposeNote(n, semis) {
  const idx = noteIndex(n);
  return idx === -1 ? n : NOTES[(idx + semis + 120) % 12];
}
function transposeChord(chord, semis) {
  if (!semis) return chord;
  const m = chord.match(/^([A-G][#b]?)(.*)/);
  if (!m) return chord;
  return transposeNote(m[1], semis) + m[2];
}
function isBarreChord(chord) {
  if (getChord(chord)?.barre) return true;
  const root = (chord.match(/^[A-G][#b]?/) || [])[0];
  return BARRE_ROOTS.has(root);
}

// ── Song state ──
const state = {}; // { [songId]: { semis, easySemis } }

function initState(song) {
  if (!state[song.id]) state[song.id] = { semis: 0, easySemis: null };
}

// ── Difficulty scoring ──
function scoreSemis(song, semis) {
  const seen = new Set();
  song.sections.forEach(sec =>
    sec.lines.forEach(line =>
      line.forEach(seg => { if (seg.chord) seen.add(seg.chord); })
    )
  );
  let barre = 0, black = 0;
  seen.forEach(orig => {
    const shifted = transposeChord(orig, semis);
    if (isBarreChord(shifted)) barre++;
    const root = (shifted.match(/^[A-G][#b]?/) || [])[0];
    const idx = noteIndex(root);
    if (idx !== -1 && [1,3,6,8,10].includes(idx)) black++;
  });
  return barre * 10 + black;
}

function findEasySemis(song) {
  if (state[song.id].easySemis !== null) return state[song.id].easySemis;
  let best = 0, bestScore = Infinity;
  for (let s = 0; s < 12; s++) {
    const sc = scoreSemis(song, s);
    if (sc < bestScore) { bestScore = sc; best = s; }
  }
  state[song.id].easySemis = best;
  return best;
}

function difficultyLabel(song) {
  const semis = state[song.id].semis;
  const easy  = findEasySemis(song);
  const score = scoreSemis(song, semis);
  const easyScore = scoreSemis(song, easy);
  const origScore = scoreSemis(song, 0);
  if (score === easyScore)   return { text: '最易', color: '#4ade80' };
  if (score <= origScore)    return { text: '易',   color: '#86efac' };
  return                            { text: '难',   color: '#f87171' };
}

// ── Rendering ──
function renderSong(song) {
  initState(song);
  const s = state[song.id].semis;

  const chordBar = song.chords.map(ch => {
    const tc = transposeChord(ch, s);
    return `<span class="chord-pill" data-chord="${tc}">${tc}</span>`;
  }).join('');

  const sections = song.sections.map((sec, si) => {
    const linesHtml = sec.lines.map((line, li) => {
      const segs = line.map((seg, gi) => {
        const tc = seg.chord ? transposeChord(seg.chord, s) : '';
        const hasChord = !!tc;
        const hasLyric = !!(seg.lyric && seg.lyric.trim());
        const editAttrs = `data-song="${song.id}" data-si="${si}" data-li="${li}" data-gi="${gi}"`;
        if (!hasLyric) {
          if (!hasChord) return '';
          const cSpan = `<span class="c" data-chord="${tc}" data-orig="${seg.chord}">${tc}</span>`;
          return `<span class="seg has-chord" ${editAttrs}>${cSpan}<span class="w-empty"></span></span>`;
        }
        const cSpan = hasChord
          ? `<span class="c" data-chord="${tc}" data-orig="${seg.chord}">${tc}</span>`
          : `<span class="c"> </span>`;
        const lyric = hasChord && seg.lyric.length > 0
          ? `<span class="w-mark">${seg.lyric[0]}</span>${seg.lyric.slice(1)}`
          : seg.lyric;
        return `<span class="seg${hasChord?' has-chord':''}" ${editAttrs}>${cSpan}<span class="w">${lyric}</span></span>`;
      }).join(' ');
      return `<div class="lyric-line">${segs}</div>`;
    }).join('');
    return `<div class="section-title">${sec.title}</div>${linesHtml}`;
  }).join('');

  const diff = difficultyLabel(song);
  const shiftLabel = s === 0 ? '原调' : (s > 6 ? `−${12-s}` : `+${s}`);
  const baseKey = transposeNote(song.baseKey.replace(/m$/, ''), s) + (song.baseKey.endsWith('m') ? 'm' : '');
  const playKey = transposeNote(song.playKey.replace(/m$/, ''), s) + (song.playKey.endsWith('m') ? 'm' : '');
  const capo = ((noteIndex(baseKey.replace(/m$/,'')) - noteIndex(playKey.replace(/m$/,'')) + 12) % 12);
  const ver = song.importVer || 1;
  const locked = getLocked(song.id);

  return `
<div class="song hidden" id="song-${song.id}">
  <div class="song-header">
    <h2>${song.title}<span class="ver-badge">v${ver}</span><button class="lock-btn${locked ? ' locked' : ''}" onclick="toggleLock('${song.id}')">${locked ? '🔒' : '🔓'}</button><button class="edit-btn" onclick="toggleEditMode('${song.id}', this)">✏️</button></h2>
    <div class="artist">${song.artist}</div>
    <div class="meta" id="meta-${song.id}">Key=${baseKey} · Play=${playKey} · Capo=${capo}</div>
    <div class="transpose-ctrl">
      <button class="trans-btn" onclick="doTranspose('${song.id}',-1)">－</button>
      <span class="trans-label" id="trans-${song.id}">${shiftLabel}</span>
      <button class="trans-btn" onclick="doTranspose('${song.id}',+1)">＋</button>
      <button class="trans-btn easy-btn" id="easy-${song.id}"
        style="color:${diff.color};border-color:${diff.color === '#f87171' ? '#7f1d1d' : '#166534'}"
        onclick="toggleEasy('${song.id}')">${diff.text}</button>
    </div>
  </div>
  <div class="chord-bar">${chordBar}</div>
  <div class="lyrics-section">${sections}</div>
</div>`;
}

function renderAll() {
  const container = document.getElementById('songs-container');
  const selector  = document.getElementById('song-selector');

  container.innerHTML = SONGS.map(renderSong).join('');
  selector.innerHTML  = SONGS.map((s, i) =>
    `<button class="song-btn${i===0?' active':''}" data-song="${s.id}">${s.title}</button>`
  ).join('');

  // show first song
  document.querySelector('.song')?.classList.remove('hidden');
}

// ── Transpose actions ──
function doTranspose(songId, delta) {
  const song = SONGS.find(s => s.id === songId);
  state[songId].semis = (state[songId].semis + delta + 12) % 12;
  refreshSong(song);
}

function getLocked(songId) {
  const song = SONGS.find(s => s.id === songId);
  return !!(song && song.locked);
}

function toggleLock(songId) {
  // 锁定状态由 songs.js 的 locked 字段管理，告知 AI 修改
}

function toggleEasy(songId) {
  const song = SONGS.find(s => s.id === songId);
  const easy = findEasySemis(song);
  const cur  = state[songId].semis;
  state[songId].semis = cur !== easy ? easy : 0;
  refreshSong(song);
}

function refreshSong(song) {
  const id  = song.id;
  const s   = state[id].semis;
  const el  = document.getElementById('song-' + id);
  const wasHidden = el.classList.contains('hidden');

  // Replace song HTML in place
  const tmp = document.createElement('div');
  tmp.innerHTML = renderSong(song);
  const newEl = tmp.firstElementChild;
  if (!wasHidden) newEl.classList.remove('hidden');
  el.replaceWith(newEl);
}

// ── Song selector ──
function setupSelector() {
  document.getElementById('song-selector').addEventListener('click', e => {
    const btn = e.target.closest('.song-btn');
    if (!btn) return;
    document.querySelectorAll('.song-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.song').forEach(s => s.classList.add('hidden'));
    btn.classList.add('active');
    document.getElementById('song-' + btn.dataset.song)?.classList.remove('hidden');
    window.scrollTo(0, 0);
  });
}

// ── Chord modal ──
function setupModal() {
  document.addEventListener('click', e => {
    if (editModeSongId) return; // 编辑模式下不弹弦图
    const chord = e.target.dataset.chord;
    if (chord && getChord(chord)) { showChord(chord); return; }
    if (e.target.id === 'modal') hideChord();
  });
}

function showChord(name) {
  document.getElementById('modal-card').innerHTML =
    `<h3>${name}</h3>${drawChord(name)}<div class="desc">${getChord(name)?.desc || name}</div><div class="hint">点击外部关闭</div>`;
  document.getElementById('modal').classList.add('show');
}
function hideChord() {
  document.getElementById('modal').classList.remove('show');
}

// ── Edit Mode ──
const pendingEdits = [];
let pickedChord = null;
let editModeSongId = null; // 当前编辑中的歌曲 id

function toggleEditMode(songId, btn) {
  const songEl = document.getElementById('song-' + songId);
  const active = songEl.classList.toggle('edit-mode');
  btn.classList.toggle('active', active);
  editModeSongId = active ? songId : null;
  if (!active) { pickedChord = null; clearPickHighlight(); }
  document.getElementById('diff-fab').classList.toggle('show', pendingEdits.length > 0);
}

function clearPickHighlight() {
  document.querySelectorAll('.seg.picked').forEach(s => s.classList.remove('picked'));
  hideMoveBar();
}

function showMoveBar(ctx) {
  const bar = document.getElementById('move-bar');
  const song = SONGS.find(s => s.id === ctx.songId);
  const line = song.sections[ctx.si].lines[ctx.li];
  bar.querySelector('#move-bar-chord').textContent = ctx.chord;
  bar.querySelector('#move-left').disabled  = ctx.gi <= 0;
  bar.querySelector('#move-right').disabled = ctx.gi >= line.length - 1;
  bar.classList.add('show');
}
function hideMoveBar() {
  document.getElementById('move-bar').classList.remove('show');
}

function doMove(dir) {
  if (!pickedChord) return;
  const { songId, si, li, gi, chord } = pickedChord;
  const song = SONGS.find(s => s.id === songId);
  const line = song.sections[si].lines[li];
  const toGi = gi + dir;
  if (toGi < 0 || toGi >= line.length) return;

  const fromSeg = line[gi];
  const toSeg   = line[toGi];

  // 记录 diff
  pendingEdits.push({
    song: song.title, section: song.sections[si].title,
    line: li + 1, seg: gi + 1,
    from: { chord: fromSeg.chord || '', lyric: fromSeg.lyric || '' },
    to:   { chord: '',                  lyric: fromSeg.lyric || '' }
  });
  pendingEdits.push({
    song: song.title, section: song.sections[si].title,
    line: li + 1, seg: toGi + 1,
    from: { chord: toSeg.chord || '', lyric: toSeg.lyric || '' },
    to:   { chord, lyric: toSeg.lyric || '' }
  });

  // 执行移动
  const movedChord = fromSeg.chord;
  fromSeg.chord = toSeg.chord;   // 如目标有和弦则互换，否则清空
  toSeg.chord   = movedChord;

  // 更新 pickedChord 位置跟踪
  pickedChord = { ...pickedChord, gi: toGi };

  refreshSong(song);
  // 重新选中移动后的 seg
  setTimeout(() => {
    const songEl = document.getElementById('song-' + songId);
    songEl.classList.add('edit-mode');
    songEl.querySelector('.edit-btn')?.classList.add('active');
    const newSeg = songEl.querySelector(`.seg[data-si="${si}"][data-li="${li}"][data-gi="${toGi}"]`);
    if (newSeg) newSeg.classList.add('picked');
    showMoveBar(pickedChord);
    document.getElementById('diff-fab').classList.add('show');
  }, 50);
}

function setupEditMode() {
  document.addEventListener('click', e => {
    const cSpan = e.target.closest('.c[data-chord]');
    const seg   = e.target.closest('.seg[data-song]');
    const songEl = seg ? seg.closest('.song') : null;
    if (!songEl || !songEl.classList.contains('edit-mode')) return;

    if (cSpan && cSpan.dataset.chord && seg) {
      clearPickHighlight();
      seg.classList.add('picked');
      const { song: songId, si, li, gi } = seg.dataset;
      pickedChord = { songId, si: +si, li: +li, gi: +gi, chord: cSpan.dataset.chord };
      showMoveBar(pickedChord);
      return;
    }

    // 点其他 seg 或空处 → 取消
    pickedChord = null;
    clearPickHighlight();
  });

  // 移动栏按钮
  document.getElementById('move-left').onclick  = () => doMove(-1);
  document.getElementById('move-right').onclick = () => doMove(+1);
  document.getElementById('move-done').onclick  = () => { pickedChord = null; clearPickHighlight(); };

  document.getElementById('edit-cancel').onclick = () => {
    document.getElementById('edit-modal').classList.remove('show');
  };
  document.getElementById('edit-apply').onclick = () => {
    document.getElementById('edit-modal').classList.remove('show');
  };

  document.getElementById('diff-fab').onclick = () => {
    if (!pendingEdits.length) return;
    const lines = pendingEdits.map((e, i) =>
      `[${i+1}] ${e.song} · ${e.section} · 行${e.line} · 第${e.seg}段\n` +
      `    原: chord="${e.from.chord}" lyric="${e.from.lyric}"\n` +
      `    改: chord="${e.to.chord}" lyric="${e.to.lyric}"`
    );
    const text = '=== 和弦歌词 diff ===\n' + lines.join('\n\n');
    navigator.clipboard.writeText(text).then(() => {
      document.getElementById('diff-fab').textContent = '✅ 已复制';
      setTimeout(() => { document.getElementById('diff-fab').textContent = '📋 复制 diff'; }, 2000);
    });
  };
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setupSelector();
  setupEditMode(); // 必须在 setupModal 前，stopImmediatePropagation 才生效
  setupModal();
});
