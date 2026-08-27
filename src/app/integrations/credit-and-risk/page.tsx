import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  ProseSection,
  FeatureGrid,
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
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Credit bureau integration for factoring",
  description:
    "Pin every credit check to the decision it informed. Payment behaviour, bureau rails and lien position, captured at run time and never quietly re fetched.",
  path: "/integrations/credit-and-risk",
  intent: "integration",
  target: "credit bureau integration for factoring",
});

const FAQS = [
  {
    q: "What does a check being pinned to a decision actually prevent?",
    a: "It prevents the most quietly corrosive failure in credit software: opening an approved file six months later and seeing today's data next to yesterday's decision. When that happens the decision looks wrong or looks lucky, and either way nobody can defend it. A pinned check means the file shows what the officer saw at the moment they approved, so the review is about the judgement rather than about the passage of time.",
  },
  {
    q: "Why show a check we have not bought instead of hiding it?",
    a: "Because a greyed row teaches and a hidden feature lies. An underwriter who sees Creditsafe greyed with the vendor named learns something true about their own file: a source exists, it is switched off, and the assessment in front of them was made without it. An underwriter who sees nothing concludes their coverage is complete. The second one is how a thin file gets treated as a full one.",
  },
  {
    q: "Does Probity network cost anything per check?",
    a: "No vendor, no contract, no per check charge. It is not a bureau relationship at all. It reads payment behaviour the FactorFox network already holds about a debtor, which is why it can answer immediately and why the answer is about how that debtor actually pays rather than about how a scoring model rates them.",
  },
  {
    q: "Does anything about our book leave the tenant when we run a network check?",
    a: "Nothing leaves your tenant. Tenant isolation is enforced at the database level rather than in application code, which is the distinction worth probing in any multi tenant platform, because isolation written in application code is one forgotten filter away from a disclosure.",
  },
  {
    q: "Do adverse credit events reach us automatically once a party is on the book?",
    a: "Not from the bureau rails, and the platform says so rather than implying otherwise. Several external sources are declared and dark, and where a monitoring answer depends on one of them the platform reports itself blind and names the missing source. What does move continuously is behaviour the platform observes itself: payment velocity by obligor, dilution movement, concentration change, credit limit utilisation and missed promises.",
  },
  {
    q: "We hold a Dun and Bradstreet contract already. What changes on day one?",
    a: "You enter your keys and the check starts answering at the moment a client is created, with the result attaching to the client file and to the underwriting run that used it. Nothing about the rail changes, because the rail was already built and already visible in the interface as a source you had not configured. That is the whole intent of publishing contract required as a status rather than as a footnote.",
  },
];

export default function CreditAndRiskPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox credit and risk integrations",
          description:
            "Network payment behaviour, commercial credit bureau rails, tax lien position and additional client risk assessment, captured at run time and bound to the underwriting run that used them.",
          path: "/integrations/credit-and-risk",
        })}
      />

      <PageHero
        trail={[
          { name: "Integrations", path: "/integrations" },
          { name: "Credit and risk", path: "/integrations/credit-and-risk" },
        ]}
        eyebrow="Credit and risk"
        title="A credit check is evidence about a moment. Treat it as anything else and it stops being evidence."
        lede={
          <>
            <p>
              Written for the credit officer and the underwriter at a factoring company or asset based lender,
              at the point where a party is created and somebody has to decide what to believe about them.
            </p>
            <p>
              Network payment behaviour, commercial credit, tax lien position and additional client assessment,
              each running the moment a party is born, each attaching to the file as dated evidence, and none
              of them ever refreshed underneath a decision that already used them.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform/continuous-underwriting", label: "See how a run is versioned" }}
        aside={<ChecksScene />}
      />

      <ProseSection
        eyebrow="The doctrine"
        title="Captured at run time. Pinned to the decision. Never re fetched."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The one line version</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A decision is defensible only if you can still see what it was made from.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Every other property of a credit integration is negotiable. This one is not, which is why it is
              enforced in the platform rather than left as a habit for a careful officer to maintain.
            </p>
          </Card>
        }
      >
        <p>
          Most credit tooling refreshes. A file is opened, the integration calls the vendor, the current answer
          is displayed, and the screen shows the party as they are now. It feels helpful. It quietly destroys
          the only thing that made the original approval reviewable, because the evidence beneath a decision has
          been replaced by evidence that arrived afterwards.
        </p>
        <p>
          <strong>FactorFox captures the answer when the check runs and keeps it.</strong> The result is stored
          as dated evidence, attached to the party and to the underwriting run that consumed it. Reopen that run
          in a year and it still shows the score, the rating, the lien position and the network behaviour exactly
          as they stood when an officer read them and put their name to a decision.
        </p>
        <p>
          <strong>New information becomes a new observation, not a correction.</strong> Risk observations are
          append only at the database level. A later check does not overwrite an earlier one, it sits beside it
          with its own date, and the difference between them is itself something the platform can show you.
        </p>
        <p>
          <strong>Continuous underwriting re runs, and versions each run immutably.</strong> Re underwriting on a
          material event is the right behaviour. Silently swapping the inputs of a completed run is not. Each run
          reports its confidence and its coverage separately, so a confident answer built on half the sources
          reads as exactly that rather than as agreement.
        </p>
        <p>
          <strong>Certification signs over the snapshot as it stood.</strong> When somebody certifies, they are
          certifying a specific set of gate results, and an audit packet built from them is sealed with a database
          trigger refusing mutation. Nothing about the record can be improved after the fact, including by us.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The sources"
            title="Five rows, three statuses, no rounding up"
            lede="Two of these need a contract you may not hold. They still appear in the interface, named, greyed, and honest about what your file is missing."
          />
          <div className="mt-11">
            <DataTable
              caption="Credit and risk sources"
              head={["Source", "Status", "What it answers", "What protects it"]}
              rows={[
                [
                  "Probity network",
                  <Status key="probity" kind="available" />,
                  "How this debtor has actually paid across the FactorFox network, answered instantly at the moment the debtor is created.",
                  "No vendor, no contract, no per check charge. Nothing leaves your tenant, and tenant isolation is enforced at the database level.",
                ],
                [
                  "Creditsafe",
                  <Status key="creditsafe" kind="contract" />,
                  "Commercial credit on debtors: company identity, score and payment rating, attached to the debtor file as evidence.",
                  "The rail is built and answers not configured until you hold a contract and keys. Results are captured at run time and never silently refreshed.",
                ],
                [
                  "Dun and Bradstreet",
                  <Status key="dnb" kind="contract" />,
                  "United States client credit at intake: business identity and credit, attached to the client file.",
                  "Same posture as every other bureau rail. No keys, no silent behaviour. Offered only where the tenant country qualifies.",
                ],
                [
                  "TaxRock",
                  <Status key="taxrock" kind="available" />,
                  "Federal and state tax lien position on a prospective or existing client, attached to the client file and to the underwriting run that used it.",
                  "One computation serves the intake drawer and the underwriting engine, so the two can never disagree. Pinned to the decision, never re fetched underneath it.",
                ],
                [
                  "Ficoso",
                  <Status key="ficoso" kind="available" />,
                  "Additional client side risk assessment at intake, for the file where one source is not enough.",
                  "Same run time capture and the same evidence binding as every other check on this page.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Creditsafe and Dun and Bradstreet require your own contract because bureau data is licensed to the
            institution that consumes it. We are not a reseller and we do not want to be one, because a
            relationship you hold directly is one nobody can interrupt on your behalf.
          </p>
        </Container>
      </Section>

      <ProblemSolution
        eyebrow="Why this exists"
        title="The check was run. Nobody can prove what it said."
        lede="Every credit file that has ever gone wrong has the same forensic shape: the decision is documented, the evidence behind it is not, and the reconstruction happens under pressure."
        rows={[
          {
            problem:
              "The bureau result lived in a PDF that was downloaded, pasted into a note and never dated, or lived in the vendor portal where it has since been updated.",
            response:
              "The result is stored as dated evidence bound to the party and to the run that used it. Reopening the run shows what the officer read, not what the vendor thinks today.",
          },
          {
            problem:
              "A debtor was approved on a bureau score while three of your own clients were already being paid slowly by that same debtor, and nobody joined those facts.",
            response:
              "Probity network reads the payment behaviour the network already holds, so the debtor's actual conduct across your portfolio is available at the moment they are created.",
          },
          {
            problem:
              "Nobody searched for a lien until the day it mattered, and then it was found by somebody else's lawyer.",
            response:
              "TaxRock lien position runs as a birth check on the client, and one computation feeds both the intake drawer and the underwriting engine so the two never tell different stories.",
          },
          {
            problem:
              "A source your institution never bought is simply absent from the interface, so every file looks fully covered.",
            response:
              "Unconfigured checks are shown, named and greyed. Coverage is reported separately from confidence, so a thin file announces itself as thin.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Probity network"
        title="The question a bureau answers slowly, answered from behaviour you are already part of"
        lede="It is not a cheaper bureau. It is a different question, asked of a different body of evidence."
        columns={3}
        items={[
          {
            title: "Behaviour, not opinion",
            body: "How a debtor has actually paid, drawn from the network plane rather than from a model's view of their filings. The two are different objects and an underwriter should have both.",
          },
          {
            title: "No per check economics",
            body: "No vendor, no contract, no charge per lookup. The commercial shape of a check changes how often it gets run, and a check that costs nothing gets run on every debtor rather than on the ones somebody worried about.",
          },
          {
            title: "One plane, one answer",
            body: "It reads the same plane the debtor credit file reads, so the number on the intake screen and the number on the credit file cannot disagree with each other.",
          },
          {
            title: "Nothing leaves",
            body: "Your book stays in your tenant. The network already knows what it knows about a debtor, which is why the answer requires no export of your data to produce.",
          },
          {
            title: "Instant at creation",
            body: "The check runs when the debtor is created rather than as a task somebody remembers later, which is the difference between a control and a habit.",
          },
          {
            title: "Evidence, like everything else",
            body: "The result is captured, dated and attached. It is not a live figure that redraws itself the next time somebody opens the screen.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What a credit officer asks about these sources" />

      <RelatedPages
        links={[
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Immutable runs, and confidence reported separately from coverage." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "The signals that move between checks, and what the platform observes itself." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Append only observations and the refusal to show an unprovable delta." },
          { href: "/platform/client-onboarding", label: "Client onboarding", note: "The checks a party is born with, in the order they run." },
          { href: "/integrations/transportation", label: "Transportation", note: "FMCSA identity, and the checks the platform refuses to assert." },
          { href: "/integrations", label: "All integrations", note: "The register, with a status column and an absence list." },
        ]}
      />

      <CtaBand
        title="Ask to see a check that is switched off."
        body="Any vendor can demonstrate a successful lookup. Ask instead to see a source you have not bought, greyed and named, and watch what the underwriting run says about its own coverage."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/integrations", label: "Review our integrations" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

function ChecksScene() {
  return (
    <figure className="m-0">
      <div className="border border-[var(--line-strong)] bg-[var(--bg-raised)]" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Debtor created &middot; Halloran Freight Systems &middot; birth checks
          </p>
          <Status kind="info" label="Coverage 4 of 5" />
        </div>

        <div className="space-y-3 p-5">
          {[
            { name: "Probity network", detail: "Paid to terms on 3 clients. Slowing since March", tone: "warn" },
            { name: "AML and sanctions", detail: "No match. Rescreened daily", tone: "ok" },
            { name: "TaxRock", detail: "No federal or state lien found", tone: "ok" },
            { name: "Ficoso", detail: "Assessment attached to the client file", tone: "ok" },
            { name: "Creditsafe", detail: "Not configured. No contract or keys held by this tenant", tone: "off" },
          ].map((r) => (
            <div key={r.name} className="border border-[var(--line)] p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className={`text-[0.9375rem] font-semibold leading-[1.35] ${r.tone === "off" ? "text-[var(--fg-subtle)]" : ""}`}>
                  {r.name}
                </p>
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
                  {r.tone === "off" ? "unconfigured" : "captured 08:14"}
                </p>
              </div>
              <p
                className="mt-1.5 text-[0.8125rem] leading-[1.5]"
                style={{
                  color:
                    r.tone === "warn"
                      ? "var(--color-warn-600)"
                      : r.tone === "ok"
                        ? "var(--color-ok-600)"
                        : "var(--fg-subtle)",
                }}
              >
                {r.detail}
              </p>
            </div>
          ))}

          <p className="text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">
            The greyed row is not hidden. The underwriting run reports coverage of four sources out of five, and
            states its confidence separately from that coverage.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of birth checks on a new debtor. The unconfigured row behaviour, the run time capture and
        the separation of coverage from confidence are the platform&rsquo;s own. Names and results come from a
        seeded demonstration book.
      </figcaption>
    </figure>
  );
}
