import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container, Section, Eyebrow, CTA, JsonLd } from "@/components/primitives";
import { Breadcrumbs, RelatedPages, CtaBand } from "@/components/page-parts";
import { pageMeta, articleSchema } from "@/lib/seo";
import { ARTICLES, getArticle, relatedArticles } from "@/content/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMeta({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
    intent: "informational",
    type: "article",
    publishedTime: article.published,
    modifiedTime: article.modified ?? article.published,
  });
}

/** Article typography, applied through the same tokens as the rest of the site. */
const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 {...props} className="mt-12 scroll-mt-24 text-[clamp(1.4rem,2.6vw,1.85rem)] first:mt-0" />
  ),
  h3: (props: React.ComponentProps<"h3">) => <h3 {...props} className="mt-9 scroll-mt-24 text-[1.15rem]" />,
  p: (props: React.ComponentProps<"p">) => (
    <p {...props} className="mt-4 max-w-[68ch] text-[1.0625rem] leading-[1.75] text-[var(--fg-muted)]" />
  ),
  ul: (props: React.ComponentProps<"ul">) => <ul {...props} className="mt-4 max-w-[68ch] list-disc space-y-2 pl-6" />,
  ol: (props: React.ComponentProps<"ol">) => <ol {...props} className="mt-4 max-w-[68ch] list-decimal space-y-2 pl-6" />,
  li: (props: React.ComponentProps<"li">) => (
    <li {...props} className="text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]" />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      {...props}
      className="text-[var(--accent)] underline decoration-[color-mix(in_srgb,var(--accent)_40%,transparent)] underline-offset-4 hover:decoration-[var(--accent)]"
    />
  ),
  strong: (props: React.ComponentProps<"strong">) => <strong {...props} className="font-semibold text-[var(--fg)]" />,
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      {...props}
      className="mt-6 max-w-[60ch] border-l-2 border-[var(--signal)] pl-5 font-serif text-[1.2rem] leading-[1.5] text-[var(--fg)]"
    />
  ),
  hr: () => <hr className="my-10 border-0 border-t border-[var(--line)]" />,
  table: (props: React.ComponentProps<"table">) => (
    <div className="u-scroll-x mt-6 border border-[var(--line)]" tabIndex={0} role="region" aria-label="Table">
      <table {...props} className="w-full min-w-[34rem] text-[0.9375rem]" />
    </div>
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th
      {...props}
      className="border-b border-[var(--line-strong)] bg-[var(--bg-sunken)] px-4 py-2.5 text-left font-mono text-[0.625rem] uppercase tracking-[0.12em] text-[var(--fg-subtle)]"
    />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td {...props} className="border-b border-[var(--line)] px-4 py-2.5 align-top text-[var(--fg-muted)]" />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code {...props} className="rounded-[2px] bg-[var(--bg-sunken)] px-1.5 py-0.5 font-mono text-[0.875em]" />
  ),
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = relatedArticles(article.slug, article.cluster);
  const published = new Date(article.published).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: article.title,
          description: article.description,
          path: `/resources/${article.slug}`,
          published: article.published,
          modified: article.modified,
        })}
      />

      <Section className="!pb-8">
        <Container width="narrow">
          <Breadcrumbs
            trail={[
              { name: "Writing", path: "/resources" },
              { name: article.title, path: `/resources/${article.slug}` },
            ]}
          />
          <Eyebrow tone="signal">{article.cluster}</Eyebrow>
          <h1 className="mt-4 text-[clamp(2rem,4.2vw,2.9rem)]">{article.title}</h1>
          <p className="mt-5 max-w-[62ch] font-serif text-[1.2rem] leading-[1.5] text-[var(--fg-muted)]">
            {article.description}
          </p>
          <p className="u-eyebrow mt-6">
            Written for {article.audience} &middot; {published} &middot; {article.readingMinutes} minute read
          </p>
        </Container>
      </Section>

      <Section className="!pt-0 !pb-16">
        <Container width="narrow">
          <article className="border-t border-[var(--line-strong)] pt-10">
            <MDXRemote source={article.body} components={mdxComponents} />
          </article>

          {article.legacyPath ? (
            <p className="mt-12 border-t border-[var(--line)] pt-5 text-[0.8125rem] leading-[1.55] text-[var(--fg-subtle)]">
              An earlier version of this article lived at <code className="font-mono">{article.legacyPath}</code>. That
              URL now points here.
            </p>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-3">
            <CTA href="/demo">Request a FactorFox AI demonstration</CTA>
            <CTA href="/resources" variant="secondary">
              More writing
            </CTA>
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section tone="sunken" bordered className="!py-14">
          <Container>
            <Eyebrow>Keep reading</Eyebrow>
            <div className="mt-6 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="group bg-[var(--bg-raised)] p-6 transition-colors hover:bg-[var(--bg)]"
                >
                  <p className="u-eyebrow">{r.cluster}</p>
                  <h2 className="mt-2 text-[1rem] group-hover:text-[var(--accent)]">{r.title}</h2>
                  <p className="mt-2 text-[0.8125rem] leading-[1.55] text-[var(--fg-muted)]">{r.description}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <RelatedPages
        title="Where this connects in the platform"
        links={[
          { href: "/platform/briefings", label: "Briefings", note: "The six questions, answered for your responsibility." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits behind every conclusion." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Re underwriting on every material event." },
        ]}
      />

      <CtaBand
        title="See this working on your own book."
        body="Bring a slice of open receivables and we will show you what the first briefing says about it, with the evidence attached."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "Tour the platform" }}
      />
    </>
  );
}
