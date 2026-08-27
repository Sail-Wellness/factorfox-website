import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PageHero,
  ProblemSolution,
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
  title: "Factoring software migration and what breaks",
  description:
    "A conversion is not a data transfer. Map fee schedules, open receivables, reserves and chargeback history, then reconcile on differences not on totals.",
  path: "/migrate",
  intent: "migration",
  target: "factoring software migration",
});

const FAQS = [
  {
    q: "What actually goes wrong in a factoring conversion?",
    a: "Almost never the invoice table. What goes wrong is economics. An open invoice arrives in the new system with a face value and a purchase date and none of the arrangement that governs it: which fee schedule it was priced under, which tier it had reached, whether the client was on a grace period somebody granted verbally, what was already earned and what has not accrued yet. The rows tie and the money does not, and you find out on the first fee run rather than during the conversion.",
  },
  {
    q: "Do we have to run both systems in parallel?",
    a: "You should want to. Parallel running is the only way to see a difference between two systems on the same day against the same events, and a difference you can see is a difference you can decide about. We would rather you kept the incumbent readable through at least one full period close than cut over cleanly and spend the following quarter arguing about which system was right in March.",
  },
  {
    q: "What happens to history that cannot be moved cleanly?",
    a: "It gets preserved as history rather than forced into live records. A four year old dispute thread with three attachments and a resolution note is evidence, not a transaction, and pretending it is a transaction corrupts both. Historical records come across attached to the client and the debtor they belong to, readable and searchable, marked as originating in the prior system so nobody later mistakes an imported note for something FactorFox observed.",
  },
  {
    q: "Who does the reconciliation, you or us?",
    a: "Both, and separately, which is the point. We reconcile the converted book against the extract we were given. You reconcile the converted book against what your own controller believes is true, which is not always the same thing as what the old database says. Where the two disagree, the disagreement is the finding. A reconciliation performed only by the vendor is a vendor marking its own work.",
  },
  {
    q: "When in the month should a cutover happen?",
    a: "Between funding runs, after a completed period close, and never in the same week as an audit, a field exam or a facility reporting date. The constraint that matters is not the calendar date. It is that there must be a clean line where everybody agrees what the balances were, because that line is what every later reconciliation is measured against.",
  },
  {
    q: "What if the numbers do not tie?",
    a: "Then they do not tie, and you see the list. We do not resolve a variance by adjusting the new system until it matches. Every difference is presented with the record on both sides, a reason where the reason is knowable, and a named person who decides what the correct answer is. Some differences turn out to be errors in the old book that nobody had ever been in a position to see.",
  },
];

export default function MigratePage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox migration",
          description:
            "Conversion of a factoring or asset based lending book onto FactorFox, including chart of accounts and fee schedule mapping, open receivables, reserves, chargeback history, document history and a published reconciliation.",
          path: "/migrate",
        })}
      />

      <PageHero
        trail={[{ name: "Migrating to FactorFox", path: "/migrate" }]}
        eyebrow="Migration"
        title="Copying the rows is the easy part."
        lede={
          <>
            <p>
              Written for the principal, the chief operating officer or the controller of a funding business
              who has been told a conversion is a data transfer and suspects that is not true.
            </p>
            <p>
              It is not true. Invoices, clients and debtors move without much drama. What causes the damage is
              everything that governs those rows and was never a field in the old system: the arrangement an
              invoice was priced under, what was earned versus what accrued, why a reserve is being held, what
              a chargeback was actually about, which promise a collector is relying on. That is the work.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Talk through your conversion" }}
        secondaryCta={{ href: "/migrate/factorsoft", label: "Moving off FactorSoft" }}
        aside={<ReconciliationScene />}
      />

      <ProblemSolution
        eyebrow="Why conversions fail"
        title="A conversion goes wrong quietly, then all at once."
        lede="Nothing on this list is exotic. Every one of them is a normal thing that happens when a book moves and nobody was made responsible for the part of the book that never lived in a table."
        rows={[
          {
            problem:
              "The invoice file loads cleanly, so the project is declared on track. The first fee run produces numbers nobody can defend to a client.",
            response:
              "Fee schedules are mapped and then proven before cutover by re pricing a sample of already invoiced history and comparing it to what the old system actually charged.",
          },
          {
            problem:
              "Reserve balances come across as a single number per client because that is all the old system stored, and the reason each reserve exists is lost.",
            response:
              "Reserves are carried with their composition and their cause where the source supports it, and where it does not, the gap is stated on the reconciliation instead of being averaged away.",
          },
          {
            problem:
              "Chargeback history is imported as amounts and dates. Six weeks later a credit officer cannot tell whether a client has a dilution problem or had two bad debtors in 2024.",
            response:
              "Chargebacks come across with their reason and their disposition where recorded, because that history is what continuous underwriting reads to tell you whether a pattern is forming.",
          },
          {
            problem:
              "Documents live on a file server in folders named after whoever created them, and nobody notices until an examiner asks for the assignment notice on a specific invoice.",
            response:
              "Document history is attached to the client, the debtor and the transaction it belongs to, marked as originating in the prior system, and searchable from the record it evidences.",
          },
          {
            problem:
              "The go live report says the migration succeeded. It does not say what is different, because nothing was measured against the old book.",
            response:
              "The reconciliation is the deliverable. It lists every difference by category with both sides shown, and a difference is closed by a named person deciding, not by the number moving.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The inventory"
            title="Nine things move. Only three of them are simple."
            lede="This is the list we work from. If a vendor cannot tell you what they intend to do about rows four through nine, they are planning to load an invoice file and call it a migration."
          />
          <div className="mt-11">
            <DataTable
              caption="What moves in a factoring conversion, and what makes each one hard"
              head={["What moves", "Why it is harder than it looks", "How it is handled"]}
              rows={[
                [
                  "Client and debtor master data",
                  "Two systems disagree about what a debtor is. The old book holds the same obligor under four spellings, three addresses and two tax identifiers because four different clerks created it.",
                  "Entities are matched and deduplicated with the merge proposed rather than performed, so a human confirms that two names are one obligor before exposure is combined under it.",
                ],
                [
                  "Chart of accounts",
                  "The mapping is rarely one to one. Accounts that were split for a reason nobody remembers, and accounts that were never split and should have been, both surface here.",
                  "Mapped account by account with the controller present, then proven by re posting a historical period and comparing the resulting trial balance to the one already filed.",
                ],
                [
                  "Fee schedules and pricing",
                  "The most dangerous item on the list. Tiered rates, minimums, floors, per invoice charges, wire and processing fees, verbal concessions, and pricing that changed mid relationship without a version being kept.",
                  "Rebuilt as explicit versioned schedules, then validated by re pricing a sample of settled invoices and reconciling to what was actually charged. Every unexplained difference is raised, not absorbed.",
                ],
                [
                  "Open receivables",
                  "The face value copies. The economics do not. Purchase date, advance already paid, fees earned to date, fees accrued and not yet charged, and which schedule governs the remainder of its life.",
                  "Each open item carries its own economics, and the sum of those economics is reconciled to funds employed on the incumbent as at the cutover moment before anything is trusted.",
                ],
                [
                  "Reserve balances",
                  "A reserve is a number in most systems and a set of reasons in reality. Escrow held for a disputed debtor and a routine holdback are the same field and completely different facts.",
                  "Carried at the level the source supports, with composition where it exists, and with the loss of composition stated explicitly where it does not.",
                ],
                [
                  "Chargeback and dispute history",
                  "Usually the least structured data in the building. Reasons live in free text notes, dispositions live in email, and the pattern that matters is spread across both.",
                  "Imported with reason and disposition where recorded, retained as evidence where not, and never presented as a clean categorisation that the source cannot support.",
                ],
                [
                  "Cash application history",
                  "Payments that were applied across several invoices, short paid items, unapplied cash and misdirected payments that were recovered. Reversing and re deriving this is where balances quietly move.",
                  "Applications come across as applications rather than as net balances, so the audit trail from a payment to the invoices it settled survives the move.",
                ],
                [
                  "Document history",
                  "Volume, naming and the fact that the link between a document and the transaction it evidences often exists only in a folder path.",
                  "Attached to the client, debtor and transaction, marked as originating in the prior system, and readable from the record rather than from a shared drive.",
                ],
                [
                  "Collections state",
                  "Promises, contact history, escalation status and the collector's own judgement about a debtor. Most of it is notes, and the notes are the value.",
                  "Contact history and promises are carried so that priority on day one reflects what your collectors already know, rather than starting the portfolio from zero.",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <ProseSection
        eyebrow="The real difficulty"
        title="The hard part is the things the old system never stored."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">A useful test</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Pick one open invoice on your current system. Ask it three questions: which fee schedule
              version priced this, why is a reserve being held against this client today, and who agreed
              the exception that let it fund.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              If the answers are in three people&rsquo;s heads and one email thread, that is not a criticism
              of your operation. It is the actual scope of your conversion, and it is better to find it now
              than in week five.
            </p>
          </Card>
        }
      >
        <p>
          Every recording system stores what it was asked to store. What it was never asked to store is the
          reasoning: the why behind a reserve, the authority behind an exception, the version of the rule
          that was in force when a decision was made. Operators fill that gap with memory, and memory is
          portable only while the person is still employed.
        </p>
        <p>
          <strong>Reasoning is not in the extract.</strong> An override exists as a changed number. The
          person who approved it, what they were looking at, and what rule they set aside are not fields.
          During conversion this shows up as balances that are correct and unexplainable, which is worse than
          balances that are wrong, because nobody can tell whether to fix them.
        </p>
        <p>
          <strong>Rule versions are not in the extract.</strong> If a client&rsquo;s pricing changed in
          February and the system holds only the current schedule, then every fee charged before February
          cannot be reproduced from the data you now hold. This is the single most common source of a
          conversion variance nobody can close.
        </p>
        <p>
          <strong>Eligibility logic is often not in the system at all.</strong> Concentration caps, cross age
          rules, ineligible categories and debtor limits frequently live in a spreadsheet that one analyst
          maintains and rebuilds every morning. It converts, but it converts as a conversation rather than as
          a file, and it has to be written down as rules before it can be run. See{" "}
          <InlineLink href="/platform/borrowing-base">borrowing base</InlineLink> for how those rules are expressed once they
          are explicit.
        </p>
        <p>
          <strong>Judgement about people is not in the extract.</strong> Your collections manager knows which
          debtor pays on the second call and which one always disputes at ninety days. Contact history and
          promise records carry a usable amount of that across. Nothing carries all of it, and a vendor who
          tells you otherwise has not done this.
        </p>
      </ProseSection>

      <StepList
        eyebrow="How it runs"
        title="Six stages, in this order, for a reason."
        lede="We do not publish a fixed timetable, because the honest driver of duration is not our software. It is the condition of your data, how many fee arrangements are undocumented, and how quickly your own people can make decisions. What follows is what makes each stage long or short, so you can estimate your own."
        steps={[
          {
            label: "Extract",
            title: "Get everything out before anyone designs anything",
            body:
              "Full extraction of transactional data, master data, balances, documents and any reporting definitions you rely on, taken as at a stated moment and kept unchanged as the baseline. This stage is short when your incumbent gives you direct database access and long when extraction happens through a vendor request queue. Start it before you have chosen anyone, including us. The extract is yours either way, and holding it changes the conversation.",
          },
          {
            label: "Discovery",
            title: "Find what is not in the extract",
            body:
              "Sitting with the controller, the credit officer and the collections manager to write down the rules that live in spreadsheets, email and memory. Fee arrangements without a document, eligibility logic maintained by hand, exceptions in force, verbal concessions. This stage is long in proportion to how much of your operation runs on undocumented arrangement, which is not a judgement about you. It is a description of every factoring company we have ever converted.",
          },
          {
            label: "Mapping",
            title: "Chart of accounts, fee schedules, entities",
            body:
              "Account by account, schedule by schedule, with your controller in the room. Entity deduplication is proposed here and confirmed by a person, never applied silently, because merging two debtor records is a change to your concentration picture. Duration is driven by how many accounts and schedules you carry and how many decisions require someone who is hard to get in a room.",
          },
          {
            label: "Trial load",
            title: "Load it, then try to break it",
            body:
              "The book is loaded into an isolated environment and then tested against reality: re price settled invoices and compare to what was charged, re post a closed period and compare to the filed trial balance, rebuild a historical borrowing base certificate and compare to the one you submitted. This stage repeats. The number of repeats is the actual variable in a conversion timetable, and it is decided by what the first load reveals.",
          },
          {
            label: "Parallel and reconciliation",
            title: "Both systems, same events, differences published",
            body:
              "You keep operating on the incumbent while the same activity is reflected in FactorFox, through at least one full period close. Differences are listed daily with both sides shown. Each one is closed by a named person deciding what the correct answer is, and that decision is recorded. This stage ends when the difference list is empty or every remaining item has an owner and an accepted explanation.",
          },
          {
            label: "Cutover",
            title: "A line everybody agrees on",
            body:
              "Between funding runs, after a completed close, away from audit and facility reporting dates. Balances are frozen, stated, agreed and signed. The incumbent stays readable afterwards. Anyone who tells you the old system can be switched off on the same day has not been through a dispute that reopens six months later.",
          },
        ]}
      />

      <ProseSection
        eyebrow="Reconciliation posture"
        title="Differences are shown. They are not reported as success."
        tone="sunken"
      >
        <p>
          Most conversion reporting is written to make a project look finished. A percentage of records
          loaded, a count of errors resolved, a green status. None of that tells a controller whether the
          book is right, because a record can load perfectly and still be wrong in the only way that matters.
        </p>
        <p>
          We take the opposite posture, and it is the same posture the platform takes about everything else.
          FactorFox refuses to show a delta it cannot prove, and it will offer to take a first observation
          rather than reconstruct a yesterday that it did not witness. A conversion is that principle applied
          to a whole book at once.
        </p>
        <p>
          <strong>Every category reconciles to the incumbent, not to itself.</strong> Funds employed, open
          receivable count and value, reserve balances, unapplied cash, client level exposure, debtor level
          exposure and the general ledger control accounts. Each is compared to the source, and the
          comparison is a published document rather than a claim in a status meeting.
        </p>
        <p>
          <strong>A difference is a finding, not a defect to be hidden.</strong> Some differences are our
          mapping. Some are your source data. A meaningful number of them are things that were wrong in the
          old book and were never visible because nothing had ever compared those two figures. Those are
          worth the price of the exercise on their own.
        </p>
        <p>
          <strong>Nothing is adjusted to force a match.</strong> If the converted book disagrees with the
          incumbent, the disagreement is presented with both records and a named person decides. We do not
          plug a variance, and we do not accept an instruction to plug one. That is not caution. A book that
          was made to tie without anyone knowing why cannot be defended to an examiner, a bank or a client.
        </p>
        <p>
          <strong>What was imported stays labelled as imported.</strong> Historical records carry their
          origin, so a note that came from your prior system is never mistaken for something FactorFox
          observed. Everything the platform observes after cutover is append only at the database level and
          carries its own evidence. Read <InlineLink href="/platform/evidence">how evidence works</InlineLink> for what that
          means once you are live.
        </p>
      </ProseSection>

      <FeatureGrid
        eyebrow="What you should demand"
        title="Ask every vendor for these, including us"
        lede="None of this is proprietary and none of it is unreasonable. A vendor who will not commit to it is telling you something."
        columns={2}
        items={[
          {
            title: "Your extract, before you commit",
            body: "You should hold a complete export of your own book before you sign anything with anybody. It is the strongest position you will ever be in, and it makes every later conversation about timetables shorter.",
          },
          {
            title: "A named reconciliation deliverable",
            body: "Not a status report. A document listing each reconciled category, the figure on both sides, and every difference with an owner. Ask to see the template before you sign, not after.",
          },
          {
            title: "A re priced sample, not an assurance",
            body: "Ask for settled invoices to be re priced under the mapped schedules and compared to what was actually charged. This is the test that finds the expensive problem, and it can be run early.",
          },
          {
            title: "A parallel period, in writing",
            body: "Through at least one full close, with the incumbent readable and the difference list published. If a plan does not contain one, the plan is a data load with a launch date attached.",
          },
          {
            title: "A stated position on what will not move",
            body: "Every conversion has some of this. The answer should be specific and given up front, not discovered in week five. Ours is on this page and on the FactorSoft page in more detail.",
          },
          {
            title: "Read access to the old system after cutover",
            body: "Disputes reopen. Examiners ask about periods that predate your new platform. Budget for the incumbent to stay readable, and negotiate that term while you still have room to negotiate it.",
          },
        ]}
      />

      <Section bordered>
        <Container width="narrow">
          <Eyebrow tone="signal">Where you are coming from</Eyebrow>
          <h2 className="mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)]">Start with the platform you actually run.</h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
            The general shape of a conversion is the same everywhere. The specifics are not, and the
            specifics are what cost money. Where we have written the detail down, it is here.
          </p>
          <div className="mt-9 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)]">
            <Link href="/migrate/factorsoft" className="bg-[var(--bg-raised)] p-6 transition-colors hover:bg-[var(--bg-sunken)]">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-[1.0625rem]">Moving off FactorSoft</h3>
                <Status kind="info" label="Written in detail" />
              </div>
              <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                What the data model carries and what it does not, what you will be asked to decide, what to
                export before you start, and the questions to put to any vendor including us.
              </p>
            </Link>
            <div className="bg-[var(--bg-raised)] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-[1.0625rem]">Spreadsheets, accounting packages and in house systems</h3>
                <Status kind="info" label="On request" />
              </div>
              <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                Different problem, same discipline. There is usually more undocumented rule and less
                structured history, which moves the work from mapping into discovery. Ask us on a first call
                and we will tell you which parts of this page apply to you and which do not.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What a controller asks before approving a conversion" />

      <RelatedPages
        links={[
          { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "The data model, the decisions and the export list." },
          { href: "/compare", label: "How we compare", note: "Recording systems against decision systems, by capability." },
          { href: "/platform/accounting", label: "Accounting", note: "Cash application, ledger and audit packets after cutover." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Where eligibility rules go once they leave the spreadsheet." },
          { href: "/platform/pricing", label: "Pricing", note: "What drives cost, including the cost of migration itself." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Why an imported record stays labelled as imported." },
        ]}
      />

      <CtaBand
        title="Bring us your reconciliation, not your requirements list."
        body="Send the categories you would need to see tie, and we will tell you which of them are straightforward, which are the ones that will take work, and where your current data will not support what you want. That conversation is more useful than a demonstration."
        primary={{ href: "/demo", label: "Plan your conversion with us" }}
        secondary={{ href: "/migrate/factorsoft", label: "Read the FactorSoft detail" }}
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

function ReconciliationScene() {
  return (
    <figure className="m-0">
      <div className="border border-[var(--line-strong)] bg-[var(--bg-raised)]" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Conversion &middot; Parallel day 11 &middot; Reconciliation
          </p>
          <Status kind="attention" label="4 open differences" />
        </div>

        <div className="p-5">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-4 gap-y-3 text-[0.8125rem]">
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">Category</p>
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">Incumbent</p>
            <p className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">FactorFox</p>

            {[
              ["Funds employed", "$14,208,551.20", "$14,208,551.20", true],
              ["Open invoice count", "3,914", "3,914", true],
              ["Reserve balances", "$1,902,440.06", "$1,901,988.31", false],
              ["Unapplied cash", "$77,310.44", "$77,310.44", true],
              ["Client exposure, top 10", "$6,440,199.85", "$6,440,199.85", true],
            ].map(([label, a, b, ok]) => (
              <div key={String(label)} className="contents">
                <p className={`m-0 ${ok ? "text-[var(--fg-muted)]" : "font-semibold text-[var(--fg)]"}`}>{label}</p>
                <p className="u-tabular m-0 text-right text-[var(--fg-muted)]">{a}</p>
                <p
                  className="u-tabular m-0 text-right"
                  style={ok ? undefined : { color: "var(--color-warn-600)", fontWeight: 600 }}
                >
                  {b}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-5 border-l-2 pl-3 text-[0.8125rem] leading-[1.55]"
            style={{ borderColor: "var(--color-warn-600)", color: "var(--color-warn-600)" }}
          >
            Reserve variance $451.75 across 3 clients. Cause: escrow held against a disputed debtor with no
            composition in the source extract. Open. Owner: controller. Not adjusted.
          </p>

          <p className="mt-4 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            Differences shown &middot; nothing plugged &middot; every close requires a named decision
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the daily reconciliation during a parallel period. The categories, the refusal to
        adjust a variance and the named owner requirement are how the process actually works. The figures and
        the client names come from a seeded demonstration book.
      </figcaption>
    </figure>
  );
}
