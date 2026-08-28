import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PageHero,
  FeatureGrid,
  StepList,
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
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "WinFactor alternative and conversion guide",
  description:
    "Planning a move off WinFactor: where your book sits, what the reporting layer gives you, what the published terms commit to, and what to establish first.",
  path: "/migrate/winfactor",
  intent: "migration",
  target: "WinFactor alternative",
});

const FAQS = [
  {
    q: "Can we pull our own data out of WinFactor ourselves?",
    a: "Not in the way an operator on an installed system can. WinFactor is delivered from the vendor's cloud, so there is no database on your premises to query and no backup file you hold. What is publicly described is a large library of default reports and a reporting interface intended for business intelligence tools. That is a reporting surface rather than a relational extract, and the difference matters: reports give you rendered answers, an extract gives you the records the answers were computed from. Establish in writing which of those you are entitled to, in what format, and how long a request takes.",
  },
  {
    q: "Their site advertises a reports interface. Is that enough to migrate on?",
    a: "It may be, and it may not, and you cannot tell from the outside because there is no public documentation for it. No developer portal, no endpoint reference, no authentication guide, no published limits. That is not unusual for this category, but it does mean the scope of the interface is a question for your account manager rather than something you can research before the call. Ask whether it returns transaction level records or only report output, and ask for the documentation under a confidentiality agreement before you plan around it.",
  },
  {
    q: "What do the published terms say about getting our data back?",
    a: "As published in August 2026, the terms and conditions on winfactor.com govern use of the website. They do not address customer data ownership, export, return on termination, retention or deletion. Whatever governs your book lives in your signed agreement, which is not public. This is not a criticism of that company specifically. It is the normal state of this industry, and it is exactly why the clause matters more than the marketing. Read your own contract and find the sentence, or establish that there is not one.",
  },
  {
    q: "Does the credit data we contributed leave with us?",
    a: "Ask, and get it in writing. Platforms that build debtor scoring from pooled member payment experience create a genuine question at exit: your own payment history with your own debtors is operating data you generated, and its treatment on departure should be stated somewhere. Nothing public addresses it. It is the question on this page most likely to be met with a pause, which is precisely why it is worth asking early rather than during a notice period.",
  },
  {
    q: "What about the transportation plumbing?",
    a: "This is the part people underestimate on a freight book. Carrier payment rails, fuel card arrangements, prepaid card programmes, batch payment file formats and any load management system feeding invoices in are separate commercial and technical relationships. They do not migrate with the data. Each one has to be re established, tested with a small live batch, and cut over on a date you choose. Inventory them in week one and treat them as their own workstream, because the funding run is the thing that cannot slip.",
  },
  {
    q: "How does the change of ownership affect a decision to move?",
    a: "WinFactor announced in October 2025 that it had been acquired by Lendscape. The announcement stated that existing customers would continue to receive the same support and service. That is a normal and reasonable thing for an acquirer to say, and we have no basis to suggest otherwise. What it does mean is that product direction questions are legitimate diligence rather than gamesmanship. Ask for the roadmap commitment and the support model in writing, and ask what happens to your agreement if the product lines converge. Ask us the equivalent question about our own ownership.",
  },
  {
    q: "What should we ask FactorFox before committing?",
    a: "The same things. Ask what we will refuse to move rather than what we promise to move. Ask us to re price a sample of your settled invoices against the mapped schedules and show every difference before you sign anything. Ask what our own agreement says about export on termination and make us show you the clause. If any answer arrives as reassurance rather than as a document, treat it the way you would treat it from anyone else.",
  },
];

export default function WinFactorPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox as a WinFactor alternative",
          description:
            "A working guide to converting a factoring book off WinFactor: where the data sits, what the reporting layer provides, what to establish contractually, and how the reconciliation is proved.",
          path: "/migrate/winfactor",
        })}
      />

      <PageHero
        trail={[
          { name: "Migrating to FactorFox", path: "/migrate" },
          { name: "WinFactor", path: "/migrate/winfactor" },
        ]}
        eyebrow="Switching from WinFactor"
        title="What a WinFactor conversion actually involves."
        lede={
          <>
            <p>
              Written for the principal or controller of a transportation factoring company running
              WinFactor who has been asked to evaluate a move. WinFactor is a competent cloud platform with
              real depth in freight, and a lot of good books run on it. This page is not an argument about
              that.
            </p>
            <p>
              It is the working document we would give you on a first call. Where your data actually sits,
              what the reporting layer will and will not hand you, what the published terms commit to, what
              has to be rebuilt rather than moved, and the questions to put to every vendor on your list
              including us. It is useful whether or not you ever become a customer.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Walk through your book with us" }}
        secondaryCta={{ href: "/migrate", label: "How a conversion runs" }}
        aside={<AsymmetryCard />}
      />

      <ProseSection
        eyebrow="Start here"
        title="You are on someone else's infrastructure. Plan from that fact."
        aside={
          <Card accent="accent">
            <Eyebrow tone="signal">The one thing to settle first</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Before you shortlist anybody, get a written answer to a single question: what will we receive
              on exit, in what format, on what timetable, and at what cost.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Ask while you are a customer in good standing with time on the clock. The answer is different
              when you ask it during a notice period, and the difference is not in your favour.
            </p>
          </Card>
        }
      >
        <p>
          The first thing to establish about any conversion is which door you are entitled to use, and on a
          vendor hosted platform the answer is narrower than on an installed one. WinFactor states publicly
          that its software runs on the vendor&rsquo;s cloud infrastructure and that you do not need servers
          of your own. That is a genuine operational benefit and it is one of the reasons people buy it.
        </p>
        <p>
          It also means there is no database on your premises, no backup file in your possession and no
          administrator on your staff who can query the tables directly. Every route to your own records
          runs through the product or through the vendor. That is a normal position for a modern platform
          and it is not a reason to stay or to leave. It is a reason to find out the terms early.
        </p>
        <p>
          <strong>What is publicly described.</strong> A library of several hundred default reports, and a
          reporting interface intended for use with business intelligence tools. Client facing financial
          exports through the portal. Batch payment file generation for banking. Those are real outputs and
          several of them are useful during a conversion.
        </p>
        <p>
          <strong>What is not publicly described.</strong> Any documentation for that reporting interface,
          any bulk extract capability, any published schema or data dictionary, and any statement in the
          public terms about what happens to your data when you leave. We checked in August 2026. Absence
          from a website is not absence from a product, and it is certainly not a defect. It simply means
          these are questions for your account manager rather than facts you can look up, and you should
          treat any vendor who cannot answer them in writing the same way.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The request list"
            title="What to ask for, in the order that makes the rest cheap."
            lede="On a hosted platform this is a request rather than a query, so the sequence matters more than it does elsewhere. Ask for all of it at once. Re requesting in week six is the most avoidable delay in this exercise."
          />
          <div className="mt-12">
            <DataTable
              caption="What to request from WinFactor before a conversion, and why each item matters"
              head={["Request", "Why you need it"]}
              rows={[
                ["Client and debtor masters", "Identity, status, terms and the identifiers that hold the rest together. Expect the same obligor under several spellings, which is a deduplication decision rather than a technical one."],
                ["Client to debtor relationships", "Credit limits, buy and no buy positions, approvals and any rule that applies only within one client relationship."],
                ["Invoices and schedules, open and closed", "Open items are never the argument. Ask explicitly whether closed and settled history is included, how far back, and at what level of detail."],
                ["Cash receipts with application detail", "Not net balances. The application trail from a payment to the invoices it settled is the part that makes a period reproducible."],
                ["Reserve, escrow and unapplied positions", "Balances, and composition where the structure holds it. Where composition is not held, that gap is scope and it is better found now."],
                ["Advances against invoices, and advances against nothing", "Fuel advances, cash advances and non factor advances behave differently from an invoice advance and are frequently the last thing anyone maps."],
                ["Fee, term and commission configuration", "Every schedule, tier, minimum and per event charge, plus broker and sales commission arrangements. Then ask whether prior versions are retained."],
                ["Chargeback history", "Amount, date, reason and disposition. This is the history that tells an underwriter whether a dilution pattern is forming, and it is rarely in an open items extract."],
                ["Collections activity and notes", "Pipeline state, next action dates, promises and the collector's written read on each debtor. Unstructured, underestimated, and where your operational knowledge lives."],
                ["Verification records", "What was verified, by whom, by what method and when. Both evidence and an honest picture of your current verification coverage."],
                ["Documents with their linkage", "The files themselves, and the relationship between each file and the transaction it evidences. Test the linkage on a sample rather than accepting it in principle."],
                ["Assignment notices and legal records", "Notice templates, issued notices, filing details and continuations. An examiner will ask, and the answer has to survive the move."],
                ["Users, roles and permissions", "Who can do what today. The starting point for role design, and it reliably surfaces access nobody meant to grant."],
                ["Report inventory", "Not portable, but a specification. Sort into read by somebody, required by a bank or an auditor, and abandoned in 2019."],
                ["Your contributed credit and payment experience", "If debtor scoring is built partly on pooled member data, establish in writing what happens to the payment history you contributed."],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Treat this as a list of business objects rather than a list of file names. Structures vary by
            configuration and by version. If something on this list does not appear in what you receive,
            that absence is a finding worth writing down and pricing.
          </p>
        </Container>
      </Section>

      <ProseSection
        eyebrow="The asymmetry"
        title="Every vendor documents the way in better than the way out."
      >
        <p>
          WinFactor publishes a conversion page. It names the systems it has converted books from, including
          ours, and it states which balances its importer reconciles: open accounts receivable, reserves,
          rebates, unapplied cash, fuel and cash advances, and miscellaneous charges. That is a more specific
          public commitment than most vendors in this category make, and it is fair to say so.
        </p>
        <p>
          <strong>Read the list for what it does not contain.</strong> Every item on it is a current
          balance. Closed invoices, historical cash application, chargeback history, collections notes,
          document images and their linkage, verification records and the audit trail are not named. That
          may be a scope decision, a page length decision, or simply a list written for the balances a
          controller checks first. The point is that it is the same list you should be interrogating in the
          other direction.
        </p>
        <p>
          <strong>This is not a WinFactor problem.</strong> It is the shape of the whole industry. Intake is
          a sales function so it gets a page. Egress is a support function so it gets a clause, and often
          not even that. We are describing a pattern, not an accusation, and the useful response is not
          indignation. It is to ask the export question of every vendor on your list, in writing, before
          anybody has your signature.
        </p>
        <p>
          <strong>Including us.</strong> Our position is written on the{" "}
          <InlineLink href="/migrate">migration page</InlineLink> and in our answers below: your book, your
          documents, your audit history and your sealed packets, as a supported operation rather than a
          negotiation. Hold us to that wording the way you would hold anyone else to theirs. A record you
          cannot take with you was never really yours.
        </p>
      </ProseSection>

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="Decisions"
            title="Six things you will decide, and what each one costs."
            lede="These are business decisions with consequences you live with. None of them can be delegated to a project team, and none of them are technical."
          />
          <div className="mt-12 border-t border-[var(--line-strong)]">
            {[
              {
                q: "How much settled history arrives as live records?",
                a: "Everything open comes across as live, always. The question is how much closed history joins it as transactional detail rather than as searchable evidence. More live history means deeper trend analysis from day one and a longer reconciliation. Less means a faster cutover and a period where behavioural comparison reaches back only so far. On a hosted platform this decision is constrained by what you can actually obtain, which is why the request goes first.",
                cost: "Trade off: analytical depth on day one against reconciliation scope.",
              },
              {
                q: "What happens to the payment rails on cutover weekend?",
                a: "A freight book funds daily and often outside banking hours. Batch payment files, fuel card arrangements, prepaid card programmes and any wallet product are separate relationships that do not travel with the data. Each is re established, tested with a small live batch, and cut over on a date you choose rather than a date that arrives.",
                cost: "Trade off: a dedicated workstream now against a funding run that does not go out.",
              },
              {
                q: "Which debtor records are actually the same obligor?",
                a: "Deduplication is proposed by matching and confirmed by a person, never applied silently, because merging two debtor records changes your concentration picture and your credit limits. Somebody senior sits with the proposed merges. It is tedious and it is the highest value hour in the project.",
                cost: "Trade off: an unglamorous afternoon against a concentration number you can defend.",
              },
              {
                q: "Do your clients re onboard to a new portal, and when?",
                a: "Client facing surfaces are a communication project, not a data project. Your clients have logins, habits and in some cases a mobile app they use daily. Sequencing that alongside the ledger cutover is a decision about who absorbs the disruption, and doing both in the same week is a choice rather than a necessity.",
                cost: "Trade off: a longer overall timetable against a support queue you can staff.",
              },
              {
                q: "How long does the incumbent stay readable?",
                a: "Disputes reopen. Examiners ask about periods that predate your new platform. On a hosted system you cannot keep a copy running yourself, so continued read access is a contractual term to negotiate while you still hold negotiating position. That is before you give notice, not after.",
                cost: "Trade off: a line item in the budget against an answer you cannot produce.",
              },
              {
                q: "Do you cut over as you operate today, or as you intend to operate?",
                a: "Convert your current process faithfully and change how you work afterwards, so that any difference during the parallel period is a data difference rather than a process difference. Changing both at once makes every variance ambiguous, and ambiguous variances are the ones that never close.",
                cost: "Trade off: a slower path to the benefit against a reconciliation that means something.",
              },
            ].map((d) => (
              <div
                key={d.q}
                className="grid gap-3 border-b border-[var(--line)] py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:gap-10"
              >
                <h3 className="text-card-title">{d.q}</h3>
                <div>
                  <p className="text-[15px] leading-[1.65] text-[var(--fg-muted)]">{d.a}</p>
                  <p className="u-label mt-3 text-[var(--signal)]">{d.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="What breaks"
        title="Six things that do not convert, on any platform"
        lede="These are rebuilt rather than moved. Any vendor telling you otherwise is describing a demonstration rather than a project."
        tone="sunken"
        columns={3}
        items={[
          {
            title: "Report definitions",
            body: "A library of several hundred reports is a specification for what to rebuild, not an asset that transfers. The triage is worth more than the reports: read by somebody, required by a third party, or long abandoned.",
          },
          {
            title: "Business intelligence connections",
            body: "Anything pointed at the incumbent's reporting interface stops returning data at cutover. Dashboards a board sees monthly are the ones to inventory first, because their absence is noticed immediately.",
          },
          {
            title: "Load management system feeds",
            body: "Invoice intake from a transport management system is a per partner integration. It is re established rather than moved, and it needs a live test with real files before you rely on it.",
          },
          {
            title: "Batch payment file formats",
            body: "The exact layout your bank accepts is agreed between you and the bank, not owned by the software. Re establish it, send a test batch, and get written confirmation before the first live run.",
          },
          {
            title: "Portal habits",
            body: "Your clients have a login, a routine and in many cases an app on a phone in a truck. Their experience changes on a date you choose. Communication is the deliverable here, not code.",
          },
          {
            title: "Muscle memory",
            body: "Real and worth budgeting for. Keystroke habits and screen order are how experienced operators go fast. The vocabulary does not change, but the sequence of a day does.",
          },
        ]}
      />

      <StepList
        eyebrow="Timetable"
        title="What makes each stage long, and what makes it short."
        lede="We do not publish a duration, because a published duration would be a number without a source and your book would not match it. What we can tell you is what drives each stage, so you can size your own before anybody quotes you."
        steps={[
          {
            label: "Request",
            title: "Driven by the vendor's turnaround, not by your effort",
            body: "This is the stage that differs most from a conversion off an installed system, and it is the one people forget to start early. You are in a queue you do not control. Submit the request before you have chosen a vendor, ask for a committed date, and treat the answer as the first real input to your plan.",
          },
          {
            label: "Inspection",
            title: "Driven by how complete the first delivery turns out to be",
            body: "Open what arrives and try to answer three questions from it alone: what is total funds employed at the stated moment, what is one named client's reserve balance and what is it composed of, and show the signed assignment notice for one named invoice. Anything you cannot answer is a second request, and second requests are why timetables slip.",
          },
          {
            label: "Discovery",
            title: "Driven by how much of your operation is undocumented",
            body: "Short when fee schedules, eligibility rules and exceptions are written down and current. Long when they live in one analyst's spreadsheet and two people's memory. Ask your controller how many client pricing arrangements they could reproduce from the system alone. That answer is your discovery scope.",
          },
          {
            label: "Mapping and trial load",
            title: "Driven by what the first load reveals",
            body: "Re pricing settled invoices against mapped schedules either produces a short difference list or a long one, and the length of that list decides how many cycles follow. A plan that assumes one load is a plan written by somebody who has not done this before.",
          },
          {
            label: "Rails and parallel",
            title: "Driven by your period close and your funding calendar",
            body: "Payment rails are tested with small live batches while the ledger runs in parallel. Parallel runs through at least one full close, because a close is the only event that tests everything at once. It ends when the difference list is empty or every remaining item has an owner and a written explanation you accepted.",
          },
          {
            label: "Cutover",
            title: "Driven by the calendar constraints and nothing else",
            body: "Between funding runs, after a completed close, away from audit, field exam and facility reporting dates. Read access to the incumbent is already agreed in writing. Balances are frozen, stated, agreed and signed by a named person on each side.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Diligence"
            title="Eight questions for every vendor, with our own answers."
            lede="Put these to us and to everyone else. Compare the shape of the answers rather than the enthusiasm. Where our answer is inconvenient it is written here rather than saved for a later call."
          />
          <div className="mt-12">
            <DataTable
              caption="Vendor diligence questions and the FactorFox answer"
              head={["Ask every vendor", "What FactorFox says"]}
              rows={[
                [
                  "If we leave, what do we take, in what format, and by when?",
                  "Your book, your documents, your audit history and your sealed packets. Export is a supported operation rather than a negotiation. Ask us to show you the clause, and ask everyone else to show you theirs.",
                ],
                [
                  "Is that written in the agreement, or is it a statement on a website?",
                  "The agreement. A marketing page is not a contractual right, ours included, and the only version that protects you is the one your counsel can point at.",
                ],
                [
                  "Does the export include closed history, notes, documents and the audit trail?",
                  "Yes, and the document to transaction linkage comes with it. If a vendor answers this with open items only, that is not a failure, but you have just learned the real scope of your project.",
                ],
                [
                  "Will you re price a sample of our settled invoices and show every difference?",
                  "Yes, during the trial load, and the difference list is a document you keep. This is the test that finds the expensive problem, so we would rather run it early than meet it in parallel.",
                ],
                [
                  "Which of our named requirements are available today and which are planned?",
                  "We state a status on every integration row and hold the wording. Available, controlled release, contract required, planned, ecosystem. Ask us to mark up your requirements list with those words.",
                ],
                [
                  "Can your automation move money without a person?",
                  "No. The machine may stop money. Only a named human may let it through, four eyes applies by default, and certain gates can never be made advisory by any role or configuration.",
                ],
                [
                  "What happens when an external source is unavailable?",
                  "The platform says so and names the source rather than reporting a zero or a stale figure. A covenant that needs data we do not hold reports that it is awaiting a live source. Silence dressed as a number is the failure mode we designed against.",
                ],
                [
                  "Who owns the platform, and what is the roadmap commitment?",
                  "Fair to ask of anyone, including us, and more pointed for any product that has recently changed hands. Ask for the support model and the product direction in writing, and ask what protects you if two product lines converge.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProseSection
        eyebrow="After cutover"
        title="What actually changes on the Monday."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The refusal is the point</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              The moment that explains the difference better than any feature list is watching a release get
              refused because the person approving it is the person who requested it, with the reason stated
              and the second officer already notified.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Solo operators are not exempted. An AI counter review is recorded where the second name would
              sit, and it refuses outright when any underlying fact has changed since the request was raised.
            </p>
          </Card>
        }
      >
        <p>
          The vocabulary is identical. Schedules, advances, reserves, chargebacks, fuel advances and
          verifications mean what they have always meant. Nobody learns a new word for anything, which is
          why the retraining conversation is shorter than people expect.
        </p>
        <p>
          <strong>The day starts with an answer instead of a queue.</strong> A{" "}
          <InlineLink href="/platform/briefings">briefing</InlineLink> answers six fixed questions scoped to
          what you are responsible for: where risk is and why, which decisions require you now, what changed
          since the last brief, where cash is and what can move safely, what is likely next, and whether you
          are within covenant. The second briefing of the day states the difference rather than restating
          the book.
        </p>
        <p>
          <strong>Exposure is read across the portfolio, not just within a client.</strong> Concentration
          under one debtor name across several clients, near duplicate documents across the whole book,
          payment velocity by obligor, invoice size deviation against a client&rsquo;s own median. On a
          freight book these are the patterns that only exist above the level of a single client file, and
          they are where the losses come from.
        </p>
        <p>
          <strong>Carrier facts are captured, never asserted.</strong> Operating authority, insurance
          currency and safety scores are recorded as what a source said and when it said it. The relevant
          gate is explicitly forbidden from asserting them as verified. That refusal is deliberate, and{" "}
          <InlineLink href="/platform/evidence">the evidence model</InlineLink> explains why we would rather
          report ourselves blind than report a stale figure as current.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What WinFactor operators ask us first" />

      <RelatedPages
        links={[
          { href: "/migrate", label: "Migration overview", note: "The inventory, the stages and the reconciliation posture." },
          { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "The same exercise on an installed platform." },
          { href: "/solutions/transportation", label: "Transportation factoring", note: "Freight specific risk, rails and document flow." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Duplicates, near duplicates and submission patterns across the book." },
          { href: "/platform/briefings", label: "Briefings", note: "What replaces opening a queue on the Monday." },
          { href: "/platform/pricing", label: "Pricing", note: "What drives cost, including the cost of the system you run today." },
        ]}
      />

      <CtaBand
        title="Send us what you get back and we will tell you what is missing."
        body="Before any commercial conversation. We will read the extract, name the gaps that will cost you time in a conversion with any vendor, and give you the list in writing. If you decide to stay where you are, you keep the list."
        primary={{ href: "/demo", label: "Book a conversion review" }}
        secondary={{ href: "/migrate", label: "Read the migration overview" }}
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

function AsymmetryCard() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Pre conversion &middot; The export question</p>
          <Status kind="info" label="Ask first" />
        </div>

        <div className="p-5">
          <p className="text-[15px] leading-[1.6] text-[var(--fg-muted)]">
            Three questions to put to your vendor in writing, while you are still a customer in good
            standing.
          </p>

          <ol className="mt-4 space-y-4">
            {[
              [
                "Q1",
                "On exit, what exactly do we receive, and is it records or reports?",
                "Rendered reports answer yesterday's questions. Records answer the ones you have not asked yet.",
              ],
              [
                "Q2",
                "Which clause in our agreement says so, and what is the timetable?",
                "If the answer is a page on a website rather than a clause, you do not have a right. You have a hope.",
              ],
              [
                "Q3",
                "Does it include closed history, notes, documents and the audit trail?",
                "Open balances are never the hard part. This question is where the real scope of a project is decided.",
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
            Ask us the same three
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        The readiness test we run on a first call. It is a checklist, not a product screen, and it is worth
        running whether or not you ever move.
      </figcaption>
    </figure>
  );
}
