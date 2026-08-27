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
  Card,
  Eyebrow,
} from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Medical factoring software for payer mix",
  description:
    "Fund medical receivables against payer mix, claim aging from date of service, net collectable value, remittance advice and takebacks you can trace.",
  path: "/solutions/healthcare",
  intent: "category",
  target: "medical factoring software",
});

export default function HealthcarePage() {
  return (
    <>
      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Healthcare", path: "/solutions/healthcare" },
        ]}
        eyebrow="Medical receivables"
        title="Nobody pays the billed charge. Fund against it and you are funding a number that was never real."
        lede={
          <>
            <p>
              For the factor or specialty lender funding healthcare receivables. The provider is your
              client. The payer is your debtor, and the payer decides what the invoice was worth after you
              have already advanced against it.
            </p>
            <p>
              Every other receivable arrives with an agreed amount. A medical claim arrives with an asking
              price.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform/continuous-underwriting", label: "How claims are re underwritten" }}
      />

      <ProseSection
        eyebrow="The three numbers"
        title="Billed charges, expected reimbursement, and what actually arrived."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Handling posture, stated plainly</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              We describe controls rather than claim a certification. Tenant isolation is enforced at the
              database level rather than in application code. Audit records are immutable at the database
              level. Integration scopes are least privilege and revocable per tenant with one call.
              Connector tokens are encrypted at rest, never logged and never returned by any interface.
              Outbound communication passes the delivery wall.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Your compliance officer will want the control list and their own assessment, not a badge on a
              marketing page. The list is on the security page and it is written for the person filling in
              the questionnaire.
            </p>
          </Card>
        }
      >
        <p>
          A medical receivable has three values and only one of them is a fact. Billed charges are what the
          provider asked for. Expected reimbursement is what the contract with that payer says the service
          is worth. Net collectable value is what the provider will actually receive after adjudication,
          contractual adjustment, denial, appeal and recoupment. Advance rates in this industry look low to
          an outsider for exactly this reason, and a factor who computes them off billed charges is not
          conservative. They are exposed.
        </p>
        <p>
          <strong>Net collectable value is a measurement, not an assumption.</strong> FactorFox measures
          realisation against the provider&rsquo;s own history, by payer and by claim type, in the same way
          dilution is measured on a commercial book. A provider whose commercial payers realise well and
          whose workers compensation claims realise poorly is a different credit from one with the same
          gross aging and the opposite mix, and the aggregate rate hides that completely.
        </p>
        <p>
          <strong>Claim aging starts at the date of service.</strong> Not at the date the invoice was
          generated, which in this industry can be weeks later and is partly within the provider&rsquo;s control.
          A provider whose billing lag is stretching is a provider under operational strain, and that shows
          up in the interval between service and submission long before it shows up in collections.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Payer mix"
            title="The single most important line in a healthcare credit file."
            lede="Two providers with identical aging and identical volume can be entirely different risks, and the difference is who owes the money."
          />
          <div className="mt-11">
            <DataTable
              caption="Payer classes and what each one changes"
              head={["Payer class", "What it changes for the funder", "What the platform holds"]}
              rows={[
                [
                  "Commercial and managed care",
                  "Contracted rates, predictable adjudication, denials that follow published rules",
                  "Realisation by payer against the provider's own history, denial reasons grouped by code, and appeal outcomes",
                ],
                [
                  "Government programmes",
                  "Assignment of the receivable is restricted, so the structure is a lockbox and control arrangement rather than a purchase in the ordinary sense",
                  "The arrangement, the account control documents and their dates, held as facts about the relationship. Your counsel decides the structure. The platform holds you to what they decided",
                ],
                [
                  "Workers compensation",
                  "Long tails, state fee schedules, and disputes that suspend payment entirely",
                  "Aging from date of service with the suspension recorded as its own state rather than as slow payment",
                ],
                [
                  "Personal injury and letters of protection",
                  "Payment contingent on a case resolving, on a timescale nobody controls",
                  "Held as a contingent receivable with its own eligibility treatment, so it cannot quietly sit in the same pool as an adjudicated claim",
                ],
                [
                  "Self pay and patient responsibility",
                  "The weakest realisation in the mix, and the portion that grows quietly as plan designs change",
                  "Tracked as its own share of the mix, with movement in that share reported as movement",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Concentration is aggregated under one payer name across every provider you fund, which in
            healthcare matters more than it does anywhere else, because a handful of payers sit behind most
            of a regional book.
          </p>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="Operationally"
        title="What the funding desk works with."
        items={[
          {
            title: "Remittance advice as evidence",
            body: "An electronic remittance or explanation of benefits becomes a cash application proposal with the original document preserved. Nothing is posted silently, and the adjustment and denial reasons are carried through rather than netted away.",
          },
          {
            title: "Denials grouped by reason",
            body: "A denial is not a slow payment. Denials are grouped by their stated reason so a provider generating the same coding failure every week is visible as an operational problem rather than as deteriorating aging.",
          },
          {
            title: "Takebacks and recoupments",
            body: "A payer recovering a prior overpayment out of a current remittance is the specific event that breaks naive cash application. It is treated as its own condition, attributed to the claim it reverses.",
          },
          {
            title: "Billing lag",
            body: "The interval between date of service and submission, measured per provider. Stretching lag is an early operational signal, and it is one of the few in this industry that arrives before the money does.",
          },
          {
            title: "Reserve against realisation",
            body: "Reserves are set against measured net collectable value by payer rather than against a single blended advance rate carried on the client record since onboarding.",
          },
          {
            title: "Controls at the record level",
            body: "Tenant isolation at the database level, immutable audit, least privilege integration scopes, encrypted tokens, the delivery wall on anything outbound, and revocation per tenant with one call.",
          },
        ]}
      />

      <RelatedPages
        links={[
          { href: "/solutions/factoring", label: "Invoice factoring", note: "The mechanics underneath: schedules, verification, reserves and chargebacks." },
          { href: "/platform/security", label: "Security and controls", note: "The control list your compliance officer will ask for, written for the questionnaire." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "Realisation, payer concentration and dilution movement between reporting dates." },
          { href: "/platform/accounting", label: "Accounting and cash application", note: "Remittance advice to proposal, with takebacks handled as their own event." },
          { href: "/platform/continuous-underwriting", label: "Continuous underwriting", note: "Re underwriting a provider when the mix moves, not once a year." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Where contingent and restricted claims are treated as ineligible rather than pooled." },
        ]}
      />

      <CtaBand
        title="Bring a provider whose aging looks fine."
        body="We will break their book down by payer against a demonstration set, measure realisation by class, and show you what the blended advance rate was hiding."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every industry we fund" }}
      />
    </>
  );
}
