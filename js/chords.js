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

  // ── Barre ──
  Bm:  { desc:'B 小调（横按2品）',       frets:[-1,2,4,4,3,2], barre:2 },
  'C#m': { desc:'C# 小调（横按4品）',    frets:[-1,4,6,6,5,4], barre:4 },
  'F#m': { desc:'F# 小调（横按2品）',    frets:[2,4,4,2,2,2], barre:2 },
};

// ─── SVG Chord Diagram ───────────────────────────────────────
function drawChord(name) {
  const c = CHORDS[name];
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
