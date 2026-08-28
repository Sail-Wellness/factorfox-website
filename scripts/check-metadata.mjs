#!/usr/bin/env node
/**
 * Metadata verification.
 *
 * The root layout applies the title template "%s | FactorFox", which adds
 * twelve characters to whatever a page passes to pageMeta. Google truncates a
 * title around sixty characters and a description around a hundred and sixty,
 * so a title written for the page and not for the search result gets cut in
 * the only place a buyer sees it. This script holds the line:
 *
 *   1. Every title is 48 characters or fewer, so the rendered title with
 *      " | FactorFox" lands at 60 or under. The homepage is allowed 60
 *      before the template, because it is the result that matters most.
 *   2. Every description is between 140 and 158 characters inclusive.
 *   3. No title and no description is used on two pages.
 *
 * Sources are every page.tsx under src/app that calls pageMeta with literal
 * strings, and the frontmatter of every article in src/content/articles.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP = path.join(ROOT, "src", "app");
const ARTICLES = path.join(ROOT, "src", "content", "articles");

const TITLE_MAX = 48;
const HOME_TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 158;
const TEMPLATE = " | FactorFox";

const problems = [];
const rows = [];

/* ------------------------------------------------------------- collection */

function walkPages(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkPages(full));
    else if (entry.name === "page.tsx") out.push(full);
  }
  return out;
}

/** The argument object of the pageMeta call, found by balancing parentheses. */
function pageMetaBlock(src) {
  const start = src.indexOf("pageMeta(");
  if (start < 0) return null;
  let depth = 0;
  for (let i = start + "pageMeta".length; i < src.length; i++) {
    const c = src[i];
    if (c === "(") depth++;
    else if (c === ")") {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return null;
}

function literal(block, key) {
  const m = block.match(new RegExp(`${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1] : null;
}

const entries = [];

for (const file of walkPages(APP).sort()) {
  const rel = path.relative(ROOT, file);
  const block = pageMetaBlock(fs.readFileSync(file, "utf8"));
  if (!block) continue;
  const title = literal(block, "title");
  const description = literal(block, "description");
  if (title === null && description === null) {
    // A route that builds its metadata from content, such as an article page.
    // The content it reads is checked directly below.
    continue;
  }
  if (title === null || description === null) {
    problems.push(`${rel} calls pageMeta but a literal title or description could not be read.`);
    continue;
  }
  entries.push({ rel, title, description, home: rel === path.join("src", "app", "page.tsx") });
}

if (fs.existsSync(ARTICLES)) {
  for (const name of fs.readdirSync(ARTICLES).filter((f) => f.endsWith(".mdx")).sort()) {
    const file = path.join(ARTICLES, name);
    const rel = path.relative(ROOT, file);
    const src = fs.readFileSync(file, "utf8");
    const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) {
      problems.push(`${rel} has no frontmatter block.`);
      continue;
    }
    const title = (fm[1].match(/^title:\s*"((?:[^"\\]|\\.)*)"/m) || [])[1];
    const description = (fm[1].match(/^description:\s*"((?:[^"\\]|\\.)*)"/m) || [])[1];
    if (title === undefined || description === undefined) {
      problems.push(`${rel} is missing a frontmatter title or description.`);
      continue;
    }
    entries.push({ rel, title, description, home: false });
  }
}

/* ------------------------------------------- partner spotlights, from the register */

const PARTNERS_FILE = path.join(ROOT, "src", "content", "partners.ts");
if (fs.existsSync(PARTNERS_FILE)) {
  const src = fs.readFileSync(PARTNERS_FILE, "utf8");
  const blocks = [...src.matchAll(/slug:\s*"([^"]+)",\s*\n\s*metaTitle:\s*"((?:[^"\\]|\\.)*)",\s*\n\s*metaDescription:\s*\n?\s*"((?:[^"\\]|\\.)*)",/g)];
  const declared = [...src.matchAll(/^\s{4}slug:\s*"([^"]+)",$/gm)].length;
  if (blocks.length !== declared) {
    problems.push(
      `src/content/partners.ts declares ${declared} partners but ${blocks.length} carry a metaTitle and metaDescription. Every spotlight needs its own search result.`,
    );
  }
  for (const m of blocks) {
    entries.push({
      rel: `src/content/partners.ts (${m[1]})`,
      title: m[2],
      description: m[3],
      home: false,
    });
  }
}

/* ------------------------------------------------------------------ checks */

const titlesSeen = new Map();
const descriptionsSeen = new Map();

for (const e of entries) {
  const max = e.home ? HOME_TITLE_MAX : TITLE_MAX;
  const t = e.title.length;
  const d = e.description.length;
  const rendered = t + TEMPLATE.length;

  const flags = [];
  if (t > max) {
    flags.push("title");
    problems.push(`${e.rel} title is ${t} characters, ${t - max} over the ${max} allowed. Rendered it would be ${rendered}.`);
  }
  if (d < DESC_MIN || d > DESC_MAX) {
    flags.push("description");
    problems.push(`${e.rel} description is ${d} characters, outside ${DESC_MIN} to ${DESC_MAX}.`);
  }

  const priorTitle = titlesSeen.get(e.title);
  if (priorTitle) {
    flags.push("duplicate title");
    problems.push(`${e.rel} repeats the title on ${priorTitle}. Two pages cannot compete on the same result.`);
  } else titlesSeen.set(e.title, e.rel);

  const priorDescription = descriptionsSeen.get(e.description);
  if (priorDescription) {
    flags.push("duplicate description");
    problems.push(`${e.rel} repeats the description on ${priorDescription}.`);
  } else descriptionsSeen.set(e.description, e.rel);

  rows.push({ page: e.rel, title: t, rendered, description: d, note: flags.length ? flags.join(", ") : "ok" });
}

/* ------------------------------------------------------------------ output */

const headers = { page: "Page", title: "Title", rendered: "Rendered", description: "Description", note: "Status" };
const widths = {};
for (const key of Object.keys(headers)) {
  widths[key] = Math.max(headers[key].length, ...rows.map((r) => String(r[key]).length));
}
const line = (r) =>
  Object.keys(headers)
    .map((k) => (k === "page" || k === "note" ? String(r[k]).padEnd(widths[k]) : String(r[k]).padStart(widths[k])))
    .join("  ")
    .trimEnd();

console.log(line(headers));
console.log(Object.keys(headers).map((k) => "=".repeat(widths[k])).join("  "));
for (const r of rows) console.log(line(r));

console.log(
  `\n${rows.length} pages checked. Titles ${TITLE_MAX} or under (${HOME_TITLE_MAX} for the homepage), descriptions ${DESC_MIN} to ${DESC_MAX}.`,
);

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  x ${p}`);
  process.exit(1);
}

console.log("Every title and description is within length and unique.");
