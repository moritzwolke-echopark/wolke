// Gemeinsame Helfer für die Cover-Varianten (gleiche Maße und Satzregeln wie cover.html)
const W = 900, H = 1433, M = 64, CONTENT_W = W - 2 * M;
const FONTS = { display: 'BigShoulders', serif: 'InstrumentSerif', sans: 'InstrumentSans', mono: 'GeistMono' };
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('cover');

function el(tag, attrs, parent = svg) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  parent.appendChild(e);
  return e;
}

// Tinten-Metriken, damit Kanten optisch exakt auf dem Rand sitzen
const css = ([weight, size, family, style]) => `${style || 'normal'} ${weight} ${size}px "${family}"`;
const ctx = document.createElement('canvas').getContext('2d');
ctx.fontKerning = 'normal';                  // wie im SVG, sonst stimmen die Breiten nicht
ctx.textRendering = 'geometricPrecision';
function ink(str, font, spacing = 0, wordSpacing = 0) {
  ctx.font = css(font);
  ctx.letterSpacing = spacing + 'px';
  ctx.wordSpacing = wordSpacing + 'px';
  const m = ctx.measureText(str);
  return {
    left: m.actualBoundingBoxLeft, right: m.actualBoundingBoxRight,
    asc: m.actualBoundingBoxAscent, desc: m.actualBoundingBoxDescent,
  };
}
function fitSize(str, font, width, wsEm = 0) {
  const [weight, , family, style] = font;
  const m = ink(str, [weight, 100, family, style], 0, wsEm * 100);
  return 100 * width / (m.left + m.right);
}

function text(str, x, y, font, attrs = {}) {
  const [weight, size, family, style] = font;
  const t = el('text', {
    x, y, 'font-family': family, 'font-size': size, 'font-weight': weight,
    'font-style': style || 'normal', ...attrs,
  });
  t.textContent = str;
  return t;
}

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// Reproduzierbarer Zufall: gleicher Seed, gleiches Bild
function rng(seed) {
  return () => {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- Bausteine ------------------------------------------------------------

function author(TEXT, color) {
  const f = [400, 15.5, FONTS.mono], sp = 3.4;
  const m = ink(TEXT.author, f, sp);
  const y = M + m.asc;
  text(TEXT.author, M + m.left, y, f, { fill: color, 'letter-spacing': sp });
  return y;
}

// „ZU VIEL“ + „für gestern.“ + Untertitel ab `top`; gibt die Unterkante zurück.
// Mit draw = false wird nur gemessen.
function titleBlock(TEXT, top, C, draw = true) {
  const ws = -0.07;
  const size = fitSize(TEXT.title, [700, 0, FONTS.display], CONTENT_W, ws);
  const fT = [700, size, FONTS.display];
  const mT = ink(TEXT.title, fT, 0, ws * size);
  const yT = top + mT.asc;

  const f2 = [400, 138, FONTS.serif, 'italic'];
  const m2 = ink(TEXT.title2 + '.', f2);
  const y2 = yT + 30 + m2.asc;

  const fS = [400, 29, FONTS.sans], lh = 39;
  const mS = ink(TEXT.sub[0], fS);
  const yS = y2 + m2.desc + 44 + mS.asc;

  if (draw) {
    text(TEXT.title, M + mT.left, yT, fT, { fill: C.ink, 'word-spacing': ws * size });
    const t2 = text(TEXT.title2, M + m2.left, y2, f2, { fill: C.ink });
    el('tspan', { fill: C.signal }, t2).textContent = '.';
    TEXT.sub.forEach((line, i) => {
      const m = ink(line, fS);
      text(line, M + m.left, yS + i * lh, fS, { fill: C.sub || C.ink });
    });
  }
  return yS + (TEXT.sub.length - 1) * lh + 8;
}

// Fußzeile; gibt die Oberkante der Tagline zurück
function footer(TEXT, C) {
  const fCap = [400, 11.5, FONTS.mono], spCap = 2.6;
  const fTag = [400, 31, FONTS.serif, 'italic'];
  const mC = ink(TEXT.caption, fCap, spCap);
  const mG = ink(TEXT.tagline, fTag);
  const y = H - M - mG.desc;                 // gemeinsame Grundlinie
  text(TEXT.caption, M + mC.left, y, fCap, { fill: C.mute, 'letter-spacing': spCap });
  text(TEXT.tagline, W - M - mG.right, y, fTag, { fill: C.ink });
  return y - mG.asc;
}

function whenFontsReady(draw) {
  Promise.all([
    document.fonts.load(`700 100px "${FONTS.display}"`),
    document.fonts.load(`italic 400 100px "${FONTS.serif}"`),
    document.fonts.load(`400 30px "${FONTS.sans}"`),
    document.fonts.load(`400 14px "${FONTS.mono}"`),
  ]).then(draw);
}

// Handgezogene Linie (leicht zittrig), z. B. für Durchstreichungen und Häkchen
function wobble(points, rand, jitter = 1.2) {
  let d = '';
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i], [x2, y2] = points[i + 1];
    const n = Math.max(2, Math.round(Math.hypot(x2 - x1, y2 - y1) / 24));
    for (let s = (i ? 1 : 0); s <= n; s++) {
      const t = s / n, j = (s === 0 || s === n) ? 0.3 : 1;
      const x = x1 + (x2 - x1) * t + (rand() - 0.5) * jitter * j;
      const y = y1 + (y2 - y1) * t + (rand() - 0.5) * jitter * 2 * j;
      d += (d ? 'L' : 'M') + x.toFixed(2) + ' ' + y.toFixed(2);
    }
  }
  return d;
}

// Zusätzliche Schriften laden, dann wie gewohnt zeichnen
function whenExtraFontsReady(specs, draw) {
  Promise.all(specs.map(s => document.fonts.load(s))).then(() => whenFontsReady(draw));
}
