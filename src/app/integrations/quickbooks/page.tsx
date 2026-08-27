import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
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
  title: "QuickBooks factoring integration for funders",
  description:
    "Connect a client QuickBooks Online company over OAuth, sync open receivables idempotently, and post nothing to your book without a named human first.",
  path: "/integrations/quickbooks",
  intent: "integration",
  target: "QuickBooks factoring integration",
});

const FAQS = [
  {
    q: "Does FactorFox write anything into our client's QuickBooks company?",
    a: "No. The direction of travel is one way. Open invoices, customers, balances and dates come across into FactorFox and nothing goes back. That is a deliberate limit rather than a missing feature. Your client's ledger is their record for their accountant, their bank and their tax filing, and a funder that edits it has taken on a liability nobody priced.",
  },
  {
    q: "Whose Intuit application is the connection made under?",
    a: "Yours. The integration runs under your own application registered with Intuit, using your client identifier and secret, which means the consent screen your client sees carries your name and the relationship with Intuit is yours to hold. It is one more step at setup and it is the correct one. A connector that runs under a vendor's shared application makes every customer of that vendor dependent on somebody else's standing with Intuit.",
  },
  {
    q: "What happens if we sync the same client twice?",
    a: "Nothing duplicates. Every synced record is keyed on the external identifier QuickBooks assigns it, so a second sync updates what it already knows and inserts only what is genuinely new. Run it twice by accident, run it after a network failure, run it every morning: the receivable set converges to the same state rather than growing.",
  },
  {
    q: "Can a synced invoice skip verification because it came from an accounting system?",
    a: "No, and this is the question worth asking of every connector you evaluate. A synced invoice faces every ingestion gate a scanned one faces. Duplicate and near duplicate detection, cross portfolio fingerprinting, invoice size deviation against the client's own median, unusual submission timing, and verification where the debtor and the amount call for it. An invoice is not more true because it arrived through an API. It is only more convenient.",
  },
  {
    q: "Where are the OAuth tokens kept?",
    a: "Encrypted at rest, and they are never written to a log and never returned by any interface, including to an administrator. Refresh happens server side on a schedule that keeps the connection alive without a person re authorising every few weeks, and a refresh that fails marks the connection as needing reconnection rather than failing quietly on the morning somebody needed the schedule.",
  },
  {
    q: "What does FactorFox do if the QuickBooks configuration is missing?",
    a: "It tells you which key is absent, by name, on the screen where you tried to use it. Not a generic failure, not a spinner, not a feature that silently disappears from the menu. Naming the exact configuration that is missing turns a support ticket into a thirty second fix, and it is the same posture every unconfigured rail in the platform takes.",
  },
];

export default function QuickBooksPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox QuickBooks Online integration",
          description:
            "OAuth connection to a client's QuickBooks Online company, idempotent receivable synchronisation into the FactorFox intake rail, applied by a named human and subject to every ingestion gate.",
          path: "/integrations/quickbooks",
        })}
      />

      <PageHero
        trail={[
          { name: "Integrations", path: "/integrations" },
          { name: "QuickBooks", path: "/integrations/quickbooks" },
        ]}
        eyebrow="QuickBooks Online"
        status="available"
        title="Your client keeps their books in QuickBooks. That should not cost you a morning of keying."
        lede={
          <>
            <p>
              Written for the factoring company and the asset based lender, not for the business looking to
              factor its invoices. If you fund against receivables and your clients run QuickBooks Online,
              this page describes what connects, what crosses, and what still requires a person.
            </p>
            <p>
              The schedule that used to be exported, reformatted and emailed arrives structured instead, and
              then meets exactly the same scrutiny it met when it arrived as a spreadsheet.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Connect QuickBooks" }}
        secondaryCta={{ href: "/integrations/xero", label: "See the Xero rail" }}
        aside={<DegradeScene />}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="The schedule arrives in whatever shape the client's bookkeeper felt like that week."
        lede="Column order changes. Debtor names are spelled three ways. Credits are negative in one file and positive in the next. Somebody in your operations team absorbs all of it, every day, and nobody has ever measured what that costs."
        rows={[
          {
            problem:
              "A client exports an ageing, edits it, emails it, and your team reformats it into the shape your intake expects. The reformatting step is invisible and it is where errors enter.",
            response:
              "Open invoices, customers, balances and dates come across structured, with the identifiers QuickBooks assigned them, into one normalised receivable shape that does not care how the client names their columns.",
          },
          {
            problem:
              "Somebody re sends a schedule after a correction and half of it gets entered twice, which is only discovered when a debtor queries a duplicate.",
            response:
              "The sync is idempotent on external identifiers. A second run updates what already exists and inserts only what is new, whether it happens by accident or by design.",
          },
          {
            problem:
              "A connector is bought precisely so that invoices stop needing review, and eighteen months later nobody can say which invoices on the book were ever examined.",
            response:
              "A sync proposes into the intake rail. A named human applies it, and every synced invoice faces every ingestion gate. A connector gets no side door onto the book.",
          },
          {
            problem:
              "The integration was configured by somebody who has left, the keys expired, and the screen just shows nothing where the button used to be.",
            response:
              "Missing configuration is stated on screen with the exact key that is absent named. The feature reports itself unavailable instead of pretending it was never there.",
          },
        ]}
      />

      <StepList
        eyebrow="The connection"
        title="From consent to a receivable your underwriter can use"
        lede="Six steps. The interesting ones are the last two, because that is where most accounting integrations quietly stop being careful."
        steps={[
          {
            label: "Register",
            title: "You hold your own Intuit application",
            body: "Client identifier and secret from your own Intuit developer account, entered once in FactorFox. Your client's consent screen carries your name, and your relationship with Intuit is not mediated by ours.",
          },
          {
            label: "Connect",
            title: "The client authorises from their own QuickBooks session",
            body: "An operator starts the connection against a specific client record. The client consents in Intuit's own flow. Nobody at your institution ever handles a QuickBooks password, which is the point of OAuth and the reason credential sharing has no place in this workflow.",
          },
          {
            label: "Callback",
            title: "The authorisation returns, the tokens are stored encrypted",
            body: "The callback exchanges the grant for tokens which are encrypted at rest immediately. They are never written to a log, never rendered on a screen and never returned by any interface, including to your own administrators.",
          },
          {
            label: "Refresh",
            title: "The connection stays alive without anyone re authorising monthly",
            body: "Refresh runs server side ahead of expiry. A refresh that fails puts the connection into a state that names itself, so the client is asked to reconnect on a calm day rather than on the morning you needed their schedule.",
          },
          {
            label: "Sync",
            title: "Open receivables arrive normalised and idempotent",
            body: "Invoices, customers, balances and dates map into one internal receivable shape, keyed on the identifiers QuickBooks assigned. Currency, dates and credit notes land in known fields, so a debtor is the same debtor whether the bookkeeper typed a comma in the name this month or not.",
          },
          {
            label: "Apply",
            title: "A proposal, then a person, then the gates",
            body: "The sync raises a proposal in the intake rail. An operator reviews what it would add, change and retire, and applies it. Everything applied then faces the ingestion gates in full, exactly as if it had arrived as paper.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The normalised receivable"
        title="One shape, so an underwriting run never has to know where an invoice came from."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Why normalisation is a control</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Concentration under one debtor name across several clients is one of the signals that matters
              most and is hardest to see. It only works if the same debtor resolves to the same party no matter
              which client&rsquo;s ledger they arrived from.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A connector that keeps its own private shape for its own invoices takes that signal away from you
              without ever mentioning it.
            </p>
          </Card>
        }
      >
        <p>
          Every path into the book lands in the same receivable structure: a client, a debtor resolved as a
          party, an amount, an issue date, a due date, a currency and the external identifier of wherever it
          came from. Paper, portal, SFTP, EDI and QuickBooks all converge before anything looks at them.
        </p>
        <p>
          <strong>That convergence is what makes the analytics honest.</strong> Invoice size deviation is
          measured against the client&rsquo;s own median, not an industry figure, which requires the whole of a
          client&rsquo;s history in one shape. Duplicate detection works across the portfolio rather than within
          one channel. Dilution movement means something because credits and the invoices they offset are the
          same kind of object.
        </p>
        <p>
          <strong>And it is what makes the connector replaceable.</strong> Nothing downstream of intake knows
          that QuickBooks exists. A client who moves to a different ledger next year changes how their
          receivables arrive and changes nothing about how they are underwritten, monitored, verified or
          collected.
        </p>
        <p>
          The external identifier is kept because it is the anchor for idempotency, and because when a client
          asks why FactorFox thinks an invoice is for eleven thousand and their books say nine, the answer
          should be a specific record in a specific ledger rather than an argument.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Controls"
            title="What protects the information, stated the way your reviewer will want it"
            lede="This integration is available today and it requires your own Intuit application credentials. Both halves of that sentence are on the register."
          />
          <div className="mt-11">
            <DataTable
              caption="QuickBooks integration controls"
              head={["Control", "How it works"]}
              rows={[
                ["Authorisation", "OAuth against the client's own QuickBooks session, under your Intuit application. No password is ever handled by your institution or by FactorFox."],
                ["Token storage", "Encrypted at rest. Never logged, never rendered, never returned by any interface."],
                ["Token refresh", "Server side and ahead of expiry. A failed refresh marks the connection as needing reconnection and names it rather than degrading silently."],
                ["Direction", "Read only in effect. Receivable data comes in. Nothing is written back into the client's company file."],
                ["Idempotency", "Every record keyed on the external identifier QuickBooks assigns. Repeated syncs converge instead of duplicating."],
                ["Application boundary", "A sync proposes through the intake rail. A named human applies it, and the audit record carries the actor and the origin."],
                ["Ingestion gates", "Synced invoices face duplicate and near duplicate detection, cross portfolio fingerprinting, size deviation against the client's own median and submission timing checks, in full."],
                ["Revocation", "The client can disconnect from their side and you can disconnect from yours. Receivables already applied stay on your book, because a person put them there."],
                ["Missing configuration", "The exact absent key is named on screen. Unconfigured features report themselves unavailable rather than disappearing."],
                ["Tenant isolation", "Enforced at the database level rather than in application code, identically to every other data path in the platform."],
              ]}
            />
          </div>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What an operations lead asks before turning this on" />

      <RelatedPages
        links={[
          { href: "/integrations/xero", label: "Xero", note: "The same rail, written for books kept in Australia, New Zealand and the United Kingdom." },
          { href: "/platform/client-onboarding", label: "Client onboarding", note: "Where a ledger connection sits in the first two weeks of a relationship." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "The ingestion gates a synced invoice still has to pass." },
          { href: "/platform/accounting", label: "Accounting", note: "What happens on your own ledger once a proposal is applied." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "What a normalised receivable feeds, and why coverage is reported separately." },
          { href: "/integrations", label: "All integrations", note: "The full register with a status on every row." },
        ]}
      />

      <CtaBand
        title="Connect a sandbox company and watch the second sync do nothing."
        body="The most convincing part of an accounting integration demonstration is the boring part: running it again and seeing the receivable count stay exactly where it was."
        primary={{ href: "/demo", label: "Connect QuickBooks" }}
        secondary={{ href: "/integrations", label: "Review our integrations" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

function DegradeScene() {
  return (
    <figure className="m-0">
      <div className="border border-[var(--line-strong)] bg-[var(--bg-raised)]" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Client &middot; Sunline Packaging &middot; Ledger connection
          </p>
          <Status kind="attention" label="Not configured" />
        </div>

        <div className="space-y-4 p-5">
          <div className="border border-[var(--line)] p-4">
            <p className="text-[0.9375rem] font-semibold leading-[1.35]">QuickBooks Online cannot be connected yet</p>
            <p className="mt-2 text-[0.8125rem] leading-[1.55] text-[var(--fg-muted)]">
              This tenant has no Intuit application credentials. The connection button is shown, disabled, with
              the reason attached, because an operator who can see why something is unavailable can get it fixed.
            </p>
            <dl className="mt-4 space-y-2 text-[0.8125rem]">
              {[
                ["Missing", "QUICKBOOKS_CLIENT_ID"],
                ["Missing", "QUICKBOOKS_CLIENT_SECRET"],
                ["Present", "Redirect callback registered"],
              ].map(([k, v]) => (
                <div key={v} className="flex flex-wrap items-baseline justify-between gap-3 border-t border-[var(--line)] pt-2 first:border-t-0 first:pt-0">
                  <dt className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">{k}</dt>
                  <dd className="u-tabular m-0 font-mono text-[0.75rem] text-[var(--fg)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            Degrades honestly &middot; names the absent key &middot; no silent failure
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the unconfigured state. The behaviour is the platform&rsquo;s own: the exact missing
        configuration is named on the screen where it is needed. The client name comes from a seeded
        demonstration book.
      </figcaption>
    </figure>
  );
}
