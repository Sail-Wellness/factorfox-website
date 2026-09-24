import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureGrid,
  StepList,
  ProseSection,
  FaqBlock,
  RelatedPages,
  CtaBand,
} from "@/components/page-parts";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

/*
  Owner confirmed, 23 September 2026: FactorFox Studio is the public name, live in production, with
  Report Studio, Brand Studio and Template Studio as its parts. The Report Studio claims follow
  docs/prd/report-studio.md, including its "not in this release" list: custom reports cover
  clients and debtors today, and the page says so rather than implying the whole book.
*/

export const metadata: Metadata = pageMeta({
  title: "FactorFox Studio: AI reports for factors",
  description:
    "Ask for a report in plain English. FactorFox shows what it understood, runs it on governed measures, and explains every figure. Save, share, schedule.",
  path: "/platform/studio",
  intent: "product",
  target: "AI report builder for factoring companies",
});

const FAQS = [
  {
    q: "Does the AI make up numbers?",
    a: "No. The AI works out what you are asking for. Every number is calculated by FactorFox from governed measures, each with a stated definition, period and source, so a Studio figure is the same figure the rest of the platform produces.",
  },
  {
    q: "What if a report shows something a colleague should not see?",
    a: "It cannot show it to them. A shared report runs under each viewer's own permissions. A measure a role does not include is withheld from that person and named as withheld, rather than silently dropped.",
  },
  {
    q: "What can Studio report on today?",
    a: "Your clients and your debtors, over any period up to three years, with comparison to the previous period. Invoices, funding, receipts, accounting, asset based lending, covenants and the Capital Network are being added as datasets. Custom reports export to CSV today.",
  },
  {
    q: "Can I change a standard report like AR aging?",
    a: "The standard reports stay as they are, so the figures your auditors know never change underneath them. Asking to change one, for example take AR aging and add profitability, makes a new custom report that records which standard report it came from.",
  },
  {
    q: "Can a report run itself?",
    a: "Yes. Say when you want it, for example send me this every Monday morning, and Studio shows you the schedule and saves it only when you confirm. Recipients must be people in your workspace. A report with a condition can also become a Signal, which tells the responsible people whenever a client or debtor meets it. A Signal never approves, holds or pays anything.",
  },
];

export default function StudioPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox Studio",
          description:
            "Natural language report building on governed measures, with a stated interpretation before anything runs, calculation evidence for every figure, saved and scheduled reports and Signals; plus the Brand Studio for white labeling and Template Studio for notices and invitations.",
          path: "/platform/studio",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "FactorFox Studio", path: "/platform/studio" },
        ]}
        eyebrow="FactorFox Studio"
        title="The AI decides what you are asking for. FactorFox decides what the numbers are."
        lede={
          <>
            <p>
              Ask for the report you want in plain English. "Show clients whose dilution increased more
              than 20 percent over the last 90 days." Studio shows you what it understood before anything
              runs, calculates every figure from governed measures under your own permissions, and tells
              you how each one was calculated.
            </p>
            <p>No query builder, no report parameters, and no waiting for the one person who knows SQL.</p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Ask it about your own book" }}
        secondaryCta={{ href: "/platform/evidence", label: "Why every figure carries evidence" }}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="Custom reports are where a factoring operation's questions go to wait."
        rows={[
          {
            problem:
              "A new question means a request to the one person who can build reports, and the answer arrives after the moment it mattered.",
            response:
              "Say it in words. Refine it in words: only clients over $250,000 outstanding, add concentration, show the five worst.",
          },
          {
            problem:
              "AI reporting tools produce confident numbers, and nobody can say where they came from.",
            response:
              "The AI interprets the request. Every figure is calculated by FactorFox from a governed measure with a stated definition, period and source.",
          },
          {
            problem:
              "A report shows a figure, and the first question in the meeting is how it was calculated.",
            response:
              "How was this calculated names each measure's definition, period and source. Ask why a client is on the report and Studio answers from the rows.",
          },
          {
            problem:
              "A report shared with the team shows each person more than their role should.",
            response:
              "A shared report runs under each viewer's own permissions, and a measure their role does not include is withheld and named.",
          },
        ]}
      />

      <StepList
        eyebrow="How a report gets built"
        title="Ask, check, run, refine, keep"
        steps={[
          {
            label: "01",
            title: "Ask",
            body: "On Intelligence, Reports, choose Create with FactorFox and say what you want to see.",
          },
          {
            label: "02",
            title: "Check what it understood",
            body: "Before anything runs, Studio states the period, who is included, the measures, the filters, the grouping and the order.",
          },
          {
            label: "03",
            title: "Run",
            body: "The report runs on the book as it stands, with a short note of what FactorFox noticed in the results.",
          },
          {
            label: "04",
            title: "Refine",
            body: "Keep going in words. Narrow it, add a measure, change the order, or ask why a particular client is on it.",
          },
          {
            label: "05",
            title: "Keep",
            body: "Save it to My Reports, share it, schedule it, or turn it into a Signal. Every change is recorded, and a saved report is set inactive rather than deleted.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Three studios, one rule"
        title="AI proposes. A person decides. FactorFox keeps the record."
        columns={3}
        items={[
          {
            title: "Report Studio",
            body: "Reports from plain English on governed measures, with the interpretation shown first and the calculation behind every figure.",
          },
          {
            title: "Brand Studio",
            body: "Your website address in, a white labeled client portal proposed as a draft, published only when you press Publish.",
          },
          {
            title: "Template Studio",
            body: "Write it for me on notices of assignment, a debtor's own notice and client portal invitations. The tokens a notice cannot work without are always kept, nothing saves until you do, and Back to the built in wording is one press away.",
          },
        ]}
      />

      <ProseSection eyebrow="The design choice" title="Why the AI never decides what the numbers are.">
        <p>
          AI is very good at understanding what somebody means and should never be the system of record.
          So Studio splits the job. The AI works out what you are asking for. FactorFox produces the
          numbers, from measures it already governs and under your own access.
        </p>
        <p>
          That is why a Studio report can go in front of a credit committee or a lender. The figures are
          the same figures the rest of the platform produces, and the path from the question to the number
          is on the record.
        </p>
      </ProseSection>

      <FaqBlock items={FAQS} title="What a controller asks" />

      <RelatedPages
        links={[
          { href: "/platform/white-label", label: "White label client portal", note: "The Brand Studio, from your website address to a published portal." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "The principle every Studio figure is held to." },
          { href: "/platform/briefings", label: "Briefings", note: "The six questions answered every morning, before anyone asks." },
          { href: "/platform/ai-native", label: "AI native", note: "Where the intelligence sits, and why it is model independent." },
        ]}
      />

      <CtaBand
        title="Bring the question your team keeps asking for."
        body="Tell us the report that always takes a week. We will ask Studio for it on a slice of your book and show you how every number was calculated."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform", label: "Tour the platform" }}
      />
    </>
  );
}
