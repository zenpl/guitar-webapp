// ─── Chord Library ───────────────────────────────────────────
// 每个和弦：{ desc, frets: [E,A,D,G,B,e], barre? }
// frets: -1=不弹, 0=开放, N=第N品

const CHORDS = {
  // ── Open / common ──
  G:   { desc:'G 大调',                 frets:[3,2,0,0,3,3] },
  D:   { desc:'D 大调',                 frets:[-1,-1,0,2,3,2] },
  Em:  { desc:'E 小调（开放）',          frets:[0,2,2,0,0,0] },
  Am:  { desc:'A 小调（开放）',          frets:[-1,0,2,2,1,0] },
  C:   { desc:'C 大调',                 frets:[-1,3,2,0,1,0] },
  E:   { desc:'E 大调（开放）',          frets:[0,2,2,1,0,0] },
  A:   { desc:'A 大调',                 frets:[-1,0,2,2,2,0] },
  Dm:  { desc:'D 小调',                 frets:[-1,-1,0,2,3,1] },
  F:   { desc:'F 大调（横按1品）',       frets:[1,3,3,2,1,1], barre:1 },
  E7:  { desc:'E7',                     frets:[0,2,0,1,0,0] },
  G7:  { desc:'G7',                     frets:[3,2,0,0,0,1] },
  'G/B': { desc:'G/B（低音B）',          frets:[-1,2,0,0,3,3] },
  'C/G': { desc:'C/G（低音G）',          frets:[3,3,2,0,1,0] },
  'C/E': { desc:'C/E（低音E）',          frets:[0,3,2,0,1,0] },
  Am7:   { desc:'Am7',                   frets:[-1,0,2,0,1,0] },
  'Am7/G': { desc:'Am7/G（低音G）',      frets:[3,0,2,0,1,0] },
  Fmaj9: { desc:'Fmaj9',                 frets:[-1,3,3,0,1,0] },
  Dm7:   { desc:'Dm7',                   frets:[-1,-1,0,2,1,1] },
  Dsus4: { desc:'Dsus4',                 frets:[-1,-1,0,2,3,3] },
  Gsus4: { desc:'Gsus4',                 frets:[3,2,0,0,1,3] },
  F7:    { desc:'F7（横按1品）',          frets:[1,3,3,2,1,1], barre:1 },  // same as F but with b7
  Em7:   { desc:'Em7',                   frets:[0,2,2,0,3,0] },
  D7:    { desc:'D7',                    frets:[-1,-1,0,2,1,2] },
  'E/B': { desc:'E/B（低音B）',          frets:[-1,2,2,1,0,0] },
  G7:    { desc:'G7',                    frets:[3,2,0,0,0,1] },
  'D/F#': { desc:'D/F#（低音F#）',       frets:[2,-1,0,2,3,2] },
  Gm:  { desc:'G 小调（横按3品）',       frets:[3,5,5,3,3,3], barre:3 },

  // ── Barre ──
  Bm:  { desc:'B 小调（横按2品）',       frets:[-1,2,4,4,3,2], barre:2 },
  'C#m': { desc:'C# 小调（横按4品）',    frets:[-1,4,6,6,5,4], barre:4 },
  'F#m': { desc:'F# 小调（横按2品）',    frets:[2,4,4,2,2,2], barre:2 },
};

// ─── Dynamic Chord Lookup ────────────────────────────────────
// NOTES / NOTE_ALIAS 在 app.js 也有定义，这里单独 copy 供 chords.js 独立使用
const _NOTES     = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const _ALIAS     = { Db:'C#', Eb:'D#', Gb:'F#', Ab:'G#', Bb:'A#' };

function _noteIdx(n) { return _NOTES.indexOf(_ALIAS[n] || n); }

// 根据根音 + 品质动态生成横按指法
// 优先检查 CHORDS 字典；找不到则用 E型 / A型 barre 自动生成
function getChord(name) {
  if (CHORDS[name]) return CHORDS[name];

  const m = name.match(/^([A-G][#b]?)(.*)/);
  if (!m) return null;
  const [, root, quality] = m;

  const ri = _noteIdx(root);
  if (ri === -1) return null;

  const isMinor = /^m(?!aj)/.test(quality);
  const is7     = quality === '7';

  // E弦(开放=E=4) / A弦(开放=A=9) 品位
  const eFret = (ri - 4  + 12) % 12;
  const aFret = (ri - 9  + 12) % 12;

  // 选择品位更低的型，且不选 0（开放弦已在字典里）
  let shape, fret;
  if (eFret !== 0 && (aFret === 0 || eFret <= aFret)) {
    shape = 'E'; fret = eFret;
  } else {
    shape = 'A'; fret = aFret;
  }

  let frets;
  if (shape === 'E') {
    frets = isMinor
      ? [fret, fret+2, fret+2, fret,   fret,   fret]   // Em型
      : is7
      ? [fret, fret+2, fret,   fret+1, fret,   fret]   // E7型
      : [fret, fret+2, fret+2, fret+1, fret,   fret]; // E型
  } else {
    frets = isMinor
      ? [-1, fret, fret+2, fret+2, fret+1, fret]   // Am型
      : is7
      ? [-1, fret, fret+2, fret,   fret+2, fret]   // A7型
      : [-1, fret, fret+2, fret+2, fret+2, fret]; // A型
  }

  return { desc: `${name}（横按${fret}品·${shape}型）`, frets, barre: fret };
}

// ─── SVG Chord Diagram ───────────────────────────────────────
function drawChord(name) {
  const c = getChord(name);
  if (!c) return `<div style="color:#888;padding:20px">No diagram for ${name}</div>`;
  const f = c.frets;
  const W=180, H=170, L=36, T=32, SW=22, FH=24, S=6, FC=4;
  const hasOpen = f.some(x => x === 0);
  const active  = f.filter(x => x > 0);
  const min     = active.length ? Math.min(...active) : 1;
  const off     = (!hasOpen && min > 1) ? min - 1 : 0;

  let s = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="display:block;margin:0 auto">`;
  if (off === 0)
    s += `<rect x="${L}" y="${T-5}" width="${(S-1)*SW}" height="6" fill="#ccc" rx="2"/>`;
  else
    s += `<text x="${L-6}" y="${T+FH*.7}" font-size="11" fill="#888" text-anchor="end">${off+1}fr</text>`;

  if (c.barre) {
    const by = T + (c.barre - off - .5) * FH;
    s += `<rect x="${L}" y="${by-9}" width="${(S-1)*SW}" height="18" fill="#c0384f" rx="9" opacity=".7"/>`;
  }
  for (let i = 0; i <= FC; i++) {
    const y = T + i * FH;
    s += `<line x1="${L}" y1="${y}" x2="${L+(S-1)*SW}" y2="${y}" stroke="#3a3a5a" stroke-width="1.2"/>`;
  }
  for (let i = 0; i < S; i++) {
    const x = L + i * SW;
    s += `<line x1="${x}" y1="${T}" x2="${x}" y2="${T+FC*FH}" stroke="#555" stroke-width="1.5"/>`;
  }
  ['E','A','D','G','B','e'].forEach((lb, i) => {
    const x = L + i * SW;
    s += `<text x="${x}" y="${T+FC*FH+16}" text-anchor="middle" font-size="10" fill="#555">${lb}</text>`;
  });
  f.forEach((fret, i) => {
    const x = L + i * SW;
    if (fret === -1)
      s += `<text x="${x}" y="${T-12}" text-anchor="middle" font-size="14" fill="#e94560">✕</text>`;
    else if (fret === 0)
      s += `<circle cx="${x}" cy="${T-12}" r="5" fill="none" stroke="#aaa" stroke-width="1.8"/>`;
    else {
      const cy = T + (fret - off - .5) * FH;
      s += `<circle cx="${x}" cy="${cy}" r="10" fill="#e94560"/>`;
    }
  });
  return s + '</svg>';
}
