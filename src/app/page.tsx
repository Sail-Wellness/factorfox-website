import Link from "next/link";
import type { Metadata } from "next";
import { Container, Section, SectionHead, Eyebrow, CTA, Card, JsonLd, Status } from "@/components/primitives";
import { BriefingPanel } from "@/components/briefing-panel";
import { ProductShot } from "@/components/product-shot";
import { pageMeta, softwareSchema, faqSchema } from "@/lib/seo";
import { ROLES } from "@/content/roles";

export const metadata: Metadata = pageMeta({
  title: "Factoring software built on briefings, not dashboards",
  description:
    "FactorFox gives factors, asset based lenders and purchase order funders role aware briefings, evidence behind every conclusion and approvals in Teams.",
  path: "/",
  intent: "product",
  target: "factoring software",
});

const FAQS = [
  {
    q: "Is FactorFox software for factoring companies or a factoring company itself?",
    a: "FactorFox builds software for the institutions that fund. Our customers are factors, asset based lenders, purchase order funders and specialty finance companies. We do not compete with them for their clients.",
  },
  {
    q: "What is the difference between a briefing and a dashboard?",
    a: "A dashboard waits for you to go looking. It shows the same charts to everyone and leaves the interpretation to you. A briefing answers six fixed questions for your specific responsibility, states what changed since the last one, links each answer to the evidence behind it, and offers only the actions you have the permission to take.",
  },
  {
    q: "Does FactorFox automate funding decisions?",
    a: "The machine may recommend broadly and execute narrowly. It can stop money on its own. Only a named human can let money through. Every automated conclusion records the evidence it used, the policy version, its confidence and the approver.",
  },
  {
    q: "Can FactorFox monitor our bank covenants?",
    a: "It monitors facility limits, concentration, eligibility, advance rates, reserves, collateral performance and reporting obligations against the covenants you record, and reports days to breach on the current trajectory. It does not replace your lender, your counsel or your judgement. It gives you the time to use all three.",
  },
  {
    q: "Which markets does FactorFox operate in?",
    a: "Customers run FactorFox across North America, Latin America, Europe, Australia and South Africa. Country packs carry the local credit sources, payment rails and invoicing requirements rather than translating a United States product.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          softwareSchema({
            name: "FactorFox",
            description:
              "Intelligence and operating platform for factoring, asset based lending, purchase order funding and reverse factoring.",
            path: "/",
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* ============================================ HERO */}
      <section className="border-b border-[var(--line)] bg-[var(--bg)] pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container width="wide">
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
            <div className="max-w-[36rem]">
              <Eyebrow tone="signal">
                Factoring &middot; Asset based lending &middot; Purchase order funding &middot; Reverse factoring
              </Eyebrow>

              <h1 className="mt-5 text-[clamp(2.4rem,5.6vw,4rem)] leading-[1.02]">
                Your business does not need another dashboard. It needs a briefing.
              </h1>

              <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-[1.6] text-[var(--fg-muted)] sm:text-[1.25rem]">
                Legacy systems record what already happened, then leave you to find it. FactorFox tells
                each person on your team what changed, what it means, what proves it, and what to do next.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <CTA href="/demo">Request a FactorFox AI demonstration</CTA>
                <CTA href="/platform/briefings" variant="secondary">
                  See how briefings work
                </CTA>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--line)] pt-8 sm:grid-cols-4">
                {[
                  ["2002", "Building for this industry since"],
                  ["6", "Questions every briefing answers"],
                  ["5", "Continents where customers run"],
                  ["0", "Conclusions without evidence"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="u-tabular font-mono text-[1.6rem] font-semibold leading-none">{n}</dt>
                    <dd className="u-eyebrow mt-2">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:pt-6">
              <BriefingPanel />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================ THE SHIFT */}
      <Section tone="sunken">
        <Container>
          <SectionHead
            eyebrow="Recording against deciding"
            title="Automation repeats a process. Intelligence evaluates a situation."
            lede="Both matter. Only one of them is a competitive advantage, and the category has spent twenty years selling you the other one."
          />

          <div className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
            <div className="bg-[var(--bg-raised)] p-8">
              <Eyebrow>What legacy software does</Eyebrow>
              <ul className="mt-5 space-y-3.5 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                <li>Stores the transaction after somebody enters it</li>
                <li>Runs a report when somebody asks for one</li>
                <li>Shows every user the same screen regardless of what they are responsible for</li>
                <li>Raises an alert with a threshold and no explanation</li>
                <li>Leaves the interpretation, the evidence and the next step to you</li>
              </ul>
            </div>
            <div className="bg-[var(--bg-raised)] p-8">
              <Eyebrow tone="signal">What FactorFox does</Eyebrow>
              <ul className="mt-5 space-y-3.5 text-[0.9375rem] leading-[1.6] text-[var(--fg)]">
                <li>Re underwrites on every material event and versions the run</li>
                <li>States what moved since the last observation, and refuses to invent a delta it cannot prove</li>
                <li>Briefs each person against the scope they actually carry</li>
                <li>Attaches the invoices, documents, payment behaviour and contract clauses behind every conclusion</li>
                <li>Offers the next action, with the permission it requires, to the person who can take it</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-[62ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
            FactorFox does both. The automation is table stakes and we do it well. The intelligence is
            why an operator with the same headcount can carry more book without carrying more risk.
          </p>
        </Container>
      </Section>

      {/* ============================================ ROLES */}
      <Section>
        <Container>
          <SectionHead
            eyebrow="Briefings"
            title="Nine people, nine different mornings, one system."
            lede="Scope follows responsibility, not job title. Someone who owns forty clients is briefed on the forty, not the three hundred they are allowed to view. Material events outside a narrow scope arrive through an explicit escalation lane, marked as escalated, never quietly mixed in."
          />

          <div className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r) => (
              <div key={r.slug} className="bg-[var(--bg-raised)] p-6">
                <h3 className="text-[1.0625rem]">{r.title}</h3>
                <p className="u-eyebrow mt-2">
                  {r.scope} &middot; {r.cadence}
                </p>
                <ul className="mt-4 space-y-2 text-[0.875rem] leading-[1.55] text-[var(--fg-muted)]">
                  {r.gets.slice(0, 3).map((g) => (
                    <li key={g} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--signal)]" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <CTA href="/platform/briefings" variant="secondary">
              See how briefings work
            </CTA>
          </div>
        </Container>
      </Section>

      {/* ============================================ EVIDENCE */}
      <Section tone="deep">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className="u-eyebrow" style={{ color: "var(--color-fox-400)" }}>
                Intelligence with evidence
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] text-[var(--color-ink-50)]">
                Intelligence is only valuable when the evidence comes with it.
              </h2>
              <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--color-ink-300)]">
                <p>
                  A score you cannot open is a score you cannot defend. Not to your credit committee, not
                  to your bank, and not to an examiner asking three years later why you funded something.
                </p>
                <p>
                  Every recommendation, exception, risk signal and proposed action in FactorFox carries a
                  reference to what produced it. Not a citation in a footnote. The record itself, one click away,
                  captured at the moment the decision was made and never quietly refreshed underneath it.
                </p>
                <p className="font-serif text-[1.15rem] italic leading-[1.55] text-[var(--color-ink-100)]">
                  The protection is not simply performing due diligence. The protection is being able to
                  prove years later that the due diligence was performed.
                </p>
              </div>
              <div className="mt-8">
                <CTA href="/platform/evidence" variant="secondary" className="border-[var(--color-ink-700)] text-[var(--color-ink-50)] hover:border-[var(--color-ink-400)] hover:bg-[var(--color-ink-900)]">
                  See what evidence looks like
                </CTA>
              </div>
            </div>

            <div>
              <p className="u-eyebrow mb-4">What can sit behind a conclusion</p>
              <div className="grid grid-cols-2 gap-px border border-[var(--color-ink-800)] bg-[var(--color-ink-800)]">
                {[
                  "Invoices and schedules",
                  "Supporting documents",
                  "Payment behaviour",
                  "Debtor activity across the network",
                  "Communications and remittances",
                  "Commercial credit results",
                  "Financial statement data",
                  "Verification runs",
                  "Historical patterns",
                  "Contract and covenant clauses",
                  "Operating activity",
                  "Prior decisions on the same party",
                ].map((e) => (
                  <div key={e} className="bg-[var(--color-ink-950)] px-4 py-3.5 text-[0.875rem] leading-[1.4] text-[var(--color-ink-200)]">
                    {e}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[0.8125rem] leading-[1.5] text-[var(--color-ink-300)]">
                Where a source is not connected, the platform says so on screen and reports coverage
                separately from confidence. Being sure and being able to see are never the same number.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================ CONTINUOUS */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <SectionHead
              eyebrow="Continuous underwriting"
              title="Risk moves every day. Your intelligence should too."
              lede="An annual review and a monthly aging report describe a book that no longer exists. FactorFox re underwrites on every material event, versions each run immutably, and reports what changed rather than what is."
            />
            <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {[
                ["Payment velocity", "By obligor, against that debtor's own history rather than an industry average"],
                ["Concentration migration", "Share now against share then, including exposure held under one debtor name across several clients"],
                ["Dilution movement", "Per client, tracked as movement rather than as a static ratio"],
                ["Invoice size deviation", "Measured against the client's own median, with confidence lowered when the baseline is thin"],
                ["Submission timing", "Flagged where it sits outside the client's pattern, with coverage stated where no timestamp exists"],
                ["Duplicate and near duplicate", "Fingerprinted within the client and across the portfolio"],
                ["Bank account changes", "Held for human review. Automated approval is refused outright"],
                ["Availability compression", "Net availability with days to zero on the current path"],
              ].map(([t, d]) => (
                <div key={t} className="bg-[var(--bg-raised)] p-5">
                  <h3 className="text-[0.9375rem]">{t}</h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <ProductShot
              name="intelligence"
              width={2000}
              height={1168}
              alt="FactorFox Intelligence screen with capital deployed, effective yield, turn velocity and net funds employed across the top, a list of signals describing what moved since yesterday, and a concentration panel ranking debtors by their share of the portfolio against a threshold."
              caption="The Intelligence screen, where those movements arrive. Each signal states what changed and by how much, and the concentration panel holds every debtor's share of the book against the threshold in force."
            />
          </div>
        </Container>
      </Section>

      {/* ============================================ COVENANT */}
      <Section tone="sunken" bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
            <div>
              <SectionHead
                eyebrow="Covenant and facility monitoring"
                title="Know where the pressure is before it becomes a covenant problem."
                lede="Your bank does not send a warning. It sends a notice. The gap between those two things is where a specialty finance company either manages a problem or discovers one."
              />
              <div className="mt-7 space-y-4 text-[1rem] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  FactorFox monitors facility limits, concentration thresholds, eligibility requirements,
                  advance rates, reserves, collateral performance, reporting obligations and covenant
                  conditions against the agreement you record, and reports days to breach on the current
                  trajectory rather than a pass or fail on the day of the certificate.
                </p>
                <p>
                  It quotes the clause as the evidence. When a covenant depends on data FactorFox does not
                  hold, it says awaiting a live source and names the source. It never reports a zero it
                  cannot compute.
                </p>
              </div>
            </div>

            <Card accent="signal">
              <Eyebrow tone="signal">The chicken and egg, solved</Eyebrow>
              <h3 className="mt-3 text-[1.35rem]">
                We ship the covenants, so you have the track record before you need the line.
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
                A factor without a rediscount line has no covenants, so the compliance surface sits empty
                until the day a bank hands over a credit agreement and asks for two years of history nobody
                kept. FactorFox loads a default covenant pack modelled on how bank rediscount facilities are
                actually written, so you are measuring from day one.
              </p>
              <p className="mt-4 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">
                Every surface says plainly that these are ours and not anyone&rsquo;s contract. A modelled number
                is a recommendation. A contract is an obligation. Breaching our standard is a management
                problem. Breaching your bank&rsquo;s covenant may be an event of default, and the platform keeps
                that line bright.
              </p>
              <div className="mt-6">
                <CTA href="/platform/covenant-monitoring" variant="quiet">
                  How covenant monitoring works
                </CTA>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ============================================ TEAMS */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <Eyebrow tone="signal">Microsoft Teams</Eyebrow>
                <Status kind="controlled" />
              </div>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.7rem)]">Operate FactorFox from Microsoft Teams.</h2>
              <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)]">
                <p>
                  Your briefing arrives in Teams. So do signals, assigned work, exceptions and approvals.
                  You open the evidence, approve the release, assign the follow up, and never open a
                  dashboard. It works the same on a phone.
                </p>
                <p>
                  The part that matters is not the convenience. It is that nothing loosens on the way out.
                  Microsoft proves who you are. FactorFox decides what you may do. An approval tapped in
                  Teams crosses the same application surface a browser click crosses, so four eyes,
                  counter review, facility guards and audit all still run.
                </p>
                <p className="text-[var(--fg)]">
                  Approve a release you requested yourself and Teams refuses you, by name, and tells you
                  why. That refusal is the product.
                </p>
              </div>
              <div className="mt-8">
                <CTA href="/integrations/microsoft-teams">Explore Microsoft Teams integration</CTA>
              </div>
            </div>

            <div className="grid gap-px self-start border border-[var(--line)] bg-[var(--line)]">
              {[
                ["Briefing tab", "The six questions, answered inside Teams, from the same endpoint the web app calls"],
                ["Chat dialogue", "Ask a question in the channel and get an answer with its sources named"],
                ["Signal cards", "Acknowledge from the card. The state change is real and audited with origin recorded as Teams"],
                ["Approvals", "Four eyes enforced. A second officer approves and the release executes"],
                ["Outlook and Calendar", "Remittances become proposals. Collections cases project follow ups into your calendar"],
                ["Mobile", "The same surfaces, phone sized, with the same controls"],
              ].map(([t, d]) => (
                <div key={t} className="bg-[var(--bg-raised)] p-5">
                  <h3 className="text-[0.9375rem]">{t}</h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================ INTEGRATIONS */}
      <Section tone="sunken" bordered>
        <Container>
          <SectionHead
            eyebrow="Integrations"
            title="Organised by what it does for you, and honest about what it does not."
            lede="Every integration on this site carries a status. Available, controlled release, contract required, or planned. Nothing is described as working because it would read better. Precision is the only thing that makes the rest of the site credible."
          />

          <div className="mt-11 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Microsoft 365", "Teams, Outlook, Calendar, Bookings, Entra ID", "/integrations/microsoft-365"],
              ["Accounting", "QuickBooks Online, Xero", "/integrations/quickbooks"],
              ["Credit and risk", "Probity network, Creditsafe, D&B, TaxRock, Ficoso", "/integrations/credit-and-risk"],
              ["Banking and payments", "NACHA, Fedwire, APCA direct entry, EDI", "/integrations/banking-and-payments"],
            ].map(([t, d, href]) => (
              <Link key={t} href={href} className="group bg-[var(--bg-raised)] p-6 transition-colors hover:bg-[var(--bg)]">
                <h3 className="text-[1rem] group-hover:text-[var(--accent)]">{t}</h3>
                <p className="mt-2 text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">{d}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <CTA href="/integrations" variant="secondary">
              Review our integrations
            </CTA>
          </div>
        </Container>
      </Section>

      {/* ============================================ MIGRATION */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <SectionHead
              eyebrow="Switching"
              title="Everyone tells you migration is the hard part. They are right, and it is the part we do first."
              lede="A conversion is not a data copy. It is the moment somebody finds out that reserve balances, chargeback history, fee schedules and open disputes were carried in ways the new system does not model. We tell you what moves cleanly, what needs a decision from you, and what your current system never stored in the first place."
            />
            <div className="space-y-4">
              <Card>
                <h3 className="text-[1.0625rem]">Moving off FactorSoft</h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                  The largest installed base in North America, mapped field by field. What the data model
                  carries, what it does not, and what you will be asked to decide on the way across.
                </p>
                <div className="mt-4">
                  <CTA href="/migrate/factorsoft" variant="quiet">
                    Read the migration guide
                  </CTA>
                </div>
              </Card>
              <Card>
                <h3 className="text-[1.0625rem]">Coming from something else</h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                  Every conversion runs the same way. We reconcile against your existing book before you are
                  asked to trust anything, and we show you the differences rather than reporting a success.
                </p>
                <div className="mt-4">
                  <CTA href="/migrate" variant="quiet">
                    Discuss your migration
                  </CTA>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================ FAQ */}
      <Section tone="sunken" bordered>
        <Container width="narrow">
          <SectionHead eyebrow="Straight answers" title="Questions we get in the first ten minutes" />
          <div className="mt-10 border-t border-[var(--line-strong)]">
            {FAQS.map((f) => (
              <details key={f.q} className="group border-b border-[var(--line)] py-5">
                <summary className="cursor-pointer list-none text-[1.0625rem] font-semibold leading-[1.4] marker:hidden">
                  <span className="mr-3 font-mono text-[0.75rem] text-[var(--signal)] group-open:opacity-40">+</span>
                  {f.q}
                </summary>
                <p className="mt-3 pl-7 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================ CTA */}
      <Section tone="deep">
        <Container width="narrow">
          <div className="text-center">
            <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] text-[var(--color-ink-50)]">
              Bring your own book. We will brief you on it.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-300)]">
              A demonstration on generic sample data tells you nothing. Show us a slice of your portfolio
              and we will show you what the first briefing says about it, with the evidence attached.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CTA href="/demo">Request a FactorFox AI demonstration</CTA>
              <CTA
                href="/platform"
                variant="secondary"
                className="border-[var(--color-ink-700)] text-[var(--color-ink-50)] hover:border-[var(--color-ink-400)] hover:bg-[var(--color-ink-900)]"
              >
                Tour the platform
              </CTA>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
