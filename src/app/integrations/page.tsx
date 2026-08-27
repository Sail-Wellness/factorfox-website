import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
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
  CTA,
  Status,
} from "@/components/page-parts";
import { CATEGORIES, INTEGRATIONS, NOT_CLAIMED, integrationsByCategory } from "@/content/integrations";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Factoring software integrations by purpose",
  description:
    "Read the FactorFox integration register by business purpose, each row carrying a published status so your team knows what is live before it plans work.",
  path: "/integrations",
  intent: "integration",
  target: "factoring software integrations",
});

const STATUS_VOCAB: { kind: "available" | "controlled" | "contract" | "planned" | "ecosystem"; means: string }[] = [
  {
    kind: "available",
    means:
      "It works in the product today. Some available rows need you to hold your own agreement with the vendor, and where that is true the row says so rather than leaving you to find out during implementation.",
  },
  {
    kind: "controlled",
    means:
      "Built, and proven against a deployed service, running with named customers, not yet generally released or listed in a marketplace. It is a real capability with a deliberately small blast radius while it is validated.",
  },
  {
    kind: "contract",
    means:
      "The rail is built and the screen is wired. It answers not configured until you hold a contract and keys with that vendor. You are buying the plumbing, not the data.",
  },
  {
    kind: "planned",
    means:
      "Named and designed. Not built. It appears here because the platform already names it on screen as a missing input, and a gap the software admits to is worth publishing.",
  },
  {
    kind: "ecosystem",
    means:
      "A sibling product in the FactorEvo network rather than a connector. Shared intelligence, separate product, separate tenancy.",
  },
];

const FAQS = [
  {
    q: "What does contract required mean for our project plan?",
    a: "It means the engineering is done and the commercial step is yours. You sign with the vendor, you receive keys, you enter them, and the check starts answering. Until then the screen shows the check as not configured, with the vendor named, so an underwriter can see that a source exists and is switched off rather than believing it was never offered. Nothing about the timing of your contract changes the code.",
  },
  {
    q: "Which rows need us to hold our own vendor agreement?",
    a: "QuickBooks Online and Xero, because the connection runs under your own application registered with Intuit or Xero rather than under ours. Creditsafe and Dun and Bradstreet, because bureau data is licensed to the institution that consumes it. Every one of those rows carries the note on this page. Probity network needs nothing, because it reads behaviour the network already holds.",
  },
  {
    q: "Will you build a connector we need?",
    a: "Ask during the evaluation and you will get a straight answer, which is sometimes no. What we will not do is agree in a sales conversation and let the row appear on this page before the code exists. The register is maintained by engineering, and a status changes when the software changes, not when a deal needs it to.",
  },
  {
    q: "How much of our book does an integration see?",
    a: "Less than you would expect, and it is scoped per integration rather than granted once. Accounting connectors read a client's ledger and write nothing. Credit rails send a party identity out and bring an assessment back. Payment rails carry a file out and nothing about your banking relationship in. Mail runs under application permissions limited to the features you have enabled, and the capabilities screen shows what the token actually carries rather than what the documentation says it should.",
  },
  {
    q: "What happens to the platform if we switch an integration off?",
    a: "It stops, and nothing else does. No part of FactorFox depends on an adapter. Turning off Teams removes Teams. Revoking Graph mail revokes mail and the revocation is stored and audited. Disconnecting a client's ledger leaves every receivable already applied exactly where it is, because a sync proposes and a person applies, so what is on your book was put there by a human decision rather than by a live feed.",
  },
  {
    q: "Why is a planned row published at all?",
    a: "Because the platform publishes it internally. The underwriting engine declares a bank feed as a source that is not wired, and covenants that depend on it report awaiting a live source rather than reporting a zero that looks like compliance. If the software is willing to say that to an officer at seven in the morning, the website can say it to a buyer.",
  },
];

export default function IntegrationsPage() {
  const total = INTEGRATIONS.length;

  return (
    <>
      <PageHero
        trail={[{ name: "Integrations", path: "/integrations" }]}
        eyebrow="Integration register"
        title="A logo grid tells you nothing. A status column tells you what you are buying."
        lede={
          <>
            <p>
              This is the full register of what FactorFox connects to, organised by the job it does inside a
              factoring or asset based lending operation rather than by vendor. Every row carries one of five
              statuses, in a column of its own, next to the name.
            </p>
            <p>
              That column is the reason this page exists. It is also the reason the rest of the site is worth
              reading.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/integrations/microsoft-teams", label: "Explore Microsoft Teams integration" }}
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">How this page is built</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Every row below is rendered from one file in the platform repository. There is no second list
              that marketing maintains, so this page cannot drift away from the product even by accident.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Nothing enters that file without a source in the repository, the integration register, or a
              dated proof run. Marketing does not get to promote a row. Engineering does.
            </p>
            <p className="mt-4 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
              <span className="u-tabular">{total}</span> rows &middot; {CATEGORIES.length} categories &middot; one source of truth
            </p>
          </Card>
        }
      />

      <ProseSection
        eyebrow="Why the status column"
        title="Every competitor publishes a wall of logos. A logo makes one claim, and it is a weak one."
      >
        <p>
          A logo says an association exists. It does not say whether the connector is generally available,
          sitting quietly with three named customers, waiting on a contract you have not signed yet, or a
          design document somebody wrote in a planning session. Those four things look identical in a grid,
          and they are worth wildly different amounts to a buyer scoping an implementation.
        </p>
        <p>
          So the question gets asked in a sales call instead, answered by whoever is in the room, and never
          written down. The gap surfaces at week nine of the project, when the connector everyone assumed was
          shipping turns out to need a contract nobody budgeted for. At that point you have not just lost the
          connector. You have lost your reason to believe anything else the vendor told you.
        </p>
        <p>
          We publish the status instead, and we publish it in the place where a buyer is already looking. A
          status column on a directory page is a small thing to build and an uncomfortable thing to maintain,
          which is exactly why so few of them exist. It is evidence about how this company counts, offered
          before you have paid us anything.
        </p>
        <p>
          <strong>The vocabulary is fixed and there are only five words in it.</strong> No row is described
          with a phrase invented for the occasion, because an invented phrase is how available quietly becomes
          available soon.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The vocabulary"
            title="Five statuses, and what each one commits us to"
            lede="Read these once. Every row on the rest of the page uses them literally."
          />
          <div className="mt-11">
            <DataTable
              caption="Integration status vocabulary"
              head={["Status", "What it commits us to"]}
              rows={STATUS_VOCAB.map((s) => [<Status key={s.kind} kind={s.kind} />, s.means])}
            />
          </div>
        </Container>
      </Section>

      {CATEGORIES.map((cat, index) => {
        const rows = integrationsByCategory(cat.key);
        if (rows.length === 0) return null;
        return (
          <Section key={cat.key} tone={index % 2 === 0 ? "default" : "sunken"} bordered>
            <Container>
              <SectionHead
                eyebrow={`Category ${String(index + 1).padStart(2, "0")}`}
                title={cat.title}
                lede={cat.blurb}
              />
              <div className="mt-10">
                <DataTable
                  caption={`${cat.title} integrations`}
                  head={["Integration", "Status", "What it connects and what moves", "Who feels it"]}
                  rows={rows.map((i) => [
                    <div key={`${i.slug}-name`}>
                      {i.page ? (
                        <Link href={i.page} className="text-[var(--accent)] hover:underline underline-offset-4">
                          {i.name}
                        </Link>
                      ) : (
                        <span>{i.name}</span>
                      )}
                      {i.requiresCredentials ? (
                        <p className="mt-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
                          Your own vendor agreement
                        </p>
                      ) : null}
                    </div>,
                    <Status key={`${i.slug}-status`} kind={i.status} label={i.statusLabel} />,
                    <div key={`${i.slug}-body`}>
                      <p className="m-0 text-[var(--fg)]">{i.summary}</p>
                      <p className="mt-2 m-0">{i.moves}</p>
                      <p className="mt-2 m-0 text-[var(--fg-subtle)]">{i.controls[0]}</p>
                    </div>,
                    i.benefits.join(", "),
                  ])}
                />
              </div>
              {cat.page ? (
                <div className="mt-7">
                  <CTA href={cat.page} variant="secondary">
                    {`See ${cat.title} in detail`}
                  </CTA>
                </div>
              ) : null}
            </Container>
          </Section>
        );
      })}

      <ProseSection
        eyebrow="The absence list"
        title="What FactorFox does not connect to, named on purpose."
        aside={
          <Card>
            <Eyebrow>Not integrations</Eyebrow>
            <ul className="mt-4 space-y-2 text-[0.9375rem] leading-[1.55] text-[var(--fg-muted)]">
              {NOT_CLAIMED.map((n) => (
                <li key={n} className="border-t border-[var(--line)] pt-2 first:border-t-0 first:pt-0">
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.8125rem] leading-[1.55] text-[var(--fg-subtle)]">
              This list lives in the same file as the register above, so a row cannot creep back in without
              somebody removing it here first.
            </p>
          </Card>
        }
      >
        <p>
          These products get asked about often enough that their absence deserves a sentence rather than a
          silence. None of them is connected to FactorFox today. Not partially, not through a partner, not by
          an import somebody built once for one customer and quietly stopped maintaining.
        </p>
        <p>
          Publishing that costs a conversation occasionally. It is still the better trade, and the arithmetic
          is not close. An extra logo buys a moment of comfort during a demonstration. A named absence buys
          the buyer a decision they can actually make, and it buys us the right to be believed about every
          row above it.
        </p>
        <p>
          <strong>If one of these matters to your operation, raise it during the evaluation.</strong> Some are
          ordinary integration work and we will tell you what building one takes. Others we have chosen not to
          build, and we will tell you why. Either answer is available to you before you sign, which is the
          only point at which an answer is worth anything.
        </p>
        <p>
          The same discipline applies inside the product. A check you have not bought is shown greyed with the
          vendor named, because a greyed row teaches an operator something true and a hidden feature tells
          them something false.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What buyers ask about this register" />

      <RelatedPages
        links={[
          { href: "/integrations/microsoft-teams", label: "Microsoft Teams", note: "Briefings, signals and approvals where your institution already decides." },
          { href: "/integrations/microsoft-365", label: "Microsoft 365", note: "Graph mail, Calendar, To Do, Bookings and Entra ID federation." },
          { href: "/integrations/quickbooks", label: "QuickBooks", note: "Client receivables into the intake rail, applied by a human." },
          { href: "/integrations/xero", label: "Xero", note: "The same rail for books kept in Australia, New Zealand and the United Kingdom." },
          { href: "/integrations/credit-and-risk", label: "Credit and risk", note: "Network payment behaviour, bureau rails and lien position." },
          { href: "/integrations/banking-and-payments", label: "Banking and payments", note: "NACHA, APCA, Fedwire and EDI, with release control in front." },
          { href: "/integrations/transportation", label: "Transportation", note: "FMCSA on both sides, and a refusal that is worth reading." },
          { href: "/platform/security", label: "Security and controls", note: "Tenant isolation, immutable audit, scopes and revocation." },
        ]}
      />

      <CtaBand
        title="Bring the register to your technical review."
        body="Every row here can be demonstrated against a running environment, including the ones that answer not configured. Watching a check refuse to guess is more informative than watching one succeed."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/integrations/microsoft-teams", label: "Explore Microsoft Teams integration" }}
      />
    </>
  );
}
