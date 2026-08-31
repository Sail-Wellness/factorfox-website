import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, RelatedPages, CtaBand } from "@/components/page-parts";
import { JsonLd, Container, Section, SectionHead, Eyebrow, Card, Status } from "@/components/primitives";
import { PARTNERS, ROLE_LABEL, partnerBySlug, partnerIntegration, type Partner } from "@/content/partners";
import { pageMeta, breadcrumbSchema, absoluteUrl } from "@/lib/seo";

/**
 * PARTNER SPOTLIGHTS.
 *
 * One page per partner, built from the register in src/content/partners.ts.
 * Two rules hold this route together and both are mechanical rather than
 * editorial:
 *
 *   1. The relationship is the owner's to assert and is stated with the date it
 *      was confirmed. It never implies software.
 *   2. The connection is engineering's to evidence. The status word comes from
 *      the integration register through partnerIntegration(), so this route
 *      cannot describe a connection the register does not hold. Where there is
 *      no row, the page says the connection is not built, in those words.
 *
 * Every page also publishes what could not be established about the company.
 * That section is the reason a reader can trust the rest of the page.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return PARTNERS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const partner = partnerBySlug(slug);
  if (!partner) return {};
  return pageMeta({
    title: partner.metaTitle,
    description: partner.metaDescription,
    path: `/partners/${partner.slug}`,
    intent: "informational",
    target: `${partner.name} factoring integration`,
  });
}

export default async function PartnerSpotlight({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = partnerBySlug(slug);
  if (!partner) notFound();

  const row = partnerIntegration(partner);
  const others = neighbours(partner);
  const trail = [
    { name: "Partners", path: "/partners" },
    { name: partner.name, path: `/partners/${partner.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: partner.name,
            ...(partner.alsoKnownAs ? { alternateName: partner.alsoKnownAs } : {}),
            description: partner.summary,
            sameAs: [partner.linkedin, ...partner.sources.map((s) => s.href)],
            url: partner.sources[0]?.href,
            subjectOf: { "@type": "WebPage", url: absoluteUrl(`/partners/${partner.slug}`) },
          },
        ]}
      />

      <PageHero
        trail={trail}
        eyebrow={ROLE_LABEL[partner.role]}
        title={partner.name}
        lede={
          <>
            {partner.alsoKnownAs ? (
              <p>
                Also known as <strong>{partner.alsoKnownAs}</strong>, which is the name most of the older
                material in this industry uses.
              </p>
            ) : null}
            <p>{partner.summary}</p>
            <p>
              Everything below came from that company&rsquo;s own website or from dated trade coverage, and
              the sources are at the foot of the page. Where they publish nothing, this page says so rather
              than filling the gap with an estimate.
            </p>
          </>
        }
        primaryCta={{ href: "/integrations", label: "See the integration register" }}
        secondaryCta={{ href: "/partners", label: "All partners" }}
        aside={<ClaimsCard partner={partner} status={row?.status} statusLabel={row?.statusLabel} />}
      />

      <ListSection
        eyebrow="What they do"
        title={`What ${partner.name} actually sells.`}
        items={partner.whatTheyDo}
      />

      <ListSection
        eyebrow="Why it matters"
        title="Why a funding business should care."
        lede="Written for the lender rather than for the borrower, which is the audience every page on this site is written for."
        items={partner.whyItMatters}
        tone="sunken"
        marker="signal"
      />

      <ListSection
        eyebrow="What would move"
        title="What would flow between the two systems, and in which direction."
        lede="This is the question a technology partnership starts with, because it determines whether there is anything worth building. It describes the exchange, not a shipped feature."
        items={partner.whatWouldFlow}
      />

      <Section tone="sunken" bordered>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card accent="accent">
              <Eyebrow tone="signal">Where this stands in the product</Eyebrow>
              <h2 className="text-card-title mt-3">The connection, stated the way the register states it</h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {row ? (
                  <Status kind={row.status} label={row.statusLabel} />
                ) : (
                  <Status kind="info" label="No register row" />
                )}
                <span className="u-label text-[var(--fg-subtle)]">
                  {row ? "Read from the integration register" : "Nothing connects today"}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">{partner.connectionStatus}</p>
              <Link href="/integrations" className="u-label mt-5 inline-block text-[var(--accent)]">
                How every status word is defined
              </Link>
            </Card>

            <Card>
              <Eyebrow>What we could not establish</Eyebrow>
              <h2 className="text-card-title mt-3">Published deliberately, rather than quietly left out</h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">{partner.notEstablished}</p>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                A partner page that has an answer for everything has usually stopped checking. Several
                companies in this group publish no founding year and no headcount at all, and that is a
                finding about the industry rather than a gap in the research.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="Sources"
            title="Where these facts came from."
            lede="Check them. That is the entire point of publishing them."
          />
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {[
              ...partner.sources,
              { label: `${partner.name} on LinkedIn`, href: partner.linkedin },
            ].map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  rel="noopener nofollow"
                  className="block rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] px-5 py-4 transition-colors hover:border-[var(--line-strong)]"
                >
                  <p className="text-[15px] font-semibold leading-[1.4]">{s.label}</p>
                  <p className="mt-1 break-all font-mono text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
                    {s.href.replace(/^https?:\/\//, "")}
                  </p>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[70ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            The commercial relationship was confirmed by FactorFox on 28 August 2026. The connection status
            above is not confirmed by anybody at FactorFox. It is read from the integration register, which
            only engineering writes to.
          </p>
        </Container>
      </Section>

      {others.length > 0 ? (
        <Section tone="sunken" bordered>
          <Container>
            <SectionHead eyebrow="Other spotlights" title="The rest of the partner group." />
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/partners/${p.slug}`}
                  className="group rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 transition-shadow duration-200 hover:shadow-[var(--shadow-lift)]"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <p className="u-eyebrow">{ROLE_LABEL[p.role]}</p>
                  <p className="text-card-title mt-2 group-hover:text-[var(--accent)]">{p.name}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--fg-muted)]">{p.summary}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <RelatedPages
        title="Where this connects on the rest of the site"
        links={[
          { href: "/partners", label: "All partners", note: "The group, and how a relationship differs from a connection." },
          { href: "/integrations", label: "Integrations", note: "Every connection, what moves, and the status it holds." },
          { href: "/compare/how-to-choose", label: "How to choose", note: "Including how to check a vendor claim rather than accept it." },
        ]}
      />

      <CtaBand
        title="Ask us what connects today, and we will answer with the register open."
        body="Not with a logo strip. If the answer is that nothing connects to a vendor you depend on, you will hear that in the first conversation rather than in week five of an implementation."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/partners#become-a-partner", label: "Become a partner" }}
      />
    </>
  );
}

/* --------------------------------------------------------------- sections */

function ListSection({
  eyebrow,
  title,
  lede,
  items,
  tone = "default",
  marker = "accent",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  items: string[];
  tone?: "default" | "sunken";
  marker?: "accent" | "signal";
}) {
  return (
    <Section tone={tone} bordered>
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <ol className="mt-10 space-y-7">
          {items.map((text, i) => (
            <li key={i} className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-6">
              <span
                aria-hidden="true"
                className="u-label grid h-8 w-8 shrink-0 place-items-center rounded-full"
                style={{
                  background: marker === "signal" ? "var(--signal)" : "var(--accent)",
                  color: "#fff",
                }}
              >
                {i + 1}
              </span>
              <p className="max-w-[74ch] text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">{text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ aside */

function ClaimsCard({
  partner,
  status,
  statusLabel,
}: {
  partner: Partner;
  status?: React.ComponentProps<typeof Status>["kind"];
  statusLabel?: string;
}) {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Two claims, kept apart</p>
          <Status kind="info" label={ROLE_LABEL[partner.role]} />
        </div>

        <div className="divide-y divide-[var(--line)]">
          <div className="px-5 py-4">
            <p className="u-label text-[var(--signal)]">The relationship</p>
            <p className="mt-1.5 text-[14px] font-semibold leading-[1.45]">
              A fact about two companies. Ours to assert.
            </p>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              FactorFox works with {partner.name}. Confirmed 28 August 2026. It requires no code to be true
              and it implies none.
            </p>
          </div>

          <div className="px-5 py-4">
            <p className="u-label text-[var(--accent)]">The connection</p>
            <p className="mt-1.5 text-[14px] font-semibold leading-[1.45]">
              A fact about software. Engineering&rsquo;s to evidence.
            </p>
            <div className="mt-2.5">
              {status ? (
                <Status kind={status} label={statusLabel} />
              ) : (
                <Status kind="info" label="Not built" />
              )}
            </div>
            <p className="mt-2.5 text-[13px] leading-[1.55] text-[var(--fg-subtle)]">
              {status
                ? "Read from the integration register at build time. This page cannot say anything else."
                : "No row exists in the integration register, so nothing in the product connects to them today."}
            </p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        The same two questions are worth asking of any vendor&rsquo;s partner page, including this one.
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------------- helpers */

/** Three others, starting from the next one in the register and wrapping. */
function neighbours(partner: Partner) {
  const i = PARTNERS.findIndex((p) => p.slug === partner.slug);
  return [1, 2, 3].map((n) => PARTNERS[(i + n) % PARTNERS.length]).filter((p) => p.slug !== partner.slug);
}
