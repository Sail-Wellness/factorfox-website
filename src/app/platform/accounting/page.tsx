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
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Factoring accounting software with proposals",
  description:
    "Apply cash from mail and EDI remittance as proposals a person accepts, accrue fees daily, move reserves, and seal audit packets nobody can edit later.",
  path: "/platform/accounting",
  intent: "product",
  target: "factoring accounting software",
});

export default function AccountingPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox accounting",
          description:
            "Cash application, remittance ingestion, reserve movement, fee accrual and sealed audit packets for factoring and asset based lending operations.",
          path: "/platform/accounting",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Accounting", path: "/platform/accounting" },
        ]}
        eyebrow="Accounting"
        title="Nothing posts to your book because a machine was fairly sure."
        lede={
          <>
            <p>
              Written for the controller and the cash application clerk. Between a payment arriving and a
              client&rsquo;s balance being right sit a remittance advice in five formats, a short pay nobody
              explained, a reserve that should move, a fee that accrued yesterday, and an examiner who will
              ask about all of it in March.
            </p>
            <p>
              FactorFox proposes. A person applies. The distinction sounds procedural until the first time a
              confident automatic posting takes a week to unwind.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "See a day of cash applied" }}
        secondaryCta={{ href: "/platform/collections", label: "See collections" }}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="Cash application is not data entry. It is a series of small judgements at speed."
        lede="A payment for 41,318.62 against four invoices, one of which was short paid for a reason that is on a stub somebody scanned, is a decision. Software that treats it as a match is guessing on your behalf."
        rows={[
          {
            problem:
              "A remittance arrives as a PDF in a shared mailbox, gets printed, keyed by hand, and the original ends up somewhere nobody can find in eight months.",
            response:
              "Inbound mail is classified, its attachments preserved as evidence, and a cash application proposal is raised with the original message attached to it.",
          },
          {
            problem:
              "Automatic matching posts a payment against the wrong invoice because the amounts happened to agree, and the error surfaces during a collections call.",
            response:
              "A proposal states what it matched, what it could not match, and how much is left over. A person accepts it, and their name goes on the posting.",
          },
          {
            problem:
              "A short pay is applied as a write off because it was small, and the pattern of small write offs against one debtor is never seen as a pattern.",
            response:
              "A short pay raises a deduction rather than disappearing. It reduces the eligible pool, opens against the collections case, and joins that obligor's dilution history.",
          },
          {
            problem:
              "Month end is a week of reconstruction, because the evidence for what was done lives in mailboxes, spreadsheets and memory.",
            response:
              "Audit packets are sealed at the point they are produced and a database trigger refuses mutation. Reconstruction is not required, because nothing was ever unrecorded.",
          },
        ]}
      />

      <StepList
        eyebrow="Cash application"
        title="From a payment landing to a balance being right"
        lede="Six stages. The interesting ones are the two where the platform declines to decide."
        steps={[
          {
            label: "Arrive",
            title: "Remittance from wherever it comes",
            body: "A shared mailbox through Microsoft Graph, an EDI 820 from a trading partner, a lockbox file, a portal upload or a scanned stub. Every door lands in the same rail and the same message is never ingested twice.",
          },
          {
            label: "Read",
            title: "Structure without losing the original",
            body: "Remittance detail is extracted under a strict schema and revalidated deterministically before it is trusted. The original stays exactly as it arrived, and the extraction is marked as a derivative of it.",
          },
          {
            label: "Propose",
            title: "A match, with its uncertainty stated",
            body: "Invoices identified, amounts allocated, remainder named. Where the platform is not sure, it says which part it is not sure about instead of choosing the most probable answer and moving on.",
          },
          {
            label: "Apply",
            title: "A person accepts, adjusts or refuses",
            body: "The posting carries their name. This is the step nobody else in this category wants to keep, and it is the one that means your ledger is never a place where machine guesses accumulate.",
          },
          {
            label: "Resolve",
            title: "What did not match becomes work, not a suspense balance",
            body: "Short pays become deductions against the collections case. Unidentified cash sits as unapplied, reduces availability rather than floating outside it, and appears on the worklist rather than in a quarterly clean up.",
          },
          {
            label: "Settle",
            title: "Fees, reserves and the client's statement",
            body: "Accrued fees are drawn, reserve movements are recorded with their own authority, and the client sees a statement that agrees with your ledger because it is generated from it.",
          },
        ]}
      />

      <ProseSection
        eyebrow="Bank change content"
        title="One class of message is never applied, whatever it says."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Classified, not processed</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Mail content that looks like a bank account change is classified as requiring verification
              rather than applied.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              It is the single most expensive email a factoring company receives, and the accounting inbox is
              exactly where it is addressed to arrive.
            </p>
          </Card>
        }
      >
        <p>
          The cash application mailbox is the softest target in a factoring company. It receives money
          information from strangers all day, it is worked at speed, and the people working it are rewarded
          for clearing it. A well written note from a debtor&rsquo;s accounts payable department advising new
          remittance details fits into that flow perfectly, which is precisely why it works.
        </p>
        <p>
          So that class of content is pulled out of the flow entirely. It is classified as requiring
          verification, it never reaches a party record as an edit, and the change it requests sits under a
          hold that only a named human can release. Automated approval is refused outright rather than
          disabled by default, because a setting that can be switched on is a setting that eventually gets
          switched on during a busy week.
        </p>
        <p>
          The same message becomes evidence rather than an instruction. It stays attached to the party, dated,
          with its sender, and it is available in the fraud case if one is opened.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="Ledger movement"
        title="The entries this business actually runs on"
        lede="General ledger packages describe none of these, which is why factoring companies end up running two systems and reconciling them by hand."
        items={[
          {
            title: "Advance and reserve",
            body: "A funding splits into what the client receives now and what is held back. Both sides are recorded against the schedule and the client, and the reserve balance is a position you can explain invoice by invoice.",
          },
          {
            title: "Fee accrual",
            body: "Discount and factoring fees accrue on the terms of the facility, on the days they are actually earned, rather than being computed once at settlement from a formula in someone's head.",
          },
          {
            title: "Minimums and misc fees",
            body: "Monthly minimums, wire fees, ACH fees, verification and audit charges, applied under the facility terms and visible to the client on the statement that shows them.",
          },
          {
            title: "Reserve release",
            body: "Moved when the conditions for moving it are met, recorded as a release with its own authority. Never as an adjustment that appears without an actor beside it.",
          },
          {
            title: "Chargebacks and repurchases",
            body: "An invoice that comes back does so as a recorded event against the schedule, the client and the obligor's history, not as a manual credit that severs the link to what caused it.",
          },
          {
            title: "Unapplied and on account",
            body: "Held visibly, reducing availability rather than sitting outside it, and appearing as work rather than as a balance that grows quietly between audits.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Audit packets"
            title="The examiner window"
            lede="A field exam, a bank review or an annual audit asks the same underlying question in different words: show me what you did, when you did it, and what you knew at the time."
          />
          <div className="mt-11">
            <DataTable
              caption="What a sealed audit packet contains and why"
              head={["Contents", "Why it is in there"]}
              rows={[
                [
                  "The figures, as of a fixed moment",
                  "A packet without an as of stamp is a report. With one, it is a record, and two packets from different dates can be compared honestly.",
                ],
                [
                  "Evidence references into records",
                  "Every figure points at the invoices, cash, credits, reserves and documents that produced it. The packet is a route into the book rather than a summary of it.",
                ],
                [
                  "The policy version in force",
                  "Eligibility rules, advance rates and reserve policy as they stood, so a later change cannot make a past decision look wrong or look right.",
                ],
                [
                  "Actors and approvals",
                  "Who requested, who approved, who counter reviewed, and from which surface. Where an exception was granted, the reason they typed and when it expires.",
                ],
                [
                  "What was not known",
                  "Checks that were unconfigured, sources awaiting a live feed, and coverage stated separately from confidence. An examiner trusts a system that reports its own blind spots far more than one that never has any.",
                ],
                [
                  "A seal",
                  "The packet cannot be mutated. A database trigger refuses the write. A correction is a restatement that stands beside the original and names what changed.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Risk observations are append only at the database level, and the platform refuses to show a delta
            it cannot prove. Where there is no comparable prior observation it offers to take a first
            observation rather than reconstructing a plausible yesterday. That refusal is what makes the rest
            of the packet worth reading.
          </p>
        </Container>
      </Section>

      <ProseSection eyebrow="Two systems, one book" title="Where FactorFox stops and your general ledger starts.">
        <p>
          FactorFox holds the operating book: schedules, advances, reserves, fees, cash, deductions,
          chargebacks and client statements, at the level of the individual invoice and the individual
          obligor. That is the layer a general ledger package was never designed to hold, and the layer where
          every question a factoring company actually gets asked is answered.
        </p>
        <p>
          Your general ledger keeps doing what it does. Client receivable ledgers synchronised from QuickBooks
          Online or Xero arrive read only, on the client&rsquo;s consent, and FactorFox never writes into a client
          ledger. Synced invoices still face every ingestion gate, because a connector is a submission channel
          and not a side door onto your book.
        </p>
        <p>
          <strong>The practical consequence is what happens at month end.</strong> The reconciliation most
          operations run in a spreadsheet exists because the operating detail and the accounting summary live
          in two places that were never reconciled continuously. Holding the detail with its evidence, and
          posting only what a person accepted, removes most of the differences before anyone has to find them.
        </p>
        <p>
          Any remaining ones have names attached. A difference you can attribute is an afternoon. A difference
          you cannot is the week that everybody in this industry has had at least once.
        </p>
      </ProseSection>

      <RelatedPages
        links={[
          { href: "/platform/collections", label: "Collections", note: "Where short pays and deductions become work with a name on them." },
          { href: "/platform/treasury", label: "Treasury", note: "Release control, payment files and the bank account hold." },
          { href: "/integrations/banking-and-payments", label: "Banking and payments", note: "EDI 820 remittance and the rails that carry cash." },
          { href: "/integrations/quickbooks", label: "QuickBooks", note: "Client ledgers in, read only, through the same gates." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "How unapplied cash and deductions move availability." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Why every posting can be traced to what justified it." },
        ]}
      />

      <CtaBand
        title="Bring us the payment nobody could apply."
        body="The one with four invoices, two short pays and a stub in an email thread. We will show you the proposal FactorFox raises and exactly which parts it refuses to decide for you."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/migrate/factorsoft", label: "Moving from FactorSoft" }}
      />
    </>
  );
}
