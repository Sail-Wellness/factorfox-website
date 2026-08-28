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
  title: "FactorCloud alternative and conversion guide",
  description:
    "Planning a move off FactorCloud: which plan tier holds your export path, what the ledger structure implies, and what to settle before you give notice.",
  path: "/migrate/factorcloud",
  intent: "migration",
  target: "FactorCloud alternative",
});

const FAQS = [
  {
    q: "Is our export path included in what we already pay for?",
    a: "Check your plan before you assume it. As published in August 2026, FactorCloud's pricing page marks open API access as a feature of the Enterprise tier and not the Standard tier, and its open API page states that API access is included in Enterprise plans. Custom data retention policies are listed the same way. If you are on the lower tier, the programmatic route to your own records may sit behind a commercial conversation, and that conversation is easier to have before you are visibly leaving than after. This is a question about your contract rather than an accusation about theirs.",
  },
  {
    q: "They publish an API. Is it documented?",
    a: "Not publicly, as at August 2026. The open API page names six endpoints covering clients, schedules, invoices, debtors, payments and reports, mentions webhooks and a sandbox, and shows a code sample. There is no developer portal, no endpoint reference, no specification and no documentation subdomain that resolves. Their release notes do refer to API documentation existing internally, so ask for it under a confidentiality agreement and read it before you plan a migration around it. Judge the surface, not the marketing.",
  },
  {
    q: "What about the ledger, and the accounting behind the balances?",
    a: "This is the question to press hardest. The product clearly holds discrete named ledgers, because its own release notes name several of them and describe manual transactions carrying offsetting entries against a specific ledger. None of the six publicly named API endpoints covers ledger movements or journal entries. So the balances are visible through reports, and the postings that produced them may or may not be reachable programmatically. Ask directly whether you can obtain transaction level ledger detail on exit, in what format, and whether it is contractual.",
  },
  {
    q: "What do the published terms commit to on exit?",
    a: "As published in August 2026, the terms and conditions on factorcloud.com are a general website terms of use. They cover intellectual property, third party services, accounts, termination, disclaimers and jurisdiction. They do not state who owns customer data, they do not create an export right, they do not address return of data on termination, and they do not set a retention or deletion period. Whatever governs your book is in your signed subscription agreement, which is not public. Read yours and find the clause, or establish that there is not one.",
  },
  {
    q: "Do the documents come out?",
    a: "Establish this on a sample rather than in principle. Document upload is well described in their public help material, including a designation on each invoice document. Retrieval in bulk is not described anywhere public, and no named API endpoint covers attachments. The test that matters is the same one we would apply to any platform: produce the signed assignment notice for one named invoice, from the export alone, with its link to that invoice intact. If that is difficult, you have found real scope while it is still cheap to find.",
  },
  {
    q: "We have invoices that were created from payments. Does that matter?",
    a: "It does, and it is worth knowing before you map anything. The platform documents a feature for posting a payment against an invoice that is not in the system, which creates the invoice from the payment. That is a practical operational tool. It also means a subset of your invoice records may carry less origination detail than the rest, because they entered through the cash door rather than the purchase door. Identify them early. They are not a problem, but they map differently and they will show up in a re pricing test if nobody has flagged them.",
  },
  {
    q: "What should we ask FactorFox before committing?",
    a: "The same questions, in the same order. Ask which tier our export lives in, and the answer is all of them, because an export you have to upgrade to buy is not an export. Ask us to show the clause in the agreement rather than a sentence on this page. Ask us to re price a sample of your settled invoices and show every difference before you sign. If any answer arrives as reassurance rather than as a document, treat it exactly as you would from anyone else.",
  },
];

export default function FactorCloudPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox as a FactorCloud alternative",
          description:
            "A working guide to converting a factoring book off FactorCloud: the export path and which tier holds it, the ledger question, what has to be rebuilt, and how the reconciliation is proved.",
          path: "/migrate/factorcloud",
        })}
      />

      <PageHero
        trail={[
          { name: "Migrating to FactorFox", path: "/migrate" },
          { name: "FactorCloud", path: "/migrate/factorcloud" },
        ]}
        eyebrow="Switching from FactorCloud"
        title="What a FactorCloud conversion actually involves."
        lede={
          <>
            <p>
              Written for the principal or controller of a factoring company running FactorCloud who has
              been asked to evaluate a move and has found nothing useful to read. FactorCloud is a modern
              cloud platform that documents its own product publicly and in unusual detail, which we will
              come back to, because it is genuinely to their credit and it makes this page possible.
            </p>
            <p>
              This is the working document we would give you on a first call. Where your export path sits
              and which plan tier holds it, what the ledger structure implies, what the published terms
              commit to, what has to be rebuilt rather than moved, and the questions to put to every vendor
              on your list including us. It is useful whether or not you ever become a customer.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Walk through your book with us" }}
        secondaryCta={{ href: "/migrate", label: "How a conversion runs" }}
        aside={<TierCard />}
      />

      <ProseSection
        eyebrow="Start here"
        title="Find out which tier your export lives in."
        aside={
          <Card accent="accent">
            <Eyebrow tone="signal">Why the order matters</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              An operator holding a complete, dated extract of their own book negotiates differently with
              every vendor in the process, starting with the incumbent.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              The conversation stops being about whether a move is feasible and becomes a conversation about
              cost and timing. Establish the route out while nothing about your intentions is obvious.
            </p>
          </Card>
        }
      >
        <p>
          Most conversion advice starts with what to export. On this platform the first question is narrower
          and more commercial: what does your subscription entitle you to, and does the answer change if you
          upgrade. That is unusual enough to lead with.
        </p>
        <p>
          <strong>What their published pricing says.</strong> As at August 2026, two tiers are offered.
          Open API access appears in the Enterprise column and is marked absent from the Standard column,
          and the open API page states that API access is included in Enterprise plans. Custom data
          retention policies are listed as an Enterprise entitlement in the same table. Roughly four dozen
          reports are described as exportable on both tiers.
        </p>
        <p>
          <strong>What that means in practice.</strong> If you are on the Standard tier, your documented
          route to your own records is the report export. Reports are rendered answers. They are genuinely
          useful, and in a conversion they are not the same thing as the records the answers were computed
          from. Whether a fuller extract is available to you, and on what commercial terms, is a question
          for your account manager, and the moment to ask it is now rather than during a notice period.
        </p>
        <p>
          <strong>Give them the chance to answer well.</strong> Nothing here says a Standard customer cannot
          obtain their data. It says the public record does not establish that they can, and that a right
          you cannot point at in a document is not a right you can plan against. We would apply the identical
          test to ourselves, and further down this page we do.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The export list"
            title="Fifteen things to obtain, and what each one is for."
            lede="Ask for all of it in one request. The most avoidable delay in any conversion is discovering in week six that you need something you could have asked for in week one."
          />
          <div className="mt-12">
            <DataTable
              caption="What to obtain from FactorCloud before a conversion, and why each item matters"
              head={["Obtain", "Why you need it"]}
              rows={[
                ["Client, debtor, broker and vendor masters", "Four entity types rather than two on many books. Brokers in particular are a first class record here, and a mapping that treats them as debtors will distort your concentration picture."],
                ["Client to debtor relationships", "Credit limits, approvals, buy and no buy positions, and any rule that applies only inside one relationship."],
                ["Terms, overrides and interest configuration", "Advance rates, discount rates, reserve requirements, weekly fees, invoice age limits, and every per client and per debtor override. Then ask whether prior versions are retained."],
                ["Invoices and schedules, open and closed", "Ask explicitly whether closed history is included and how far back. Ask separately about invoice line items if you use them, because they are an optional structure rather than a default one."],
                ["Payments with application detail", "Not net balances. The trail from a receipt to the invoices it settled, including partial and short payments, is what makes a period reproducible."],
                ["Invoices created from payments", "Records that entered through the cash door rather than the purchase door carry less origination detail. Identify them before mapping rather than during reconciliation."],
                ["Ledger movements and manual transactions", "The postings behind the balances, including offsetting entries and the ledger each one hit. This is the item most likely to require a specific conversation."],
                ["Escrow, fee escrow and reserve positions", "Balances and composition. Named ledgers exist for several of these, so ask for them as ledgers rather than accepting a single summary figure."],
                ["Advances that are not invoice advances", "Fuel advances and over advances behave differently, and over advances may carry a fee structure of their own. They are reliably the last thing anyone maps."],
                ["Chargebacks, refunds and their fees", "Amount, date, reason and disposition. This is the history that tells an underwriter whether a dilution pattern is forming."],
                ["Collections activity", "Pipeline status, callback and promise dates, and the collector's written read on each debtor. Unstructured, underestimated, and where your operational knowledge lives."],
                ["Documents with their linkage", "The files, and the relationship between each file and the transaction it evidences. Test this on a sample. Upload is well documented, bulk retrieval is not."],
                ["Users, roles and the change log", "Who can do what, and who changed what. Permissions here are granular per entity, which is a real asset when you come to design roles in the new system."],
                ["Report inventory", "Not portable, but a specification. Sort into read by somebody, required by a bank or an auditor, and abandoned."],
                ["Assignment and legal records", "Notice status, signed dates, contract expiry positions and the notices themselves. An examiner will ask, and the answer has to survive the move."],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[14px] leading-[1.6] text-[var(--fg-subtle)]">
            Treat this as a list of business objects rather than a list of screen names, and expect your
            configuration to differ. If something on this list does not appear in what you receive, that
            absence is a finding worth writing down and pricing.
          </p>
        </Container>
      </Section>

      <ProseSection
        eyebrow="The data model"
        title="What the public record tells you, and where it stops."
      >
        <p>
          FactorCloud publishes an open support site with how to articles and dated release notes running
          into 2026. That is more than most vendors in this category do, ourselves included on some
          surfaces, and it means a buyer can learn a great deal about the product before a sales call. It is
          worth saying so plainly before saying anything else.
        </p>
        <p>
          <strong>The entity model is visible and it is sensible.</strong> Clients, brokers, debtors and
          vendors as separate types. Client to debtor relationships as first class objects. Terms with per
          client and per debtor overrides. Industry type driving which identity fields appear, which is how
          transportation specific fields surface on a freight book. Granular permissions per entity. None of
          that is guesswork, and none of it is difficult to map.
        </p>
        <p>
          <strong>The ledger is named but not described.</strong> Release notes name discrete ledgers and
          describe manual transactions carrying offsetting entries against a specific one. Accounting exports
          carry general ledger codes, and as at August 2026 custom general ledger codes were still listed as
          in progress, which implies the codes in use are currently system defined. So we know postings
          exist and we know they are structured. We do not know from public material how they are keyed to
          an invoice, a client and a period, and no named API endpoint reaches them.
        </p>
        <p>
          <strong>Recent structure is genuinely recent.</strong> Fee escrow, over advances and multi currency
          all appear in 2026 release notes. New structure is not a weakness, it is a product being built.
          It is relevant to a conversion only because history recorded before a structure existed is
          recorded differently from history recorded after it, and that boundary is worth locating in your
          own data rather than discovering it in a reconciliation.
        </p>
        <p>
          <strong>The import mechanics tell you something about the matching discipline.</strong> Their
          documented payment import matches client and debtor names as exact case sensitive strings and
          rejects formatting that most systems tolerate. That is a strict contract at the door, and strict
          input contracts usually mean the internal identifiers are doing real work. It is a reason to ask
          for identifiers rather than names in whatever you receive.
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
                q: "Do you upgrade in order to leave?",
                a: "An uncomfortable question and a real one. If the fuller export route sits on a tier above yours, the choice is between a period of higher subscription cost and a migration built on report output. Price both. The upgrade is often the cheaper answer once you count the reconstruction work that report only migrations create, and it is a legitimate thing to negotiate rather than accept.",
                cost: "Trade off: a short term subscription increase against a longer reconstruction.",
              },
              {
                q: "How much settled history arrives as live records?",
                a: "Everything open comes across as live, always. The question is how much closed history joins it as transactional detail rather than as searchable evidence. More live history means deeper trend analysis from day one and a longer reconciliation. Less means a faster cutover and shallower behavioural comparison for a period.",
                cost: "Trade off: analytical depth on day one against reconciliation scope.",
              },
              {
                q: "Which debtor and broker records are the same party?",
                a: "With four entity types the deduplication question is wider than usual, and brokers appearing as both a broker and a debtor is a specific pattern to look for. Merges are proposed by matching and confirmed by a person, never applied silently, because a merge changes concentration and credit limits.",
                cost: "Trade off: an unglamorous afternoon against a concentration number you can defend.",
              },
              {
                q: "What happens to the invoices that were created from payments?",
                a: "They are legitimate records with a different origin. Decide whether they convert as invoices with a noted provenance or as cash events with an attached explanation. Either is defensible. Choosing neither, and letting them convert silently as ordinary invoices, is what produces variances nobody can explain three weeks later.",
                cost: "Trade off: a mapping decision now against an unexplainable difference later.",
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
            title: "Report definitions",
            body: "Roughly four dozen reports are a specification for what to rebuild, not an asset that transfers. The triage is worth more than the reports: read by somebody, required by a third party, or long abandoned.",
          },
          {
            title: "Accounting export mappings",
            body: "General ledger code mappings into your accounting package are configuration in the source system. They are re established in the destination and reconciled against a period you have already filed.",
          },
          {
            title: "API and webhook consumers",
            body: "Anything subscribed to events or calling endpoints stops at cutover. Inventory these early. They are frequently undocumented internally and occasionally load bearing.",
          },
          {
            title: "Optional feature configuration",
            body: "Structures switched on per tenant, such as invoice line items or escrow behaviour, are settings rather than data. Record which are on, and why, before anybody maps anything.",
          },
          {
            title: "Portal habits",
            body: "Your clients have a login and a routine, and in many cases a mobile app supplied by a partner rather than the platform. Their experience changes on a date you choose. Communication is the deliverable.",
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
            label: "Entitlement",
            title: "Driven by your contract, not by technology",
            body: "Establish which export route your subscription includes, what a fuller one costs, and how long a request takes. On this platform that is a commercial question before it is a technical one, and it is the input every other estimate depends on. Start it before you have chosen a vendor.",
          },
          {
            label: "Inspection",
            title: "Driven by how complete the first delivery turns out to be",
            body: "Open what arrives and answer three questions from it alone: what is total funds employed at the stated moment, what is one named client's reserve balance and what is it composed of, and show the signed assignment notice for one named invoice. Anything you cannot answer becomes a second request, and second requests are why timetables slip.",
          },
          {
            label: "Discovery",
            title: "Driven by how much of your operation is undocumented",
            body: "Short when terms, overrides, eligibility rules and exceptions are written down and current. Long when they live in one analyst's spreadsheet. Ask your controller how many client pricing arrangements they could reproduce from the system alone. That answer is your discovery scope.",
          },
          {
            label: "Mapping and trial load",
            title: "Driven by what the first load reveals",
            body: "Re pricing settled invoices against mapped schedules either produces a short difference list or a long one, and its length decides how many cycles follow. Expect the payment created invoices and any period predating a structure change to surface here. A plan that assumes one load has not done this before.",
          },
          {
            label: "Parallel and reconciliation",
            title: "Driven by your period close, not by us",
            body: "It runs through at least one full close, because a close is the only event that tests everything at once. It ends when the difference list is empty or every remaining item has an owner and a written explanation you accepted. Both conditions are yours to satisfy rather than ours to declare.",
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
            lede="Put these to us and to everyone else you are talking to. Compare the shape of the answers rather than the enthusiasm. Where our answer is inconvenient it is written here rather than saved for a later call."
          />
          <div className="mt-12">
            <DataTable
              caption="Vendor diligence questions and the FactorFox answer"
              head={["Ask every vendor", "What FactorFox says"]}
              rows={[
                [
                  "Which plan tier includes our route to our own data?",
                  "All of them. An export you have to upgrade in order to obtain is a commercial instrument rather than a right, and we would rather not have that conversation with a customer who is leaving.",
                ],
                [
                  "Does the export include ledger movements, not just balances?",
                  "Yes, with the postings keyed to the records that produced them. Ask this of everyone. Balances are easy to produce and hard to reconcile without the entries behind them.",
                ],
                [
                  "Is the export right in the agreement, or on a website?",
                  "The agreement. A marketing page is not a contractual right, ours included, and the only version that protects you is the one your counsel can point at.",
                ],
                [
                  "Can we read the API documentation before we sign?",
                  "Yes. Ask every vendor the same, and read what comes back rather than the page that advertises it. An interface with no documentation is a commitment you cannot size.",
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
                  "Do your models learn from our outcomes?",
                  "Not today, and we will not say otherwise. Every weight is a pinned constant. What is true is that every dismissal is recorded with a written reason and a name, which is the raw material a calibration loop needs, and calibration is the next build.",
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
          The vocabulary is identical. Schedules, advances, reserves, escrow, chargebacks and verifications
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
          <strong>Every conclusion opens onto what proves it.</strong> A severity, a reason, references into
          the underlying records and a recommended action with the permission it needs. Risk observations
          are append only at the database level, and the platform refuses to show a change it cannot prove.
          That is the substance behind{" "}
          <InlineLink href="/platform/evidence">evidence linked intelligence</InlineLink>, and it is the
          part that survives an audit.
        </p>
        <p>
          <strong>Extraction is the beginning of a decision, not the end of one.</strong> Reading a document
          accurately is table stakes now and several platforms do it well. What happens next is where the
          difference sits: the extracted figures are checked against the client&rsquo;s own history, the
          debtor&rsquo;s concentration position and the policy in force, and the conclusion carries its
          evidence. See{" "}
          <InlineLink href="/platform/document-intelligence">document intelligence</InlineLink> for what is
          asserted and what is deliberately not.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What FactorCloud operators ask us first" />

      <RelatedPages
        links={[
          { href: "/migrate", label: "Migration overview", note: "The inventory, the stages and the reconciliation posture." },
          { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "The same exercise on an installed platform." },
          { href: "/migrate/winfactor", label: "Moving off WinFactor", note: "The same exercise on a freight heavy hosted platform." },
          { href: "/platform/accounting", label: "Accounting", note: "Where the ledger lands and how a period is reproduced." },
          { href: "/platform/evidence", label: "Evidence", note: "Why a conclusion without its proof is not worth showing." },
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

function TierCard() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <p className="u-label text-[var(--fg-subtle)]">Pre conversion &middot; Entitlement check</p>
          <Status kind="info" label="Do this first" />
        </div>

        <div className="p-5">
          <p className="text-[15px] leading-[1.6] text-[var(--fg-muted)]">
            Three questions to settle with your account manager before you talk to any vendor, including us.
          </p>

          <ol className="mt-4 space-y-4">
            {[
              [
                "Q1",
                "Which tier are we on, and does our route to our own records sit on it?",
                "Worth establishing while nothing about your intentions is obvious. The answer shapes every timetable that follows.",
              ],
              [
                "Q2",
                "Can we obtain ledger movements, or only the balances they produce?",
                "Balances are easy to produce. The postings behind them are what let a filed period be reproduced.",
              ],
              [
                "Q3",
                "Which clause in our agreement covers export on termination?",
                "If the answer is a page on a website rather than a clause, you do not have a right. You have a hope.",
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
            Whatever you decide, the answers are yours
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[12px] leading-[1.5] text-[var(--fg-subtle)]">
        The entitlement check we run on a first call. Observations about published plans and terms were made
        in August 2026 and are worth re checking against the current versions and your own agreement.
      </figcaption>
    </figure>
  );
}
