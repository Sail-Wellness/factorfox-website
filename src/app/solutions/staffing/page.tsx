import type { Metadata } from "next";
import {
  PageHero,
  StepList,
  ProseSection,
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
  title: "Staffing factoring software for payroll weeks",
  description:
    "Fund staffing agencies on a weekly payroll clock, with timesheet verification, high invoice frequency and concentration among a few end customers.",
  path: "/solutions/staffing",
  intent: "category",
  target: "staffing factoring software",
});

export default function StaffingPage() {
  return (
    <>
      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Staffing", path: "/solutions/staffing" },
        ]}
        eyebrow="Staffing and payroll funding"
        title="Payroll runs on Friday whether or not your verification came back."
        lede={
          <>
            <p>
              For the factor funding staffing agencies. This is the only vertical where your client&rsquo;s
              business ends the week you are late, because temporary workers who are not paid on time do
              not come back on Monday and the agency loses the account it was billing.
            </p>
            <p>
              Which means the operational question here is not how well you underwrite. It is whether your
              process fits inside a fixed weekly window.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/platform/document-intelligence", label: "How timesheets are verified" }}
      />

      <StepList
        eyebrow="The week"
        title="The cadence every staffing factor actually runs on."
        lede="Nothing about this cycle is negotiable, and everything in the platform that touches it is built around the fact that the deadline is a payroll date."
        steps={[
          {
            label: "Monday to Friday",
            title: "Hours are worked, and approval is the thing that will be late",
            body: "The receivable is created by time worked, but it is only fundable once somebody at the end customer approves the hours. Timesheets arrive through vendor management portals, by email, and occasionally as a photograph, and they arrive on the end customer's schedule rather than the agency's.",
          },
          {
            label: "Monday",
            title: "The batch arrives, and it is large and small at once",
            body: "Hundreds of low value invoices covering one week of placements across a handful of end customers. Extraction under a strict schema and revalidation in ordinary code matter more here than anywhere, because manual keying at this volume is where errors and staleness enter the book.",
          },
          {
            label: "Tuesday",
            title: "Verification runs where the exposure and the deviation are",
            body: "Hours billed against hours approved, rates against the placement agreement, and this week's pattern against this client's own history. A branch billing well above any hours it has ever billed before is an exception before it is a funding, not a discovery after payroll cleared.",
          },
          {
            label: "Wednesday",
            title: "The purchase gates run and the exceptions get named",
            body: "Concentration under the aggregated end customer name, credit limit utilisation, eligibility and availability all apply. A held invoice names the reason and the person who can release it, because in this vertical an unexplained hold on Wednesday becomes an emergency on Thursday.",
          },
          {
            label: "Thursday",
            title: "Funds are released against a real position",
            body: "Payment files for the rails your bank accepts, release control in front of them, and availability recomputed as the release lands. Days to zero on the current trajectory is the number that decides whether next week's payroll is comfortable.",
          },
          {
            label: "Following weeks",
            title: "Cash applies, and the same end customers pay on their own terms",
            body: "Large end customers pay on their schedule, not yours, so the gap between a weekly funding cadence and a slower collection cadence is the working capital the agency is actually buying. Payment velocity per end customer is measured across every agency billing them.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The credit question"
        title="You are lending against four end customers and calling it a portfolio."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">The other exposure in the file</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              Payroll taxes and withholding are the quiet failure in staffing credit. An agency that falls
              behind on employment taxes can create obligations that sit ahead of your position, and it
              rarely announces itself.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              FactorFox does not assert a tax status it has not been given. Where the evidence you require
              is a filing confirmation or a payroll service report, the requirement is held as a condition
              with a due date and an owner, and an overdue condition is an exception rather than an empty
              field nobody looks at.
            </p>
          </Card>
        }
      >
        <p>
          A staffing agency looks diversified from the inside. Fifty workers, twelve branches, hundreds of
          invoices a week. From the funder&rsquo;s side it usually resolves to three or four end customers who
          account for most of the billing, and losing one of them does not reduce the agency&rsquo;s revenue by
          a quarter. It removes the ability to make payroll.
        </p>
        <p>
          <strong>Concentration is aggregated under one end customer name across every agency you fund.</strong>{" "}
          A regional hospital system or a distribution centre can sit behind a large share of a staffing
          book while looking modest on any single client file, and the aggregate is the figure that changes
          the credit decision.
        </p>
        <p>
          <strong>Dilution here has its own sources.</strong> Hours disputed after approval, rates billed
          above the placement agreement, overtime treated differently by the end customer than by the
          agency, and rebates or rebilling under a vendor management arrangement. Each is attributed at the
          invoice and measured as a trailing rate against the client&rsquo;s own history, so an agency whose
          billing discipline is slipping is visible as a trend rather than as an argument at month end.
        </p>
        <p>
          <strong>Velocity is the leading signal.</strong> Payment velocity per end customer, invoice size
          deviation against the client&rsquo;s own median, unusual submission timing and near duplicate
          timesheets within and across the portfolio all move before aging does. On a weekly cycle, moving
          before aging is the only warning that is early enough to matter.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Documents and disputes"
            title="What proves a staffing invoice, and how each proof fails."
          />
          <div className="mt-11">
            <DataTable
              caption="Staffing verification documents"
              head={["Evidence", "What it proves", "How it goes wrong"]}
              rows={[
                [
                  "Approved timesheet",
                  "That hours were worked and accepted by someone at the end customer",
                  "Approved by a supervisor without authority, or approved in a portal that the end customer later reconciles differently",
                ],
                [
                  "Placement or rate agreement",
                  "The bill rate, the markup and the overtime treatment agreed for that assignment",
                  "Billed at a rate that has drifted from the agreement, which surfaces as a deduction weeks later",
                ],
                [
                  "Vendor management statement",
                  "What the end customer's own system believes it owes for the period",
                  "Fees, rebates and adjustments applied inside the arrangement that were never on the agency's invoice",
                ],
                [
                  "Payroll register",
                  "That the workers behind the billing were actually paid",
                  "The document most likely to be missing on the agency you should be worried about",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            All of it is extracted under a strict schema and revalidated in ordinary deterministic code
            before it touches your book. Output that does not conform is rejected rather than repaired,
            and duplicates and near duplicates are detected within the client and across the portfolio.
          </p>
        </Container>
      </Section>

      <RelatedPages
        links={[
          { href: "/solutions/factoring", label: "Invoice factoring", note: "The purchase mechanics underneath the weekly cycle." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Timesheets and registers at volume, under a strict schema." },
          { href: "/platform/treasury", label: "Treasury", note: "Release control and days to zero, against a payroll deadline." },
          { href: "/platform/risk-monitoring", label: "Risk monitoring", note: "End customer concentration, payment velocity and dilution movement." },
          { href: "/platform/client-onboarding", label: "Client onboarding", note: "Conditions with due dates and owners, including the ones that recur." },
          { href: "/platform/collections", label: "Collections", note: "Prioritised by exposure across every agency billing the same end customer." },
        ]}
      />

      <CtaBand
        title="Bring us your worst Thursday."
        body="We will run one week of a staffing book against a demonstration set, from timesheet intake through verification to release, and show you where the hours actually stop being provable."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every industry we fund" }}
      />
    </>
  );
}
