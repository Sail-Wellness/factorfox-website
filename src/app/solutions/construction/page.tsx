import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  ProseSection,
  StepList,
  RelatedPages,
  CtaBand,
  Card,
  Eyebrow,
} from "@/components/page-parts";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Construction factoring software and retainage",
  description:
    "Fund subcontractor receivables with schedules of values, retainage, lien deadlines, pay when paid clauses and joint checks held as expiring conditions.",
  path: "/solutions/construction",
  intent: "category",
  target: "construction factoring software",
});

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        trail={[
          { name: "Solutions", path: "/solutions" },
          { name: "Construction", path: "/solutions/construction" },
        ]}
        eyebrow="Construction receivables"
        title="The invoice is a percentage of a job, and part of it was never going to be paid this year."
        lede={
          <>
            <p>
              For the factor funding contractors and subcontractors. Most factors who say they do not fund
              construction are really saying they once funded a progress billing without understanding
              retainage, a pay when paid clause and a lien deadline at the same time.
            </p>
            <p>
              All three are knowable. They are dates and documents, and dates and documents are what a
              platform is for.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondaryCta={{ href: "/solutions/factoring", label: "See the factoring mechanics" }}
      />

      <ProblemSolution
        eyebrow="Why this vertical bites"
        title="Four things that are ordinary in construction and catastrophic anywhere else."
        rows={[
          {
            problem:
              "A progress billing is advanced against in full, and the retained portion turns out not to be collectable until the job closes out, months after the recourse period.",
            response:
              "Retainage is carried as its own portion of the invoice with its own eligibility treatment and its own release condition, never pooled with the currently payable balance.",
          },
          {
            problem:
              "The general contractor has not been paid by the owner, so nobody is paying your client, and the contract says that is allowed.",
            response:
              "Pay when paid and pay if paid terms are recorded per job as facts that change what the aging means, so slow payment is attributed to the clause rather than to the debtor's behaviour.",
          },
          {
            problem:
              "A lien deadline passes while a collections officer is still waiting for a returned call, and the strongest remedy in the file quietly expires.",
            response:
              "Notice and lien dates are held as conditions with owners and reach the responsible person's briefing ahead of the deadline, not on it.",
          },
          {
            problem:
              "A joint check is issued, deposited, and used to pay a supplier who was never in your calculation.",
            response:
              "The joint check arrangement is recorded with its parties and the payments made under it, so what was actually applied to your client's balance is visible rather than assumed.",
          },
        ]}
      />

      <ProseSection
        eyebrow="The paperwork"
        title="A pay application is not an invoice. It is a claim about a percentage."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Where verification actually lands</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              On a commercial book you verify that the goods were delivered. On a construction book you are
              verifying that a percentage of completion was accepted by somebody with the authority to
              accept it.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              The certified pay application, signed by the architect or project manager, is that evidence.
              Verification runs capture it at the moment they run and are never re fetched, so the
              certification signs over the position exactly as it stood.
            </p>
          </Card>
        }
      >
        <p>
          The document set in this industry does the work that a purchase order and a proof of delivery do
          elsewhere. A schedule of values breaks the contract into line items. A pay application claims a
          percentage complete against each of those lines for the period, carries the retained amount
          separately, and states the balance to finish. A certification signed by the architect or the
          project manager is what turns the claim into something a general contractor is expected to pay.
        </p>
        <p>
          <strong>Change orders are the live risk in the file.</strong> Work performed under a verbal
          instruction and billed before the change order is executed is the most common disputed amount in
          construction receivables. It is held as its own state, unexecuted rather than merely unpaid,
          because those two things fail differently and only one of them is a collections problem.
        </p>
        <p>
          <strong>Conditional and unconditional waivers travel with the money.</strong> A waiver exchanged
          for a payment that has not cleared is a document your client has already given away. The waivers
          issued, their conditions and the payments they correspond to are recorded together, because the
          sequence is what matters and the sequence is exactly what nobody can reconstruct six months later.
        </p>
        <p>
          <strong>Lien rights are jurisdictional and unforgiving.</strong> Deadlines for preliminary notices
          and lien filings differ by state and by the role your client played on the job, and FactorFox does
          not interpret them. Your counsel decides what applies. The platform records the dates they give
          you, treats them as conditions that expire, and makes sure a person with the authority to act
          hears about them while acting is still possible.
        </p>
      </ProseSection>

      <StepList
        eyebrow="Funding a job"
        title="What changes in the cycle when the receivable belongs to a project."
        lede="The purchase mechanics are the same as any factoring book. The eligibility questions are not."
        steps={[
          {
            label: "Job setup",
            title: "The job is the unit, not the client",
            body: "Owner, general contractor, contract value, retainage terms, payment clause, bond status and the notice deadlines that apply are recorded per job. A client with four jobs has four different risk profiles, and one of them is usually the reason the client is calling you.",
          },
          {
            label: "Billing",
            title: "The pay application arrives with its schedule of values",
            body: "Extracted under a strict schema and revalidated in ordinary code, with the retained portion separated from the currently payable amount at intake rather than during a dispute. Line items claimed at a percentage above the prior period without a corresponding change order are flagged before purchase.",
          },
          {
            label: "Eligibility",
            title: "Retainage, unexecuted change orders and stale notices come out",
            body: "Each exclusion carries its reason, so the client is shown why their availability is what it is. Retainage in particular is not a haircut applied to a total, it is a distinct balance with a release condition tied to job closeout.",
          },
          {
            label: "Monitoring",
            title: "Job progress and payment behaviour are watched together",
            body: "A job where billing has continued but payment has not is a different signal from a client whose whole book is slowing. Payment velocity is measured per general contractor across every client billing them, which is where a struggling contractor first becomes visible.",
          },
          {
            label: "Closeout",
            title: "Retainage becomes collectable, or it becomes a conversation",
            body: "Release conditions, final waivers and the punch list are tracked to the point where the retained balance is payable. Retainage that ages past closeout without release is an exception with an owner rather than a balance that quietly sits in aging for another quarter.",
          },
        ]}
      />

      <RelatedPages
        links={[
          { href: "/solutions/factoring", label: "Invoice factoring", note: "Schedules, verification, reserves and chargebacks underneath this vertical." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Where retainage and unbilled amounts are treated as ineligible rather than assumed." },
          { href: "/platform/document-intelligence", label: "Document intelligence", note: "Pay applications and schedules of values under a strict schema." },
          { href: "/platform/collections", label: "Collections", note: "Prioritised by exposure and promise history, with deadline conditions in view." },
          { href: "/platform/briefings", label: "Briefings", note: "Where an expiring notice deadline reaches a person who can still act on it." },
          { href: "/solutions/manufacturing", label: "Manufacturing", note: "The other vertical where deductions arrive after the invoice was agreed." },
        ]}
      />

      <CtaBand
        title="Bring a job that closed out badly."
        body="We will set it up against a demonstration book with its retainage terms, payment clause and notice dates, and show you what the file would have looked like six weeks earlier."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/solutions", label: "See every industry we fund" }}
      />
    </>
  );
}
