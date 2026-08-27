import { ARTICLES } from "@/content/articles";
import { SITE } from "@/lib/site";

/**
 * The WordPress generation of this site published /feed/ for years. Feeds
 * accumulate subscribers and syndication scrapers that break silently when the
 * feed disappears, so the redirect from /feed lands on a real feed.
 */
export const dynamic = "force-static";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = ARTICLES.map((a) => {
    const url = new URL(`/resources/${a.slug}`, SITE.url).toString();
    return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(a.description)}</description>
      <pubDate>${new Date(a.published).toUTCString()}</pubDate>
      <category>${escapeXml(a.cluster)}</category>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FactorFox</title>
    <link>${SITE.url}</link>
    <description>Writing for factoring, asset based lending and specialty finance operators.</description>
    <language>en-us</language>
    <atom:link href="${new URL("/resources/feed.xml", SITE.url).toString()}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
