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
  title: "Purchase order funding software for lenders",
  description:
    "Fund supplier payments, letters of credit and production milestones, then follow the conversion from purchase order to invoice to receivable on one file.",
  path: "/solutions/purchase-order-funding",
  intent: "category",
  target: "purchase order funding software",
});

const FAQS = [
  {
    q: "Is this a purchase order management or procurement system?",
    a: "No. Procurement tools help a company issue and approve its own purchase orders and control its own spend. This is a lending platform. The purchase order here is somebody else's document, used as the basis for advancing money to a supplier so goods can be produced and shipped. If your problem is approving internal requisitions, the tools you are looking for are a different category entirely and we are not one of them.",
  },
  {
    q: "How is exposure held before there is an invoice to hold it against?",
    a: "As a transaction rather than a receivable. A funded purchase order carries the committed amount, the amounts actually disbursed to suppliers, the instruments issued on its behalf, the milestones reached and the expected takeout, and it ages against expected shipment rather than against invoice terms. Aging against a due date that does not yet exist is how PO exposure becomes invisible in systems built for receivables.",
  },
  {
    q: "What happens at the conversion into a receivable?",
    a: "The invoice raised on shipment is linked to the purchase order that financed it, and the funded cost is taken out of the transaction and settled against the advance on the new receivable. The platform holds the chain as one object so the exposure is never counted twice and never disappears in the handover. Where the same institution provides the factoring line that takes out the purchase order, both sides sit on the same book and the takeout is a movement rather than a reconciliation.",
  },
  {
    q: "Can it handle a partial shipment?",
    a: "That is the ordinary case in this product and it is the case that breaks spreadsheets. A partial shipment converts part of the transaction into a receivable while the rest of it remains a production exposure, with the disbursed cost apportioned across both. The remaining balance keeps its own milestones and its own expected shipment date, and the invoiced portion enters aging on the buyer's terms.",
  },
  {
    q: "Do you verify that the goods actually exist?",
    a: "The platform organises and holds the evidence others produce: inspection certificates, bills of lading, packing lists, warehouse receipts and third party confirmations, each captured at the moment it arrived. It does not assert a fact it cannot prove. Where a document has not arrived, the milestone reads outstanding and names what is missing rather than passing on the strength of an expectation. The judgement about whether the evidence is sufficient stays with your officer.",
  },
  {
    q: "What controls sit around the supplier payment itself?",
    a: "Supplier payments are where this product loses money, so the strictest controls in the platform apply to them. Bank account details for a supplier sit under a human only hold: the machine may stop the payment, and only a named person may release it. Four eyes applies by default, and in solo mode an AI counter review is recorded in the second officer's place and refuses outright if any underlying fact has changed since the request was raised. Every release records the actor, the evidence and the policy version.",
  },
];

export default function PurchaseOrderFundingPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox purchase order funding",
          description:
            "Purchase order funding platform for funders: supplier payment control, letters of credit and supplier guarantees, production milestone tracking, and conversion from purchase order to invoice to receivable.",
          path: "/solutions/purchase-order-funding",
        })}
      />

      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Purchase order funding", path: "/solutions/purchase-order-funding" },
        ]}
        eyebrow="Purchase order funding"
        title="You are funding production against a document, and the goods have not been made yet."
        lede={
          <>
            <p>
              Two qualifications, because this search collects the wrong people. This is not procurement
              software and it does not help a company issue or approve its own purchase orders. It is also
              not for a business seeking purchase order finance. It is the operating platform for the
              institution putting up the money: the purchase order funder, the trade finance desk, the
              factor whose clients keep bringing orders they cannot fill.
            </p>
            <p>
              The exposure in this product does not behave like a receivable, and pretending otherwise is
              how it gets mispriced and under monitored.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/solutions/factoring", label: "See the factoring takeout" }}
        aside={<TransactionScene />}
      />

      <ProblemSolution
        eyebrow="Why this is different"
        title="A receivable exists. A purchase order is a promise about the future."
        lede="Every operational habit built around receivables quietly misleads you here, because the collateral is not yet in existence and the aging clock has not started."
        rows={[
          {
            problem:
              "Exposure is tracked in a spreadsheet because the core system has nowhere to put money advanced against something that is not an invoice.",
            response:
              "A funded purchase order is a first class transaction with committed, disbursed, instrument and expected takeout amounts, aging against expected shipment.",
          },
          {
            problem:
              "Supplier payments are approved on an email from the client, sometimes with new bank details attached.",
            response:
              "Supplier bank details sit under a human only hold. The machine may stop the payment. Only a named person may release it, under four eyes.",
          },
          {
            problem:
              "Production progress is a phone call, and the answer is always that it is nearly ready.",
            response:
              "Milestones are recorded with the document that evidences each one, and an outstanding milestone names what is missing rather than passing on optimism.",
          },
          {
            problem:
              "The transaction converts into an invoice and the exposure is either counted twice or lost between two systems.",
            response:
              "The purchase order, the shipment, the invoice and the receivable are one linked chain, so the takeout is a movement inside the book rather than a reconciliation between books.",
          },
          {
            problem:
              "Nobody notices that four of this month's transactions rest on the same end buyer.",
            response:
              "Concentration is aggregated under one buyer name across every client and every transaction, which is the figure that changes the appetite.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The instruments"
        title="Letters of credit and supplier guarantees are not paperwork. They are the deal."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Where the money actually goes wrong</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              The catastrophic loss in purchase order funding is rarely a buyer who refuses to pay. It is
              money that reached a supplier who never shipped, or shipped something the buyer rejected.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              So the platform treats supplier payment as the highest control point in the product. Bank
              account changes are held for a human, duplicate and near duplicate supporting documents are
              detected across the whole portfolio, and every release carries the actor, the evidence and
              the policy version into an audit record that cannot be mutated.
            </p>
          </Card>
        }
      >
        <p>
          How you pay the supplier determines what you can recover when the transaction goes wrong, so the
          instrument is recorded as a fact about the transaction rather than as an attachment somebody
          filed.
        </p>
        <p>
          <strong>A letter of credit</strong> carries its issuing bank, its beneficiary, its amount, its
          expiry, its latest shipment date and the documents it requires for presentation. Those dates are
          monitored the way covenant dates are monitored, because an expiry that passes unnoticed converts
          a controlled exposure into an unsecured one on a Friday afternoon.
        </p>
        <p>
          <strong>A supplier guarantee or performance bond</strong> carries the obligor standing behind
          performance and what triggers a call. If that obligor is also an obligor elsewhere on your book,
          the platform aggregates it, because credit support from a party you are already exposed to is
          less support than it appears on the page.
        </p>
        <p>
          <strong>Direct supplier payment</strong> carries the strictest controls in the platform, and the
          reason is unsentimental. It is the point at which your money leaves the building on the strength
          of somebody else&rsquo;s assurance that goods will follow.
        </p>
      </ProseSection>

      <StepList
        eyebrow="The transaction"
        title="From an order accepted to a receivable taken out."
        lede="Six stages, each with its own evidence and its own way of failing."
        steps={[
          {
            label: "Assessment",
            title: "Three parties are underwritten, not one",
            body: "The client can fulfil or cannot. The supplier can produce or cannot. The end buyer can pay or cannot, and their credit is what ultimately repays you. Continuous underwriting runs on every material event and reports confidence and coverage separately, so a transaction resting on a buyer you know little about is visibly that rather than quietly that.",
          },
          {
            label: "Structure",
            title: "Cost, margin, instrument and the takeout are agreed before a cent moves",
            body: "The funded cost, the expected invoice value, the gross margin the transaction depends on and how the receivable will be taken out are recorded together. A transaction whose margin cannot absorb its own fees is an argument to have at structuring, not at settlement.",
          },
          {
            label: "Issue",
            title: "The instrument is issued and its dates enter monitoring",
            body: "Letter of credit expiry, latest shipment date, presentation window and required documents are tracked with the same discipline as a covenant date. Approaching dates reach the responsible person's briefing while there is still time to amend rather than after the window closes.",
          },
          {
            label: "Production",
            title: "Milestones are recorded against evidence, not against reassurance",
            body: "Deposit paid, materials procured, production complete, inspection passed, goods released for shipment. Each milestone names the document that evidences it. An outstanding milestone reads outstanding and names what is missing, and a milestone that has slipped twice is a signal in its own right.",
          },
          {
            label: "Shipment",
            title: "Documents arrive and the exposure begins to change shape",
            body: "Bill of lading, packing list, inspection certificate and commercial invoice are extracted under a strict schema, revalidated in ordinary code and matched against the order. Duplicates and near duplicates are detected within the client and across the portfolio, because the same bill of lading financed twice is a known way this product is defrauded.",
          },
          {
            label: "Conversion",
            title: "Invoice raised, receivable created, transaction taken out",
            body: "The invoice is linked to the order that financed it, the disbursed cost is settled from the advance against the new receivable, and the remaining exposure moves onto the buyer's payment terms. A partial shipment splits the transaction rather than confusing it: part converts, the rest keeps its milestones.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="For the funder"
        title="What the desk gets, beyond the transaction record."
        columns={3}
        items={[
          {
            title: "Chain exposure",
            body: "Purchase order, shipment, invoice and receivable as one linked object, so exposure is never double counted and never lost at the handover.",
          },
          {
            title: "Buyer aggregation",
            body: "One end buyer, every client and every transaction resting on them, one figure. Concentration in this product hides across transactions rather than inside one.",
          },
          {
            title: "Release control",
            body: "Payment files for the rails your bank accepts, with release control in front of them and the delivery wall stopping a test from reaching a real supplier.",
          },
          {
            title: "Evidence at run time",
            body: "Verification runs capture what they saw when they ran and are never re fetched, so a decision can be reviewed against the facts as they stood.",
          },
          {
            title: "Officer briefings",
            body: "Six fixed questions answered against your own responsibility, including what changed since the last brief and what requires a decision now.",
          },
          {
            title: "Sealed packets",
            body: "Audit packets sealed for the period they describe, with a database trigger refusing mutation, for the transaction that ends up in a recovery conversation.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The risk register"
            title="Six ways the transaction fails, and what the platform does about each."
            lede="None of these are hypothetical. Every purchase order funder has a file for each."
          />
          <div className="mt-11">
            <DataTable
              caption="Purchase order funding risks and platform behaviour"
              head={["What goes wrong", "How it shows up first", "What FactorFox does"]}
              rows={[
                [
                  "The goods never ship",
                  "A production milestone slips, then slips again, with no document behind either date",
                  "Milestones hold their evidence and their history. Repeated slippage on one transaction or one supplier raises a signal rather than accumulating in an inbox",
                ],
                [
                  "The supplier is paid and disappears",
                  "New bank details arrive shortly before a large disbursement",
                  "Bank account changes are held for a named human. The machine may stop the payment and may never release it, and four eyes applies to the release",
                ],
                [
                  "The buyer rejects the goods",
                  "An inspection certificate is missing or an inspection fails before shipment",
                  "Inspection sits as its own milestone with its own document, so shipment against a failed or absent inspection is an exception with a name on it",
                ],
                [
                  "The letter of credit expires",
                  "A date passes while everybody is watching production",
                  "Instrument dates are monitored like covenant dates and reach the responsible person's briefing ahead of the deadline",
                ],
                [
                  "The margin evaporates",
                  "Cost overruns, additional shipments and fees consume the spread the deal rested on",
                  "Committed, disbursed and expected takeout are held per transaction, so erosion is visible against the original structure rather than at settlement",
                ],
                [
                  "The same document funds twice",
                  "A purchase order or bill of lading reappears under a different client",
                  "Duplicate and near duplicate detection runs within the client and across the whole portfolio, not only against that client's own history",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <FaqBlock items={FAQS} title="What a purchase order desk asks first" />

      <RelatedPages
        links={[
          { href: "/solutions/factoring", label: "Factoring", note: "The receivable side that usually takes the transaction out." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Client, supplier and end buyer, re underwritten on every material event." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "Near duplicate documents and the bank change nobody may release alone." },
          { href: "/platform/treasury", label: "Treasury", note: "Supplier disbursement, payment files and release control." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Bills of lading, packing lists and inspection certificates under a strict schema." },
          { href: "/solutions/manufacturing", label: "Manufacturing", note: "Where purchase order funding most often converts into an invoice." },
          { href: "/solutions/reverse-factoring", label: "Reverse factoring", note: "The same buyer, financed from the payables side instead." },
        ]}
      />

      <CtaBand
        title="Bring a transaction that went wrong."
        body="We will model it against a demonstration book, from supplier disbursement through the milestones to the takeout, and show you where the platform would have stopped and asked for a name."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every funding structure" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

const MILESTONES: { label: string; detail: string; kind: "available" | "attention" | "critical" | "info" }[] = [
  { label: "Deposit disbursed", detail: "40% to supplier, released by M. Chen under four eyes", kind: "available" },
  { label: "Materials procured", detail: "Supplier declaration on file, dated 11 days ago", kind: "available" },
  { label: "Production complete", detail: "Slipped twice. No document behind either date", kind: "attention" },
  { label: "Inspection passed", detail: "Outstanding. Third party certificate not received", kind: "info" },
  { label: "Bill of lading", detail: "Not received. Latest shipment date under the credit: 9 days", kind: "critical" },
];

function TransactionScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
              Transaction POF-1187 &middot; Larkspur Housewares &middot; end buyer Tolliver Retail
            </p>
            <p className="mt-0.5 text-[0.875rem] font-semibold">
              Committed $412,000 <span className="font-normal text-[var(--fg-muted)]">&middot; disbursed $164,800</span>
            </p>
          </div>
          <Status kind="attention" label="Milestone slipped" />
        </div>

        <ol className="divide-y divide-[var(--line)]">
          {MILESTONES.map((m) => (
            <li key={m.label} className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1.5 px-5 py-3">
              <div className="min-w-[12rem]">
                <p className="text-[0.875rem] font-semibold leading-[1.35]">{m.label}</p>
                <p className="mt-1 text-[0.75rem] leading-[1.5] text-[var(--fg-muted)]">{m.detail}</p>
              </div>
              <Status
                kind={m.kind}
                label={
                  m.kind === "available" ? "Evidenced" : m.kind === "attention" ? "Slipped" : m.kind === "info" ? "Outstanding" : "At risk"
                }
              />
            </li>
          ))}
        </ol>

        <p className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
          Expected takeout &middot; invoice to Tolliver Retail &middot; $524,000 &middot; not yet raised
        </p>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of a funded purchase order as a transaction. Milestones evidenced by named documents,
        outstanding states that say what is missing rather than passing, instrument date monitoring and the
        expected takeout held against the committed amount are the platform&rsquo;s own behaviour. Party names
        and figures come from a seeded demonstration book.
      </figcaption>
    </figure>
  );
}
