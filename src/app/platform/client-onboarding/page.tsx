import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureGrid,
  StepList,
  ProseSection,
  DataTable,
  RelatedPages,
  CtaBand,
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
  title: "Client onboarding for factoring companies",
  description:
    "Move a client from intake to first funding through gates that cannot be made advisory, and see what your tenant has configured and what it has not.",
  path: "/platform/client-onboarding",
  intent: "product",
  target: "client onboarding for factoring companies",
});

export default function ClientOnboardingPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox client onboarding",
          description:
            "Onboarding for factoring companies: application intake, checks that run when a party is created, gate policy, four eyes approval and first funding.",
          path: "/platform/client-onboarding",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Client onboarding", path: "/platform/client-onboarding" },
        ]}
        eyebrow="Client onboarding"
        title="The distance between a signed agreement and a first funding is where deals die."
        lede={
          <>
            <p>
              Written for the operations lead who owns the handover from sales to funding. You have an
              interested prospect, an underwriter who wants three more things, a legal position that is not
              perfected yet, and a client who was told they would be funded this week.
            </p>
            <p>
              FactorFox holds that whole stretch as one record, with every check dated and attached to the
              party it was run against, and with the gates that must pass before money moves stated in
              advance rather than discovered on the day.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Walk an onboarding end to end" }}
        secondaryCta={{ href: "/platform/continuous-underwriting", label: "See continuous underwriting" }}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="Onboarding is not slow because people are slow. It is slow because nobody can see the whole of it."
        lede="Ask four people in a factoring company what is outstanding on a new client and you will get four confident and different answers, none of which is wrong."
        rows={[
          {
            problem:
              "The application is in an inbox, the credit work is in a spreadsheet, the documents are in a share drive, and the status is whatever the last person to speak to the client believes.",
            response:
              "One party record from the first contact. Application, documents, checks, gates and approvals hang off it, and the status is computed from what has actually happened rather than reported by whoever is asked.",
          },
          {
            problem:
              "A credit check was run in a vendor portal, saved as a PDF, and by the time the deal is approved nobody can say which version of the file the decision was made on.",
            response:
              "Checks run against the party and their results are captured at run time, attached to the party and pinned to the underwriting run that used them. They are never refreshed underneath a completed decision.",
          },
          {
            problem:
              "A feature that is not configured for your tenant is simply invisible, so the operator does not know a check exists, let alone that it did not run.",
            response:
              "An unconfigured check is shown and named as unconfigured. A greyed row teaches an operator what is available. A hidden feature quietly tells them a check happened when it did not.",
          },
          {
            problem:
              "The first funding is assembled by one person under time pressure, and whether every condition was met is a matter of trust.",
            response:
              "Gates are explicit, each one states what it proves, and the ones that protect money can never be made advisory. Four eyes applies to the release, and the audit record names both people.",
          },
        ]}
      />

      <StepList
        eyebrow="Intake to first funding"
        title="Seven stages, each one leaving evidence behind it"
        lede="This is the sequence the platform runs. Which optional checks appear inside it depends on what your tenant holds contracts for, and the platform tells the operator which those are."
        steps={[
          {
            label: "Intake",
            title: "The application becomes a party, not a document",
            body: "Legal name, structure, ownership, the receivable it wants to sell, the debtors it sells to. Entered once, by the client through the portal or by your team, and from that moment it is a record with a history rather than a form in a queue.",
          },
          {
            label: "Birth checks",
            title: "The checks a party is born with run immediately",
            body: "Creation is the trigger, not a later manual step. Network payment behaviour on the debtors, lien position on the client, sanctions and AML screening on the party, and registration identity where the industry calls for it. Results attach to the party as dated evidence.",
          },
          {
            label: "Documents",
            title: "What arrives is preserved and classified",
            body: "Financials, tax returns, accounts receivable and payable agings, articles, insurance certificates and the executed agreement. Originals are kept as originals. Anything extracted from them is marked as a derivative of the document it came from.",
          },
          {
            label: "Ledger",
            title: "The client's own books, where they run them",
            body: "QuickBooks Online and Xero connect on the client's consent, read only, and open receivables arrive structured with external identifiers that make a second sync idempotent. FactorFox never writes to a client ledger. The sync proposes through the intake rail and a person applies it.",
          },
          {
            label: "Underwrite",
            title: "A versioned decision with confidence and coverage stated separately",
            body: "The run records what it saw, what it could not see, and how confident it is in what it did see. Coverage and confidence are reported as two different things, because a confident answer built on half the data is a different object from a cautious one built on all of it.",
          },
          {
            label: "Perfect",
            title: "The legal position, watched rather than remembered",
            body: "Registered security interests, notices of assignment and the acknowledgements that come back. In Australia, PPSR search, registration and verification statements with expiry watched. Priority is a position that decays, so it is monitored rather than filed.",
          },
          {
            label: "Fund",
            title: "First schedule, first release, two names on it",
            body: "The first schedule faces the same verification every later one will. The release faces the gate set. Four eyes applies. Nothing about the first funding is a special path, because special paths are where the exceptions that hurt you get made.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The checks a party is born with"
            title="Run at creation, attached as evidence, never quietly refreshed"
            lede="Which of these are live in your tenant depends on the contracts you hold. The platform states the status of each one on screen instead of hiding the ones you have not bought."
          />
          <div className="mt-11 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Probity network",
                status: "available" as const,
                body: "Debtor payment behaviour drawn from the FactorFox network itself. No vendor, no contract, no per check charge, and nothing about your book leaves your tenant.",
              },
              {
                name: "TaxRock",
                status: "available" as const,
                body: "Federal and state tax lien position on the client. One computation serves both the intake drawer and the underwriting engine, so the two can never disagree.",
              },
              {
                name: "AML and sanctions",
                status: "available" as const,
                body: "Screening at onboarding and daily rescreening afterwards. Results are versioned evidence and are never overwritten by a later run.",
              },
              {
                name: "Ficoso",
                status: "available" as const,
                body: "Additional client side risk assessment at intake, for the files where one source is not enough.",
              },
              {
                name: "FMCSA",
                status: "available" as const,
                body: "Carrier and broker registration identity, on the client side and the debtor side. In transportation both sides need looking at.",
              },
              {
                name: "PPSR",
                status: "available" as const,
                body: "Australian registered security interests: search, registration, verification statements, and expiry watched rather than diarised.",
              },
              {
                name: "Creditsafe",
                status: "contract" as const,
                body: "Commercial credit on debtors at the moment a debtor is created. The rail is built and answers not configured until you hold a contract and keys.",
              },
              {
                name: "Dun and Bradstreet",
                status: "contract" as const,
                body: "United States client credit at intake, offered where the tenant country qualifies. Same posture: no keys, no silent behaviour.",
              },
              {
                name: "Bank feed",
                status: "planned" as const,
                body: "Not built. Declared in the underwriting engine as a source that is not wired, which is why covenants depending on controlled collection percentage say they are awaiting a live source.",
              },
            ].map((c) => (
              <div key={c.name} className="bg-[var(--bg-raised)] p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[1rem]">{c.name}</h3>
                  <Status kind={c.status} />
                </div>
                <p className="mt-2.5 text-[0.875rem] leading-[1.6] text-[var(--fg-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            On the transportation checks, note what is deliberately absent. Operating authority currency,
            insurance currency and safety scores are captured, never asserted. The gate that would assert them
            is explicitly forbidden from guessing and says so on screen, because a system that implies it
            verified a carrier&rsquo;s insurance when it did not is worse than one that never looked.
          </p>
        </Container>
      </Section>

      <ProseSection
        eyebrow="Honest configuration"
        title="The operator is told what did not happen, by name."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">A greyed row teaches</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              An unconfigured check appears in the drawer with its status and the exact configuration that is
              missing.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              The operator learns that the check exists, learns that it did not run, and can say so out loud
              in a credit meeting. A hidden feature removes all three of those, and replaces them with an
              assumption.
            </p>
          </Card>
        }
      >
        <p>
          Most software hides what a customer has not paid for. It is a reasonable commercial instinct and it
          is a bad idea in a lending platform, because the absence of a check is itself a material fact about
          a decision. An underwriter who believes a lien search ran, when the lien rail has no keys in your
          tenant, is making a decision on evidence that does not exist.
        </p>
        <p>
          <strong>So every surface degrades honestly.</strong> A check without configuration says it is not
          configured and names what is absent. An underwriting run reports coverage separately from
          confidence, so a file assessed without a bureau result cannot pass as a fully evidenced one. A
          covenant that needs a source FactorFox does not hold says it is awaiting a live source and names the
          source, rather than reporting zero and looking compliant.
        </p>
        <p>
          <strong>This has a second effect that customers tend to notice later.</strong> It makes the cost of
          a contract visible in the place where it matters. When a credit officer sees the same greyed row
          three times in a week on files they are uncomfortable with, that is a much better argument for
          buying a bureau feed than anything a salesperson could construct.
        </p>
      </ProseSection>

      <Section>
        <Container>
          <SectionHead
            eyebrow="Gates"
            title="What must be true before money moves"
            lede="A gate states what it proves and whether it can ever be reduced to advice. The ones that protect money cannot."
          />
          <div className="mt-11">
            <DataTable
              caption="First funding gates"
              head={["Gate", "What it proves", "Can it be advisory"]}
              rows={[
                ["Agreement executed", "A signed facility exists, with its terms loaded and its clauses available to be quoted as evidence later.", "No"],
                ["Party screening clear", "AML and sanctions screening returned and was reviewed. Daily rescreening continues afterwards.", "No"],
                ["Legal position", "The security interest is registered and, where required, notice of assignment has gone out and been acknowledged.", "No"],
                ["Bank account established", "The account money will be sent to was set up under the human only hold, verified out of band and released by a named person.", "No"],
                ["Debtor approved", "Each debtor on the first schedule has a credit decision and a limit, with the evidence that produced it attached.", "No"],
                ["Schedule verified", "The invoices on the first schedule passed document verification, duplicate checks and whatever verification your policy requires.", "No"],
                ["Underwriting current", "An underwriting run exists, is current against every material event since, and states its coverage as well as its confidence.", "No"],
                ["Documents complete", "The document checklist for this client class is satisfied, with each item present as an original rather than as a note saying it was seen.", "Yes, with a named exception and a reason"],
                ["Ledger connected", "The client's accounting system is linked, where your policy asks for it.", "Yes, with a named exception and a reason"],
                ["Four eyes on release", "Two people. The requester cannot approve their own release, on any surface, including from a phone.", "No"],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Where a gate permits an exception, the exception is a record: who granted it, what reason they
            wrote, what it covered, and when it expires. In solo mode an AI counter review is logged where the
            second officer&rsquo;s name would sit, and it refuses outright when any underlying fact has changed
            since the request was raised.
          </p>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="After the first funding"
        title="Onboarding does not end. It becomes monitoring."
        lede="The reason to do intake this carefully is that every artefact it produces keeps working afterwards."
        items={[
          {
            title: "The underwriting run keeps running",
            body: "Re underwriting happens on every material event rather than on an annual review date, and each run is versioned immutably beside the last one.",
          },
          {
            title: "Screening continues daily",
            body: "A party that was clear at onboarding and never rechecked is a compliance position that expires quietly. Rescreening is daily and the results are versioned evidence.",
          },
          {
            title: "Priority is watched",
            body: "Registrations expire. Watching the expiry is the difference between holding a position and believing you hold one.",
          },
          {
            title: "The debtor set grows",
            body: "Every new debtor gets the checks a party is born with, on the day it is created, not at the next review.",
          },
          {
            title: "The covenant pack starts collecting",
            body: "From the first month, against the default pack modelled on how bank rediscount facilities are actually written. Every surface states that these are FactorFox covenants and not anyone's contract.",
          },
          {
            title: "The client's first ninety days are visible",
            body: "Submission rhythm, dilution, debtor concentration and payment velocity all establish the baselines that every later deviation is measured against.",
          },
        ]}
      />

      <RelatedPages
        links={[
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "What happens to the intake decision after intake." },
          { href: "/integrations/credit-and-risk", label: "Credit and risk integrations", note: "Every check listed above, with its status and what it needs." },
          { href: "/platform/treasury", label: "Treasury", note: "The bank account hold and the first release." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "What happens to the documents an application brings with it." },
          { href: "/solutions/factoring", label: "Invoice factoring", note: "The whole operating model this sits inside." },
          { href: "/platform/security", label: "Security and controls", note: "Four eyes, counter review and the gates that cannot be softened." },
        ]}
      />

      <CtaBand
        title="Bring the file that took six weeks."
        body="We will lay it out as FactorFox would have held it, and show you which of those six weeks was work and which was waiting for somebody to find out what was outstanding."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/migrate", label: "See how migration works" }}
      />
    </>
  );
}
