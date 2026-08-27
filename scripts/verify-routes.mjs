#!/usr/bin/env node
/**
 * Route and link verification.
 *
 * The site this replaced published a sitemap of seven URLs, six of which
 * returned 404, and every route except the homepage was a hard 404 for a
 * crawler. This script exists so that cannot happen again. It fails the build
 * when any of the following is true:
 *
 *   1. A path in the page register has no route on disk.
 *   2. A route on disk is missing from the page register, so the sitemap
 *      would never advertise it.
 *   3. An internal href in any page points at a path that does not resolve,
 *      as a route, an article, or a redirect source in next.config.ts.
 *   4. A redirect destination points at a path that does not resolve.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP = path.join(ROOT, "src", "app");

const problems = [];
const notes = [];

/* ------------------------------------------------ routes that exist on disk */

function walkRoutes(dir, segments = []) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Route groups and private folders do not appear in the URL.
    if (name.startsWith("_")) continue;
    const next = name.startsWith("(") && name.endsWith(")") ? segments : [...segments, name];
    const child = path.join(dir, name);
    if (fs.existsSync(path.join(child, "page.tsx")) || fs.existsSync(path.join(child, "page.mdx"))) {
      out.push("/" + next.join("/"));
    }
    out.push(...walkRoutes(child, next));
  }
  return out;
}

const diskRoutes = new Set(
  [fs.existsSync(path.join(APP, "page.tsx")) ? "/" : null, ...walkRoutes(APP)].filter(Boolean),
);

/* --------------------------------------------------------- the page register */

const registerSrc = fs.readFileSync(path.join(ROOT, "src", "lib", "pages.ts"), "utf8");
const registered = [...registerSrc.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]);

/* ------------------------------------------------------------------ articles */

const ARTICLE_DIR = path.join(ROOT, "src", "content", "articles");
const articleSlugs = fs.existsSync(ARTICLE_DIR)
  ? fs.readdirSync(ARTICLE_DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""))
  : [];
const articleRoutes = articleSlugs.map((s) => `/resources/${s}`);

/* ----------------------------------------------------------------- redirects */

const redirectSrc = fs.readFileSync(path.join(ROOT, "src", "lib", "redirects.ts"), "utf8");
const redirects = [...redirectSrc.matchAll(/\{\s*source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"\s*\}/g)].map(
  (m) => ({ source: m[1], destination: m[2] }),
);
if (redirects.length === 0) {
  problems.push("Parsed zero redirects out of src/lib/redirects.ts. The legacy URL map is the point of this file.");
}

/* ------------------------------------------------------------ dynamic routes */

const DYNAMIC = [...diskRoutes].filter((r) => r.includes("["));
function resolvesDynamically(href) {
  return DYNAMIC.some((d) => {
    const pattern = "^" + d.replace(/\[\.\.\..+?\]/g, ".+").replace(/\[.+?\]/g, "[^/]+") + "$";
    return new RegExp(pattern).test(href);
  });
}

const resolvable = new Set([...diskRoutes, ...articleRoutes, "/sitemap.xml", "/robots.txt", "/resources/feed.xml"]);

function resolves(href) {
  if (resolvable.has(href)) return true;
  if (resolvesDynamically(href)) return true;
  return redirects.some((r) => r.source === href);
}

/* ------------------------------------------------------------------- check 1 */

for (const p of registered) {
  const exists = diskRoutes.has(p);
  if (!exists) problems.push(`Register lists ${p} but no route exists on disk. The sitemap would advertise a 404.`);
}

/* ------------------------------------------------------------------- check 2 */

const registeredSet = new Set(registered);
for (const r of diskRoutes) {
  if (r.includes("[")) continue;
  if (r.startsWith("/api") || r === "/og") continue;
  if (!registeredSet.has(r)) {
    problems.push(`Route ${r} exists but is not in the page register, so it will never appear in the sitemap.`);
  }
}

/* ------------------------------------------------------------------- check 3 */

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else if (/\.(tsx|ts|mdx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const sourceFiles = [...walkFiles(APP), ...walkFiles(path.join(ROOT, "src", "components"))];
if (fs.existsSync(ARTICLE_DIR)) sourceFiles.push(...walkFiles(ARTICLE_DIR));

const seenHrefs = new Map();

for (const file of sourceFiles) {
  const src = fs.readFileSync(file, "utf8");
  const hrefs = [
    ...[...src.matchAll(/href(?:=|:\s*)"(\/[^"#?]*)"/g)].map((m) => m[1]),
    // markdown links in mdx
    ...[...src.matchAll(/\]\((\/[^)#?\s]*)\)/g)].map((m) => m[1]),
  ];
  for (const raw of hrefs) {
    const href = raw.length > 1 && raw.endsWith("/") ? raw.slice(0, -1) : raw;
    if (href.startsWith("/brand") || href.startsWith("/api") || href.startsWith("/og")) continue;
    if (!seenHrefs.has(href)) seenHrefs.set(href, new Set());
    seenHrefs.get(href).add(path.relative(ROOT, file));
  }
}

for (const [href, files] of seenHrefs) {
  if (!resolves(href)) {
    problems.push(`Broken internal link ${href} in ${[...files].slice(0, 3).join(", ")}`);
  }
}

/* ------------------------------------------------------------------- check 4 */

for (const r of redirects) {
  if (!resolves(r.destination)) {
    problems.push(`Redirect ${r.source} points at ${r.destination}, which does not resolve.`);
  }
}

/* ------------------------------------------------------------- orphan report */

const linked = new Set([...seenHrefs.keys()]);
for (const p of registered) {
  if (p === "/") continue;
  if (!linked.has(p)) notes.push(`No internal link points at ${p}. It would be an orphan.`);
}

/* --------------------------------------------------------------------- output */

console.log(`Routes on disk: ${diskRoutes.size}`);
console.log(`Registered pages: ${registered.length}`);
console.log(`Articles: ${articleSlugs.length}`);
console.log(`Redirects: ${redirects.length}`);
console.log(`Distinct internal links: ${seenHrefs.size}`);

if (notes.length) {
  console.log("\nNotes:");
  for (const n of notes) console.log(`  . ${n}`);
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  x ${p}`);
  process.exit(1);
}

console.log("\nAll routes, links and redirects resolve.");
