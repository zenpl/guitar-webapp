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
        // 字符展开只在 picked 时进行，避免大量 DOM 节点拖慢编辑模式
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
  // Capo 直接用原始值，不动态计算（转调只改 Key 显示）
  const capo = song.capo || 0;
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
  // 内存中的 locked 字段（可被 toggleLock 临时修改）
  return !!(song && song.locked);
}

function toggleLock(songId) {
  // 记录 lock 操作到 pendingEdits，等待发送给 AI
  const song = SONGS.find(s => s.id === songId);
  if (!song) return;
  const newLocked = !getLocked(songId);
  pendingEdits.push({
    type: 'lock',
    song: song.title,
    songId,
    locked: newLocked
  });
  // 临时更新显示（内存中）
  song.locked = newLocked;
  refreshSong(song);
  document.getElementById('diff-fab').classList.add('show');
  document.getElementById('send-fab').classList.add('show');

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
const pendingEdits = []; // 只用于 lock 操作
const dirtyLines = new Map(); // songId:si:li → 被改过的行
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
  const input = document.getElementById('move-bar-chord');
  input.value = ctx.chord;
  bar.querySelector('#move-left').disabled  = false;
  bar.querySelector('#move-right').disabled = false;
  bar.classList.add('show');
  // 聚焦方便直接改
  setTimeout(() => input.focus(), 50);
}
function hideMoveBar() {
  document.getElementById('move-bar').classList.remove('show');
}

function recordAndRefresh(song, si, li) {
  // 用 Map 去重：同一行多次修改只保留最新状态
  const key = `${song.id}:${si}:${li}`;
  dirtyLines.set(key, { songId: song.id, si, li });
  refreshSong(song);
}

function reenterEditMode(songId, si, li, gi) {
  setTimeout(() => {
    const songEl = document.getElementById('song-' + songId);
    songEl.classList.add('edit-mode');
    songEl.querySelector('.edit-btn')?.classList.add('active');
    if (gi != null) {
      const newSeg = songEl.querySelector(`.seg[data-si="${si}"][data-li="${li}"][data-gi="${gi}"]`);
      if (newSeg) { newSeg.classList.add('picked'); }
    }
    showMoveBar(pickedChord);
    document.getElementById('diff-fab').classList.add('show');
  }, 50);
}

function doMove(dir) {
  if (!pickedChord) return;
  const { songId, si, li, gi, chord } = pickedChord;
  const song = SONGS.find(s => s.id === songId);
  const line = song.sections[si].lines[li];
  const toGi = gi + dir;

  if (toGi < 0) {
    // 行首左移 → 在最前面插入空 seg
    line.unshift({ chord, lyric: '' });
    pickedChord = { ...pickedChord, gi: 0 };
    line[1].chord = ''; // 原来位置清空
  } else if (toGi >= line.length) {
    // 行尾右移 → 在末尾插入空 seg
    line.push({ chord, lyric: '' });
    pickedChord = { ...pickedChord, gi: line.length - 1 };
    line[gi].chord = '';
  } else {
    // 常规移动：把和弦移到目标，原位清空
    const fromSeg = line[gi];
    const toSeg   = line[toGi];
    const movedChord = fromSeg.chord;
    fromSeg.chord = '';
    // 如果目标有和弦，把它也清掉（和弦只能有一个落点）
    toSeg.chord = movedChord;
    pickedChord = { ...pickedChord, gi: toGi };
  }

  recordAndRefresh(song, si, li);
  reenterEditMode(songId, si, li, pickedChord.gi);
}

// 点字符把和弦精确落到该字
function doMoveToChar(ci) {
  if (!pickedChord) return;
  const { songId, si, li, gi, chord } = pickedChord;
  const song = SONGS.find(s => s.id === songId);
  const line = song.sections[si].lines[li];
  const seg  = line[gi];

  if (ci === 0) return; // 已经在第一个字，不动

  // 把歌词从 ci 处切分：前半段保留原和弦，后半段新增 seg 带和弦
  const before = seg.lyric.slice(0, ci);
  const after  = seg.lyric.slice(ci);

  seg.lyric  = before;
  seg.chord  = '';
  line.splice(gi + 1, 0, { chord, lyric: after });
  pickedChord = { ...pickedChord, gi: gi + 1 };

  recordAndRefresh(song, si, li);
  reenterEditMode(songId, si, li, pickedChord.gi);
}

function setupEditMode() {
  let _lastEditTs = 0;
  const editHandler = e => {
    const now = Date.now();
    if (now - _lastEditTs < 300) return; // 去重 touch+click 双触发
    _lastEditTs = now;
    const cSpan = e.target.closest('.c[data-chord]');
    const seg   = e.target.closest('.seg[data-song]');
    const songEl = seg ? seg.closest('.song') : null;
    if (!songEl || !songEl.classList.contains('edit-mode')) return;

    // 点字符 → 精确落点
    const wcSpan = e.target.closest('.wc');
    if (wcSpan && pickedChord) {
      const ci = +wcSpan.dataset.ci;
      doMoveToChar(ci);
      return;
    }

    // 无和弦 seg 点击 → 选中并准备添加和弦
    if (seg && !cSpan) {
      clearPickHighlight();
      seg.classList.add('picked');
      const { song: songId, si, li, gi } = seg.dataset;
      pickedChord = { songId, si: +si, li: +li, gi: +gi, chord: '' };
      showMoveBar(pickedChord);
      return;
    }

    if (cSpan && cSpan.dataset.chord && seg) {
      clearPickHighlight();
      seg.classList.add('picked');
      const { song: songId, si, li, gi } = seg.dataset;
      pickedChord = { songId, si: +si, li: +li, gi: +gi, chord: cSpan.dataset.chord };
      // 展开当前 seg 的歌词为字符级 span（只展开 picked 的那一个）
      const wSpan = seg.querySelector('.w');
      if (wSpan) {
        const song = SONGS.find(s => s.id === songId);
        const lyric = song?.sections[+si]?.lines[+li]?.[+gi]?.lyric || '';
        if (lyric.length > 1) {
          wSpan.innerHTML = [...lyric].map((ch, ci) => {
            const cls = ci === 0 ? 'w-mark wc' : 'wc';
            return `<span class="${cls}" data-ci="${ci}">${ch}</span>`;
          }).join('');
        }
      }
      showMoveBar(pickedChord);
      return;
    }

    // 点其他 seg 或空处 → 取消
    pickedChord = null;
    clearPickHighlight();
  };

  // 移动端用 touchend（无300ms延迟），桌面用 click
  document.addEventListener('touchend', editHandler);
  document.addEventListener('click',    editHandler);

  // 移动栏按钮
  document.getElementById('move-left').onclick  = () => doMove(-1);
  document.getElementById('move-right').onclick = () => doMove(+1);

  // 确认：应用 input 里的和弦值（可能被修改了）
  function applyChordEdit() {
    if (!pickedChord) return;
    const newChord = document.getElementById('move-bar-chord').value.trim();
    if (newChord !== pickedChord.chord) {
      const { songId, si, li, gi } = pickedChord;
      const song = SONGS.find(s => s.id === songId);
      song.sections[si].lines[li][gi].chord = newChord;
      pickedChord = { ...pickedChord, chord: newChord };
      recordAndRefresh(song, si, li);
      setTimeout(() => {
        const songEl = document.getElementById('song-' + songId);
        songEl.classList.add('edit-mode');
        songEl.querySelector('.edit-btn')?.classList.add('active');
        document.getElementById('diff-fab').classList.add('show');
        document.getElementById('send-fab').classList.add('show');
      }, 50);
    }
    pickedChord = null;
    clearPickHighlight();
  }

  document.getElementById('move-done').onclick = applyChordEdit;
  document.getElementById('move-bar-chord').addEventListener('keydown', e => {
    if (e.key === 'Enter') applyChordEdit();
    if (e.key === 'Escape') { pickedChord = null; clearPickHighlight(); }
  });

  document.getElementById('edit-cancel').onclick = () => {
    document.getElementById('edit-modal').classList.remove('show');
  };
  document.getElementById('edit-apply').onclick = () => {
    document.getElementById('edit-modal').classList.remove('show');
  };

  function buildDiffText() {
    if (!pendingEdits.length && !dirtyLines.size) return '';
    const parts = [];

    // Lock 操作
    pendingEdits.forEach(e => {
      if (e.type === 'lock') parts.push(`LOCK ${e.songId} locked=${e.locked}`);
    });

    // 改过的行：直接输出当前行数据，紧凑格式
    const byId = new Map();
    dirtyLines.forEach(({ songId, si, li }) => {
      if (!byId.has(songId)) byId.set(songId, []);
      byId.get(songId).push({ si, li });
    });
    byId.forEach((rows, songId) => {
      const song = SONGS.find(s => s.id === songId);
      const rowLines = rows.map(({ si, li }) => {
        const line = song.sections[si].lines[li];
        const segs = line.map(s => `{c:${JSON.stringify(s.chord)},l:${JSON.stringify(s.lyric)}}`).join(',');
        return `${song.title} · ${song.sections[si].title} · 行${li+1}: [${segs}]`;
      });
      parts.push(...rowLines);
    });

    return parts.join('\n');
  }

  document.getElementById('diff-fab').onclick = () => {
    const text = buildDiffText();
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      document.getElementById('diff-fab').textContent = '✅ 已复制';
      setTimeout(() => { document.getElementById('diff-fab').textContent = '📋 复制 diff'; }, 2000);
    });
  };

  document.getElementById('send-fab').onclick = async () => {
    const text = buildDiffText();
    if (!text) return;
    const btn = document.getElementById('send-fab');
    btn.textContent = '发送中…';
    try {
      // 通过本地 server.js 中转，调用 openclaw agent 注入消息
      const res = await fetch('/send-diff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ diff: text })
      });
      if (res.ok) {
        btn.textContent = '✅ 已发送';
        pendingEdits.length = 0;
        dirtyLines.clear();
        document.getElementById('diff-fab').classList.remove('show');
        document.getElementById('send-fab').classList.remove('show');
      } else { btn.textContent = '❌ 失败'; }
    } catch(e) { btn.textContent = '❌ 网络错误'; }
    setTimeout(() => { btn.textContent = '📤 发给AI'; }, 3000);
  };
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  // Telegram Mini App 初始化
  if (window.Telegram?.WebApp) {
    const twa = window.Telegram.WebApp;
    twa.ready();
    twa.expand(); // 全屏展开
  }
  renderAll();
  setupSelector();
  setupEditMode(); // 必须在 setupModal 前，stopImmediatePropagation 才生效
  setupModal();
});
