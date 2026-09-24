import type { Metadata } from "next";
import {
  PageHero,
  ProseSection,
  RelatedPages,
  CtaBand,
  Section,
  Container,
  SectionHead,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, absoluteUrl } from "@/lib/seo";
import { SITE } from "@/lib/site";

/*
  Launch coverage, September 2026. Headlines are the publishers' own, with hyphens set as spaces
  to match the site's house style. Dates are the publication dates shown on each story. Add new
  coverage to STORIES; the page, the schema and the footer link all follow from it.
*/

export const metadata: Metadata = pageMeta({
  title: "FactorFox news and launch coverage",
  description:
    "Coverage of the FactorFox AI native specialty finance platform launch in ABF Journal, IFA Commercial Factor and PR.com, with press contacts and company facts.",
  path: "/news",
  intent: "brand",
  target: "FactorFox news",
});

type Story = {
  outlet: string;
  outletUrl: string;
  headline: string;
  url: string;
  date: string; // ISO
  display: string;
  author?: string;
  summary: string;
  type: "NewsArticle" | "Article";
};

const STORIES: Story[] = [
  {
    outlet: "ABF Journal",
    outletUrl: "https://www.abfjournal.com/",
    headline: "FactorFox Unveils Next Generation AI Native Finance Platform",
    url: "https://www.abfjournal.com/factorfox-unveils-next-generation-ai-native-finance-platform/",
    date: "2026-09-22",
    display: "September 22, 2026",
    author: "Rita Garwood",
    summary:
      "ABF Journal reports on the relaunch of FactorFox as an AI native operating system for specialty finance, built from more than twenty years of industry experience, model agnostic by design and running on a real double entry general ledger.",
    type: "NewsArticle",
  },
  {
    outlet: "IFA Commercial Factor",
    outletUrl: "https://magazine.factoring.org/",
    headline: "FactorFox Introduces the Next Generation of Its AI Native Specialty Finance Platform",
    url: "https://magazine.factoring.org/news/factorfox-introduces-the-next-generation-of-its-ai-native-specialty-finance-platform",
    date: "2026-09-21",
    display: "September 21, 2026",
    author: "William Bounds",
    summary:
      "The International Factoring Association's magazine covers Actionable Intelligence, agreement reading, covenant monitoring, role based briefings and the rule that the AI recommends while authorized people approve.",
    type: "NewsArticle",
  },
  {
    outlet: "PR.com",
    outletUrl: "https://www.pr.com/",
    headline: "FactorFox Introduces an AI Native Operating System Built for the Next Era of Specialty Finance",
    url: "https://www.pr.com/press-release/979437",
    date: "2026-09-22",
    display: "September 22, 2026",
    summary:
      "The launch announcement: an AI native operating system for factoring companies, asset based lenders and purchase order funders, with evidence behind every answer and human authorization on every movement of money.",
    type: "Article",
  },
];

const FACTS: [string, string][] = [
  ["Company", `${SITE.legalName}`],
  ["Founded", "2002, as the first cloud platform built specifically for factoring companies"],
  ["Founder and CEO", SITE.founder.name],
  ["Headquarters", `${SITE.locality}, Florida`],
  ["Customers", "Over 100 organizations across North America, Latin America, Europe, Australia and South Africa"],
  ["What it does", "AI native software for invoice factoring, asset based lending and purchase order finance"],
  ["Press contact", `${SITE.contactEmail}, ${SITE.phone}`],
];

function schema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${absoluteUrl("/news")}#page`,
      url: absoluteUrl("/news"),
      name: "FactorFox news and launch coverage",
      about: { "@id": `${SITE.url}/#organization` },
      isPartOf: { "@id": `${SITE.url}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: STORIES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": s.type,
            headline: s.headline,
            url: s.url,
            datePublished: s.date,
            description: s.summary,
            ...(s.author ? { author: { "@type": "Person", name: s.author } } : {}),
            publisher: { "@type": "Organization", name: s.outlet, url: s.outletUrl },
            about: {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: SITE.name,
              legalName: SITE.legalName,
              url: `${SITE.url}/`,
            },
          },
        })),
      },
    },
  ];
}

export default function NewsPage() {
  return (
    <>
      <JsonLd data={schema()} />

      <PageHero
        trail={[{ name: "News", path: "/news" }]}
        eyebrow="News"
        title="FactorFox news and launch coverage"
        lede={
          <>
            <p>
              In September 2026 FactorFox relaunched as an AI native operating system for specialty finance.
              The launch was covered by ABF Journal, IFA Commercial Factor and PR.com.
            </p>
            <p>
              For interviews, facts or images, write to{" "}
              <a className="underline underline-offset-4" href={`mailto:${SITE.contactEmail}`}>
                {SITE.contactEmail}
              </a>{" "}
              or call{" "}
              <a className="underline underline-offset-4" href={`tel:${SITE.phoneHref}`}>
                {SITE.phone}
              </a>
              .
            </p>
          </>
        }
        primaryCta={{ href: "/platform/ai-native", label: "What AI native factoring software means" }}
        secondaryCta={{ href: "/ai-in-action", label: "Watch the 85 second briefing" }}
      />

      <Section bordered>
        <Container>
          <SectionHead eyebrow="September 2026" title="Launch coverage" />
          <ol className="mt-10 grid gap-4">
            {STORIES.map((s) => (
              <li key={s.url}>
                <article
                  className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 sm:p-7"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <p className="u-label text-[var(--fg-subtle)]">
                    {s.outlet} &middot; <time dateTime={s.date}>{s.display}</time>
                    {s.author ? <> &middot; {s.author}</> : null}
                  </p>
                  <h3 className="text-card-title mt-3">
                    <a
                      href={s.url}
                      className="hover:text-[var(--accent)] hover:underline"
                      target="_blank"
                      rel="noopener"
                    >
                      {s.headline}
                      <span className="sr-only"> (opens {s.outlet} in a new tab)</span>
                    </a>
                  </h3>
                  <p className="mt-3 max-w-[74ch] text-[15px] leading-[1.65] text-[var(--fg-muted)]">{s.summary}</p>
                  <a
                    href={s.url}
                    className="mt-4 inline-block text-[14px] font-semibold text-[var(--accent)] underline underline-offset-4 hover:no-underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Read on {s.outlet}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <ProseSection eyebrow="In the founder's words" title="We are betting there will always be a better model.">
        <p>
          &ldquo;We are not betting on which model wins. We are betting there will always be a better
          one.&rdquo; Roberto Vasquez, Founder and CEO, on why FactorFox is model agnostic.
        </p>
        <p>
          &ldquo;The first generation digitized the business. Then we automated it. Now the software can
          begin to understand it.&rdquo;
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead eyebrow="For the press" title="Company facts" />
          <dl className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-[14rem_minmax(0,1fr)]">
            {FACTS.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="u-label pt-1 text-[var(--fg-subtle)]">{k}</dt>
                <dd className="m-0 text-[16px] leading-[1.6]">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <RelatedPages
        links={[
          { href: "/platform/ai-native", label: "AI native factoring software", note: "What the platform does, in nine parts." },
          { href: "/company", label: "About FactorFox", note: "From the first cloud platform for factors in 2002 to today." },
          { href: "/ai-in-action", label: "AI in action", note: "An 85 second briefing on a real book shape." },
        ]}
      />

      <CtaBand
        title="See what the coverage describes."
        body="Bring a slice of your book. We will show you the first briefing it produces and the evidence behind every line."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "Tour the platform" }}
      />
    </>
  );
}
