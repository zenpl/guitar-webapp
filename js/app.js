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

  const sections = song.sections.map(sec => {
    const linesHtml = sec.lines.map(line => {
      const segs = line.map(seg => {
        const tc = seg.chord ? transposeChord(seg.chord, s) : '';
        const hasChord = !!tc;
        const hasLyric = !!(seg.lyric && seg.lyric.trim());
        if (!hasLyric) {
          // 空词：和弦标注 + 带下划线空格
          if (!hasChord) return '';
          const cSpan = `<span class="c" data-chord="${tc}" data-orig="${seg.chord}">${tc}</span>`;
          return `<span class="seg has-chord">${cSpan}<span class="w-empty"></span></span>`;
        }
        const cSpan = hasChord
          ? `<span class="c" data-chord="${tc}" data-orig="${seg.chord}">${tc}</span>`
          : `<span class="c"> </span>`;
        // 只给第一个字加下划线，其余正常显示
        const lyric = hasChord && seg.lyric.length > 0
          ? `<span class="w-mark">${seg.lyric[0]}</span>${seg.lyric.slice(1)}`
          : seg.lyric;
        return `<span class="seg">${cSpan}<span class="w">${lyric}</span></span>`;
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
    <h2>${song.title}<span class="ver-badge">v${ver}</span><button class="lock-btn${locked ? ' locked' : ''}" onclick="toggleLock('${song.id}')">${locked ? '🔒' : '🔓'}</button></h2>
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

// ── Lock persistence (localStorage) ──
const LOCK_KEY = 'guitar_locked_songs';

function getLocked(songId) {
  try {
    const data = JSON.parse(localStorage.getItem(LOCK_KEY) || '{}');
    return !!data[songId];
  } catch { return false; }
}

function setLocked(songId, val) {
  try {
    const data = JSON.parse(localStorage.getItem(LOCK_KEY) || '{}');
    if (val) data[songId] = true;
    else delete data[songId];
    localStorage.setItem(LOCK_KEY, JSON.stringify(data));
  } catch {}
}

function toggleLock(songId) {
  const song = SONGS.find(s => s.id === songId);
  if (!song) return;
  setLocked(songId, !getLocked(songId));
  refreshSong(song);
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

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setupSelector();
  setupModal();
});
