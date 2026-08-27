import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  ProseSection,
  StepList,
  FeatureGrid,
  FaqBlock,
  RelatedPages,
  CtaBand,
  DataTable,
  Section,
  Container,
  SectionHead,
  Card,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Invoice factoring software for funding companies",
  description:
    "Run schedules, verification, advance and reserve, chargebacks and notice of assignment, with recourse, non recourse and non notification on one book.",
  path: "/solutions/factoring",
  intent: "category",
  target: "invoice factoring software",
});

const FAQS = [
  {
    q: "Can one book carry recourse and non recourse clients at the same time?",
    a: "Yes, and the difference is carried at the level where it actually matters, which is the individual purchase rather than the client record. Recourse terms decide whether an aged invoice becomes a chargeback against the client or a credit loss against your reserve for credit losses, and the platform holds the approved credit limit, the covered amount and the loss position separately so a partially covered debtor does not silently look fully covered. A client can also be recourse on most debtors and non recourse on two, which is how these deals are usually written and rarely how systems model them.",
  },
  {
    q: "How is non notification handled without letting the discipline slip?",
    a: "Non notification is treated as a property of the relationship that constrains every outbound action, not as a setting somebody remembers. Verification methods that would reveal the assignment are unavailable on those accounts rather than merely discouraged, and the delivery wall applies to mail, statements and collections contact alike. The commercial risk in non notification is not the funding decision. It is a well meaning collector sending a debtor a statement on your letterhead.",
  },
  {
    q: "What happens when a debtor pays our client instead of us?",
    a: "It is treated as a monitored condition rather than a bookkeeping accident. The unremitted balance is tracked against the client, the aging of the misdirection is visible, and repeat misdirection from the same debtor or the same client raises a signal in its own right, because the second occurrence means something different from the first. The invoice does not quietly sit as open receivable while the money is somewhere else, and the exposure appears in the responsible officer's brief while there is still a conversation to have.",
  },
  {
    q: "How much of verification can actually be automated?",
    a: "The gathering, the matching and the exception detection. Not the judgement. Documents are extracted under a strict schema and revalidated in ordinary deterministic code before anything touches your book, purchase orders and proofs of delivery are matched against the invoice, and duplicates and near duplicates are detected inside a client and across the whole portfolio. What reaches an officer is the set that failed a check, with the reason and the evidence attached. A verification run captures its evidence at the moment it runs and is never re fetched later, so what you certified is what you saw.",
  },
  {
    q: "Does the platform decide whether we buy the schedule?",
    a: "No. It decides what you cannot buy without a named person saying so. That asymmetry is deliberate: the machine may stop money on its own authority, and only a human may let it through. Certain gates can never be made advisory, four eyes applies by default, and in solo mode an AI counter review is logged where the second officer's name would sit and refuses outright if any underlying fact has changed since the request was raised.",
  },
  {
    q: "We factor in more than one currency and more than one country. Does that break anything?",
    a: "It is the ordinary case rather than an edge case. FactorFox has customers across North America, Latin America, Europe, Australia and South Africa, so a book that funds in more than one currency, uses more than one vocabulary for the same instrument and reports to more than one lender is what the model was built against. The terminology on screen follows the market you operate in.",
  },
];

export default function FactoringPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox invoice factoring software",
          description:
            "Operating and intelligence platform for factoring companies. Schedule purchase, verification, advance and reserve accounting, chargebacks, misdirected payment tracking and notice of assignment, across recourse, non recourse and non notification books.",
          path: "/solutions/factoring",
        })}
      />

      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Factoring", path: "/solutions/factoring" },
        ]}
        eyebrow="Invoice factoring"
        title="Factoring software for the factor, not for the business selling the invoice."
        lede={
          <>
            <p>
              The qualification comes first, because this search carries two audiences and only one of
              them is ours. FactorFox is the platform a factoring company runs its own book on. If you are
              a manufacturer, a carrier or a staffing firm looking to sell your invoices, the company you
              actually want is probably one of our customers.
            </p>
            <p>
              Everything below is written in purchase side vocabulary: schedules, verification, advance
              and reserve, chargebacks, notice of assignment, and the payment that landed in your
              client&rsquo;s account instead of yours.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/migrate/factorsoft", label: "Moving off FactorSoft" }}
        aside={<ScheduleScene />}
      />

      <ProblemSolution
        eyebrow="Where a book leaks"
        title="Nobody loses money on the invoices they looked at."
        lede="Losses in factoring concentrate in the things that happen after the purchase, at the moment the operation has stopped paying attention to that particular file."
        rows={[
          {
            problem:
              "Verification is sampled by whoever has time, and the sample is drawn from the invoices that were easy to verify.",
            response:
              "Verification is driven by exposure, deviation and debtor behaviour rather than convenience, and every run stores its evidence at the moment it ran.",
          },
          {
            problem:
              "The same debtor sits under three clients, under three spellings, and no single screen has ever added them up.",
            response:
              "Concentration is aggregated under one debtor name across every client that sells to it, which is where the number stops being comfortable.",
          },
          {
            problem:
              "A remittance arrives at the client, gets promised back, and quietly becomes a receivable nobody is chasing because the invoice still reads open.",
            response:
              "Misdirected payment is its own tracked condition with its own aging, and a second occurrence from the same party raises a signal on its own.",
          },
          {
            problem:
              "Credit notes, short pays and allowances are absorbed into cash application, and dilution is only discovered when the trailing rate is calculated at month end.",
            response:
              "Dilution movement is measured continuously against the client's own history, so a deteriorating client is a finding in the brief rather than a surprise in the pack.",
          },
          {
            problem:
              "A bank account change arrives by email during a busy week and gets actioned by a person trying to be helpful.",
            response:
              "Bank account changes sit under a human only hold. The machine may stop the money. It may never release it.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The three structures"
        title="Recourse, non recourse and non notification are not three products. They are three sets of constraints on one book."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The non notification trap</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              On a non notification account the funding decision is rarely what goes wrong. What goes
              wrong is an outbound action: a verification call that names you, a statement on your
              letterhead, a dunning letter from a collector who was covering for somebody on leave.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              So the constraint lives underneath the surfaces rather than inside a policy document.
              Methods that would reveal the assignment are unavailable on those accounts, and the same
              delivery wall that keeps a test message away from a real debtor keeps a helpful email away
              from one who does not know you exist.
            </p>
          </Card>
        }
      >
        <p>
          Most factoring companies run all three, often for the same client. A system that models them as
          separate product lines forces the operation to remember which rules are in play, and people
          remember correctly right up until the week they are busy.
        </p>
        <p>
          <strong>Recourse</strong> decides what an aged invoice becomes. When the debtor does not pay
          inside the recourse period, the exposure moves back to the client as a chargeback, and the
          question that matters operationally is whether the client&rsquo;s availability can absorb it.
          FactorFox computes that before the chargeback is raised, so a chargeback that would push a client
          into a negative position is visible as a decision rather than discovered as an overadvance.
        </p>
        <p>
          <strong>Non recourse</strong> decides who carries the credit loss, and it is almost never total.
          Coverage is limited to an approved amount against an approved debtor, and it lapses when the
          conditions of approval lapse. The platform holds the approved limit, the covered portion and the
          uncovered portion separately, because a partially covered debtor that displays as covered is how
          a credit committee gets surprised by its own book.
        </p>
        <p>
          <strong>Non notification</strong> decides what the debtor is allowed to learn. It constrains
          verification method, correspondence, statements and collections contact simultaneously, which is
          why it belongs in the platform and not in a training document.
        </p>
      </ProseSection>

      <StepList
        eyebrow="The purchase cycle"
        title="From a schedule arriving to a reserve released."
        lede="The same sequence every factoring company runs. What differs is how much of it a person has to hold in their head."
        steps={[
          {
            label: "Intake",
            title: "The schedule arrives through whichever door the client prefers",
            body: "Email, portal or SFTP, all held to one evidence standard. Documents are extracted under a strict schema and revalidated in ordinary code before anything reaches your book. A response that does not conform is rejected rather than repaired, because a repaired extraction is a fabricated document.",
          },
          {
            label: "Screening",
            title: "The schedule is read against the client's own history, not against a general rule",
            body: "Invoice size deviation is measured against that client's median rather than a portfolio average. Unusual submission timing, duplicates and near duplicates within the client and across the portfolio, and debtors appearing for the first time are all surfaced before the purchase decision rather than after the funding.",
          },
          {
            label: "Verification",
            title: "Effort goes where the exposure is",
            body: "Purchase orders, proofs of delivery, signed acknowledgements and third party confirmations are gathered and matched against the invoice. Verification runs capture their evidence at run time and are never re fetched, so a certification signs over the position exactly as it stood. Non notification accounts are constrained to methods that do not reveal the assignment.",
          },
          {
            label: "Purchase",
            title: "Gates run, and some of them cannot be argued with",
            body: "Credit limit utilisation, concentration under the aggregated debtor name, eligibility, advance rate by class and facility availability all apply. The machine may hold a purchase on its own authority. Releasing a held purchase requires a named person, four eyes by default, and the reason is recorded in the actor's own words.",
          },
          {
            label: "Funding",
            title: "Advance released, reserve established, fees accrued",
            body: "The payment file is generated for the rail your bank accepts, release control sits in front of it, and the reserve is established at the same moment rather than reconciled to later. Availability and days to zero are recomputed as the release lands, so the next funding window is decided against a current position.",
          },
          {
            label: "Settlement",
            title: "Cash applied, reserve released, or the chargeback raised",
            body: "Remittances are proposed against invoices with the original document preserved as evidence and never posted silently. Short pays and credit notes are attributed to dilution rather than absorbed. When an invoice ages past its recourse period, the chargeback is raised with its effect on the client's availability computed first.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The money mechanics"
            title="Six balances that have to agree, on every client, every day."
            lede="Most disputes with a client are not about whether you funded them. They are about what happened to the difference."
          />
          <div className="mt-11">
            <DataTable
              caption="Factoring balances and how FactorFox holds them"
              head={["Balance", "What it is", "How it is held"]}
              rows={[
                [
                  "Advance",
                  "The funded portion of a purchased invoice at the agreed rate for its collateral class",
                  "Computed at purchase against the current advance rate and the facility position, not against a rate stored on a client record and last reviewed a year ago",
                ],
                [
                  "Reserve",
                  "The unfunded remainder held back until the debtor pays and the recourse period runs",
                  "Established at purchase, moved by cash application, dilution and chargeback, and openable to the entries that moved it",
                ],
                [
                  "Fees and accrual",
                  "Discount, service fees, wire and processing charges, accruing across period boundaries",
                  "Accrued continuously and carried into close, so period end is a review rather than a reconstruction",
                ],
                [
                  "Chargeback",
                  "An aged or disputed invoice returned to the client's account",
                  "Raised with its availability effect computed first, so the operation sees the overadvance it would create before it creates it",
                ],
                [
                  "Dilution",
                  "Credit notes, short pays, returns and allowances that reduce what the receivable was worth",
                  "Attributed at the invoice and measured as a trailing rate against the client's own history, feeding both the advance rate argument and covenant tests",
                ],
                [
                  "Misdirected payment",
                  "Money the debtor paid to your client instead of to you",
                  "Its own condition with its own aging, tracked as an unremitted balance against the client, and escalating on repetition rather than on size alone",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Every figure on these surfaces opens onto the records that produced it. The platform refuses to
            show a movement it cannot prove, and where there is no prior observation to compare against it
            offers to take a first observation rather than reconstructing a yesterday that never existed.
          </p>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="The legal furniture"
        title="The paperwork that decides who owns the receivable."
        lede="None of this is exciting until the week it is the only thing that matters."
        items={[
          {
            title: "Notice of assignment",
            body: "Held as a fact about the debtor relationship with its date, its delivery evidence and its acknowledgement where you have one. An unacknowledged notice on a debtor you are funding heavily is a finding, not a filing cabinet problem.",
          },
          {
            title: "Lien position",
            body: "Checked at the moment a party is created rather than at the moment somebody remembers, so a competing interest is a question before the first purchase rather than a discovery after the third.",
          },
          {
            title: "Client agreements",
            body: "Terms that drive behaviour, including advance rates by class, recourse periods, fee structures and reserve conditions, recorded so that the surface enforcing them can quote the clause it is enforcing.",
          },
          {
            title: "Verification evidence",
            body: "What was checked, by whom, by what method, and what came back, captured at run time. A certification signs over the gate snapshot as it stood, not over a fresh look taken later.",
          },
          {
            title: "Audit packets",
            body: "Sealed for the period they describe, with a database trigger refusing mutation. When your bank, your auditor or your buyer asks what you knew and when, the packet is the answer.",
          },
          {
            title: "Cross client debtor view",
            body: "One debtor, every client selling to it, one exposure figure. The number that changes a credit committee's mind is almost never visible from a single client file.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What a factoring principal asks first" />

      <RelatedPages
        links={[
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Re underwriting on every material event, versioned and immutable." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Extraction, matching, verification and near duplicate detection." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Payment velocity, dilution movement and aggregated debtor concentration." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Behavioural combinations, and the bank change nobody may release alone." },
          { href: "/platform/collections", label: "Collections", note: "Prioritised by exposure and promise history, constrained by notification status." },
          { href: "/solutions/transportation", label: "Freight factoring", note: "Where the debtor is a broker and the paperwork is a rate confirmation." },
          { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "What a migration actually involves, in order." },
          { href: "/platform/pricing", label: "Pricing", note: "How the platform is charged for and what sits inside it." },
        ]}
      />

      <CtaBand
        title="Bring us a schedule you argued about."
        body="We will run it through intake, screening, verification and the purchase gates against a demonstration book, and show you the exact point where the platform stops and asks for a name."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every funding structure" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

const LINES: { invoice: string; debtor: string; amount: string; state: string; kind: "available" | "attention" | "critical" | "info" }[] = [
  { invoice: "INV-40211", debtor: "Northbay Distribution", amount: "$84,300", state: "Verified, proof of delivery matched", kind: "available" },
  { invoice: "INV-40212", debtor: "Northbay Distribution", amount: "$61,750", state: "Verified, purchase order matched", kind: "available" },
  { invoice: "INV-40213", debtor: "Cordell Industrial", amount: "$147,900", state: "Held. 4.1x this client's median invoice", kind: "attention" },
  { invoice: "INV-40214", debtor: "Cordell Industrial", amount: "$12,400", state: "Near duplicate of INV-40188, another client", kind: "critical" },
];

function ScheduleScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
              Schedule SCH-2214 &middot; Meridian Coatings &middot; recourse
            </p>
            <p className="mt-0.5 text-[0.875rem] font-semibold">
              4 invoices <span className="font-normal text-[var(--fg-muted)]">&middot; $306,350 submitted</span>
            </p>
          </div>
          <Status kind="attention" label="2 held" />
        </div>

        <ul className="divide-y divide-[var(--line)]">
          {LINES.map((l) => (
            <li key={l.invoice} className="px-5 py-3.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-mono text-[0.75rem] font-semibold">{l.invoice}</span>
                <span className="u-tabular font-mono text-[0.8125rem] font-semibold">{l.amount}</span>
              </div>
              <p className="mt-1 text-[0.8125rem] leading-[1.45] text-[var(--fg-muted)]">{l.debtor}</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <Status kind={l.kind} label={l.kind === "available" ? "Cleared" : l.kind === "attention" ? "Held" : "Blocked"} />
                <span className="text-[0.75rem] leading-[1.5] text-[var(--fg-muted)]">{l.state}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-4">
          <dl className="grid grid-cols-3 gap-4 text-[0.8125rem]">
            {[
              ["Eligible", "$146,050"],
              ["Advance at 85%", "$124,142"],
              ["Reserve", "$21,908"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">{k}</dt>
                <dd className="u-tabular m-0 mt-0.5 font-semibold text-[var(--fg)]">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            Release requires a named approver &middot; four eyes &middot; reason recorded
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of schedule screening before purchase. Deviation against the client&rsquo;s own median, near
        duplicate detection across the portfolio, the advance and reserve split and the named approval
        requirement are the platform&rsquo;s own behaviour. Client names, invoice numbers and figures come from a
        seeded demonstration book.
      </figcaption>
    </figure>
  );
}
