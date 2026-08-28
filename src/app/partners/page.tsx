import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PageHero,
  FeatureGrid,
  ProseSection,
  FaqBlock,
  RelatedPages,
  CtaBand,
  DataTable,
  Card,
  Section,
  Container,
  SectionHead,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { PartnerForm } from "@/components/partner-form";
import { INTEGRATIONS } from "@/content/integrations";
import { pageMeta, softwareSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Partners and the partner programme",
  description:
    "Who FactorFox works with, what each relationship actually is, and how to become a partner. Every technology row carries the status it holds in the product.",
  path: "/partners",
  intent: "commercial",
  target: "factoring software partners",
});

const FAQS = [
  {
    q: "Why does a partner logo not mean the integration is live?",
    a: "Because they are two different claims and only one of them is ours to make. A commercial relationship is a fact about two companies agreeing to work together. A working integration is a fact about software, and it is either built and proven or it is not. Plenty of good partnerships exist before any code does. We keep the two separate so that a logo on this page never quietly becomes a capability claim, and so that the status column on the integrations page stays worth reading.",
  },
  {
    q: "What do you look for in a referral partner?",
    a: "Someone who already has the trust of operators in this industry and would rather send them somewhere good than somewhere that pays most. Consultants who run conversions, people who advise factoring companies on operations or credit, accountants and lawyers who serve this sector. What we are not looking for is volume. A single introduction from somebody a principal already trusts is worth more than a list, and the arrangement is written down rather than assumed.",
  },
  {
    q: "Do you have a reseller or white label programme?",
    a: "Talk to us rather than reading a page about it. Arrangements of that kind depend on the market, the support model and who carries the customer relationship, and none of that survives being reduced to a tier table. If you have a specific proposition in mind, the form below reaches somebody who can discuss commercial terms rather than route you into a sequence.",
  },
  {
    q: "We build software for this industry. How does a technology partnership work?",
    a: "It starts with what would actually move between the two systems and in which direction, because that determines whether there is anything worth building. If there is, it gets built, proven against a deployed service and then listed with a status that says exactly where it stands. It appears on the integrations page as planned while it is planned and as available when it is available, and never the other way around. That discipline is the reason a buyer can trust the rest of that page.",
  },
  {
    q: "Will you list us on your site?",
    a: "Yes, once the relationship is real and we agree the words. We would rather describe a partnership precisely than impressively, and that cuts both ways: we will not overstate what you do for us and we will not ask you to overstate what we do for you. If a relationship ends, the listing comes down rather than quietly staying up.",
  },
];

/* Grouped from the register, so this page cannot drift away from the statuses
   that engineering maintains. Nothing here is hand typed. */
const BY_STATUS = {
  available: INTEGRATIONS.filter((i) => i.status === "available"),
  controlled: INTEGRATIONS.filter((i) => i.status === "controlled"),
  contract: INTEGRATIONS.filter((i) => i.status === "contract"),
  planned: INTEGRATIONS.filter((i) => i.status === "planned"),
  ecosystem: INTEGRATIONS.filter((i) => i.status === "ecosystem"),
};

export default function PartnersPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox partners",
          description:
            "The companies FactorFox works with, what each relationship is, and how to apply to the partner programme.",
          path: "/partners",
        })}
      />

      <PageHero
        trail={[{ name: "Partners", path: "/partners" }]}
        eyebrow="Partners"
        title="Who we work with, and what each relationship actually is."
        lede={
          <>
            <p>
              Most partner pages in this industry are a wall of logos with a headline claiming a connection
              to all of them. It is the cheapest page on any vendor website and the least informative, because
              it collapses several different kinds of relationship into one visual claim and leaves a buyer
              unable to tell which is which.
            </p>
            <p>
              This page separates them. Technology connections carry the status they hold in the product,
              taken from the same register that engineering maintains. Industry and ecosystem relationships
              are described rather than implied. And if you want to work with us, the last section is a real
              route rather than a mailbox nobody reads.
            </p>
          </>
        }
        primaryCta={{ href: "#become-a-partner", label: "Become a partner" }}
        secondaryCta={{ href: "/integrations", label: "See the integration detail" }}
        aside={<TwoClaimsCard />}
      />

      <ProseSection
        eyebrow="The distinction"
        title="A partnership and a working integration are two different claims."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Why we are strict about it</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              The site this replaced advertised connectors that did not exist. Not from dishonesty, but
              because a logo strip has no field for the truth.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              A buyer discovers that in week five of an implementation, and at that point they have not just
              lost a connector. They have lost their reason to believe anything else they were told.
            </p>
          </Card>
        }
      >
        <p>
          <strong>A commercial relationship is a fact about two companies.</strong> We have agreed to work
          together, one of us introduces the other, there is an arrangement and usually a document. That is
          ours to assert and it does not require a single line of code to be true.
        </p>
        <p>
          <strong>A working integration is a fact about software.</strong> It is built, it has been proven
          against a deployed service, and it either moves the information it claims to move or it does not.
          That is not ours to assert. It is engineering&rsquo;s to evidence, which is why every row on the{" "}
          <InlineLink href="/integrations">integrations page</InlineLink> carries one of five words and why
          nothing enters that register without a source in the platform repository or a dated proof run.
        </p>
        <p>
          <strong>Both are real, and conflating them is how buyers get hurt.</strong> Plenty of good
          partnerships exist long before any code does. Presenting one as the other is not a small
          exaggeration, because a factoring operation plans a conversion timetable around what it was told
          would connect.
        </p>
        <p>
          So there is no logo wall on this page, and there is no headline claiming we are connected to
          everything shown. Where a connection exists, the word for it is on the row.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Technology"
            title="What the platform connects to, with the status it holds today."
            lede="Taken directly from the integration register rather than retyped, so this page cannot say something different from the one engineering maintains. Five words are permitted and each one means a specific thing."
          />
          <div className="mt-12">
            <DataTable
              caption="FactorFox technology partners and integrations, by status"
              head={["Status", "What it means", "Who"]}
              rows={[
                [
                  <Status key="a" kind="available" />,
                  "Works in the product today. Some require you to hold your own credentials with that vendor, which is stated on the row.",
                  BY_STATUS.available.map((i) => i.name).join(", "),
                ],
                [
                  <Status key="c" kind="controlled" />,
                  "Built and proven against a deployed service, running with named customers, not yet generally released.",
                  BY_STATUS.controlled.map((i) => i.name).join(", "),
                ],
                [
                  <Status key="k" kind="contract" />,
                  "The rail is built. It answers not configured until you hold a contract and keys with that vendor.",
                  BY_STATUS.contract.map((i) => i.name).join(", "),
                ],
                [
                  <Status key="p" kind="planned" />,
                  "Named and designed. Not built. Never described as working.",
                  BY_STATUS.planned.map((i) => i.name).join(", "),
                ],
                [
                  <Status key="e" kind="ecosystem" />,
                  "A sibling product in the network rather than a connector.",
                  BY_STATUS.ecosystem.map((i) => i.name).join(", "),
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Each row is described in full, including what moves and in which direction, on the{" "}
            <InlineLink href="/integrations">integrations page</InlineLink>. If a vendor you depend on is
            not listed anywhere, that absence is deliberate. We do not list a company we cannot evidence a
            connection to, even where a commercial conversation is under way.
          </p>
        </Container>
      </Section>

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="Industry"
            title="Where we show up in this industry, and in what capacity."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <Eyebrow tone="signal">International Factoring Association</Eyebrow>
              <h3 className="text-card-title mt-3">Preferred Vendor and Preferred Ally Member</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                FactorFox holds both designations with the IFA, and exhibits and sponsors at association
                events. The listing is public and you can check it rather than take the badge on faith,
                which is the same standard this site applies to everything else.
              </p>
              <a
                href={SITE.ifaListing}
                rel="noopener"
                className="u-label mt-5 inline-block text-[var(--accent)]"
              >
                View the listing
              </a>
            </div>

            <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <Eyebrow>Where we are not</Eyebrow>
              <h3 className="text-card-title mt-3">No certification body, and no security badge</h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
                A SOC 2 programme is under way with completion targeted for the end of 2026, and until a
                report exists there is no certification claim and no logo anywhere on this site. It belongs
                on a partners page because a badge from an audit firm is the one most often mistaken for a
                partnership.
              </p>
              <Link href="/platform/security" className="u-label mt-5 inline-block text-[var(--accent)]">
                Read the security position
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="The programme"
        title="Three ways to work with us"
        lede="Each one is a real arrangement with terms written down. None of them is a tier table, because the terms depend on the market and the support model and a tier table would be a guess dressed as a policy."
        tone="sunken"
        columns={3}
        items={[
          {
            title: "Referral and introduction",
            body: "For consultants, advisers, accountants and lawyers who already hold the trust of operators in this industry. We are not looking for volume. One introduction from somebody a principal already listens to is worth more than a list, and the arrangement is documented rather than assumed.",
          },
          {
            title: "Implementation and consulting",
            body: "For firms who run conversions, training or ongoing operational work. Conversions are where most of the risk in this category sits, and a partner who has done one properly is worth more to a customer than any amount of vendor enthusiasm. We will train you on the platform and on the reconciliation posture.",
          },
          {
            title: "Technology and integration",
            body: "For software serving this industry. It starts with what would actually move between the two systems and in which direction. If there is something worth building it gets built, proven against a deployed service, and then listed with the status it has earned rather than the status either of us would prefer.",
          },
        ]}
      />

      <Section id="become-a-partner" bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow tone="signal">Become a partner</Eyebrow>
              <h2 className="text-section-lg mt-4">Tell us what you had in mind.</h2>
              <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  This reaches a person rather than a sequence. You will hear back from somebody who can
                  discuss commercial terms, not somebody whose job is to book a call to arrange a call.
                </p>
                <p>
                  It helps to know who you already work with and what you think the two of us would do
                  together. If the answer is that you are not sure yet and want to explore it, say that.
                  It is a more useful starting point than a proposal written to impress.
                </p>
                <p>
                  If you would rather write directly, <strong>{SITE.contactEmail}</strong> reaches the same
                  person.
                </p>
              </div>
            </div>
            <PartnerForm />
          </div>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What partners ask before they commit" />

      <RelatedPages
        links={[
          { href: "/integrations", label: "Integrations", note: "Every connection, what moves, and the status it holds." },
          { href: "/platform/security", label: "Security", note: "The control surface, and the certification position stated plainly." },
          { href: "/company", label: "The company", note: "Who built this, and why it is aimed at the operator." },
          { href: "/compare/how-to-choose", label: "How to choose", note: "Including how to check a claim rather than accept it." },
          { href: "/migrate", label: "Migration", note: "What a conversion involves, for partners who run them." },
          { href: "/demo", label: "Request a demonstration", note: "See the platform before you take it to a customer." },
        ]}
      />

      <CtaBand
        title="If we list you, we will describe it precisely rather than impressively."
        body="That cuts both ways. We will not overstate what you do for us and we will not ask you to overstate what we do for you. If a relationship ends, the listing comes down rather than quietly staying up."
        primary={{ href: "#become-a-partner", label: "Start the conversation" }}
        secondary={{ href: "/integrations", label: "See how we describe a connection" }}
      />
    </>
  );
}

/* ------------------------------------------------------------- inline link */

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-[var(--accent)] underline underline-offset-4 hover:no-underline">
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ visual */

function TwoClaimsCard() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Reading any partner page</p>
          <Status kind="info" label="Including ours" />
        </div>

        <div className="p-5">
          <p className="text-[15px] leading-[1.6] text-[var(--fg-muted)]">
            Two questions that separate a relationship from a capability, on anybody&rsquo;s website.
          </p>

          <ol className="mt-4 space-y-4">
            {[
              [
                "Q1",
                "Is this a company you work with, or a system you connect to?",
                "A logo answers neither. The words around it usually answer both, if there are any.",
              ],
              [
                "Q2",
                "If it connects, what moves, in which direction, and is it live today?",
                "Built, proven, released and planned are four different states and a logo shows all four identically.",
              ],
              [
                "Q3",
                "Who is missing, and would they say the same about you?",
                "The absences on a partner page carry as much information as the entries.",
              ],
            ].map(([tag, q, note]) => (
              <li key={tag} className="border-l-2 border-[var(--line-strong)] pl-4">
                <p className="u-label text-[var(--signal)]">{tag}</p>
                <p className="mt-1 text-[14px] font-semibold leading-[1.45]">{q}</p>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--fg-subtle)]">{note}</p>
              </li>
            ))}
          </ol>

          <p className="u-label mt-5 border-t border-[var(--line)] pt-4 text-[var(--fg-subtle)]">
            Run it on this page first
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        The test we would want applied to our own partner page. It is a checklist, not a product screen.
      </figcaption>
    </figure>
  );
}
