#!/usr/bin/env node
/**
 * Writes the redirect layer into the exported site.
 *
 * GitHub Pages serves static files and cannot answer with a status code, so a
 * redirect there is a small HTML document: a zero delay meta refresh, a
 * canonical pointing at the destination, a JavaScript replace for the common
 * case, and a visible link for anyone with neither. This is what the official
 * jekyll-redirect-from plugin emits and it is what every redirect on GitHub
 * Pages actually is.
 *
 * It is weaker than a 301 and the README says so. When the site moves to a
 * host that can answer with a status code, LEGACY_REDIRECTS moves back into
 * next.config.ts and this script stops being needed.
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "out");
const SITE = "https://factorfox.com";

if (!fs.existsSync(OUT)) {
  console.error("No out/ directory. Run the build first.");
  process.exit(1);
}

/* The redirect list is TypeScript, so read it as text rather than importing it.
   One regex against one file we control beats adding a build step. */
const src = fs.readFileSync(path.join(ROOT, "src", "lib", "redirects.ts"), "utf8");
const REDIRECTS = [...src.matchAll(/\{\s*source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"\s*\}/g)].map(
  (m) => ({ source: m[1], destination: m[2] }),
);

if (REDIRECTS.length === 0) {
  console.error("Parsed zero redirects out of src/lib/redirects.ts. Refusing to continue.");
  process.exit(1);
}

function withSlash(p) {
  if (p.startsWith("/") && (p.endsWith(".xml") || p.endsWith(".pdf"))) return p;
  return p.endsWith("/") ? p : `${p}/`;
}

function stub(destination) {
  const target = withSlash(destination);
  const absolute = `${SITE}${target}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved</title>
<link rel="canonical" href="${absolute}">
<meta http-equiv="refresh" content="0; url=${target}">
<meta name="robots" content="noindex, follow">
<script>window.location.replace(${JSON.stringify(target)});</script>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
    background:#FAFBFC;color:#0B1017;font:16px/1.6 "Helvetica Neue",Arial,sans-serif}
  main{max-width:34rem;padding:2rem}
  a{color:#0E3B6F}
  @media (prefers-color-scheme: dark){body{background:#070B11;color:#F0F3F6}a{color:#93BCE8}}
</style>
</head>
<body>
<main>
  <p>This page moved.</p>
  <p><a href="${target}">Continue to ${target}</a></p>
</main>
</body>
</html>
`;
}

let written = 0;
const skipped = [];

for (const r of REDIRECTS) {
  const clean = r.source.replace(/^\//, "").replace(/\/$/, "");
  if (!clean) continue;

  const dir = path.join(OUT, clean);

  // A real page already occupies this path. That means the redirect list and
  // the page register disagree, which is a bug worth failing loudly over
  // rather than silently overwriting a page with a redirect.
  if (fs.existsSync(path.join(dir, "index.html"))) {
    skipped.push(r.source);
    continue;
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), stub(r.destination));
  written++;
}

// Jekyll is on by default for Pages and it ignores directories beginning with
// an underscore, which would take out the whole of /_next. Without this file
// the site loads with no CSS and no JavaScript.
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");

console.log(`Redirect stubs written: ${written}`);
console.log(`.nojekyll written`);

if (skipped.length) {
  console.error(
    `\n${skipped.length} redirect(s) collide with a real page and were not written:\n  ${skipped.join("\n  ")}`,
  );
  console.error("Fix src/lib/redirects.ts or src/lib/pages.ts. One of them is wrong.");
  process.exit(1);
}

// Prove the two files Apple depends on actually shipped.
const APPLE = [
  "wp-content/uploads/2019/06/FactorFox-Privacy-Policy.pdf",
  "wp-content/uploads/2019/06/2019.2.1-Terms-of-Use-for-End-Users-1.pdf",
];
const missing = APPLE.filter((f) => !fs.existsSync(path.join(OUT, f)));
if (missing.length) {
  console.error(`\nMissing from the build:\n  ${missing.join("\n  ")}`);
  console.error("The Apple App Store listing points at these. Do not deploy without them.");
  process.exit(1);
}
console.log("App Store legal PDFs present");

void pathToFileURL;
