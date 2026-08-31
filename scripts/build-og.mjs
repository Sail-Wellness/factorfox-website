#!/usr/bin/env node
/**
 * Pre generates the social card for every page into public/og.
 *
 * On a static host there is no request time renderer, so the cards are built
 * here and committed. Run `npm run og` after changing any page title, and the
 * card follows the title rather than drifting away from it.
 *
 * Requires playwright locally. It is not a build dependency and CI never runs
 * this, which is why the output is committed.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public", "og");
const APP = path.join(ROOT, "src", "app");
const ARTICLES = path.join(ROOT, "src", "content", "articles");

/* ---------------------------------------------- collect titles per route */

function walk(dir, segments = []) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("_") || entry.name.startsWith("[")) continue;
    const next = entry.name.startsWith("(") ? segments : [...segments, entry.name];
    const child = path.join(dir, entry.name);
    const page = path.join(child, "page.tsx");
    if (fs.existsSync(page)) found.push({ route: "/" + next.join("/"), file: page });
    found.push(...walk(child, next));
  }
  return found;
}

function extract(file) {
  const src = fs.readFileSync(file, "utf8");
  const i = src.indexOf("pageMeta(");
  if (i === -1) return null;
  const t = src.slice(i).match(/title:\s*(["'`])([\s\S]*?)\1/);
  const g = src.slice(i).match(/target:\s*(["'`])([\s\S]*?)\1/);
  const n = src.slice(i).match(/intent:\s*(["'`])([\s\S]*?)\1/);
  if (!t) return null;
  return { title: t[2], eyebrow: (g?.[2] || n?.[2] || "FactorFox").toUpperCase() };
}

const pages = [];
const rootPage = path.join(APP, "page.tsx");
if (fs.existsSync(rootPage)) {
  const m = extract(rootPage);
  if (m) pages.push({ route: "/", ...m });
}
for (const { route, file } of walk(APP)) {
  const m = extract(file);
  if (m) pages.push({ route, ...m });
}
/* Partner spotlights are generated from the register rather than from a page
   file, because the route is dynamic and carries no literal pageMeta call. */
const PARTNERS_FILE = path.join(ROOT, "src", "content", "partners.ts");
if (fs.existsSync(PARTNERS_FILE)) {
  const src = fs.readFileSync(PARTNERS_FILE, "utf8");
  for (const m of src.matchAll(
    /slug:\s*"([^"]+)",\s*\n\s*metaTitle:\s*"((?:[^"\\]|\\.)*)",/g,
  )) {
    pages.push({ route: `/partners/${m[1]}`, title: m[2], eyebrow: "PARTNER SPOTLIGHT" });
  }
}

if (fs.existsSync(ARTICLES)) {
  for (const f of fs.readdirSync(ARTICLES).filter((x) => x.endsWith(".mdx"))) {
    const raw = fs.readFileSync(path.join(ARTICLES, f), "utf8");
    const t = raw.match(/^title:\s*(.+)$/m);
    const c = raw.match(/^cluster:\s*(.+)$/m);
    if (t) {
      pages.push({
        route: `/resources/${f.replace(/\.mdx$/, "")}`,
        title: t[1].replace(/^["']|["']$/g, "").trim(),
        eyebrow: (c?.[1] ?? "Writing").replace(/^["']|["']$/g, "").trim().toUpperCase(),
      });
    }
  }
}

/* ---------------------------------------------------------------- render */

function slugFor(route) {
  return route === "/" ? "home" : route.replace(/^\//, "").replace(/\/$/, "").replace(/\//g, "-");
}

const fontFile = path.join(ROOT, "src", "app", "fonts", "manrope-latin-wght-normal.woff2");
const monoFile = path.join(ROOT, "src", "app", "fonts", "inter-latin-wght-normal.woff2");
const font = fs.readFileSync(fontFile).toString("base64");
const mono = fs.readFileSync(monoFile).toString("base64");

function html({ title, eyebrow }) {
  const size = title.length > 62 ? 62 : title.length > 44 ? 70 : 78;
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Manrope;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 800}
@font-face{font-family:Inter;src:url(data:font/woff2;base64,${mono}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#040811;color:#F1F5F9;font-family:Inter,sans-serif;
  padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
body::before{content:'';position:absolute;top:-260px;right:-180px;width:820px;height:820px;
  background:radial-gradient(circle,rgba(0,144,255,0.28),transparent 62%)}
body::after{content:'';position:absolute;bottom:-300px;left:-160px;width:700px;height:700px;
  background:radial-gradient(circle,rgba(240,82,46,0.16),transparent 62%)}
.eyebrow,h1,footer{position:relative;z-index:1}
.eyebrow{display:flex;align-items:center;gap:14px;font-size:17px;font-weight:700;
  letter-spacing:3.4px;color:#94A3B8;text-transform:uppercase}
.dot{width:10px;height:10px;border-radius:50%;background:#F0522E}
h1{font-family:Manrope,sans-serif;font-size:${size}px;line-height:1.04;letter-spacing:-2.4px;
  font-weight:800;max-width:1000px}
footer{display:flex;align-items:center;justify-content:space-between;
  border-top:1px solid #1E293B;padding-top:28px}
.brand{font-family:Manrope,sans-serif;font-size:30px;font-weight:800;letter-spacing:-0.6px}
.url{font-size:17px;font-weight:600;color:#6CB8E8;letter-spacing:2px}
</style></head><body>
<div class="eyebrow"><span class="dot"></span><span>${esc(eyebrow).slice(0, 52)}</span></div>
<h1>${esc(title)}</h1>
<footer><span class="brand">FactorFox</span><span class="url">FACTORFOX.COM</span></footer>
</body></html>`;
}

const PW = process.env.PLAYWRIGHT_MODULE ?? "playwright";
const pw = await import(PW);
// Resolved by path this is a CommonJS module, so the namespace hangs off default.
const chromium = pw.chromium ?? pw.default?.chromium;
if (!chromium) throw new Error(`Could not resolve chromium from ${PW}`);
const EXEC = process.env.PLAYWRIGHT_CHROMIUM;
const browser = await chromium.launch(EXEC ? { executablePath: EXEC, args: ["--no-sandbox"] } : { args: ["--no-sandbox"] });
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const p of pages) {
  await page.setContent(html(p), { waitUntil: "load" });
  await page.screenshot({ path: path.join(OUT, `${slugFor(p.route)}.png`), type: "png" });
}

await browser.close();

// Flat brand colour over a wide gradient dithers badly as full colour PNG.
// Quantising takes the set from roughly ten megabytes to one and a half with
// no visible difference at the size these are ever displayed.
try {
  const { execFileSync } = await import("node:child_process");
  execFileSync("pngquant", ["--force", "--quality", "60-88", "--speed", "1", "--ext", ".png", ...fs.readdirSync(OUT)], {
    cwd: OUT,
    stdio: "ignore",
  });
} catch {
  console.warn("pngquant not available, cards left unquantised");
}

const total = fs.readdirSync(OUT).length;
const bytes = fs.readdirSync(OUT).reduce((a, f) => a + fs.statSync(path.join(OUT, f)).size, 0);
console.log(`Generated ${total} social cards, ${Math.round(bytes / 1024)} KB total, into public/og`);
