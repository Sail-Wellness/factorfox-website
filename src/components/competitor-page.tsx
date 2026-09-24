import type { ReactNode } from "react";
import {
  PageHero,
  FeatureGrid,
  ProseSection,
  FaqBlock,
  RelatedPages,
  CtaBand,
  DataTable,
  Section,
  Container,
  SectionHead,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { softwareSchema } from "@/lib/seo";

/*
  The shared shape for a competitor comparison page.

  Rules these pages are held to, so nobody has to rediscover them:
    . Every statement about the other vendor is what that vendor, or reputable trade press,
      says in public, with the source linked and the date it was checked.
    . Nothing is inferred, and nothing is disparaging. Where a fact could not be confirmed
      the page says so, or leaves it out.
    . Every statement about FactorFox is one the rest of this site already makes.
    . There is always a section on where the other product may be the better fit.
    . These pages are linked from inside the site, never from the navigation menus.
*/

export type VendorFact = { topic: string; stated: ReactNode; source: string; sourceLabel: string };

export type CompetitorPageProps = {
  vendor: string;
  path: string;
  checked: string;
  lede: ReactNode;
  facts: VendorFact[];
  differences: { title: string; body: string }[];
  betterFit: ReactNode;
  faqs: { q: string; a: string }[];
  related?: { href: string; label: string; note: string }[];
};

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener nofollow"
      className="text-[var(--accent)] underline underline-offset-4 hover:no-underline"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

const FACTORFOX_ROWS: [string, ReactNode][] = [
  ["Describes itself as", "AI native, and model agnostic by design"],
  ["Finance types", "Invoice factoring, asset based lending, purchase order finance and reverse factoring on one record"],
  ["General ledger", "A true double entry general ledger, built in, carrying the business since 2002"],
  ["Accounting integrations", <span key="a">QuickBooks Online and Xero, <Status kind="available" /></span>],
  ["Microsoft Teams", <span key="t">Briefings, signals and approvals in Teams, <Status kind="controlled" /></span>],
  ["Security certification", "A SOC 2 program is in progress. No certification is claimed until a report exists."],
  ["Pricing", "Not published. Quoted on a call, because negotiated schedules exist."],
  ["Customers", "Over 100 organizations across North America, Latin America, Europe, Australia and South Africa"],
];

export function CompetitorPage({
  vendor,
  path,
  checked,
  lede,
  facts,
  differences,
  betterFit,
  faqs,
  related,
}: CompetitorPageProps) {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: `FactorFox as a ${vendor} alternative`,
          description: `A factual comparison of FactorFox and ${vendor}, using each vendor's own public statements, with sources and the date they were checked.`,
          path,
        })}
      />

      <PageHero
        trail={[
          { name: "How we compare", path: "/compare" },
          { name: `${vendor} alternative`, path },
        ]}
        eyebrow={`Comparing ${vendor}`}
        title={`${vendor} alternative: how FactorFox compares`}
        lede={lede}
        primaryCta={{ href: "/demo", label: "Test FactorFox on your own book" }}
        secondaryCta={{ href: "/compare/how-to-choose", label: "How to run the selection" }}
      />

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="In their own words"
            title={`What ${vendor} says about itself`}
            lede={`Taken from ${vendor}'s own public pages and from trade press, checked ${checked}. Products change, so confirm anything that matters with ${vendor} directly.`}
          />
          <div className="mt-10">
            <DataTable
              caption={`${vendor} as publicly described`}
              head={["Topic", "What is stated", "Source"]}
              rows={facts.map((f) => [
                f.topic,
                f.stated,
                <ExternalLink key={f.source} href={f.source}>
                  {f.sourceLabel}
                </ExternalLink>,
              ])}
            />
          </div>
        </Container>
      </Section>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The same questions, answered for FactorFox"
            title="FactorFox on the same topics"
            lede="Every line here is stated elsewhere on this site, with the status word where one applies."
          />
          <div className="mt-10">
            <DataTable
              caption="FactorFox on the same topics"
              head={["Topic", "FactorFox"]}
              rows={FACTORFOX_ROWS.map(([k, v]) => [k, v])}
            />
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Where FactorFox is different"
        title={`What changes if you choose FactorFox over ${vendor}`}
        columns={3}
        items={differences}
      />

      <ProseSection eyebrow="Being fair about it" title={`Where ${vendor} may be the better fit`}>
        {betterFit}
      </ProseSection>

      <FaqBlock items={faqs} title={`What buyers ask when comparing ${vendor} and FactorFox`} />

      <RelatedPages
        links={
          related ?? [
            { href: "/platform/ai-native", label: "AI native factoring software", note: "What the platform does, in nine parts." },
            { href: "/compare/how-to-choose", label: "How to choose", note: "The committee, the tests and the contract clauses." },
            { href: "/migrate", label: "Migrating to FactorFox", note: "What moves, what breaks, how long it takes." },
            { href: "/platform/security", label: "Security and controls", note: "Where we are, stated plainly." },
          ]
        }
      />

      <CtaBand
        title="Compare on your own book, not on a page."
        body={`Bring a slice of receivables and the questions you are putting to ${vendor}. We will answer the same questions in front of you, and show the evidence behind each answer.`}
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/compare", label: "How we compare" }}
      />
    </>
  );
}
