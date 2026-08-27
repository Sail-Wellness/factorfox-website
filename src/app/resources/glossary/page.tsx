import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  ProseSection,
  RelatedPages,
  CtaBand,
  Card,
  Section,
  Container,
  SectionHead,
  Eyebrow,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, definedTermSetSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Factoring terms glossary for operators",
  description:
    "Look up factoring and asset based lending terms as operators use them, including invoice finance, debtor finance, factoraje and fomento mercantil.",
  path: "/resources/glossary",
  intent: "informational",
  target: "factoring terms glossary",
});

type Term = {
  term: string;
  slug: string;
  definition: string;
  see?: { href: string; label: string }[];
};

const TERMS: Term[] = [
  {
    term: "Advance rate",
    slug: "advance-rate",
    definition:
      "The proportion of an invoice's face value paid to the client at purchase, with the balance held as reserve until the debtor pays. It is set per client and often varied by debtor, industry or invoice type, because the rate is really a statement about expected dilution rather than about the client's own credit. An advance rate set at onboarding and never revisited is pricing today's book with last year's assumptions.",
    see: [{ href: "/platform/borrowing-base", label: "Borrowing base" }],
  },
  {
    term: "Aging bucket",
    slug: "aging-bucket",
    definition:
      "The band an outstanding invoice falls into by days elapsed, used to summarise a portfolio at a glance. Whether the buckets are measured from invoice date or from due date matters more than most people check, because measuring from invoice date makes generous terms look like slow payment. Buckets are also where eligibility bites: an invoice crossing a threshold usually becomes ineligible and removes availability the client was relying on that morning.",
  },
  {
    term: "Assignment",
    slug: "assignment",
    definition:
      "The transfer of the right to be paid on a receivable from the client to the factor. It is what makes the factor the party entitled to collect, and it is the foundation for everything downstream: notification, direct payment, enforcement. An assignment that was never properly evidenced becomes a problem at the worst possible moment, which is when a debtor decides to pay the client instead.",
  },
  {
    term: "Availability",
    slug: "availability",
    definition:
      "What a client may draw right now: the borrowing base less what is already funded, less reserves and ineligibles. It is the number clients call about and the number an operator is most often asked to explain. Availability falling without new funding is the movement worth watching, because it means eligibility is eroding rather than money being drawn.",
    see: [{ href: "/platform/borrowing-base", label: "Borrowing base" }],
  },
  {
    term: "Borrowing base",
    slug: "borrowing-base",
    definition:
      "The pool of collateral supporting what a client may borrow, calculated by taking eligible receivables and applying advance rates, caps and deductions. In factoring it is often implicit in invoice by invoice arithmetic. In asset based lending it is an explicit figure that gets formally reported. The rules deciding what is eligible are the whole substance of it, and they frequently live in a spreadsheet rather than in the system of record.",
    see: [
      { href: "/platform/borrowing-base", label: "Borrowing base" },
      { href: "/solutions/asset-based-lending", label: "Asset based lending" },
    ],
  },
  {
    term: "Borrowing base certificate",
    slug: "borrowing-base-certificate",
    definition:
      "The periodic statement a borrower submits attesting to the collateral supporting its facility, usually with an aging attached. It is a representation by the borrower, which is why the lender's own recalculation matters and why a difference between the two is a finding rather than a rounding issue. A certificate that arrives late, or that has to be revised after submission, is a risk signal independent of the numbers on it.",
    see: [{ href: "/platform/covenant-monitoring", label: "Covenant monitoring" }],
  },
  {
    term: "Cash application",
    slug: "cash-application",
    definition:
      "Matching money received to the invoices it settles. It is the least glamorous work in a factoring operation and one of the largest consumers of clerical time, particularly when one payment covers many invoices, arrives short, or arrives with a remittance advice in a format nobody can parse. Done badly it corrupts aging, reserve balances and collections priority at the same time.",
    see: [{ href: "/platform/accounting", label: "Accounting" }],
  },
  {
    term: "Chargeback",
    slug: "chargeback",
    definition:
      "Returning an invoice to the client and recovering the advance, usually because the invoice aged past the recourse period, was disputed, or turned out not to be valid. Operationally it is a recovery against reserve or against future funding. The reason recorded on a chargeback is worth more than the amount, because dispute driven chargebacks and slow payment chargebacks call for completely different responses.",
    see: [{ href: "/platform/continuous-underwriting", label: "Continuous underwriting" }],
  },
  {
    term: "Client",
    slug: "client",
    definition:
      "The business that sells or assigns its receivables to the factor. In this industry the word always means the seller of the receivable and never the party who owes the money, and confusing the two is the quickest way to mislead someone new. The client signs the agreement, but the cash usually comes from somebody else, which is what makes factoring a two sided credit question.",
  },
  {
    term: "Concentration limit",
    slug: "concentration-limit",
    definition:
      "A cap on how much exposure may sit with one debtor, one client or one industry, expressed as a share of the eligible pool. Exposure above the cap is normally made ineligible rather than prohibited outright, which is why a breach shows up as a fall in availability rather than as an alarm. The version that catches operators out is exposure to a single obligor arriving through several clients at once.",
    see: [{ href: "/platform/risk-monitoring", label: "Risk monitoring" }],
  },
  {
    term: "Confirming",
    slug: "confirming",
    definition:
      "A payables finance arrangement, common in Spanish speaking markets, in which a buyer arranges for its approved payables to be made available for early payment to suppliers through a financier. Commercially it sits very close to reverse factoring and the two words are often used for the same programme. The credit exposure is to the buyer rather than to the suppliers, which is the entire point of the structure.",
    see: [{ href: "/solutions/reverse-factoring", label: "Reverse factoring" }],
  },
  {
    term: "Credit limit",
    slug: "credit-limit",
    definition:
      "The maximum exposure a funder is willing to carry against a particular debtor, often set again per client within that debtor. It is the control that turns a credit opinion into an operating rule, because invoices that would breach it are declined or made ineligible at purchase. Limits set at onboarding and never revisited are a common source of quiet exposure growth.",
    see: [{ href: "/platform/risk-monitoring", label: "Risk monitoring" }],
  },
  {
    term: "Credit memo",
    slug: "credit-memo",
    definition:
      "A document issued by the client reducing what is owed on an invoice, for a return, a short shipment, a pricing correction or a goodwill adjustment. To a funder it is dilution arriving in documented form, reducing the collateral behind an advance already made. A rise in credit memo volume for a client is often the earliest visible sign that the underlying commercial relationship is deteriorating.",
  },
  {
    term: "Cross aging",
    slug: "cross-aging",
    definition:
      "A rule making a debtor's whole balance ineligible once a stated proportion of it has aged past a threshold. The logic is that a debtor who is not paying some invoices is unlikely to be reliable on the rest, so none of it should count as collateral. It is one of the rules most often maintained by hand outside the system of record, and it moves availability sharply when it triggers.",
    see: [{ href: "/platform/borrowing-base", label: "Borrowing base" }],
  },
  {
    term: "Debtor",
    slug: "debtor",
    definition:
      "The party who owes the money on a receivable, which is to say the client's customer. In some markets they are called the account debtor, or simply the account. A funder underwrites the debtor as much as the client, because the debtor is the source of repayment, and a strong client with weak debtors is a worse risk than the reverse.",
  },
  {
    term: "Debtor finance",
    slug: "debtor-finance",
    definition:
      "The term used in Australia and New Zealand for what North America calls factoring or receivables finance. It covers both disclosed facilities and confidential arrangements where the debtor is not told. Anyone reading market material across regions should treat debtor finance, invoice finance and factoring as the same underlying activity with local differences in disclosure convention and legal mechanics.",
  },
  {
    term: "Dilution",
    slug: "dilution",
    definition:
      "The gap between what was invoiced and what is eventually collected, arising from credit memos, returns, discounts, allowances, short payments and disputes. It is the most important number in factoring risk, because it is what an advance rate is actually protecting against. A client whose dilution is rising is consuming the cushion priced in at onboarding, and that movement is visible well before anything goes past due.",
    see: [
      { href: "/platform/risk-monitoring", label: "Risk monitoring" },
      { href: "/platform/continuous-underwriting", label: "Continuous underwriting" },
    ],
  },
  {
    term: "Disclosed factoring",
    slug: "disclosed-factoring",
    definition:
      "An arrangement in which the debtor is told the receivable has been assigned and is directed to pay the factor. Disclosure is what makes a notice of assignment operative and what lets the factor collect in its own name. It is the default in North American factoring, and it is why misdirected payments are treated as seriously as they are.",
    see: [{ href: "/solutions/factoring", label: "Factoring" }],
  },
  {
    term: "Dominion of funds",
    slug: "dominion-of-funds",
    definition:
      "The funder's control over the account collections are paid into, usually through a blocked account or lockbox the client cannot draw on. It is what separates a facility where the lender actually holds the cash flow from one where it merely reports on it. Weak dominion is where a strong looking collateral position quietly stops being real.",
  },
  {
    term: "Double brokering",
    slug: "double-brokering",
    definition:
      "In freight, accepting a load and then re brokering it to another carrier without authority, so that the party who hauled the freight is not the party who was engaged. For a transportation factor it creates the risk of funding an invoice for a service the invoicing party did not perform, and of paying the wrong carrier entirely. Detection is behavioural rather than documentary, which makes it a pattern problem rather than a checklist problem.",
    see: [
      { href: "/solutions/transportation", label: "Transportation" },
      { href: "/platform/fraud-detection", label: "Fraud detection" },
    ],
  },
  {
    term: "Eligibility criteria",
    slug: "eligibility-criteria",
    definition:
      "The rules deciding which receivables count toward the borrowing base: age, debtor approval, concentration, government or foreign debtor status, contra accounts, cross aging and any client specific exclusions. They are the mechanism by which credit policy becomes an actual funding decision. In many operations they exist as an analyst's spreadsheet rather than as written rules, which makes them invisible until somebody has to explain a decline.",
    see: [{ href: "/platform/borrowing-base", label: "Borrowing base" }],
  },
  {
    term: "Factoraje",
    slug: "factoraje",
    definition:
      "The Spanish term for factoring, used across Mexico and much of Latin America, frequently as factoraje financiero. The commercial substance matches North American factoring: purchase of receivables at a discount, with assignment and disclosure mechanics that vary by jurisdiction. Documentary and tax requirements differ substantially between countries even where the product looks identical from outside.",
  },
  {
    term: "Factoring commission",
    slug: "factoring-commission",
    definition:
      "The fee charged for the factoring service itself, distinct from any interest or discount charged on funds employed. It is usually expressed against invoice face value and often stepped by how long the invoice remains outstanding. Keeping commission separate from the cost of funds matters in analysis, because one scales with time and the other does not, and clients frequently complain about the wrong one.",
    see: [{ href: "/platform/pricing", label: "Pricing" }],
  },
  {
    term: "Field exam",
    slug: "field-exam",
    definition:
      "An on site examination of a borrower's books and collateral, verifying that reported receivables exist, are properly aged and are not encumbered elsewhere. It is standard practice in asset based lending and less common in factoring, where invoice level verification does some of the same work continuously. Findings often change eligibility rules rather than simply confirming numbers.",
    see: [{ href: "/solutions/asset-based-lending", label: "Asset based lending" }],
  },
  {
    term: "Fomento mercantil",
    slug: "fomento-mercantil",
    definition:
      "The Brazilian term for the factoring activity, carried out by fomento mercantil companies. The Brazilian structure has its own legal and tax characteristics and is not a simple translation of the North American product. Treat the local term as pointing to a related but distinct legal arrangement rather than an identical one.",
  },
  {
    term: "Fuel advance",
    slug: "fuel-advance",
    definition:
      "In transportation factoring, a partial payment made to a carrier at pickup rather than after delivery, so the driver can buy fuel to run the load. It is an advance against an invoice that does not yet exist, which makes it a materially different risk from ordinary invoice purchase. Operators offering it need confidence that the load is real and that the carrier being paid is the one hauling it.",
    see: [{ href: "/solutions/transportation", label: "Transportation" }],
  },
  {
    term: "Funds employed",
    slug: "funds-employed",
    definition:
      "The amount a funder currently has advanced and outstanding across the book. It is the balance that earns, the balance at risk, and the figure any conversion has to reconcile to the cent before anyone trusts a new system. It is not the same thing as funded volume, which measures activity over a period rather than exposure right now.",
    see: [{ href: "/migrate", label: "Migration" }],
  },
  {
    term: "Ineligibles",
    slug: "ineligibles",
    definition:
      "Receivables excluded from the borrowing base by the eligibility rules, whether for age, concentration, debtor status, contras or dispute. They are still owed and still collectable. They simply do not support borrowing. The composition of a client's ineligibles is a far more useful diagnostic than the total, because concentration ineligibility and aging ineligibility say very different things about what is happening.",
    see: [{ href: "/platform/borrowing-base", label: "Borrowing base" }],
  },
  {
    term: "Invoice discounting",
    slug: "invoice-discounting",
    definition:
      "A receivables finance arrangement in which the client keeps the sales ledger and the collections function, borrowing against the receivables rather than selling them with a full service wrapped around them. In the United Kingdom and South Africa it is the standard term for that confidential, client managed form. The funder sees less of the underlying activity, which is why monitoring and audit requirements are usually heavier.",
  },
  {
    term: "Invoice finance",
    slug: "invoice-finance",
    definition:
      "The umbrella term used in the United Kingdom for receivables based funding, covering both factoring, where the provider runs the sales ledger and collections, and invoice discounting, where the client does. Reading United Kingdom material with North American assumptions causes confusion, because factoring there implies a service level rather than only a purchase structure.",
  },
  {
    term: "Lockbox",
    slug: "lockbox",
    definition:
      "A collection account, usually at a bank, to which debtors send payment so that funds arrive under the funder's control rather than passing through the client. It is the practical mechanism behind dominion of funds and the main defence against misdirected payments. A facility with notification but no lockbox has a control gap that only becomes obvious once a client is under pressure.",
    see: [{ href: "/platform/treasury", label: "Treasury" }],
  },
  {
    term: "Misdirected payment",
    slug: "misdirected-payment",
    definition:
      "Money for an assigned receivable that the debtor pays to the client instead of to the factor. Sometimes it is administrative habit and sometimes it is the first visible sign of a client in difficulty, and a single event rarely tells you which. The pattern matters more than the incident, so frequency, size and how quickly the client remits it are the things worth tracking.",
    see: [{ href: "/platform/fraud-detection", label: "Fraud detection" }],
  },
  {
    term: "Non notification factoring",
    slug: "non-notification-factoring",
    definition:
      "A structure in which the debtor is not told that the receivable has been assigned and continues dealing with the client normally. It is used where disclosure would damage a client's commercial relationships, and it carries materially more risk because the factor loses direct contact with the source of repayment. It generally demands stronger verification, tighter cash controls and a better quality client.",
    see: [{ href: "/solutions/factoring", label: "Factoring" }],
  },
  {
    term: "Non recourse",
    slug: "non-recourse",
    definition:
      "An arrangement in which the factor absorbs the loss if a debtor fails to pay for credit reasons, rather than charging the invoice back to the client. It is almost never as absolute as the name suggests: cover usually applies to defined credit events and excludes disputes, deductions and performance failures, which is where most non payment actually originates. Read the exclusions, because they define the product far more than the label does.",
  },
  {
    term: "Notice of assignment",
    slug: "notice-of-assignment",
    definition:
      "The formal notification to a debtor that a receivable has been assigned and that payment must be made to the factor. It is the document that makes disclosure effective, and it is the first thing anyone asks for when a payment goes to the wrong place. Being able to produce the signed notice for one named invoice, quickly, is a fair test of whether a document archive is genuinely organised.",
    see: [{ href: "/platform/document-intelligence", label: "Document intelligence" }],
  },
  {
    term: "Overadvance",
    slug: "overadvance",
    definition:
      "Funding extended above what the borrowing base supports, granted as a deliberate exception for a defined purpose and period. It is a credit decision rather than an operational adjustment, and it should always carry an approval, a stated reason and an expiry. Overadvances that quietly persist beyond their intended term are one of the commonest ways a facility drifts outside its own policy.",
    see: [{ href: "/platform/covenant-monitoring", label: "Covenant monitoring" }],
  },
  {
    term: "Purchase order funding",
    slug: "purchase-order-funding",
    definition:
      "Financing provided against a confirmed purchase order so a supplier can fulfil it, before any invoice exists. The risk is performance as well as credit, because the funder is exposed to whether the goods are actually delivered and accepted. It is usually structured to convert into a factored receivable once the invoice is raised, which makes the handover between the two the point of greatest exposure.",
    see: [{ href: "/solutions/purchase-order-funding", label: "Purchase order funding" }],
  },
  {
    term: "Rate confirmation",
    slug: "rate-confirmation",
    definition:
      "In freight, the document agreeing price and terms for hauling a specific load between a broker or shipper and a carrier. For a transportation factor it is the primary evidence that the load was real and that the invoiced amount matches what was agreed. Differences between the rate confirmation and the invoice are a routine verification finding and occasionally the first sign of something worse.",
    see: [{ href: "/solutions/transportation", label: "Transportation" }],
  },
  {
    term: "Recourse",
    slug: "recourse",
    definition:
      "The factor's right to charge an unpaid invoice back to the client, which is the default structure in most factoring. The client retains the ultimate credit risk on its own customers and the factor's real exposure is to the client's ability to absorb that. Most facilities marketed as non recourse are recourse facilities with a defined credit event carved out of them.",
  },
  {
    term: "Recourse period",
    slug: "recourse-period",
    definition:
      "The window after purchase during which an unpaid invoice may be charged back to the client, usually expressed in days past invoice or due date. It decides when a slow paying receivable stops being the factor's problem and becomes the client's again. Chargebacks clustering at the end of the recourse period across several debtors is a pattern to read rather than a queue to process.",
  },
  {
    term: "Remittance advice",
    slug: "remittance-advice",
    definition:
      "The information accompanying a payment that says which invoices it settles and what has been deducted. It arrives in every conceivable format and frequently in none of them, which is why cash application stays labour intensive in most operations. Extracting it reliably is a document problem rather than an accounting problem, and treating it as an accounting problem is why so much of it is still keyed by hand.",
    see: [
      { href: "/platform/document-intelligence", label: "Document intelligence" },
      { href: "/platform/accounting", label: "Accounting" },
    ],
  },
  {
    term: "Reserve",
    slug: "reserve",
    definition:
      "The portion of an invoice's value held back rather than advanced, released once the debtor pays. It is the buffer that absorbs dilution, chargebacks and fees, and it is why an advance rate is not the same thing as a price. A reserve held for a specific cause, such as a disputed debtor, is a different fact from routine holdback and should never be stored as the same undifferentiated number.",
  },
  {
    term: "Reserve release",
    slug: "reserve-release",
    definition:
      "Paying the held back portion to the client once the underlying invoice has been collected and everything chargeable against it has been settled. Operators tend to treat it as administrative, and it is a real cash movement that deserves the same release controls as any other. Delays in reserve release are among the most common client complaints in this industry, and they usually come from a cash application backlog rather than from any decision anyone made.",
    see: [{ href: "/platform/treasury", label: "Treasury" }],
  },
  {
    term: "Retainage",
    slug: "retainage",
    definition:
      "An amount the debtor withholds under the contract until a whole job is complete, common in construction. It is a receivable that is contractually not yet payable, which is why it is normally treated as ineligible until release. Funding retainage as though it were an ordinary receivable is one of the more expensive mistakes available in construction factoring.",
    see: [{ href: "/solutions/construction", label: "Construction" }],
  },
  {
    term: "Reverse factoring",
    slug: "reverse-factoring",
    definition:
      "A programme arranged by a buyer that lets its approved suppliers be paid early, with the financier taking exposure to the buyer rather than to each supplier. It is also called supply chain finance or confirming depending on the market. Because the buyer approves the payable, the credit question is concentrated and the operational question is scale: many small suppliers onboarded against one obligor.",
    see: [{ href: "/solutions/reverse-factoring", label: "Reverse factoring" }],
  },
  {
    term: "Schedule of accounts",
    slug: "schedule-of-accounts",
    definition:
      "The batch of invoices a client submits for purchase at one time, with supporting documents attached. It is the unit of work in most factoring operations: verified, approved and funded as a batch rather than one invoice at a time. It is also the natural unit for controls, because a release decision normally applies to a schedule rather than to a single receivable.",
  },
  {
    term: "Spot factoring",
    slug: "spot-factoring",
    definition:
      "Purchasing individual invoices the client selects, rather than the whole ledger under a continuing arrangement. It suits clients who need occasional funding and it carries adverse selection risk, because the client chooses which invoices to sell. Pricing and verification both have to reflect that the sample in front of you is not random.",
  },
  {
    term: "Sub participation",
    slug: "sub-participation",
    definition:
      "An arrangement in which one funder takes a share of another's exposure without becoming a direct party to the underlying agreement. It is used to manage concentration, share risk on a large client, or reach a transaction one party could not carry alone. The complexity is operational rather than credit related, because two sets of books have to keep agreeing with each other over the life of the exposure.",
  },
  {
    term: "Supply chain finance",
    slug: "supply-chain-finance",
    definition:
      "The broad category of buyer led programmes financing payables and, in some structures, inventory and purchase orders further up the chain. Reverse factoring is the most common form of it. The term is used loosely enough that it is always worth asking who bears the credit risk and at which point in the chain the money actually enters.",
    see: [{ href: "/solutions/reverse-factoring", label: "Reverse factoring" }],
  },
  {
    term: "True sale",
    slug: "true-sale",
    definition:
      "The characterisation of a receivables purchase as an actual sale rather than a secured loan, which determines what happens to those receivables if the client enters insolvency. It depends on how the transaction is structured and documented, not on what the agreement is titled. This is a legal question and this glossary is not legal advice, but every operator should know which of the two their agreements are built to be.",
  },
  {
    term: "Turn",
    slug: "turn",
    definition:
      "How quickly the book converts, usually expressed as average days from purchase to collection, sometimes as the number of times funds employed cycle in a period. It drives yield directly, because the same money earning across more cycles produces more revenue without more capital. A slowing turn with stable volume means collection is deteriorating before any aging bucket makes that obvious.",
  },
  {
    term: "UCC filing",
    slug: "ucc-filing",
    definition:
      "In the United States, the public filing that perfects a security interest in a debtor's assets, including receivables, under the Uniform Commercial Code. For a funder it establishes priority against other creditors, and it is both the first thing checked in diligence and the thing that decides a contest. Filings need continuation before they lapse, and a lapsed filing on a live client is a serious and entirely preventable problem.",
  },
  {
    term: "Undisclosed factoring",
    slug: "undisclosed-factoring",
    definition:
      "An arrangement where the debtor is not informed of the assignment, closely related to non notification factoring and to confidential invoice discounting. Which of those words is used, and exactly what each implies, varies by market and is worth clarifying in any cross border conversation. In every version the funder gives up direct contact with the source of repayment and has to replace it with something else.",
  },
  {
    term: "Verification",
    slug: "verification",
    definition:
      "Confirming with the debtor that an invoice is valid, for goods or services delivered and accepted, and that no dispute or offset exists. It is the control separating funding a receivable from funding a document, and it is where most invoice fraud is either caught or missed. What matters is not only whether verification happened, but what evidence it captured, when, and whether that evidence can still be produced unchanged.",
    see: [
      { href: "/platform/document-intelligence", label: "Document intelligence" },
      { href: "/platform/evidence", label: "Intelligence with evidence" },
    ],
  },
];

const LETTERS = Array.from(new Set(TERMS.map((t) => t.term.charAt(0).toUpperCase()))).sort();

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={definedTermSetSchema(
          TERMS.map((t) => ({ term: t.term, definition: t.definition, slug: t.slug })),
        )}
      />

      <PageHero
        trail={[
          { name: "Writing", path: "/resources" },
          { name: "Glossary", path: "/resources/glossary" },
        ]}
        eyebrow="Operator glossary"
        title="The vocabulary, as the funding side actually uses it."
        lede={
          <>
            <p>
              Written for the people inside a factoring, asset based lending or specialty finance operation.
              Not for a business deciding whether to factor its receivables, which is who almost every other
              glossary in this category is written for.
            </p>
            <p>
              Each definition says what the term means, and then the part that usually goes unsaid: what an
              operator should be watching, and where it tends to go wrong. Every term has its own anchor, so
              you can send a colleague a link to one line rather than a page.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/resources", label: "Read the writing" }}
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The same product, five names</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Factoring in North America. Invoice finance in the United Kingdom. Debtor finance in
              Australia. Invoice discounting in South Africa. Factoraje in Mexico. Fomento mercantil in
              Brazil.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Related activity, genuinely different legal shapes and disclosure conventions. All of them are
              defined here, because operators reading across markets lose real time to this.
            </p>
            <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
              Definitions, not legal advice
            </p>
          </Card>
        }
      />

      <Section bordered>
        <Container>
          <SectionHead
            eyebrow="Index"
            title="Fifty four terms, alphabetically."
            lede="Jump to a letter, or send someone a link to a single definition. Nothing here carries a statistic, a typical rate or an industry average, because we do not publish figures we cannot source."
          />
          <nav aria-label="Glossary letters" className="mt-9">
            <ul className="flex list-none flex-wrap gap-2 p-0">
              {LETTERS.map((l) => (
                <li key={l}>
                  <a
                    href={`#letter-${l.toLowerCase()}`}
                    className="inline-flex h-9 w-9 items-center justify-center border border-[var(--line-strong)] font-mono text-[0.8125rem] font-semibold transition-colors hover:bg-[var(--bg-sunken)]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14">
            {LETTERS.map((letter) => (
              <section key={letter} id={`letter-${letter.toLowerCase()}`} className="scroll-mt-24">
                <h2 className="border-b border-[var(--line-strong)] pb-3 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[var(--signal)]">
                  {letter}
                </h2>
                <dl className="m-0 mb-14">
                  {TERMS.filter((t) => t.term.charAt(0).toUpperCase() === letter).map((t) => (
                    <div
                      key={t.slug}
                      id={t.slug}
                      className="grid scroll-mt-24 gap-3 border-b border-[var(--line)] py-7 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-10"
                    >
                      <dt className="text-[1.0625rem] font-semibold leading-[1.35] text-[var(--fg)]">
                        {t.term}
                      </dt>
                      <dd className="m-0">
                        <p className="max-w-[68ch] text-[0.9375rem] leading-[1.7] text-[var(--fg-muted)]">
                          {t.definition}
                        </p>
                        {t.see ? (
                          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                            <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-[var(--fg-subtle)]">
                              In FactorFox
                            </span>
                            {t.see.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="text-[0.875rem] text-[var(--accent)] underline underline-offset-4 hover:no-underline"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </p>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <ProseSection
        eyebrow="A note on the vocabulary"
        title="Where the words fight each other."
        tone="sunken"
      >
        <p>
          Three collisions cause most of the confusion in this industry, and none of them are anybody&rsquo;s
          fault. They are the residue of the same product developing separately in several legal systems.
        </p>
        <p>
          <strong>Factoring means different things on either side of the Atlantic.</strong> In North America
          it usually describes a purchase structure. In the United Kingdom it describes a service level,
          where the provider runs the sales ledger and collections, as against invoice discounting where the
          client keeps them. Two people can agree they both do factoring and be describing different
          businesses.
        </p>
        <p>
          <strong>Non recourse describes an intention more often than a guarantee.</strong> The exclusions
          are the product. Disputes, deductions, short payments and performance failures are where most non
          payment originates, and they are usually outside cover, which means the label tells you much less
          than the schedule of exclusions does.
        </p>
        <p>
          <strong>Reverse factoring, supply chain finance and confirming overlap without being
          identical.</strong> They are related structures with different origins, and the useful question is
          never which word to use. It is who carries the credit risk and at what point in the chain the money
          enters. See <Link href="/solutions/reverse-factoring" className="text-[var(--accent)] underline underline-offset-4 hover:no-underline">reverse factoring</Link>{" "}
          for how the operational side of one of these programmes runs.
        </p>
      </ProseSection>

      <RelatedPages
        links={[
          { href: "/resources", label: "Writing", note: "Longer pieces for the funding side of the transaction." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Eligibility, ineligibles, availability and compression." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Dilution, concentration and payment behaviour." },
          { href: "/solutions/factoring", label: "Factoring", note: "Recourse, non recourse and non notification in the product." },
          { href: "/solutions/asset-based-lending", label: "Asset based lending", note: "Borrowing base, collateral and field exams." },
          { href: "/compare", label: "How we compare", note: "Recording systems against decision systems." },
        ]}
      />

      <CtaBand
        title="If a term here describes a problem you have, we should talk about that one."
        body="Rising dilution, concentration arriving through several clients at once, reserve releases running late because cash application is behind. Each of those is a conversation about your book rather than a product presentation."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "See the platform" }}
      />
    </>
  );
}
