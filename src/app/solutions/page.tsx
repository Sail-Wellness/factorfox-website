import type { Metadata } from "next";
import {
  PageHero,
  ProseSection,
  FeatureGrid,
  RelatedPages,
  CtaBand,
  DataTable,
  Section,
  Container,
  SectionHead,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Specialty finance software in one platform",
  description:
    "One platform across factoring, asset based lending, purchase order funding, reverse factoring and freight, with books for the industries you fund most.",
  path: "/solutions",
  intent: "category",
  target: "specialty finance software",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox specialty finance platform",
          description:
            "Operating and intelligence platform for specialty finance: factoring, asset based lending, purchase order funding, reverse factoring and freight factoring, on one book with one control model.",
          path: "/solutions",
        })}
      />

      <PageHero
        trail={[{ name: "Solutions", path: "/solutions" }]}
        eyebrow="Solutions"
        title="Most specialty finance companies run more than one structure. Most software makes them run more than one system."
        lede={
          <>
            <p>
              FactorFox is built for the institution that funds. Factors, asset based lenders, purchase
              order funders, confirming programme operators and freight factors, in North America, Latin
              America, Europe, Australia and South Africa.
            </p>
            <p>
              Pick the structure you fund below, or the industry your clients sell into. Each page is
              written in the vocabulary that structure actually uses, because a page that swaps a keyword
              into a generic description is worth nothing to somebody who has done this for twenty years.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform", label: "See the whole platform" }}
      />

      <ProseSection
        eyebrow="Why these are separate pages"
        title="The differences between funding structures are not cosmetic. They are where the money is lost."
      >
        <p>
          A receivable you bought, a receivable you lent against, a payment you made to a supplier before
          the goods existed and a payable your client&rsquo;s buyer approved are four different assets with four
          different failure modes. They age differently, they dilute differently, they concentrate
          differently, and each one has a specific week in which somebody discovers the problem.
        </p>
        <p>
          <strong>Four of the pages below are funding structures.</strong> Factoring, asset based lending,
          purchase order funding and reverse factoring. The fifth, freight, is listed alongside them rather
          than as an industry, because in transportation the debtor, the paperwork, the advance types and
          the fraud are all different enough that it operates as its own product.
        </p>
        <p>
          <strong>The four industry pages are the same product, applied to a different receivable.</strong>{" "}
          What changes is the document that proves the invoice, the reason a payment arrives short, and the
          question the underwriter should be asking. Healthcare has payer mix and net collectable value.
          Construction has retainage and lien deadlines. Staffing has a weekly payroll clock. Manufacturing
          has chargebacks and deductions from buyers large enough to set the terms.
        </p>
      </ProseSection>

      <RelatedPages
        title="The five books"
        links={[
          {
            href: "/solutions/factoring",
            label: "Invoice factoring",
            note: "Recourse, non recourse and non notification. Schedules, verification, reserves, chargebacks, misdirected payments and notice of assignment.",
          },
          {
            href: "/solutions/asset-based-lending",
            label: "Asset based lending",
            note: "Borrowing base, ineligibles, advance rates by class, field exams and availability. Asset based finance, if that is what your market calls it.",
          },
          {
            href: "/solutions/purchase-order-funding",
            label: "Purchase order funding",
            note: "Supplier payment, letters of credit, production milestones and the conversion from order to invoice to receivable.",
          },
          {
            href: "/solutions/reverse-factoring",
            label: "Reverse factoring",
            note: "Payables finance and confirming. Buyer approved payables, supplier onboarding at scale and early payment offers.",
          },
          {
            href: "/solutions/transportation",
            label: "Freight factoring",
            note: "Carriers, brokers, rate confirmations, load level detail, fuel advances, and an FMCSA lookup that refuses to assert what it cannot prove.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="At a glance"
            title="What you fund, what repays you, and what goes wrong."
            lede="If you run two of these, this is the table to hand the person who keeps asking why one system cannot just do both."
          />
          <div className="mt-11">
            <DataTable
              caption="Funding structures compared"
              head={["Structure", "Whose credit repays you", "The characteristic loss"]}
              rows={[
                [
                  "Factoring",
                  "The debtor, with recourse to the client where terms allow",
                  "Dilution the client did not disclose, a debtor concentration nobody aggregated, and a payment that went to the client",
                ],
                [
                  "Asset based lending",
                  "The borrower, secured on a revolving collateral pool",
                  "An availability figure resting on stale collateral evidence and ineligible rules nobody could reproduce",
                ],
                [
                  "Purchase order funding",
                  "The end buyer, once the goods ship and the invoice is raised",
                  "Money paid to a supplier for goods that never shipped, or an instrument that expired while everybody watched production",
                ],
                [
                  "Reverse factoring",
                  "The buyer, on a payable they approved themselves",
                  "Total concentration on one obligor by design, plus an onboarding queue that stalls until the programme never converts",
                ],
                [
                  "Freight factoring",
                  "The broker, at high volume and low value per load",
                  "The same load funded twice, an advance against freight that never delivered, and a broker paying the carrier directly",
                ],
              ]}
            />
          </div>
        </Container>
      </Section>

      <RelatedPages
        title="Industry books"
        links={[
          {
            href: "/solutions/healthcare",
            label: "Healthcare",
            note: "Payer mix, claim aging, net collectable value and remittance advice, with the handling controls described rather than a certification claimed.",
          },
          {
            href: "/solutions/construction",
            label: "Construction",
            note: "Progress billing, retainage, lien deadlines, pay when paid and joint checks.",
          },
          {
            href: "/solutions/staffing",
            label: "Staffing and payroll funding",
            note: "A weekly payroll clock, timesheet verification, invoice frequency and concentration among a few end customers.",
          },
          {
            href: "/solutions/manufacturing",
            label: "Manufacturing and distribution",
            note: "Purchase order to invoice, chargebacks and deductions, dilution from returns and allowances, and buyers large enough to set the terms.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="One system underneath"
        title="What does not change between structures."
        lede="The vocabulary changes on every page. These do not, and they are the reason a mixed book can sit on one platform."
        items={[
          {
            title: "Briefings",
            body: "Six fixed questions answered against what each person is responsible for, on the web, in Microsoft Teams or on a phone. A second briefing states what moved rather than restating the book.",
          },
          {
            title: "Evidence",
            body: "Every conclusion opens onto the records that produced it. Risk observations are append only at the database level, and the platform refuses to show a movement it cannot prove.",
          },
          {
            title: "Continuous underwriting",
            body: "Re underwriting on every material event, versioned immutably, with confidence and coverage reported as two separate numbers rather than one comfortable score.",
          },
          {
            title: "Asymmetric automation",
            body: "The machine may stop money on its own authority. Only a named human may let it through. Four eyes by default, and certain gates can never be made advisory.",
          },
          {
            title: "Covenant monitoring",
            body: "What you owe your own lender, computed continuously with the clause quoted as evidence. FactorFox standards and contractual covenants are never blended into one score.",
          },
          {
            title: "One book, several structures",
            body: "A client factoring receivables while a purchase order transaction is in production, under a facility you report on monthly, is one exposure rather than three systems and a spreadsheet.",
          },
        ]}
      />

      <RelatedPages
        title="Where to go next"
        links={[
          { href: "/platform", label: "The platform", note: "Every capability, and what each one observes and refuses." },
          { href: "/platform/briefings", label: "Briefings", note: "The six questions and how scope follows responsibility." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Eligibility, ineligibles, reserves and availability in detail." },
          { href: "/integrations", label: "Integrations", note: "Organised by business purpose, with an honest status on every row." },
          { href: "/migrate/factorsoft", label: "Moving off FactorSoft", note: "What a migration involves, in the order it happens." },
          { href: "/compare", label: "Comparison", note: "How to evaluate this category without being sold a demonstration." },
          { href: "/resources/glossary", label: "Glossary", note: "The vocabulary, including the terms that differ by market." },
          { href: "/platform/pricing", label: "Pricing", note: "How the platform is charged for and what sits inside it." },
        ]}
      />

      <CtaBand
        title="Come with the structure you actually run."
        body="Bring a schedule, a borrowing base, a stalled purchase order transaction or a confirming programme that is not converting. The demonstration is more useful when it is against your own problem."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "See the whole platform" }}
      />
    </>
  );
}
