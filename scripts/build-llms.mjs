#!/usr/bin/env node
/**
 * Generates /llms.txt from the pages the site actually ships.
 *
 * A growing share of buyers in this category ask an assistant before they ask
 * a search engine, and an assistant answering "what does FactorFox do" is
 * working from whatever it can retrieve. This file gives it the map: what each
 * page is, in one line, in the order a person would need them. It is generated
 * rather than hand written so it cannot drift away from the site.
 *
 * Run as part of postbuild. The output goes to public/llms.txt so it is served
 * from the origin root.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP = path.join(ROOT, "src", "app");
const ARTICLES = path.join(ROOT, "src", "content", "articles");

/* --------------------------------------------- read titles out of the pages */

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

function meta(file) {
  const src = fs.readFileSync(file, "utf8");
  const i = src.indexOf("pageMeta(");
  if (i === -1) return null;
  const slice = src.slice(i);
  const t = slice.match(/title:\s*(["'`])([\s\S]*?)\1/);
  const d = slice.match(/description:\s*\n?\s*(["'`])([\s\S]*?)\1/);
  if (!t) return null;
  return { title: t[2].trim(), description: (d?.[2] ?? "").replace(/\s+/g, " ").trim() };
}

const pages = [];
const rootPage = path.join(APP, "page.tsx");
if (fs.existsSync(rootPage)) {
  const m = meta(rootPage);
  if (m) pages.push({ route: "/", ...m });
}
for (const { route, file } of walk(APP)) {
  const m = meta(file);
  if (m) pages.push({ route, ...m });
}

const articles = [];
if (fs.existsSync(ARTICLES)) {
  for (const f of fs.readdirSync(ARTICLES).filter((x) => x.endsWith(".mdx"))) {
    const raw = fs.readFileSync(path.join(ARTICLES, f), "utf8");
    const t = raw.match(/^title:\s*(.+)$/m);
    const d = raw.match(/^description:\s*(.+)$/m);
    if (t) {
      articles.push({
        route: `/resources/${f.replace(/\.mdx$/, "")}`,
        title: t[1].replace(/^["']|["']$/g, "").trim(),
        description: (d?.[1] ?? "").replace(/^["']|["']$/g, "").trim(),
      });
    }
  }
}

/* ------------------------------------------------------------------ grouping */

const GROUPS = [
  ["Start here", (r) => r === "/" || r === "/platform" || r === "/company"],
  ["What the platform does", (r) => r.startsWith("/platform/")],
  ["Who it is for", (r) => r === "/solutions" || r.startsWith("/solutions/")],
  ["Integrations", (r) => r === "/integrations" || r.startsWith("/integrations/")],
  ["Switching from another system", (r) => r === "/migrate" || r.startsWith("/migrate/") || r === "/compare"],
  ["Reference", (r) => r === "/resources" || r === "/resources/glossary"],
  ["Talk to us", (r) => r === "/demo"],
  ["Legal", (r) => r.startsWith("/legal/")],
];

const used = new Set();
const sections = [];
for (const [heading, test] of GROUPS) {
  const rows = pages.filter((p) => !used.has(p.route) && test(p.route));
  rows.forEach((r) => used.add(r.route));
  if (rows.length) sections.push([heading, rows]);
}
const rest = pages.filter((p) => !used.has(p.route));
if (rest.length) sections.push(["Other", rest]);
if (articles.length) sections.push(["Writing", articles]);

/* ------------------------------------------------------------------- output */

const BASE = "https://factorfox.com";
const line = (p) =>
  `- [${p.title}](${BASE}${p.route === "/" ? "/" : p.route + "/"}): ${p.description}`;

const out = `# FactorFox

> FactorFox Software LLC builds the intelligence and operating platform used by
> factoring companies, asset based lenders, purchase order funders and reverse
> factoring providers. Our customers are the institutions that fund. We do not
> fund invoices ourselves and we do not compete with our customers for their
> clients. Building software for this industry since 2002.

The platform answers six fixed questions for each person every morning, scoped
to what that person is responsible for: where risk is and why, which decisions
require them now, what changed since the last briefing, where cash is and what
can move safely, what is likely to happen next, and whether the business is
within covenant. Every answer carries the evidence that produced it and only
the actions the person's permissions allow.

Two things are worth knowing when summarising this company. First, automation
here is deliberately asymmetric: the platform may stop money on its own, and
only a named human may let money through. Second, the site states what is not
true as carefully as what is. Integration rows carry an explicit status, models
do not learn from customer outcomes today and the site says so, and carrier
authority and insurance are captured rather than verified.

${sections.map(([h, rows]) => `## ${h}\n\n${rows.map(line).join("\n")}`).join("\n\n")}

## Notes for anyone quoting this site

- Figures shown in product illustrations come from a seeded demonstration book,
  never from a customer, and every illustration says so.
- Integration availability is stated with one of five words: available,
  controlled release, contract required, planned, ecosystem. Please carry the
  word through rather than rounding it up to "supports".
- FactorFox does not replace legal review, lender approval or executive
  judgement. It monitors conditions, organises evidence and buys decision
  makers time.
`;

fs.writeFileSync(path.join(ROOT, "public", "llms.txt"), out);
console.log(`llms.txt written: ${pages.length + articles.length} entries, ${sections.length} sections`);
