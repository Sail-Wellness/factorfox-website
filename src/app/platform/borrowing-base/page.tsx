import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureGrid,
  StepList,
  ProseSection,
  DataTable,
  FaqBlock,
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
  title: "Borrowing base software for ABL and factoring",
  description:
    "Compute availability from ineligibles, advance rates and reserves, watch net availability with days to zero, and hand your bank a certificate it audits.",
  path: "/platform/borrowing-base",
  intent: "product",
  target: "borrowing base software",
});

const FAQS = [
  {
    q: "Can we run our own eligibility rules, or are we buying someone else's opinion?",
    a: "Your own. Eligibility is a policy object per client: aging cutoffs, cross age percentage, concentration ceilings, obligor level overrides, the treatment of contras, foreign obligors, government receivables, retainage and dating terms. The policy is versioned, and a certificate names the version it was computed under, so a rule change produces a new certificate rather than silently restating an old one.",
  },
  {
    q: "How does this handle a client whose collateral is inventory as well as receivables?",
    a: "Each collateral class carries its own eligibility policy and its own advance rate, and availability is the sum of the classes less reserves and less what is already funded. Inventory eligibility depends on data the platform can only hold if you give it to it. Where a class depends on a source that is not wired, the line says it is awaiting a live source and names the source rather than reporting zero, because a zero and a blank are different facts.",
  },
  {
    q: "What does days to zero actually measure?",
    a: "It projects net availability forward from the client's own funding pattern and its own collection velocity, not from an industry average. It is a projection and the platform labels it as one. The value is in the ordering: it tells a portfolio manager which four clients out of two hundred will be asking for money they do not have, while there is still a week to do something about it.",
  },
  {
    q: "Is the certificate something we can hand to a bank?",
    a: "That is what it is built for. It is fixed to an as of date, sealed, and its figures carry evidence references into the underlying invoices, credits, cash and reserve movements. A sealed packet cannot be mutated, because a database trigger refuses the write. Correcting a certificate creates a restatement that stands beside the original rather than replacing it.",
  },
  {
    q: "We are a factor, not an asset based lender. Does a borrowing base apply to us?",
    a: "It applies twice. Client by client it is the discipline that decides what you can safely advance against a schedule. At the top of the house it is what your rediscount lender applies to you, using your clients' receivables as its collateral. Factors who only ever computed the first one tend to discover the second during a field exam.",
  },
  {
    q: "What happens when an obligor goes over its concentration limit overnight?",
    a: "The excess becomes ineligible under the rule that produced it, availability moves, and the movement is attributed to that obligor rather than appearing as an unexplained drop. Concentration is also watched across clients, so exposure gathering under one debtor name in three different client files is visible as one number instead of three unremarkable ones.",
  },
];

export default function BorrowingBasePage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox borrowing base",
          description:
            "Collateral eligibility, advance rates, reserves, net availability with days to zero, and sealed borrowing base certificates for factors and asset based lenders.",
          path: "/platform/borrowing-base",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Borrowing base", path: "/platform/borrowing-base" },
        ]}
        eyebrow="Borrowing base"
        title="Availability is a number somebody has to defend."
        lede={
          <>
            <p>
              Written for the person who signs the certificate. In an asset based lending shop that is the
              portfolio manager or the field examiner. In a factoring company it is whoever answers the
              bank when the rediscount line is drawn. Both are being asked the same question: what is
              actually there, net of everything, and prove it.
            </p>
            <p>
              FactorFox computes availability inside the system that holds the collateral, so the number and
              the evidence are the same object.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Walk a borrowing base with us" }}
        secondaryCta={{ href: "/platform/covenant-monitoring", label: "See covenant monitoring" }}
        aside={<AvailabilityScene />}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="The spreadsheet is not the problem. The fact that only one person can read it is."
        lede="Every operation of any size has a workbook that produces the borrowing base. It usually works. It fails at the two moments that matter: when the person who built it is away, and when somebody asks why the number moved."
        rows={[
          {
            problem:
              "The base is rebuilt every morning by hand, from an export that is already an hour old, and it goes out with one person's initials on it.",
            response:
              "Availability is computed from the live collateral records, and every figure on the certificate opens into the invoices, credits, cash and reserve movements that produced it.",
          },
          {
            problem:
              "An invoice drops out of eligibility for a reason nobody writes down, and three weeks later nobody can reconstruct why availability fell.",
            response:
              "Each ineligible carries the rule that removed it, the date the rule applied and the value it took out. The reason is part of the record rather than part of somebody's memory.",
          },
          {
            problem:
              "The advance rate in the agreement, the advance rate in the policy memo and the advance rate in the formula are three different numbers.",
            response:
              "One versioned eligibility policy per client. The certificate names the version it was computed under, so changing a rule produces a new certificate rather than quietly restating the last one.",
          },
          {
            problem:
              "Nobody notices availability compressing until a client asks for money and the answer is no, which is a phone call rather than a plan.",
            response:
              "Net availability is projected forward from that client's own funding pattern and collection velocity. Days to zero reaches the briefing before the funding request reaches the desk.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The computation"
        title="Five layers, applied in an order you can argue with."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Order matters</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Cross age before concentration produces a different answer from concentration before cross
              age, and both are defensible. What is not defensible is a system that will not tell you which
              one it did.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              The policy fixes the order, the certificate records it, and a field examiner can follow the
              same sequence by hand and land on the same figure.
            </p>
          </Card>
        }
      >
        <p>
          <strong>Gross collateral.</strong> Everything assigned, at face, as of a fixed date and time. Not a
          rolling number that moves while you read it. A borrowing base with no as of stamp is an opinion.
        </p>
        <p>
          <strong>Ineligibles.</strong> The rules that remove collateral from the pool, applied in policy
          order, each one recording what it removed and why. This is where most of the argument in asset
          based lending actually happens, so it is the layer that carries the most evidence.
        </p>
        <p>
          <strong>Advance rates.</strong> Applied per collateral class and per client, not as one house rate.
          Where a client&rsquo;s dilution has moved against it, the policy can step the rate down on a schedule
          instead of leaving it at the number somebody agreed to two years ago.
        </p>
        <p>
          <strong>Reserves.</strong> Dilution, disputes, priority payables such as unpaid payroll taxes and
          landlord claims, and any specific block an officer has set. A reserve set by a person records the
          person, the reason and the date, and it appears on the certificate as a named line rather than as a
          silent haircut.
        </p>
        <p>
          <strong>Net availability.</strong> Eligible collateral at advance, less reserves, less what is
          already outstanding. Then the part that changes behaviour: the same number projected forward, with
          days to zero attached to it.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Ineligibles"
            title="The categories that decide the number"
            lede="These are the rules the platform applies and records. Which of them you switch on, and at what thresholds, is your credit policy and nobody else's."
          />
          <div className="mt-11">
            <DataTable
              caption="Ineligibility categories and how each is applied"
              head={["Category", "How it is applied"]}
              rows={[
                ["Aged past due", "Invoices beyond the client's aging cutoff, measured from invoice date or due date as the policy states, with the cutoff recorded on the certificate."],
                ["Cross age", "When a stated percentage of an obligor's balance is past due, the whole obligor balance leaves the pool. The trigger percentage and the obligor that tripped it are both named."],
                ["Concentration", "Balance above the obligor ceiling is removed, expressed as a percentage of eligible collateral. The excess is attributed to the obligor rather than appearing as an unexplained fall."],
                ["Contras and offsets", "Where the obligor is also a supplier to the client, the offsetting payable is netted. This one is usually found by an examiner rather than by a system, which is the argument for holding it in the system."],
                ["Foreign obligors", "Ineligible unless covered by credit insurance or a letter of credit, with the covering instrument attached as evidence and its expiry watched."],
                ["Government receivables", "Ineligible unless an assignment of claims is on file. The document is the evidence and its absence is stated rather than assumed."],
                ["Affiliate and intercompany", "Removed on the party relationship, not on a name match, because name matching is how affiliates get missed."],
                ["Disputed and credit memo", "An open dispute case removes the disputed amount while it is open. Closing the case returns it, and both movements are dated."],
                ["Retainage and progress billing", "Held out until the retention condition is satisfied. Construction books live or die on this line."],
                ["Extended dating", "Terms beyond the policy maximum are removed or advanced at a reduced rate, as the policy states."],
                ["Unverified", "Where the policy requires verification before an invoice counts, an unverified invoice is not eligible. Verification status comes from the verification record itself, not from a checkbox somebody ticked."],
                ["Unapplied cash", "Cash received but not yet applied reduces the pool rather than sitting outside it, so availability never counts money twice."],
              ]}
            />
          </div>
        </Container>
      </Section>

      <StepList
        eyebrow="Certificate production"
        title="From as of date to a sealed document"
        lede="The certificate is not a report that gets regenerated. It is a record that gets sealed."
        steps={[
          {
            label: "Fix",
            title: "The as of moment is set",
            body: "Collateral, cash, credits and reserves are taken as they stood at that instant. Everything downstream refers to that stamp, which is what makes two people computing the same base able to disagree productively.",
          },
          {
            label: "Apply",
            title: "Policy runs in its stated order",
            body: "Ineligibles in sequence, advance rates by class, reserves last. Each step writes what it did, so the certificate carries its own working rather than just its conclusion.",
          },
          {
            label: "Reconcile",
            title: "Movement against the last certificate is explained",
            body: "Availability rarely moves for one reason. The movement is decomposed into new collateral, collections, newly ineligible balances, reserve changes and advances taken, and the pieces add up to the difference.",
          },
          {
            label: "Review",
            title: "A person accepts or refuses it",
            body: "Where the policy requires it, a second officer counter reviews. The counter review refuses outright if any underlying fact has changed since the run, because approving a stale computation is worse than approving nothing.",
          },
          {
            label: "Seal",
            title: "The document becomes immutable",
            body: "Sealed packets cannot be mutated. A database trigger refuses the write. A correction is a restatement that stands beside the original and names what changed, which is the only version of a correction an examiner will accept without a conversation.",
          },
          {
            label: "Deliver",
            title: "It goes where it has to go",
            body: "To the client, to the file, or up to your own lender under your rediscount reporting obligation. Outbound delivery passes the same wall as every other channel, so nothing reaches a real counterparty from a test environment.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Collateral performance"
        title="The base tells you what you can lend. These tell you whether you should."
        lede="A borrowing base is a photograph. Collateral performance is the film, and it is where the trouble shows up first."
        items={[
          {
            title: "Dilution movement",
            body: "Credits, short pays and deductions as a share of what was billed, tracked against the client's own history rather than a portfolio average. Rising dilution is the earliest honest signal that an advance rate is wrong.",
          },
          {
            title: "Payment velocity by obligor",
            body: "How this obligor actually pays, across the network, not what its terms say. An obligor slowing from thirty eight days to sixty two moves every client who sells to it.",
          },
          {
            title: "Concentration change",
            body: "Including exposure gathering under one debtor name across several clients, which is the concentration that never appears on any single client's certificate.",
          },
          {
            title: "Turn and aging drift",
            body: "The pool getting older before it gets smaller. Aging drift precedes cross age triggers, which means it precedes an availability fall you could have called a fortnight earlier.",
          },
          {
            title: "Credit limit utilisation",
            body: "How much of an approved obligor limit is in use, and how fast it filled. A limit that goes from thirty per cent to full in a week is a question, not a milestone.",
          },
          {
            title: "Availability compression",
            body: "Net availability falling on a trend, with days to zero. This is the signal that turns a funding refusal into a scheduled conversation.",
          },
        ]}
      />

      <ProseSection
        eyebrow="For factors with a rediscount line"
        title="Your bank runs a borrowing base on you. It helps to run the same one first."
        tone="sunken"
      >
        <p>
          A factor drawing on a bank line is a borrower whose collateral is other people&rsquo;s receivables. The
          bank applies eligibility rules to your book that look a great deal like the rules you apply to your
          clients: aging cutoffs, obligor concentration, cross age, ineligible client classes, reserves
          against dilution, and a certificate on a stated cycle. The difference is that when your bank
          disagrees with your number, you do not get to explain it in the margin.
        </p>
        <p>
          Running the same computation continuously at the top of your own house changes two things. You know
          before your lender does, which means an ineligible concentration is something you manage rather than
          something you receive a letter about. And you arrive at the field exam with dated evidence instead
          of a workbook, which shortens the exam and changes what the examiner concludes about your controls.
        </p>
        <p>
          For a factor without a line yet, the same machinery builds the track record that gets one. FactorFox
          ships a default covenant pack modelled on how bank rediscount facilities are actually written, so
          you can operate against realistic tests from the first month. Every surface states plainly that
          these are FactorFox covenants and not anyone&rsquo;s contract. When you sign a real facility, the clauses
          you actually agreed to replace them, and the agreement clause is quoted on the covenant as its
          evidence.
        </p>
        <p>
          Where a covenant needs data FactorFox does not hold, such as controlled collection percentage on a
          bank feed that is not wired, it says it is awaiting a live source and names the source. It does not
          report zero. A zero is a fact and a blank is a different fact, and confusing the two in front of a
          lender is expensive.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What a portfolio manager asks first" />

      <RelatedPages
        links={[
          { href: "/platform/covenant-monitoring", label: "Covenant monitoring", note: "Where availability meets the tests your facility actually contains." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Re underwriting on every material event, versioned immutably." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Dilution, velocity and concentration as they move, not at month end." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "What sits underneath every figure on a certificate." },
          { href: "/solutions/asset-based-lending", label: "Asset based lending", note: "The whole workflow, from field exam to funding." },
          { href: "/platform/treasury", label: "Treasury", note: "What happens to availability once a release is approved." },
        ]}
      />

      <CtaBand
        title="Bring us a certificate you argued about."
        body="We will rebuild it in FactorFox against your own eligibility rules and show you the movement decomposition for the day it moved and nobody could say why."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "See the whole platform" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

function AvailabilityScene() {
  return (
    <figure className="m-0">
      <div className="border border-[var(--line-strong)] bg-[var(--bg-raised)]" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Borrowing base &middot; as of 14:00
          </p>
          <Status kind="attention" label="Compressing" />
        </div>

        <div className="p-5">
          <dl className="space-y-2 text-[0.8125rem]">
            {[
              ["Gross assigned receivables", "4,182,600"],
              ["Less ineligible, aged and cross age", "(391,240)"],
              ["Less concentration excess, one obligor", "(214,900)"],
              ["Eligible collateral", "3,576,460"],
              ["At advance rate, per policy", "3,040,991"],
              ["Less dilution and dispute reserves", "(186,300)"],
              ["Less outstanding advances", "(2,611,400)"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-2">
                <dt className="text-[var(--fg-muted)]">{k}</dt>
                <dd className="u-tabular m-0 whitespace-nowrap text-[var(--fg)]">{v}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 pt-1">
              <dt className="font-semibold">Net availability</dt>
              <dd className="u-tabular m-0 font-semibold">243,291</dd>
            </div>
          </dl>

          <p
            className="mt-4 border-l-2 pl-3 text-[0.8125rem] leading-[1.5]"
            style={{ borderColor: "var(--color-warn-600)", color: "var(--color-warn-600)" }}
          >
            Days to zero: 6, on this client&rsquo;s own funding pattern and collection velocity. Driven by the
            concentration excess, which appeared four days ago.
          </p>

          <p className="mt-4 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            Policy v7 &middot; sealed certificate BB-4471 &middot; every line opens into its evidence
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the availability stack. The layer order, the movement attribution, the policy version
        stamp and the sealed certificate reference are the platform&rsquo;s own. Every figure shown comes from a
        seeded demonstration book.
      </figcaption>
    </figure>
  );
}
