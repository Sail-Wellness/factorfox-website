import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureGrid,
  StepList,
  ProseSection,
  DataTable,
  FaqBlock,
  RelatedPages,
  CtaBand,
  Card,
  Section,
  Container,
  SectionHead,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { ProductShot } from "@/components/product-shot";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Factoring treasury software with release control",
  description:
    "Generate NACHA and APCA files and Fedwire instructions, hold bank account changes for a human, and let net availability decide what can move today.",
  path: "/platform/treasury",
  intent: "product",
  target: "factoring treasury software",
});

const FAQS = [
  {
    q: "Will your NACHA file work with our originating bank?",
    a: "Ninety four character fixed records, blocked correctly, PPD credits. That is the standard. What is not standard is your bank, because every originating institution certifies its own dialect and has opinions about batch headers, company identification, discretionary data and addenda. Generate one file, send it, get it certified, then trust the rest. Any vendor who tells you their file works everywhere without certification has not sent enough files.",
  },
  {
    q: "Does FactorFox move money?",
    a: "No. FactorFox produces files and instructions your bank executes, and it decides what is allowed to reach that point. That boundary is deliberate. It means your banking relationship, your controls and your bank's own fraud checks stay exactly where they are, and it means the platform never holds a credential that could move funds on its own.",
  },
  {
    q: "What is the bank account change hold window actually for?",
    a: "It exists so that the time between a request and a payment is time somebody uses. A changed account cannot be referenced by any payment while the hold stands, on any rail. A named human verifies the change out of band, against a contact established before the request arrived, and releases it. Automated approval is refused outright rather than being an option somebody could enable.",
  },
  {
    q: "Can we fund from Australia and the United States in one operation?",
    a: "Yes. APCA direct entry files in CS2 format with one hundred and twenty character records for Australian banks, and NACHA PPD for United States originating banks. The release control, the gates, the four eyes rule and the audit record are identical on both, because the discipline should not depend on which country the money leaves from.",
  },
  {
    q: "What stops a release that passed every gate yesterday from executing today?",
    a: "The gates are re evaluated at execution rather than trusted from when the request was raised. Availability may have compressed, a verification may have failed, a hold may have gone on. A card or a queued approval is a rendering of a decision, and the decision is checked against current state at the moment it would take effect.",
  },
  {
    q: "How do we handle a release that has to go out today and the second approver is on a plane?",
    a: "Four eyes is enforced in the platform rather than in any one surface, so the answer is not to change surface. It is that the second approver can approve from wherever they are, including from Teams on a phone, with the evidence attached and the audit record naming them and the origin. If nobody is available, the release waits. That is the control working, not the control failing.",
  },
];

export default function TreasuryPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox treasury",
          description:
            "Release control, NACHA and APCA payment file generation, Fedwire instructions, bank account change holds and net availability for factoring and asset based lending.",
          path: "/platform/treasury",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Treasury", path: "/platform/treasury" },
        ]}
        eyebrow="Treasury"
        title="Every rail out of your business runs through one door."
        lede={
          <>
            <p>
              Written for whoever presses the button on funding day. ACH, wire, and whatever manual
              instruction gets sent when something has to go out now. Three rails, three habits, and usually
              three different sets of controls, of which one is a spreadsheet and a phone call.
            </p>
            <p>
              In FactorFox they are one door. Nothing reaches a payment file without passing release, and the
              machine is permitted to stop money but never to let it through.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "See a funding day run" }}
        secondaryCta={{ href: "/integrations/banking-and-payments", label: "See the payment rails" }}
        aside={<ReleaseScene />}
      />

      <ProblemSolution
        eyebrow="Why this exists"
        title="The controls are usually strongest on the rail that moves the least money."
        lede="ACH batches get scrutiny because they are routine. The one off wire at four o'clock on a Friday is the one that goes out on a verbal, and it is also the one that is irreversible."
        rows={[
          {
            problem:
              "The ACH file is built from a spreadsheet somebody assembles from the funding queue, and the assembly step is where an amount can change without anyone knowing.",
            response:
              "The file is generated from released items only. There is no assembly step, because there is nothing between the release record and the file except formatting.",
          },
          {
            problem:
              "A wire is sent on an instruction that came by email, against details that were in the email, because the client was waiting.",
            response:
              "A payment cannot reference a bank account that is under hold, on any rail. Urgency does not open a side door, because there is no side door for it to open.",
          },
          {
            problem:
              "Somebody funds against availability that was true this morning and stopped being true at eleven.",
            response:
              "Net availability is evaluated at execution, not at request. A release approved against a book that has since moved is refused and states what changed.",
          },
          {
            problem:
              "The audit trail for payments is the bank's, which means reconstructing who authorised what means asking your bank for records about your own decisions.",
            response:
              "Every release records the actor, the evidence, the policy version, the approvals and the origin, and audit records are immutable at the database level.",
          },
        ]}
      />

      <ProseSection
        eyebrow="Asymmetric automation"
        title="The machine may stop money. Only a named human may let it through."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Why the asymmetry</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A machine that wrongly stops a payment costs you an hour and an apology.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A machine that wrongly releases one costs you the payment, and in the cases that matter most it
              costs you the payment to somebody who chose you precisely because they expected the release to
              be automatic.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              The two errors are not symmetric, so the permissions are not either.
            </p>
          </Card>
        }
      >
        <p>
          This is the single rule that shapes the whole of treasury in FactorFox. Automation is allowed to
          apply the brake and is never allowed to apply the accelerator. Every gate can refuse. No gate can
          approve.
        </p>
        <p>
          <strong>Certain gates can never be made advisory.</strong> Not by a role, not by a configuration
          flag, not by a large customer asking firmly. A gate that protects the movement of money is either
          enforced or it is not present, and the platform does not offer a middle setting that a busy quarter
          could turn into a habit.
        </p>
        <p>
          <strong>Four eyes is the default and it lives underneath every surface.</strong> The requester
          cannot approve their own release from the web application, from a phone, or from Microsoft Teams,
          because the rule is not implemented in any of those places. It is implemented once, below all of
          them. Changing surface changes nothing about who may approve.
        </p>
        <p>
          <strong>Solo operators are not exempted.</strong> In solo mode an AI counter review is recorded
          where the second officer&rsquo;s name would sit, and it refuses outright when any underlying fact has
          changed since the request was raised. It is not a rubber stamp with a friendly name. It is a second
          check that is entitled to say no and does.
        </p>
        <p>
          <strong>And every approval is re evaluated at execution.</strong> An approval is a statement about a
          book that existed when it was given. Between then and the file being built, availability may have
          compressed, a verification may have failed, a debtor limit may have filled or a hold may have gone
          on. The gates run again at the moment of effect, and a release that no longer qualifies is refused
          with the change named.
        </p>
      </ProseSection>

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The rails"
            title="What FactorFox produces, and what your bank still does"
            lede="FactorFox generates files and instructions. Your bank executes them. That boundary keeps your banking relationship and your bank's own controls exactly where they are."
          />
          <div className="mt-11">
            <DataTable
              caption="Payment rails and their controls"
              head={["Rail", "What is produced", "What sits in front of it"]}
              rows={[
                [
                  "NACHA ACH",
                  "PPD credit files for your originating bank. Ninety four character fixed records, blocked correctly, generated from released items only.",
                  "Release control, four eyes, availability re evaluated at execution, and no reference permitted to an account under hold.",
                ],
                [
                  "APCA direct entry",
                  "Australian ABA direct entry files in CS2 format, one hundred and twenty character records.",
                  "Identical controls. The discipline does not change because the country does.",
                ],
                [
                  "Fedwire",
                  "Wire instruction export for same day movement, formatted for your bank's upload, for the large single releases that should not wait for a batch.",
                  "The same release control, plus the bank account change hold, which is where the wire fraud you read about actually gets stopped.",
                ],
                [
                  "Manual instruction",
                  "A recorded release for a movement executed outside the platform, so the record exists even when the rail does not.",
                  "Still a release. An off system payment that leaves no record in the system is the gap every examiner looks for first.",
                ],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Every originating bank certifies its own dialect. Generate one file, send it, have it certified,
            and then trust the rest. We would rather tell you that at the demonstration than let you discover
            it on your first funding day.
          </p>
        </Container>
      </Section>

      <StepList
        eyebrow="Funding day"
        title="From an approved schedule to a file your bank accepts"
        steps={[
          {
            label: "Qualify",
            title: "Net availability decides what can move",
            body: "Eligible collateral at advance, less reserves, less what is already outstanding. A request beyond availability does not become a negotiation with the system. It becomes a stated shortfall with the ineligibles and reserves that caused it named.",
          },
          {
            label: "Request",
            title: "The release is raised with its evidence",
            body: "The schedule, the verification record, the debtor limits it consumes, the gates it must pass, and the effect on the client's availability if it executes.",
          },
          {
            label: "Approve",
            title: "Two people, wherever they are",
            body: "Four eyes by default, from the web application or from Teams on a phone, with the audit record naming the actor and the origin. The requester is refused by name if they try to approve their own.",
          },
          {
            label: "Re evaluate",
            title: "The gates run again at execution",
            body: "Against the book as it stands now, not as it stood at approval. Anything that changed is named. This is the step that catches the release approved twenty minutes before a hold went on.",
          },
          {
            label: "Generate",
            title: "The file is built from released items only",
            body: "NACHA PPD, APCA CS2, or a wire instruction. No intermediate spreadsheet, no manual assembly, nothing between the release record and the formatting.",
          },
          {
            label: "Record",
            title: "What went out, under whose authority",
            body: "Actor, evidence, policy version, approvals and origin, in an audit record that is immutable at the database level. The reconstruction later does not require a request to your bank.",
          },
        ]}
      />

      <Section>
        <Container>
          <ProductShot
            name="forecast"
            width={2000}
            height={1203}
            alt="FactorFox Forecast screen showing portfolio confidence, expected to collect and capital at risk, confidence stated separately for each aging bucket, expected cash arrival by week, and debtor payment confidence with verification status and average days to pay."
            caption="The Forecast screen, which is where the question of what can move safely starts. Confidence is stated for each aging bucket rather than for the book as a whole, cash arrival is projected week by week, and the debtor panel separates what is verified from what is only expected."
          />
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="The rest of the treasury surface"
        title="What else moves, and what watches it"
        items={[
          {
            title: "Bank account change hold",
            body: "A hold in front of every rail. Verified out of band by a named person against a contact established before the request arrived. Automated approval is refused outright and there is no configuration that changes it.",
          },
          {
            title: "Reserve release",
            body: "The client's reserve, moved when the conditions for moving it are met and recorded as a release with its own authority, rather than as an adjustment nobody can trace.",
          },
          {
            title: "Days to zero",
            body: "Net availability projected forward on the client's own funding pattern and collection velocity, so a compression reaches the briefing before it reaches the funding queue.",
          },
          {
            title: "Same day pressure",
            body: "Wires exist because some money genuinely cannot wait. The controls are unchanged for them, which is the entire point of having built them once underneath every rail.",
          },
          {
            title: "Delivery wall",
            body: "Remittance advice and payment notices leave through the same wall as every other channel, including the sandbox rules that stop a test from reaching a real counterparty.",
          },
          {
            title: "Approvals that travel",
            body: "The person who has to approve is often not at a desk. They approve from Teams with the evidence attached, and every control that applies in the browser applies there identically.",
          },
        ]}
      />

      <FaqBlock items={FAQS} title="What a treasury manager checks before signing" />

      <RelatedPages
        links={[
          { href: "/integrations/banking-and-payments", label: "Banking and payments", note: "NACHA, APCA, Fedwire and EDI, with a status on every row." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "Where net availability comes from and why it moves." },
          { href: "/platform/accounting", label: "Accounting", note: "What the ledger does after a release executes." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "The behavioural signals behind a hold." },
          { href: "/integrations/microsoft-teams", label: "Microsoft Teams", note: "Approving a release from a phone without loosening anything." },
          { href: "/platform/security", label: "Security and controls", note: "Asymmetric automation, four eyes and immutable audit." },
        ]}
      />

      <CtaBand
        title="Watch a release get refused."
        body="The most useful ten seconds of any demonstration is the one where the requester tries to approve their own funding and the platform names them and says no."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform/briefings", label: "See where cash reports itself" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

function ReleaseScene() {
  return (
    <figure className="m-0">
      <div className="border border-[var(--line-strong)] bg-[var(--bg-raised)]" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
            Release queue &middot; ACH batch, 15:40 cutoff
          </p>
          <Status kind="critical" label="1 held" />
        </div>

        <div className="space-y-3 p-5">
          {[
            { client: "Kestrel Logistics", amount: "142,900", state: "Released", tone: "ok" },
            { client: "Bright Lane Staffing", amount: "88,150", state: "Awaiting second approval", tone: "warn" },
            { client: "Corriedale Metals", amount: "310,000", state: "Held, bank account change", tone: "crit" },
          ].map((r) => (
            <div key={r.client} className="border border-[var(--line)] p-4">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[0.9375rem] font-semibold leading-[1.35]">{r.client}</p>
                <p className="u-tabular m-0 text-[0.9375rem]">{r.amount}</p>
              </div>
              <p
                className="mt-2 text-[0.8125rem] leading-[1.5]"
                style={{
                  color:
                    r.tone === "crit"
                      ? "var(--color-crit-600)"
                      : r.tone === "warn"
                        ? "var(--color-warn-600)"
                        : "var(--color-ok-600)",
                }}
              >
                {r.state}
              </p>
            </div>
          ))}

          <p className="text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">
            The held item cannot enter the file. A bank account change is under a human only hold, and
            automated approval of it is refused outright.
          </p>

          <p className="font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
            NACHA PPD &middot; generated from released items only &middot; gates re evaluated at execution
          </p>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[50ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the release queue before file generation. The hold behaviour, the four eyes state, the
        release only file rule and the audit fields are the platform&rsquo;s own. Names and figures come from a
        seeded demonstration book.
      </figcaption>
    </figure>
  );
}
