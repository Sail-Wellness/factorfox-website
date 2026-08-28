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
  title: "FactorView alternative and conversion guide",
  description:
    "Planning a move off FactorView: who holds the database, what the published terms do and do not commit to, and what to establish before you give notice.",
  path: "/migrate/factorview",
  intent: "migration",
  target: "FactorView alternative",
});

const FAQS = [
  {
    q: "Do we own our data in FactorView?",
    a: "Their published terms say so directly, and that is worth acknowledging because most vendors in this category do not say it at all. As published in August 2026, the terms state that you retain ownership of the data you put into the platform. That is a better starting position than a silent contract. What the same document does not do is turn that ownership into a mechanism: there is no stated export right, no format, no timetable and no return of data obligation on termination. Ownership without a delivery method is a principle rather than a plan, and the gap between the two is where conversions get expensive.",
  },
  {
    q: "Can we get a copy of the database?",
    a: "Not on your own. FactorView is delivered in the browser with nothing installed, so there is no local database, no backup file you hold and no administrator on your staff who can query the tables. Every route to your records runs through the product or through the vendor. That is a normal position for a hosted platform and it is one of the reasons people choose it. It simply means the route out is a request rather than a query, and the terms of that request are worth settling early.",
  },
  {
    q: "They advertise an API. What does it cover?",
    a: "Their integrations page describes a REST interface and webhooks working in both directions, covering clients, debtors, invoices and documents, and states that endpoints come with request and response examples. There is no public documentation, no developer portal and no published specification, so the examples are not something you can read before a conversation. The questions that matter for a migration are whether it returns closed history as well as current records, whether it reaches cash application detail and fee movements, and whether document binaries come with it. Ask for the reference under a confidentiality agreement.",
  },
  {
    q: "Where does our accounting actually live?",
    a: "Worth establishing before you scope anything. FactorView's published integration list covers credit, verification and payment partners. No accounting or general ledger integration is named on it, and the platform's own description of its integration scope does not include accounting. On many books that means the ledger, the journal entries and the month end work sit outside the platform, in a separate accounting package or in spreadsheets. If that is true of you, half of what you would normally migrate is not in the system at all, which changes the shape of the project and usually shortens it.",
  },
  {
    q: "What about escrow, fuel advances and unapplied cash?",
    a: "We could not establish from public material whether these exist as structures in the product. Their published feature list covers reserves, unlimited rebate schedules, unlimited fee types, automatic chargebacks and adjusting over and short payments to the reserve, which is real and specific. Escrow, fuel advances, unapplied cash as a named position and a recourse flag are not described anywhere public. Absence from a website is not absence from a product, so treat this as a question for the vendor rather than a finding. Ask which of them exist and how each is represented, because how they are held determines how they map.",
  },
  {
    q: "The vendor is a small company. Does that matter?",
    a: "It is a fair question and it should be asked of every vendor, at every size, including us. A small focused vendor often gives an operator more direct access to the people who build the product than a large one does, and plenty of operators value that trade deliberately. The diligence is the same either way: what happens to our data if the company is acquired, changes direction or ceases trading, and is that written down. A bank owned vendor with a thousand staff can discontinue a product line, and a two person vendor can support you for a decade. The answer is in the contract, not in the headcount.",
  },
  {
    q: "What should we ask FactorFox before committing?",
    a: "The same questions in the same order. Ask us to show the export clause in the agreement rather than the sentence on this page. Ask what we will refuse to move. Ask us to re price a sample of your settled invoices against the mapped schedules and show every difference before you sign anything. If an answer arrives as reassurance rather than as a document, treat it exactly as you would treat it from anyone else.",
  },
];

export default function FactorViewPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox as a FactorView alternative",
          description:
            "A working guide to converting a factoring book off FactorView: who holds the database, what the published terms commit to on exit, what has to be rebuilt, and how the reconciliation is proved.",
          path: "/migrate/factorview",
        })}
      />

      <PageHero
        trail={[
          { name: "Migrating to FactorFox", path: "/migrate" },
          { name: "FactorView", path: "/migrate/factorview" },
        ]}
        eyebrow="Switching from FactorView"
        title="What a FactorView conversion actually involves."
        lede={
          <>
            <p>
              Written for the principal or controller of a factoring company running FactorView who has been
              asked to evaluate a move. FactorView is a focused browser based platform that has been serving
              this industry since 2012, and operators who run on it tend to like the directness of it. This
              page is not an argument about that.
            </p>
            <p>
              It is the working document we would give you on a first call. Who holds the database, what the
              published terms do and do not commit to, where your accounting probably lives, what has to be
              rebuilt rather than moved, and the questions to put to every vendor on your list including us.
              It is useful whether or not you ever become a customer.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Walk through your book with us" }}
        secondaryCta={{ href: "/migrate", label: "How a conversion runs" }}
        aside={<OwnershipCard />}
      />

      <ProseSection
        eyebrow="Start here"
        title="Ownership and delivery are two different clauses."
        aside={
          <Card accent="accent">
            <Eyebrow tone="signal">Credit where it is due</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              Most published terms in this category say nothing at all about who owns customer data. This
              one says it plainly, and a stated principle is a better place to start a conversation than
              silence.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              The work is turning the principle into a mechanism with a format and a date attached. That is
              a conversation, and it goes better before you have given notice.
            </p>
          </Card>
        }
      >
        <p>
          The published terms on factorview.com, as at August 2026, contain a sentence that most vendor
          agreements in this category do not: &ldquo;You retain ownership of the data you put into
          FactorView.&rdquo; That is a genuinely good clause to have, and an operator holding it is in a
          stronger starting position than one holding nothing.
        </p>
        <p>
          <strong>What the same document does not contain.</strong> An export right. A format. A timetable.
          A return of data obligation on termination. A retention or deletion period. The termination
          section says you may stop using the service and that access may be suspended or terminated for
          violations or as required by law. It is silent on what you receive when that happens.
        </p>
        <p>
          <strong>Why that distinction matters more than it sounds.</strong> Ownership tells you the data is
          yours. It does not tell you how it reaches you, in what shape, or by when. A conversion timetable
          is built entirely out of those three facts. Two operators with identical contracts and different
          answers to those questions have completely different projects in front of them.
        </p>
        <p>
          <strong>None of this is a criticism of that vendor.</strong> It is the ordinary state of software
          contracts across this industry, and the same gap exists in most agreements you will be offered,
          including in places you would not expect. The response is not to be aggrieved. It is to ask, in
          writing, while you are a customer in good standing with time on the clock, and to apply exactly
          the same test to whoever you are considering next.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The export list"
            title="Fourteen things to obtain, and what each one is for."
            lede="Ask for all of it in a single request. On a hosted platform a second request means a second turnaround, and second turnarounds are the most avoidable delay in this exercise."
          />
          <div className="mt-12">
            <DataTable
              caption="What to obtain from FactorView before a conversion, and why each item matters"
              head={["Obtain", "Why you need it"]}
              rows={[
                ["Client master", "Identity, status, purchase limits, default fee arrangements and the terms attached to each account. The spine that everything else hangs from."],
                ["Debtor master", "Identity, credit limits and every identifier. The deduplication problem lives here, and it is a business decision rather than a technical one."],
                ["Client to debtor positions", "Limits and approvals that apply only inside one relationship, plus the concentration position each one creates."],
                ["Invoices, open and closed", "Face value, purchase date, advance, due date, status and the schedule each was purchased on. Ask explicitly whether closed history is included and how far back it reaches."],
                ["Cash receipts with application detail", "Not net balances. The trail from a receipt to the invoices it settled, including over and short payments and how each was adjusted to the reserve."],
                ["Reserve positions and rebate schedules", "Balances and composition, plus every rebate schedule in force. Rebate schedules here are unlimited by design, so expect more of them than anybody remembers."],
                ["Fee configuration", "Every fee type, default fee per client and any arrangement that was agreed rather than configured. Then ask whether prior versions are retained anywhere."],
                ["Chargeback history", "Amount, date, reason and disposition, including anything raised automatically on a scheduled day. This history is what tells an underwriter whether a dilution pattern is forming."],
                ["Verification records", "What was verified, by whom, by what method and when. Both evidence and an honest picture of your current verification coverage."],
                ["Collections activity and notes", "Effort history and the collector's written read on each debtor. Unstructured, underestimated, and where your operational knowledge actually lives."],
                ["Documents with their linkage", "The files, and the relationship between each file and the transaction it evidences. Test the linkage on a sample rather than accepting it in principle."],
                ["Users, roles and the audit trail", "Permissions here are granular across many areas of the system, which makes them a useful starting point for role design rather than a chore."],
                ["Assignment and legal records", "Notices, filing details, dates and continuations. An examiner will ask, and the answer has to survive the move."],
                ["Whatever sits outside the platform", "If your ledger, borrowing base or bank reporting lives in a spreadsheet or a separate accounting package, that material is part of the conversion even though it is not part of the export."],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Treat this as a list of business objects rather than a list of screen names. If something on it
            does not appear in what you receive, that absence is a finding worth writing down and pricing,
            and it is better found now than in a reconciliation.
          </p>
        </Container>
      </Section>

      <ProseSection
        eyebrow="The data model"
        title="What is documented, what is not, and how to tell the difference."
      >
        <p>
          There is less public material about this platform than about the larger names in the category, so
          the honest thing to do is separate what is published from what is unknown, rather than filling the
          gap with assumption. What follows is the line between the two as it stood in August 2026.
        </p>
        <p>
          <strong>Documented, and specific enough to plan around.</strong> Invoices and verifications.
          Reserves, with over and short payments adjusted to the reserve. Unlimited rebate schedules and
          unlimited fee types. Default fees per client. Automatic chargebacks on a set day. Purchase limits
          per client and credit limits per debtor. Aging and dilution trends. Document upload against an
          invoice or a client account, with bulk email out. A client portal for invoice submission, debtor
          entry and reporting. Permissions across a large number of areas of the system, and invoice edits
          that keep the audit trail. That is a coherent factoring model and none of it is hard to map.
        </p>
        <p>
          <strong>Not documented publicly, and therefore a question rather than a finding.</strong> Escrow
          as a named position. Fuel advances. Unapplied cash as a distinct balance. A recourse or non
          recourse flag. Filing records for security interests. Lockbox intake. Payment origination.
          General ledger posting. We looked for each of these and did not find them described. That does not
          mean they are absent from the product, and we will not write as though it does. It means you
          should ask which exist and how each is represented, because representation determines mapping.
        </p>
        <p>
          <strong>The accounting boundary is the one to establish first.</strong> The published integration
          list covers credit, verification and payment partners. No accounting or general ledger integration
          appears on it. On a book like this the ledger frequently lives outside the platform entirely, in
          an accounting package or a spreadsheet somebody maintains. If that is your position, the good news
          is that half of what usually makes a conversion long is not in the system to begin with. The
          discipline is to inventory the outside material with the same seriousness as the inside material,
          because the reconciliation has to tie to it.
        </p>
        <p>
          <strong>Configuration history is the usual quiet gap.</strong> Fee and rebate schedules are
          generally held as they stand today rather than as a series of dated versions. If a client&rsquo;s
          arrangement changed and no version was retained, fees charged before that change cannot be
          reproduced from the data you now hold. You will find this during a re pricing test, and you would
          find it on almost any platform in this category.
        </p>
      </ProseSection>

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="Decisions"
            title="Six things you will decide, and what each one costs."
            lede="Business decisions with consequences you live with. None can be delegated to a project team, and none of them are technical."
          />
          <div className="mt-12 border-t border-[var(--line-strong)]">
            {[
              {
                q: "What is actually in scope, once you count what sits outside?",
                a: "Start by drawing the boundary. If the ledger, the borrowing base or the bank reporting pack lives in spreadsheets, those files are part of the project even though no export will contain them. Naming them in week one turns them into work packages. Discovering them in week five turns them into a delay with somebody's name attached.",
                cost: "Trade off: an uncomfortable inventory now against a scope surprise later.",
              },
              {
                q: "How much settled history arrives as live records?",
                a: "Everything open comes across as live, always. The question is how much closed history joins it as transactional detail rather than as searchable evidence. More live history means deeper trend analysis from day one and a longer reconciliation. Less means a faster cutover and shallower behavioural comparison for a period.",
                cost: "Trade off: analytical depth on day one against reconciliation scope.",
              },
              {
                q: "Which debtor records are actually the same obligor?",
                a: "Deduplication is proposed by matching and confirmed by a person, never applied silently, because merging two debtor records changes your concentration picture and your credit limits. Somebody senior sits with the proposed merges. It is tedious and it is the highest value hour in the project.",
                cost: "Trade off: an unglamorous afternoon against a concentration number you can defend.",
              },
              {
                q: "Do the undocumented fee and rebate arrangements get written down or retired?",
                a: "A platform that allows unlimited fee types and unlimited rebate schedules tends to accumulate arrangements that were agreed in a conversation and configured once. A conversion forces the question, because a rule that is not written cannot be applied by any system. Writing them down means a conversation with a client. Retiring them means a different conversation with the same client.",
                cost: "Trade off: a set of client conversations now against pricing you cannot reproduce later.",
              },
              {
                q: "How long does the incumbent stay readable?",
                a: "Disputes reopen and examiners ask about periods that predate your new platform. On a hosted system you cannot keep a copy running yourself, so continued read access is a contractual term to negotiate while you still hold negotiating position. That is before you give notice, not after.",
                cost: "Trade off: a line item in the budget against an answer you cannot produce.",
              },
              {
                q: "Do you cut over as you operate today, or as you intend to operate?",
                a: "Convert your current process faithfully and change how you work afterwards, so any difference during parallel is a data difference rather than a process difference. Changing both at once makes every variance ambiguous, and ambiguous variances are the ones that never close.",
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
            title: "The spreadsheets around the system",
            body: "On a book where the ledger or the borrowing base lives outside the platform, these encode real rules that nobody has written down. Read them before they are retired. They are a specification, and often the only one.",
          },
          {
            title: "Report layouts",
            body: "Written against one product's internal structures. They are a specification for what to rebuild, not an asset that transfers. Sort them into read by somebody, required by a bank or an auditor, and abandoned.",
          },
          {
            title: "Partner connections",
            body: "Credit, verification and payment integrations are separate commercial relationships. They are re established in the destination and tested with live traffic, not carried across with the data.",
          },
          {
            title: "Client portal habits",
            body: "Your clients submit invoices and add debtors through a portal, and in some cases a branded mobile app supplied by a partner. Their experience changes on a date you choose. Communication is the deliverable.",
          },
          {
            title: "Permission layouts",
            body: "Granular permissions carry real intent about who may do what. The intent transfers. The layout does not, and the exercise of restating it reliably surfaces access nobody meant to grant.",
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
            body: "There is no local database to query, so this stage is a request in a queue you do not control. Submit it before you have chosen a vendor, ask for a committed date and a stated format, and treat the answer as the first real input to your plan rather than a formality.",
          },
          {
            label: "Boundary",
            title: "Driven by how much of your operation lives outside the platform",
            body: "Unusual to name as its own stage, and on this platform it earns one. Establish what is in the system and what is in spreadsheets or a separate accounting package. The answer determines whether this is a data conversion with a process element or a process conversion with a data element.",
          },
          {
            label: "Inspection",
            title: "Driven by how complete the first delivery turns out to be",
            body: "Open what arrives and answer three questions from it alone: what is total funds employed at the stated moment, what is one named client's reserve balance and what is it composed of, and show the signed assignment notice for one named invoice. Anything you cannot answer becomes a second request.",
          },
          {
            label: "Mapping and trial load",
            title: "Driven by fee and rebate schedule count more than by invoice count",
            body: "Unlimited fee types and unlimited rebate schedules mean the mapping effort tracks arrangement count rather than volume. Re pricing settled invoices against the mapped schedules either produces a short difference list or a long one, and its length decides how many cycles follow.",
          },
          {
            label: "Parallel and reconciliation",
            title: "Driven by your period close, not by us",
            body: "It runs through at least one full close, because a close is the only event that tests everything at once. Where the ledger sits outside the platform, parallel has to tie to that ledger as well. It ends when the difference list is empty or every remaining item has an owner and a written explanation you accepted.",
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
            lede="Put these to us and to everyone else you are talking to, at every size of vendor. Compare the shape of the answers rather than the enthusiasm."
          />
          <div className="mt-12">
            <DataTable
              caption="Vendor diligence questions and the FactorFox answer"
              head={["Ask every vendor", "What FactorFox says"]}
              rows={[
                [
                  "Our contract says we own our data. Which clause says how we get it?",
                  "Ours states the mechanism, not only the principle. Ownership without a format and a date attached is a sentence rather than a plan, and that is true of our agreement as much as anyone else's.",
                ],
                [
                  "On exit, what do we receive, in what format, and by when?",
                  "Your book, your documents, your audit history and your sealed packets. Export is a supported operation rather than a negotiation. Ask us to show you the clause.",
                ],
                [
                  "Does it include closed history, notes, documents and the audit trail?",
                  "Yes, and the document to transaction linkage comes with it. If a vendor answers open items only, that is not a failure, but you have just learned the real scope of your project.",
                ],
                [
                  "Can we read the API documentation before we sign?",
                  "Yes. Ask every vendor the same, and read what comes back rather than the page advertising it. An interface with no documentation is a commitment you cannot size.",
                ],
                [
                  "What happens to our data if you are acquired or cease trading?",
                  "A fair question at any size, including ours, and one to ask of large vendors as well as small ones. The answer belongs in the contract rather than in a reassurance, and headcount is not the answer.",
                ],
                [
                  "Will you re price a sample of our settled invoices and show every difference?",
                  "Yes, during the trial load, and the difference list is a document you keep. This is the test that finds the expensive problem, so we would rather run it early than meet it in parallel.",
                ],
                [
                  "Can your automation move money without a person?",
                  "No. The machine may stop money. Only a named human may let it through, four eyes applies by default, and certain gates can never be made advisory by any role or configuration.",
                ],
                [
                  "What will you refuse to do?",
                  "We will not plug a variance to make a book tie, and we will not accept an instruction to. We will not import a note as an observation the platform made. We will not claim a source is live when it is dark.",
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
          The vocabulary is identical. Invoices, advances, reserves, rebates, chargebacks and verifications
          mean what they have always meant. Nobody learns a new word for anything, which is why the
          retraining conversation is shorter than people expect.
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
          <strong>The spreadsheet becomes a rule the system runs.</strong> Where eligibility, concentration
          caps and the borrowing base have been maintained by hand outside the platform, they become written
          rules that recalculate and that report which test moved and why. See{" "}
          <InlineLink href="/platform/borrowing-base">borrowing base</InlineLink> for the form those rules
          take once they are explicit, and what the analyst who used to rebuild them each morning does
          instead.
        </p>
        <p>
          <strong>Exposure is read across the portfolio, not just within a client.</strong> Concentration
          under one debtor name across several clients, near duplicate documents across the whole book,
          payment velocity by obligor, invoice size deviation against a client&rsquo;s own median. These are
          the patterns that only exist above the level of a single client file, and they are where the
          losses come from.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What FactorView operators ask us first" />

      <RelatedPages
        links={[
          { href: "/migrate", label: "Migration overview", note: "The inventory, the stages and the reconciliation posture." },
          { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "The same exercise on an installed platform." },
          { href: "/migrate/factorcloud", label: "Moving off FactorCloud", note: "Where the export path sits, and which tier holds it." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Where the eligibility spreadsheet goes once it is explicit." },
          { href: "/platform/accounting", label: "Accounting", note: "Where the ledger lands and how a period is reproduced." },
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

function OwnershipCard() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Pre conversion &middot; The two clauses</p>
          <Status kind="info" label="Read yours" />
        </div>

        <div className="p-5">
          <p className="text-[15px] leading-[1.6] text-[var(--fg-muted)]">
            Ownership and delivery are separate commitments. Most agreements in this category contain one of
            them at most.
          </p>

          <ol className="mt-4 space-y-4">
            {[
              [
                "Q1",
                "Does our agreement say we own the data we put in?",
                "Some do say it. It is a better starting position than silence, and it is not the same thing as a route out.",
              ],
              [
                "Q2",
                "Does anything say how we receive it, in what format, and by when?",
                "This is the clause that a conversion timetable is actually built from. Ownership alone does not produce a date.",
              ],
              [
                "Q3",
                "What survives if the vendor is acquired or stops trading?",
                "Fair to ask of a two person vendor and of a bank owned one. The answer belongs in the contract, not in the headcount.",
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
            Ask us all three
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        The contract check we run on a first call. Observations about published terms were made in August
        2026 and are worth re checking against the current version and your own signed agreement.
      </figcaption>
    </figure>
  );
}
