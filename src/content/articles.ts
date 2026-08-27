import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Articles are MDX files in src/content/articles.
 *
 * Adding one is: create <slug>.mdx, fill in the frontmatter, open a pull
 * request. The preview deployment is the review step and the merge is the
 * publish step. Nothing here needs an engineer, and the article index, the
 * sitemap and the related links are all derived from this directory, so they
 * cannot drift apart the way the old sitemap did.
 */

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  published: string;
  modified?: string;
  /** Who is being answered. Used for filtering and for the related list. */
  audience: string;
  /** Cluster this article supports, matching a product or solution page. */
  cluster: string;
  /** Internal links out to product pages. At least one is required. */
  related: string[];
  readingMinutes: number;
  /** Ported from a legacy URL that used to rank. Recorded so the redirect stays honest. */
  legacyPath?: string;
};

export type Article = ArticleMeta & { body: string };

const DIR = path.join(process.cwd(), "src", "content", "articles");

function readAll(): Article[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.mdx$/, "");
      const words = content.split(/\s+/).length;
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        published: String(data.published ?? "1970-01-01"),
        modified: data.modified ? String(data.modified) : undefined,
        audience: String(data.audience ?? "Operators"),
        cluster: String(data.cluster ?? "General"),
        related: Array.isArray(data.related) ? (data.related as string[]) : [],
        readingMinutes: Math.max(3, Math.round(words / 220)),
        legacyPath: data.legacyPath ? String(data.legacyPath) : undefined,
        body: content,
      };
    })
    .sort((a, b) => (a.published < b.published ? 1 : -1));
}

export const ARTICLES: Article[] = readAll();

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function relatedArticles(slug: string, cluster: string, limit = 3) {
  const sameCluster = ARTICLES.filter((a) => a.slug !== slug && a.cluster === cluster);
  const rest = ARTICLES.filter((a) => a.slug !== slug && a.cluster !== cluster);
  return [...sameCluster, ...rest].slice(0, limit);
}
