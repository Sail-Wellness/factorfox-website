import type { Metadata } from "next";
import {
  PageHero,
  FeatureGrid,
  ProseSection,
  ProblemSolution,
  RelatedPages,
  CtaBand,
  Card,
  Eyebrow,
} from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Manufacturing factoring software for funders",
  description:
    "Fund producers and distributors through purchase order to invoice, chargebacks, dilution from returns, and concentration among buyers that set terms.",
  path: "/solutions/manufacturing",
  intent: "category",
  target: "manufacturing factoring software",
});

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Manufacturing", path: "/solutions/manufacturing" },
        ]}
        eyebrow="Manufacturing and distribution"
        title="The invoice was agreed. The deduction was not, and it arrives ninety days later with a code on it."
        lede={
          <>
            <p>
              For the factor or lender funding manufacturers and distributors. Your client makes or moves
              goods, sells to buyers considerably larger than they are, and those buyers decide unilaterally
              what the invoice was worth.
            </p>
            <p>
              Dilution in this vertical is not an accident. It is a policy, published in a vendor
              compliance manual your client signed and has probably never read.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/solutions/purchase-order-funding", label: "Funding the order before the invoice" }}
      />

      <FeatureGrid
        eyebrow="Where the money goes"
        title="Six deductions that arrive after you have already funded."
        lede="Each of these reduces a receivable you advanced against, and each one is charged back under a different heading in the buyer's system."
        items={[
          {
            title: "Compliance chargebacks",
            body: "Labelling, carton marking, routing guide violations and advance shipping notice failures. Small individually, relentless in aggregate, and entirely predictable once you can see them grouped by reason.",
          },
          {
            title: "Delivery performance penalties",
            body: "Charges for shipping late, early or short against a delivery window. They attach to a purchase order rather than to an invoice, which is exactly why they are hard to reconcile after the fact.",
          },
          {
            title: "Returns and allowances",
            body: "Goods returned, damaged or accepted at a negotiated discount. The classic source of dilution, and the one most likely to have been settled verbally between your client and their buyer.",
          },
          {
            title: "Trade promotions and rebates",
            body: "Co operative advertising, volume rebates and markdown support, deducted against current invoices for programmes agreed months earlier.",
          },
          {
            title: "Short pays and pricing disputes",
            body: "The buyer paying against their own purchase order price rather than the invoice price. The difference is almost never disputed by the client, because the buyer is the account.",
          },
          {
            title: "Settlement discounts taken late",
            body: "An early payment discount deducted on a payment that arrived nowhere near early. Rarely worth the argument individually, and a measurable trailing rate at volume.",
          },
        ]}
      />

      <ProseSection
        eyebrow="What that means for the advance"
        title="Dilution is the advance rate. Everything else is negotiation."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Concentration you cannot diversify away</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A manufacturer with one buyer at most of their volume is not a client with a concentration
              problem. It is a client whose business is that relationship, and diversification advice is
              not a credit control.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              What is a credit control is knowing your own aggregate. Exposure is computed under one buyer
              name across every client selling to them, so the number that decides your appetite is the
              portfolio number rather than the client one.
            </p>
          </Card>
        }
      >
        <p>
          On a manufacturing book the advance rate is a claim about dilution, and if the claim is wrong the
          reserve absorbs the difference until it cannot. So dilution is measured against the client&rsquo;s own
          history rather than a portfolio assumption, attributed at the invoice, and grouped by the reason
          the buyer gave.
        </p>
        <p>
          <strong>Grouping by reason is what makes it actionable.</strong> A client running a steady
          trailing dilution rate made up of returns is a different credit from one whose rate is identical
          but made up of routing violations. The first is a product problem you can price. The second is an
          operational failure the client can fix, and having the evidence grouped by code is what turns
          that from an argument into a conversation.
        </p>
        <p>
          <strong>Deductions attach to the order, not always to the invoice.</strong> A penalty raised
          against a purchase order can be netted from a remittance covering entirely different invoices,
          which is precisely how cash application in this vertical becomes guesswork. Remittances are
          proposed against invoices with the original document preserved as evidence, and unmatched
          deductions are held as their own condition rather than being spread across whatever was open.
        </p>
        <p>
          <strong>Seasonality moves the whole book at once.</strong> Volumes into retail buyers surge and
          collapse on a calendar, and a purchase pattern that looks like deterioration in February may be
          the same pattern as last February. Invoice size deviation is measured against the client&rsquo;s own
          median rather than against a portfolio average, and movement is stated as movement rather than re
          baselined into a new normal.
        </p>
      </ProseSection>

      <ProblemSolution
        eyebrow="Operationally"
        title="The reconciliation nobody has time for is the one that decides the advance rate."
        rows={[
          {
            problem:
              "A remittance arrives net of eleven deductions with codes nobody maps, and the difference is written off to keep cash application moving.",
            response:
              "Deductions are held as their own items with the reason carried through, so a write off is a decision somebody made rather than a rounding difference the process created.",
          },
          {
            problem:
              "Dilution is calculated once a quarter for the borrowing base and surprises everyone when it moves.",
            response:
              "Dilution movement is measured continuously against the client's own history and reaches the responsible officer's briefing when it moves materially.",
          },
          {
            problem:
              "The client's largest buyer stretches payment by two weeks, and it is read as a collections problem rather than as the buyer's new policy.",
            response:
              "Payment velocity is measured per buyer across every client selling to them, so a change in the buyer's behaviour is attributed to the buyer.",
          },
          {
            problem:
              "The same purchase order was financed as a production advance and then again as an invoice, because two teams held two records.",
            response:
              "Order, shipment, invoice and receivable are one linked chain, and near duplicate documents are detected within the client and across the portfolio.",
          },
        ]}
      />

      <RelatedPages
        links={[
          { href: "/solutions/purchase-order-funding", label: "Purchase order funding", note: "Funding production before the invoice exists, and the takeout that follows." },
          { href: "/solutions/factoring", label: "Invoice factoring", note: "Schedules, verification, reserves and chargebacks underneath this vertical." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Dilution movement, buyer payment velocity and aggregated concentration." },
          { href: "/platform/accounting", label: "Accounting and cash application", note: "Remittances with deductions proposed against invoices, never posted silently." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Where dilution becomes an advance rate argument with evidence behind it." },
          { href: "/solutions/asset-based-lending", label: "Asset based lending", note: "When the same client outgrows factoring and needs inventory in the base." },
        ]}
      />

      <CtaBand
        title="Bring a remittance you could not reconcile."
        body="We will apply it against a demonstration book, hold the deductions as their own items with their reasons grouped, and show you the trailing dilution rate that advance rate should have been set against."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every industry we fund" }}
      />
    </>
  );
}
