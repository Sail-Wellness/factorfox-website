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
  Section,
  Container,
  SectionHead,
  Card,
  Eyebrow,
  Status,
} from "@/components/page-parts";
import { ProductShot } from "@/components/product-shot";
import { JsonLd } from "@/components/primitives";
import { pageMeta, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Factoring underwriting software that never stops",
  description:
    "Re underwrite on every material event, version each run immutably, and keep a policy where the machine stops money and only a named officer releases it.",
  path: "/platform/continuous-underwriting",
  intent: "product",
  target: "factoring underwriting software",
});

const FAQS = [
  {
    q: "What counts as a material event?",
    a: "Anything that could change a decision. A schedule submitted, an invoice verified or failing verification, a payment arriving early or late against the debtor's own pattern, a concentration crossing a threshold, a dilution movement, a credit limit utilisation change, a document that matches a near duplicate, a bank account change request, a promise made or lapsed, a covenant test moving. Events that cannot change a decision do not trigger a run, because a system that re underwrites on everything is a system whose runs nobody reads.",
  },
  {
    q: "Is this a credit score?",
    a: "No, and the distinction matters when your committee asks. A score compresses a situation into a number that hides what produced it. An underwriting run states the position, names the signals that moved it, reports confidence and coverage separately, and carries references into the records behind each one. You can disagree with a run and point at the exact input you disagree with. Nobody has ever usefully disagreed with a single composite number.",
  },
  {
    q: "Can we make a gate advisory instead of blocking?",
    a: "Some, and deliberately not others. Gate policy is yours to set for ordinary credit and operational conditions. Certain gates can never be turned advisory: the human only hold on a bank account change is the clearest example, and no configuration path exists to automate through it. If a control can be switched off by whoever is under the most pressure that morning, it was never a control.",
  },
  {
    q: "What does asymmetric automation mean in practice?",
    a: "The machine may stop money on its own authority. Only a named human may let money through. That asymmetry is the whole design. An automated hold that turns out to be wrong costs you an hour and an apology. An automated release that turns out to be wrong costs you the advance. So the two directions are not given the same amount of trust, and the audit record shows which side of that line each action came from.",
  },
  {
    q: "How is this different from an annual review with monthly monitoring?",
    a: "An annual review describes a book that no longer exists, and monthly monitoring finds the problem after four more weeks of purchases against it. Continuous underwriting means the position is recomputed when the facts move, and the run that existed at the moment of a funding decision is preserved. When somebody asks why you kept buying after the pattern changed, the answer is a versioned run rather than a recollection.",
  },
  {
    q: "What happens when the platform and the officer disagree?",
    a: "The disagreement is recorded rather than resolved silently. The run keeps its recommendation, the officer's decision is stored against it with their name, the policy version and their written reason, and both sit in the audit packet together. Overriding is a legitimate part of underwriting. Overriding without a trace is what turns one bad file into a pattern nobody can find later.",
  },
];

export default function ContinuousUnderwritingPage() {
  return (
    <>
      <JsonLd
        data={softwareSchema({
          name: "FactorFox continuous underwriting",
          description:
            "Underwriting for factoring and asset based lending that re runs on every material event, versions each run immutably and enforces asymmetric automation at the gate.",
          path: "/platform/continuous-underwriting",
        })}
      />

      <PageHero
        trail={[
          { name: "Platform", path: "/platform" },
          { name: "Continuous underwriting", path: "/platform/continuous-underwriting" },
        ]}
        eyebrow="Continuous underwriting"
        title="You underwrote this client once. The client changed on Tuesday."
        lede={
          <>
            <p>
              Underwriting in factoring and asset based lending has always been treated as an event: a
              file, a decision, a limit, a review date twelve months out. The risk it is meant to control
              does not work that way. It moves with every schedule, every payment and every debtor who
              starts paying five days later than they used to.
            </p>
            <p>
              FactorFox re underwrites on every material event, versions each run immutably, and reports
              what changed rather than what is. It is built for the credit officer and the underwriter
              inside a funding company, not for the company seeking the funding.
            </p>
          </>
        }
        primaryCta={{ href: "/demo", label: "Run continuous underwriting on a demonstration book" }}
        secondaryCta={{ href: "/platform/evidence", label: "See what a run carries" }}
        aside={<UnderwritingRunScene />}
      />

      <ProblemSolution
        eyebrow="The gap this closes"
        title="Every loss review in this industry finds the same sentence."
        lede="The information existed before the money went out. It was in a different report, on a different cycle, in front of a different person."
        rows={[
          {
            problem:
              "The credit file was underwritten in March and reviewed in March next year. Everything in between was an aging report.",
            response:
              "The file is re underwritten whenever a material event lands, and the run that existed at the moment of each funding decision is preserved and can be opened.",
          },
          {
            problem:
              "A limit was set once and then quietly consumed. Nobody notices utilisation until something is refused.",
            response:
              "Credit limit utilisation is a monitored signal on both the client and the debtor side, with the movement reported rather than the balance alone.",
          },
          {
            problem:
              "Risk is judged against industry norms, so a debtor that has always paid at the slow end of terms still looks acceptable while it drifts.",
            response:
              "Payment velocity is measured against that debtor's own history. The comparison that matters is with itself last quarter, not with a sector average.",
          },
          {
            problem:
              "Two officers reach different conclusions on the same debtor because they were looking at different weeks.",
            response:
              "Runs are versioned. Two people can compare version to version and see exactly which inputs moved between them.",
          },
          {
            problem:
              "Somebody removed a hold to get the day closed, and six weeks later nobody can say who or why.",
            response:
              "Overrides carry a name, a written reason and the policy version in force. Certain gates cannot be overridden at all, and the audit record proves which kind was involved.",
          },
        ]}
      />

      <StepList
        eyebrow="The loop"
        title="What happens between an event and a decision."
        lede="This runs whether or not anybody is watching, which is the point. The first a person hears of it is usually the item in their brief."
        steps={[
          {
            label: "Trigger",
            title: "A material event arrives",
            body: "From intake, from cash application, from verification, from a covenant test or from the network view of a debtor that several of your clients sell to. Materiality is evaluated first, so a routine payment on a routine invoice does not spend anybody's attention.",
          },
          {
            label: "Assemble",
            title: "The evidence for this run is gathered and stamped",
            body: "Invoices, aging observations, payment behaviour, documents, verification results, credit results where a source is connected, and prior decisions on the same party. Sources that cannot be reached are named as unavailable rather than skipped quietly, and coverage falls accordingly.",
          },
          {
            label: "Evaluate",
            title: "Signals are computed against the book's own history",
            body: "Every comparison is against a baseline drawn from your portfolio and this client's or debtor's own record. Where the baseline is thin, confidence is lowered and the run says so. Confidence and coverage are carried as two separate numbers from this point to the surface.",
          },
          {
            label: "Version",
            title: "The run is written immutably and given a version",
            body: "Nothing overwrites the previous run. You can open the run as it stood at any funding decision, compare two versions, and see precisely which inputs moved between them. This is what makes a later argument about reasonableness a short conversation.",
          },
          {
            label: "Gate",
            title: "Policy decides what the run is allowed to do",
            body: "The run can hold a schedule, require verification, require a second officer, or clear. It can never release money by itself. Each gate names the specific condition holding the schedule and the authority needed to move it, so the exception queue is actionable rather than a list of red rows.",
          },
          {
            label: "Brief",
            title: "A named person is told, with the action attached",
            body: "The finding reaches whoever carries that scope, with its severity, its reason, its evidence references and the actions their permissions allow. Anything material outside a person's scope travels the escalation lane and arrives labelled as escalated.",
          },
        ]}
      />

      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="The daily signal set"
            title="What is being watched, and what each thing is compared with."
            lede="The comparison is the part that matters. A number on its own is a fact. A number against the right baseline is a decision."
          />
          <div className="mt-11">
            <DataTable
              caption="Monitored signals, baselines and consequences"
              head={["Signal", "Compared against", "What it can do"]}
              rows={[
                ["Payment velocity by obligor", "That debtor's own payment record with your book", "Raises a finding, adjusts the risk position, reorders the collections worklist"],
                ["Dilution movement", "The client's own dilution history, tracked as movement not as a ratio", "Feeds availability and eligibility, raises a finding when the trend breaks"],
                ["Concentration change", "The prior observation, including exposure under one debtor name across several clients", "Can hold further purchases against that debtor and trigger a covenant test"],
                ["Invoice size deviation", "The client's own median invoice, with confidence lowered on a thin baseline", "Sends the invoice to verification rather than blocking the client outright"],
                ["Unusual submission timing", "The client's established submission pattern", "Contributes to a fraud finding. Never a sole basis for a hold"],
                ["Duplicate and near duplicate documents", "Fingerprints within the client and across the whole portfolio", "Holds the schedule and names the matching document"],
                ["Bank account changes", "The account of record", "Human only hold. Automated approval is refused outright and cannot be configured on"],
                ["Availability compression", "Net availability trajectory, with days to zero", "Warns treasury before a release window rather than during it"],
                ["Covenant movement", "The covenants you record, with the clause quoted as evidence", "Reports days to breach on the current path and escalates to the owner"],
                ["Missed promises", "The promise made, by whom, and the debtor's promise history", "Reopens the case with the reason stamped on it"],
                ["Verification exceptions", "The verification run captured at run time", "Holds funding and names the override authority required"],
                ["Credit limit utilisation", "The limit in force, on both the client and the debtor side", "Warns before refusal, and shows which side of the relationship is consuming the limit"],
              ]}
            />
          </div>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-[1.6] text-[var(--fg-subtle)]">
            Several external credit and legal sources are declared rails that answer not configured until
            you hold the contract and the keys. Where that is the case, the platform reports itself blind on
            that source and lowers coverage. It does not treat an empty answer as a clean one.
          </p>
        </Container>
      </Section>

      <ProseSection
        eyebrow="Asymmetric automation"
        title="Stopping money is automatic. Letting it go never is."
        aside={
          <Card accent="signal">
            <Eyebrow tone="signal">Why the asymmetry holds</Eyebrow>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              A wrong hold costs an hour and a phone call. A wrong release costs the advance, and in the
              cases that actually hurt, several advances before anybody notices the pattern.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              So the two directions are not given equal trust. Four eyes applies by default. In solo mode
              an AI counter review is logged where the second officer&rsquo;s name would sit, and it refuses
              outright when any underlying fact has changed since the request was raised.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
              The rule lives underneath every surface, so it cannot be avoided by approving from Microsoft
              Teams or from a phone. A requester who tries to approve their own release is refused by name.
            </p>
          </Card>
        }
      >
        <p>
          Ask a vendor whether their platform automates underwriting and you will usually get a yes that
          means nothing, because the interesting question is which direction the automation is allowed to
          run in.
        </p>
        <p>
          <strong>FactorFox recommends broadly and executes narrowly.</strong> It will hold a schedule,
          require a verification, require a second officer, refuse a bank account change, or stop
          purchases against a debtor whose concentration has moved past policy. Every one of those is a
          machine stopping money, and every one is reversible by a person with the right authority and a
          written reason.
        </p>
        <p>
          What it will not do is release. No configuration, no threshold, no confidence level and no
          quiet mode lets an automated conclusion put money out of the door. A named human approves, the
          approval is recorded with the actor, the evidence, the policy version, the confidence and the
          origin, and the record is immutable.
        </p>
        <p>
          This is also why the exception queue is worth working. When a hold arrives with the specific
          gate, the reason, the evidence and the authority needed to clear it, the queue is a list of
          decisions. When a hold arrives as a red row with a code, the queue becomes something the team
          clears at four o&rsquo;clock to get the day finished, which is the exact moment the control stops
          being a control.
        </p>
        <ProductShot
          name="policies"
          width={2000}
          height={1205}
          alt="FactorFox Policies screen listing credit limits by client as utilisation against an approved ceiling, beside the eligibility rules applied at advance time: a single debtor concentration cap, a maximum days past due at funding, a minimum invoice size, a default advance rate, cross aged ineligibility and restricted industries held for manual approval."
          caption="The Policies screen, where gate policy is set. Credit limits are held as utilisation against each client's approved ceiling, and the rules on the right are the ones evaluated at advance time on every invoice."
        />
      </ProseSection>

      <FaqBlock items={FAQS} title="What credit officers ask about continuous underwriting" />

      <RelatedPages
        links={[
          { href: "/platform/risk-monitoring", label: "Debtor risk monitoring", note: "The exposure side of the same engine, watched debtor by debtor." },
          { href: "/platform/evidence", label: "Intelligence with evidence", note: "Immutable versions, run time capture and sealed packets." },
          { href: "/platform/client-onboarding", label: "Client onboarding", note: "Where the first underwriting run happens, and what it assembles." },
          { href: "/platform/fraud-detection", label: "Fraud detection", note: "The signals that hold a schedule before anyone funds it." },
          { href: "/platform/borrowing-base", label: "Borrowing base", note: "How eligibility and reserves consume what underwriting concludes." },
          { href: "/platform/briefings", label: "Briefings", note: "How a run reaches the person who can act on it." },
        ]}
      />

      <CtaBand
        title="Bring the file that went wrong."
        body="Every operator has one: the client that looked fine until it did not. We will walk the signals that were already in the data, in the order the platform would have surfaced them, and show what would have been held."
        primary={{ href: "/demo", label: "Request a FactorFox AI demonstration" }}
        secondary={{ href: "/platform/evidence", label: "See how conclusions are proven" }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ visual */

const RUNS: { version: string; when: string; trigger: string; note: string; kind?: "critical" | "attention" }[] = [
  {
    version: "v.14",
    when: "Today 11:05",
    trigger: "Concentration change",
    note: "Exposure under one debtor name across three clients. Position moved to hold on further purchases.",
    kind: "critical",
  },
  {
    version: "v.13",
    when: "Yesterday 16:52",
    trigger: "Payment velocity",
    note: "Days to pay drifted 9 days against this debtor's own record. Confidence 71%, coverage 62%.",
    kind: "attention",
  },
  {
    version: "v.12",
    when: "Yesterday 08:14",
    trigger: "Schedule submitted",
    note: "Cleared 8 of 8 gates. Run preserved as it stood at the funding decision.",
  },
  {
    version: "v.11",
    when: "3 days ago",
    trigger: "Verification exception",
    note: "Two invoices held pending confirmation. Evidence captured at run time, never re fetched.",
  },
];

function UnderwritingRunScene() {
  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
              Underwriting runs &middot; Sunline Packaging
            </p>
            <p className="mt-0.5 text-[0.875rem] font-semibold">
              14 versions <span className="font-normal text-[var(--fg-muted)]">&middot; none overwritten</span>
            </p>
          </div>
          <Status kind="info" label="Immutable" />
        </div>
        <ul className="divide-y divide-[var(--line)]">
          {RUNS.map((r) => (
            <li key={r.version} className="px-5 py-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="u-tabular font-mono text-[0.75rem] font-semibold text-[var(--fg)]">{r.version}</span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
                  {r.when}
                </span>
                <span className="text-[0.8125rem] font-semibold">{r.trigger}</span>
                {r.kind ? <Status kind={r.kind} /> : null}
              </div>
              <p className="mt-1.5 text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">{r.note}</p>
            </li>
          ))}
        </ul>
        <p className="border-t border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3 font-mono text-[0.625rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
          Gate policy &middot; machine may hold &middot; release requires a named human
        </p>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the run history for one client. Immutable versioning, the trigger model, run time
        evidence capture and the gate policy are the platform&rsquo;s own. The client name, timings and figures
        come from a seeded demonstration book.
      </figcaption>
    </figure>
  );
}
