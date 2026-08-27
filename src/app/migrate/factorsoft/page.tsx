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
  title: "FactorSoft alternative and conversion guide",
  description:
    "Plan a FactorSoft conversion properly: what the data model carries, what to export before any vendor call, what breaks, and what to ask every platform.",
  path: "/migrate/factorsoft",
  intent: "migration",
  target: "FactorSoft alternative",
});

const FAQS = [
  {
    q: "Can we get our own data out of FactorSoft?",
    a: "Yes, and you should do it before you shortlist anybody. Your options are usually direct database access if your installation gives it to you, the reporting and export tools inside the product, and a formal extract requested from the vendor. Which of those is available depends on your deployment and your contract, so the first thing to establish is which door you are entitled to use and how long a request through it takes. Everything else in a conversion timetable sits downstream of that answer.",
  },
  {
    q: "What does a FactorSoft export actually contain?",
    a: "Structurally, a great deal. Clients, debtors, invoices and schedules, the transaction ledger, cash receipts and their applications, reserve and escrow balances, chargebacks, verification records, notes and stored documents. What it will not contain is the reasoning behind any of it: who approved the exception that let an invoice fund, which version of a fee schedule priced an invoice charged eighteen months ago, and why a particular reserve is being held. Those are the items that make conversions long, and none of them are unique to this platform.",
  },
  {
    q: "What happens to our custom reports?",
    a: "Assume they do not move, and plan on that basis rather than hoping. Report definitions are expressed against one product's internal structures, so they are specifications rather than assets. The useful exercise is to sort them into three piles: reports somebody genuinely reads, reports that exist because a bank or an auditor demands that exact layout, and reports that were run once in 2019 and never retired. The second pile is the only one with a hard deadline attached.",
  },
  {
    q: "What about the documents?",
    a: "Documents move. The link between a document and the transaction it evidences is the part to verify early, because in many installations that relationship is partly held in file naming and folder structure rather than in a foreign key. Export a sample and try to answer a single question with it: show me the signed assignment notice for this specific invoice. If that takes more than a moment, you have found a real piece of scope.",
  },
  {
    q: "Will our staff have to relearn everything?",
    a: "The vocabulary does not change, because it is the industry's vocabulary and not any vendor's. Schedules, advances, reserves, ineligibles, chargebacks and verifications mean the same thing in both places. What changes is where work starts. Instead of opening a queue and working down it, an operator opens a briefing that states what needs a decision today and why, with the evidence attached. Most of the retraining effort is spent convincing experienced people that they are allowed to trust it, which is why the evidence link on every conclusion matters more than the interface.",
  },
  {
    q: "Is there anything you will not move?",
    a: "Report definitions, saved queries, user defined field layouts, in house scripts and any integration built on direct database access. Those are rebuilt, not converted. We would rather say so on a public page than discover it with you in week five. Historical records that have no clean structural home come across as evidence attached to the client and debtor they belong to, labelled with their origin, rather than being forced into live transactional records where they would distort a balance.",
  },
  {
    q: "What should we ask FactorFox before committing?",
    a: "Ask us to re price a sample of your settled invoices under the mapped fee schedules and show you every difference against what you actually charged. Ask for the reconciliation template before you sign. Ask which of your named requirements are available today and which are planned, and hold us to the words. Ask what we will not move. If any of those answers arrives as reassurance rather than as a document, that is your signal, and it applies to every vendor on your list.",
  },
];

export default function FactorSoftPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox as a FactorSoft alternative",
          description:
            "A working guide to converting a factoring book off FactorSoft: the data model, the export list, the decisions, what breaks, and the reconciliation that proves the new book.",
          path: "/migrate/factorsoft",
        })}
      />

      <PageHero
        trail={[
          { name: "Migrating to FactorFox", path: "/migrate" },
          { name: "FactorSoft", path: "/migrate/factorsoft" },
        ]}
        eyebrow="Switching from FactorSoft"
        title="What a FactorSoft conversion actually involves."
        lede={
          <>
            <p>
              Written for the operations principal or controller of a factoring company running FactorSoft
              who has been asked to evaluate a move and has found nothing useful to read. FactorSoft is a
              capable transactional platform and a lot of good books run on it. This page is not an argument
              about that.
            </p>
            <p>
              It is the working document we would give you on a first call: what your data model carries,
              what it does not, what to export before you talk to anyone, the decisions you will be asked to
              make, what will not survive the move, and the questions to put to every vendor on your list
              including us. It is useful whether or not you ever become a customer.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Walk through your book with us" }}
        secondaryCta={{ href: "/migrate", label: "How a conversion runs" }}
        aside={<ExportChecklist />}
      />

      <ProseSection
        eyebrow="Start here"
        title="Get your extract before you shortlist anybody."
        aside={
          <Card accent="accent">
            <Eyebrow tone="signal">The strongest position you hold</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              An operator holding a complete, dated export of their own book negotiates differently with
              every vendor in the process, including the incumbent. The conversation stops being about
              whether a move is feasible and starts being about what it will cost and when.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              It is also the only version of this exercise where nobody is waiting on anybody. Do it now,
              even if you decide to stay.
            </p>
          </Card>
        }
      >
        <p>
          There is one sequencing mistake that costs more than all the others combined, and it is starting
          the vendor conversation before you know what you can extract and how long extraction takes. Every
          timetable anybody gives you is a guess until that is settled, and a guess about a timetable becomes
          a commitment in a board paper about three weeks later.
        </p>
        <p>
          <strong>Establish which door you are entitled to use.</strong> Depending on your deployment and
          your agreement, you may have direct database access, the product&rsquo;s own reporting and export
          tools, a formal extract request to the vendor, or some combination. Find out which, in writing,
          and find out the turnaround. This single fact drives your whole plan.
        </p>
        <p>
          <strong>Take the extract as at a stated moment and freeze it.</strong> A baseline that keeps
          moving cannot be reconciled against anything. Record the timestamp, store the files unchanged, and
          work from copies. Everything downstream is measured against that snapshot.
        </p>
        <p>
          <strong>Test it before you trust it.</strong> Open the export and try to answer three questions:
          what is my total funds employed, what is the reserve balance for one named client and what is it
          composed of, and show me the signed assignment notice for one named invoice. If any of those is
          hard, you have found real scope while it is still cheap to find.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The export list"
            title="Fifteen things to pull, and what each one is for."
            lede="Pull all of it, even the parts you think you will not need. Re requesting an extract six weeks later is the most avoidable delay in this whole exercise."
          />
          <div className="mt-11">
            <DataTable
              caption="What to export from FactorSoft before a conversion, and why"
              head={["Export", "Why you need it"]}
              rows={[
                ["Client master", "Identity, terms, advance rates, fee arrangement references, status history. The spine of everything else."],
                ["Debtor master", "The deduplication problem lives here. Expect the same obligor under several spellings, addresses and identifiers."],
                ["Client to debtor relationships", "Credit limits, approved status, concentration positions and any debtor level rules that apply only within a client."],
                ["Invoices and schedules", "Face value, purchase date, advance paid, due date, status, and the schedule each invoice was purchased on."],
                ["Transaction ledger", "The full posting history. This is what lets a period be re posted and compared to a trial balance you already filed."],
                ["Cash receipts and applications", "Not net balances. The application detail is what preserves the trail from a payment to the invoices it settled."],
                ["Reserve and escrow balances", "Balances and, where the structure holds it, composition. Where composition does not exist, that gap is scope."],
                ["Chargebacks and disputes", "Amount, date, reason and disposition. This history is what tells an underwriter whether a dilution pattern is forming."],
                ["Verification records", "What was verified, by whom, by what method and when. It is both evidence and a picture of your current verification coverage."],
                ["Fee and rate configuration", "Every schedule, tier, minimum, floor and per event charge. Then the versions, if the system holds them. Usually it holds the current one."],
                ["Notes and correspondence", "The least structured and most underestimated item on this list. It carries the collections judgement your team has built up."],
                ["Documents and their linkage", "The files, and the relationship between each file and the transaction it evidences. Verify the linkage on a sample, not in principle."],
                ["Users, roles and permissions", "Who can do what today. It is the starting point for role design and it usually surfaces access nobody meant to grant."],
                ["Report definitions", "Not portable, but a specification. Sort them into read, required by a third party, and abandoned."],
                ["UCC, assignment and legal records", "Filing details, dates, continuations and the notices themselves. An examiner will ask, and the answer needs to survive the move."],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Names and structures vary by installation and version, so treat this as the list of business
            objects rather than a list of table names. If something on it does not exist in your extract,
            that absence is a finding worth writing down.
          </p>
        </Container>
      </Section>

      <ProseSection
        eyebrow="The data model"
        title="What it carries well, and where it goes quiet."
      >
        <p>
          A transactional factoring platform of this generation is built to record what happened, accurately
          and in order. That is a real strength and it is worth saying plainly, because the parts of your
          book that are well recorded are the parts that convert without argument.
        </p>
        <p>
          <strong>It carries the transaction spine well.</strong> Clients, debtors, invoices, schedules,
          advances, the posting ledger, cash receipts and their applications, reserve balances, chargebacks.
          These are structured, they are consistent, and they load. Do not let anyone tell you this part is
          difficult.
        </p>
        <p>
          <strong>It carries current configuration, not the history of configuration.</strong> This is the
          distinction that produces most conversion variances. A fee schedule is generally held as it stands
          today. If a client&rsquo;s pricing changed in the past and no version was retained, the fees you
          charged before that change cannot be reproduced from the data you now hold. You will find this
          during the re pricing test, and you will find it whichever platform you move to.
        </p>
        <p>
          <strong>It records the outcome of a decision, not the decision.</strong> An override appears as a
          changed value or an exception flag. What the officer was looking at, which rule was set aside, what
          authority they held and what evidence sat behind it are not fields, because no system of that era
          was asked to hold them. This is the gap that{" "}
          <InlineLink href="/platform/evidence">evidence linked intelligence</InlineLink> exists to close
          going forward. It cannot be closed backwards.
        </p>
        <p>
          <strong>Eligibility logic frequently lives outside the system.</strong> Concentration caps, cross
          age rules, ineligible categories and debtor limits are often maintained in a spreadsheet that one
          analyst rebuilds every morning and understands completely. That spreadsheet has to become written
          rules before it can be run by anything. See{" "}
          <InlineLink href="/platform/borrowing-base">borrowing base</InlineLink> for the form those rules
          take once they are explicit.
        </p>
        <p>
          <strong>Notes carry the value that no field holds.</strong> Dispute reasons, promise history, the
          collector&rsquo;s read on a debtor. It is unstructured and it is where your operational knowledge
          actually lives. It must come across as evidence, searchable from the client and debtor it belongs
          to, rather than being discarded because it does not fit a column.
        </p>
      </ProseSection>

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="Decisions"
            title="Seven things you will be asked to decide, and what each one costs."
            lede="These are not technical questions and they cannot be delegated to a project team. Each one is a business decision with a consequence you will live with."
          />
          <div className="mt-11 border-t border-[var(--line-strong)]">
            {[
              {
                q: "How far back does history come across as live records?",
                a: "Everything open comes across as live, always. The question is how much settled history joins it as transactional detail rather than as searchable evidence. More live history means richer trend analysis on day one and a longer, more expensive reconciliation. Less means a faster cutover and a period where behavioural comparisons reach back only so far.",
                cost: "Trade off: analytical depth on day one against reconciliation scope.",
              },
              {
                q: "Which debtor records are actually the same obligor?",
                a: "Deduplication is proposed by matching and confirmed by a person, never applied silently, because merging two debtor records changes your concentration picture and your credit limits. Somebody senior has to sit with the proposed merges. It is tedious and it is the highest value hour in the project.",
                cost: "Trade off: an unglamorous afternoon against a concentration number you can defend.",
              },
              {
                q: "Do undocumented fee arrangements get written down or retired?",
                a: "Most books carry at least a few verbal concessions and grandfathered rates. A conversion forces the question, because a rule that is not written cannot be applied by any system. Writing them down means a conversation with a client. Retiring them means a different conversation with the same client.",
                cost: "Trade off: a set of client conversations now against pricing you cannot reproduce later.",
              },
              {
                q: "Who owns the reconciliation on your side?",
                a: "It has to be one named person with the authority to say what is correct, and it should be the controller or someone the controller trusts completely. A reconciliation with no owner becomes a list nobody closes, and a list nobody closes becomes a cutover that happens anyway.",
                cost: "Trade off: a real claim on a senior person's time for the duration of the parallel period.",
              },
              {
                q: "Which reports are genuinely required by a third party?",
                a: "Bank reporting, audit schedules and facility certificates have external deadlines and prescribed layouts. Internal reports do not. Sorting them is a half day exercise that determines what must exist at cutover and what can be rebuilt afterwards in the form the new system is better at.",
                cost: "Trade off: half a day of triage against a covenant certificate that is late.",
              },
              {
                q: "How long does the incumbent stay readable?",
                a: "Disputes reopen. Examiners ask about periods that predate your new platform. Read access to the old system for a stated period afterwards is a term to negotiate while you still have negotiating position, which is before you give notice, not after.",
                cost: "Trade off: a line item in the budget against an answer you cannot produce.",
              },
              {
                q: "Do you cut over as you operate today, or as you intend to operate?",
                a: "The safe answer is to convert your current process faithfully and change how you work afterwards, so that any difference during the parallel period is a data difference rather than a process difference. Changing both at once makes every variance ambiguous, and ambiguous variances are the ones that never close.",
                cost: "Trade off: a slower path to the benefit against a reconciliation that actually means something.",
              },
            ].map((d) => (
              <div key={d.q} className="grid gap-3 border-b border-[var(--line)] py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:gap-10">
                <h3 className="text-[1.0625rem] leading-[1.4]">{d.q}</h3>
                <div>
                  <p className="text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">{d.a}</p>
                  <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--signal)]">
                    {d.cost}
                  </p>
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
            body: "Written against one product's internal structures. They are a specification for what to rebuild, and a useful one, but they are not an asset that transfers.",
          },
          {
            title: "Saved queries and ad hoc extracts",
            body: "The same problem with less documentation. Usually the fastest to rebuild and the easiest to forget until the person who ran them each Monday asks where they went.",
          },
          {
            title: "User defined field layouts",
            body: "Custom fields carry their data. Their layout, validation and the local convention that made them meaningful do not. Establish what each one actually means before it is mapped.",
          },
          {
            title: "Integrations on direct database access",
            body: "Anything reading or writing the incumbent's tables directly stops working at cutover. Inventory these early. They are frequently undocumented and occasionally load bearing.",
          },
          {
            title: "In house scripts and macros",
            body: "The spreadsheet that rebuilds the borrowing base, the macro that formats the bank file, the script somebody wrote in 2018. These encode real rules and they need to be read before they are retired.",
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
        lede="We do not publish a duration for these, because a published duration would be a number without a source and your book would not match it anyway. What we can tell you is exactly what drives each one, so you can estimate your own before anybody quotes you."
        steps={[
          {
            label: "Extract",
            title: "Driven entirely by which access door you hold",
            body:
              "Short when you have direct database access and can pull everything in an afternoon. Long when extraction runs through a request queue with a turnaround you do not control. Establish this first, because every other estimate depends on it, and start the request before you have chosen a vendor.",
          },
          {
            label: "Discovery",
            title: "Driven by how much of your operation is undocumented",
            body:
              "Short when fee schedules, eligibility rules and exceptions are written down and current. Long when they live in one analyst's spreadsheet and two people's memory. The honest way to size this is to ask your controller how many client pricing arrangements they could reproduce from the system alone. The answer is your discovery scope.",
          },
          {
            label: "Mapping",
            title: "Driven by account count, schedule count and decision latency",
            body:
              "Mostly proportional to how many accounts and fee schedules you carry. Extended by every decision that needs a person who is difficult to convene. The way to compress this stage is to name the decision makers before it starts and to give them a standing slot.",
          },
          {
            label: "Trial load and re pricing",
            title: "Driven by what the first load reveals, and by how many repeats it takes",
            body:
              "This is the genuine variable in any conversion plan. Re pricing settled invoices against mapped schedules either produces a short difference list or a long one, and the length of that list decides how many cycles follow. A plan that assumes one load is a plan that has not done this before.",
          },
          {
            label: "Parallel and reconciliation",
            title: "Driven by your period close, not by us",
            body:
              "It runs through at least one full close, because a close is the only event that tests everything at once. It ends when the difference list is empty or every remaining item has an owner and an accepted written explanation. Both of those conditions are yours to satisfy, not ours to declare.",
          },
          {
            label: "Cutover",
            title: "Driven by the calendar constraints, and by nothing else",
            body:
              "Between funding runs, after a completed close, away from audit, field exam and facility reporting dates. The incumbent stays readable. Balances are frozen, stated, agreed and signed by a named person on each side.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Diligence"
            title="Nine questions for every vendor, with our own answers."
            lede="Put these to us and to everyone else you are talking to. Compare the shape of the answers, not the enthusiasm. Where our answer is inconvenient, it is written here rather than saved for later."
          />
          <div className="mt-11">
            <DataTable
              caption="Vendor diligence questions and the FactorFox answer"
              head={["Ask every vendor", "What FactorFox says"]}
              rows={[
                [
                  "Will you re price a sample of our settled invoices and show every difference?",
                  "Yes, during the trial load, and the difference list is a document you keep. This is the test that finds the expensive problem, so we would rather run it early than be surprised by it in parallel.",
                ],
                [
                  "Can we see the reconciliation template before we sign?",
                  "Yes. Each reconciled category, the figure on both sides, every difference with an owner. If a difference is closed, it is closed by a named person deciding, not by a number being adjusted.",
                ],
                [
                  "What will you refuse to do?",
                  "We will not plug a variance to make a book tie, and we will not accept an instruction to. We will not import a note as an observation the platform made. We will not claim a source is live when it is dark.",
                ],
                [
                  "Which of our named requirements are available today and which are planned?",
                  "We state a status on every integration row and we hold the wording. Available, controlled release, contract required, planned, ecosystem. Ask us to mark up your requirements list with those words and hold us to it.",
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
                  "Do your models learn from our outcomes?",
                  "Not today, and we will not say otherwise. Every weight is a pinned constant. What is true is that every dismissal is recorded with a written reason and a name, which is the raw material a calibration loop needs, and calibration is the next build.",
                ],
                [
                  "What does your platform cost to run after year one?",
                  "Ask this of everyone, and include the people whose job exists because the software cannot do something. Our position on what drives cost is written out on the pricing page rather than held back for a call.",
                ],
                [
                  "If we leave you, what do we take?",
                  "Your book, your documents, your audit history and your sealed packets. Export is a supported operation rather than a negotiation. A record you cannot take with you was never really yours.",
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
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              The moment that explains the difference better than any feature list is watching a release get
              refused because the person approving it is the person who requested it, with the reason stated
              and the second officer already notified.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Solo operators are not exempted. An AI counter review is logged where the second name would
              sit, and it refuses outright when any underlying fact has changed since the request was raised.
            </p>
          </Card>
        }
      >
        <p>
          The vocabulary is identical. Schedules, advances, reserves, ineligibles, chargebacks and
          verifications mean what they have always meant. Nobody has to learn a new word for anything, which
          is why the retraining conversation is shorter than people expect.
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
          <strong>Every conclusion opens onto what proves it.</strong> A severity, a reason, references into
          the underlying records and a recommended action with the permission it needs. Risk observations
          are append only at the database level, and the platform refuses to show a change it cannot prove.
        </p>
        <p>
          <strong>Underwriting stops being an annual event.</strong>{" "}
          <InlineLink href="/platform/continuous-underwriting">Continuous underwriting</InlineLink> re runs
          on every material event, versions each run immutably, and reports confidence and coverage
          separately, so a thin answer is visibly thin rather than quietly wrong.
        </p>
        <p>
          <strong>Exposure is read across the portfolio, not just within a client.</strong> Concentration
          under one debtor name across several clients, duplicate and near duplicate documents across the
          whole book, payment velocity by obligor, invoice size deviation against a client&rsquo;s own
          median. These are the patterns that only exist above the level of a single client file.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What FactorSoft operators ask us first" />

      <RelatedPages
        links={[
          { href: "/migrate", label: "Migration overview", note: "The inventory, the stages and the reconciliation posture." },
          { href: "/compare", label: "How we compare", note: "Recording systems against decision systems, by capability." },
          { href: "/platform/briefings", label: "Briefings", note: "What replaces opening a queue on the Monday." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Where the eligibility spreadsheet goes." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Extraction, verification and near duplicate detection." },
          { href: "/platform/pricing", label: "Pricing", note: "What drives cost, including the cost of the system you run today." },
        ]}
      />

      <CtaBand
        title="Send us your export and we will tell you what it is missing."
        body="Before any commercial conversation. We will read the extract, name the gaps that will cost you time in any conversion with any vendor, and give you the list in writing. If you decide to stay where you are, you keep the list."
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

function ExportChecklist() {
  return (
    <figure className="m-0">
      <div className="border border-[var(--line-strong)] bg-[var(--bg-raised)]" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Pre conversion &middot; Extract readiness
          </p>
          <Status kind="info" label="Do this first" />
        </div>

        <div className="p-5">
          <p className="text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
            Three questions to put to your own extract before you put anything to a vendor.
          </p>

          <ol className="mt-4 space-y-4">
            {[
              ["Q1", "What is total funds employed as at the extract moment, derived from the extract alone?", "If this needs a report from the live system, your extract is not yet a baseline."],
              ["Q2", "For one named client, what is the reserve balance and what is it composed of?", "The balance will be there. The composition is the part that tells you your real scope."],
              ["Q3", "Show the signed assignment notice for one named invoice, from the extract.", "Tests whether the document to transaction link survived the export, which is the thing to know early."],
            ].map(([tag, q, note]) => (
              <li key={tag} className="border-l-2 border-[var(--line-strong)] pl-4">
                <p className="font-mono text-[0.5625rem] uppercase tracking-[0.11em] text-[var(--signal)]">{tag}</p>
                <p className="mt-1 text-[0.875rem] font-semibold leading-[1.45]">{q}</p>
                <p className="mt-1.5 text-[0.8125rem] leading-[1.5] text-[var(--fg-subtle)]">{note}</p>
              </li>
            ))}
          </ol>

          <p className="mt-5 border-t border-[var(--line)] pt-4 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            Whatever you decide, the extract is yours
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        The readiness test we run on a first call. It is a checklist, not a product screen, and it is worth
        running whether or not you ever move.
      </figcaption>
    </figure>
  );
}
