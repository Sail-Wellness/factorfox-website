import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  FeatureGrid,
  ProseSection,
  RelatedPages,
  CtaBand,
  Card,
  Section,
  Container,
  SectionHead,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";
import { ARTICLES } from "@/content/articles";

export const metadata: Metadata = pageMeta({
  title: "Factoring operations writing for lenders",
  description:
    "Practical writing for the institution that funds: document extraction, funding conditions, evaluating operating platforms, and workflows worth automating.",
  path: "/resources",
  intent: "informational",
  target: "factoring operations writing",
});

function formatDate(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function ResourcesPage() {
  const articles = ARTICLES;
  const clusters = Array.from(new Set(articles.map((a) => a.cluster))).sort();

  return (
    <>
      <PageHero
        trail={[{ name: "Writing", path: "/resources" }]}
        eyebrow="Writing"
        title="Written for the people who fund, not for the people who need funding."
        lede={
          <>
            <p>
              Everything here is written for the institution on the funding side of the transaction: the
              credit officer, the operations principal, the controller, the collections manager. Not for a
              business trying to decide whether to factor its receivables.
            </p>
            <p>
              That distinction is why this page exists at all. Almost everything published about this
              industry is written to attract borrowers, which leaves the people actually running the
              operations reading marketing intended for their clients.
            </p>
          </>
        }
        primaryCta={{ href: "/resources/glossary", label: "Open the operator glossary" }}
        secondaryCta={{ href: "/demo", label: "Request a demonstration" }}
      />

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow={articles.length > 0 ? `${clusters.length} clusters` : "Index"}
            title="Everything published, most recent first."
            lede="Each piece names who it is for and which part of the platform it belongs to, because an article that cannot say who should read it usually should not have been written."
          />

          {articles.length === 0 ? (
            <div className="mt-11">
              <Card accent="signal">
                <Eyebrow tone="signal">Nothing published yet</Eyebrow>
                <p className="mt-3 text-[1rem] leading-[1.65] text-[var(--fg-muted)]">
                  The index is empty. Articles are MDX files in the content directory, and this page is
                  generated from that directory, so there is nothing here to fall out of date with what is
                  actually published.
                </p>
                <p className="mt-4 text-[1rem] leading-[1.65] text-[var(--fg-muted)]">
                  In the meantime, the{" "}
                  <Link href="/resources/glossary" className="text-[var(--accent)] underline underline-offset-4 hover:no-underline">
                    operator glossary
                  </Link>{" "}
                  is the most useful thing on this part of the site.
                </p>
              </Card>
            </div>
          ) : (
            <ul className="mt-11 list-none border-t border-[var(--line-strong)] p-0">
              {articles.map((a) => (
                <li key={a.slug} className="border-b border-[var(--line)]">
                  <Link
                    href={`/resources/${a.slug}`}
                    className="group grid gap-3 py-7 transition-colors sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:gap-10"
                  >
                    <div>
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
                        {formatDate(a.published)}
                      </p>
                      <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.11em] text-[var(--signal)]">
                        {a.cluster}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[1.1875rem] leading-[1.35] group-hover:text-[var(--accent)]">{a.title}</h3>
                      <p className="mt-2.5 max-w-[68ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
                        {a.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
                        <span>Written for {a.audience}</span>
                        <span className="u-tabular">{a.readingMinutes} minute read</span>
                        {a.modified && a.modified !== a.published ? (
                          <span>Updated {formatDate(a.modified)}</span>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>

      {articles.length > 0 ? (
        <Section tone="sunken" bordered>
          <Container>
            <Eyebrow tone="signal">By cluster</Eyebrow>
            <h2 className="mt-3 max-w-[24ch] text-[clamp(1.7rem,3.2vw,2.4rem)]">
              Every article belongs to a part of the platform.
            </h2>
            <p className="mt-5 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
              If a piece cannot be attached to a workflow somebody actually runs, it is a content marketing
              exercise rather than writing. The cluster is declared in the article itself and this list is
              derived from it.
            </p>
            <div className="mt-9 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {clusters.map((c) => {
                const inCluster = articles.filter((a) => a.cluster === c);
                return (
                  <div key={c} className="bg-[var(--bg-raised)] p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[1rem]">{c}</h3>
                      <Status kind="info" label={`${inCluster.length}`} />
                    </div>
                    <ul className="mt-3 list-none space-y-2 p-0">
                      {inCluster.map((a) => (
                        <li key={a.slug}>
                          <Link
                            href={`/resources/${a.slug}`}
                            className="text-[0.875rem] leading-[1.5] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:underline underline-offset-4"
                          >
                            {a.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      <ProseSection
        eyebrow="Editorial position"
        title="Three rules, and the reason each one exists."
      >
        <p>
          <strong>The reader is the lender.</strong> Every piece is written for the institution that
          advances the money. Where a topic is normally covered from the borrower&rsquo;s side, we rewrite it
          from the funder&rsquo;s side rather than publishing a version of it that would be useless to the
          person reading. Two of the articles here exist precisely because their borrower facing originals
          used to rank and taught search engines the wrong thing about this domain.
        </p>
        <p>
          <strong>No number without a source.</strong> There are no accuracy rates, no percentage
          improvements and no industry statistics in this writing, because we are not able to source them and
          a plausible figure is not a source. Where a claim would be useful and cannot be supported, it is
          written qualitatively or it is left out.
        </p>
        <p>
          <strong>Every piece has to be useful to someone who never becomes a customer.</strong> The test we
          apply before publishing is whether an operator would send it to a colleague. If the only reason to
          read something is that it ends in a request for a demonstration, it is an advertisement and it does
          not go here.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="Also worth your time"
        title="The reference material"
        columns={3}
        items={[
          {
            title: "Operator glossary",
            body: "Forty plus terms as an operator uses them, including the cross market synonyms: invoice finance, debtor finance, factoraje, fomento mercantil.",
          },
          {
            title: "Migration guides",
            body: "What a factoring conversion actually involves, and a detailed working guide for operations running FactorSoft today.",
          },
          {
            title: "Pricing, explained without a price",
            body: "What drives cost in this category, what each pricing model rewards, and what your current system costs including the people it needs.",
          },
        ]}
      />

      <RelatedPages
        links={[
          { href: "/resources/glossary", label: "Operator glossary", note: "Definitions written for the funding side." },
          { href: "/migrate", label: "Migration", note: "What moves, what breaks, and how a reconciliation should read." },
          { href: "/compare", label: "How we compare", note: "Recording systems against decision systems." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Extraction, verification and near duplicates." },
          { href: "/platform/briefings", label: "Briefings", note: "The six questions and how scope is decided." },
          { href: "/company", label: "Company", note: "Who built this and the rules we hold ourselves to." },
        ]}
      />

      <CtaBand
        title="If something here raised a question about your own book, ask it."
        body="A first call is a working session about what you fund and what you find out too late. Bring the article, bring the disagreement, bring the shortlist."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/resources/glossary", label: "Open the glossary" }}
      />
    </>
  );
}
