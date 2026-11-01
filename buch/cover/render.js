#!/usr/bin/env node
// Rendert ein Cover als PNG (1800 × 2866 px) und als Vektor-PDF (13,5 × 21,5 cm).
// Läuft überall, wo Playwright mit Chromium installiert ist (Cloud-Sitzung, Linux, Mac).
// Auf dem Mac geht auch weiterhin ./render.sh (nutzt Google Chrome).
//
//   node cover/render.js varianten/b-faeden.html varianten/b-faeden
//   node cover/render.js varianten/d-zeugnis.html varianten/d-zeugnis 'seed=3'
//
// Ausgabe: cover/export/<name>.png und .pdf
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const [src = 'cover.html', name = 'cover-vorderseite', query = ''] = process.argv.slice(2);
  const dir = __dirname;
  const file = path.resolve(dir, src);
  if (!fs.existsSync(file)) { console.error('Nicht gefunden: ' + file); process.exit(1); }
  const url = 'file://' + file + (query ? '?' + query : '');
  const out = path.join(dir, 'export', name);
  fs.mkdirSync(path.dirname(out), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 1433 }, deviceScaleFactor: 2 });
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);           // Zeichnen nach dem Laden der Schriften
  await page.screenshot({ path: out + '.png', clip: { x: 0, y: 0, width: 900, height: 1433 } });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: out + '.pdf', preferCSSPageSize: true, printBackground: true });
  await browser.close();
  console.log('Fertig: ' + path.relative(process.cwd(), out) + '.png / .pdf');
})();
