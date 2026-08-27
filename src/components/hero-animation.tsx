"use client";

import { useEffect, useState } from "react";
import "./hero-animation.css";

const PHASE_MS = 4200;
const PHASES = 3;

/* ------------------------------------------------------------------ icons */

const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconBrief = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="13" x2="14" y2="13" />
    <line x1="8" y1="17" x2="11" y2="17" />
  </svg>
);

const IconTick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconUpload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 12 12 15 15" />
    <line x1="12" y1="12" x2="12" y2="18" />
  </svg>
);

/* ------------------------------------------------------------------ data */

const ROWS = [
  { key: "r1", num: "INV-88104", sub: "Sunline Packaging · Net 45", amount: "$420,000" },
  { key: "r2", num: "INV-88117", sub: "Bluewater Foods · Net 60", amount: "$45,200" },
];

const GATES = [
  "Duplicate ledger scan",
  "Debtor identity matched",
  "Amount against purchase order",
  "Submission pattern",
  "Concentration against policy",
  "Client baseline deviation",
];

const BRIEF = [
  { sev: "critical", q: "Where is risk and why?", a: "Concentration in one debtor moved to 95.5% of the book" },
  { sev: "attention", q: "Which decisions require me now?", a: "Three approvals waiting, one blocked at your request" },
  { sev: "critical", q: "What changed since the last brief?", a: "Four material movements across four clients" },
  { sev: "info", q: "Where is cash and what can move?", a: "Availability holds after the reserve is applied" },
  { sev: "attention", q: "What should I do next?", a: "Ranked by exposure, filtered to your permissions" },
  { sev: "info", q: "Are we inside our covenants?", a: "One test trending toward breach in eleven days" },
];

/* ------------------------------------------------------------------ view */

export function HeroDeck() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase(3);
      return;
    }
    const id = setInterval(() => setPhase((p) => (p % PHASES) + 1), PHASE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <figure className="hero-anim m-0" data-phase={phase}>
      <span className="deck-glow" aria-hidden="true" />

      <div className="deck" aria-hidden="true">
        <aside className="rail">
          <div className="rail-brand">FactorFox AI</div>
          <nav className="rail-nav">
            <div className="rail-item ri-1"><IconDoc />Documents</div>
            <div className="rail-item ri-2"><IconShield />Risk</div>
            <div className="rail-item ri-3"><IconBrief />Briefing</div>
            <div className="rail-item ri-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
              Collections
            </div>
          </nav>
        </aside>

        <div className="panel">
          <header className="panel-head">
            <div className="panel-titles">
              <div className="panel-title pt-1">Documents arriving</div>
              <div className="panel-title pt-2">Checks before funding</div>
              <div className="panel-title pt-3">This morning&rsquo;s briefing</div>
            </div>
            <div className="pills">
              <span className="pill pill-1"><span className="pill-dot" />Extracting</span>
              <span className="pill pill-2"><span className="pill-dot" />Gates passed</span>
              <span className="pill pill-3"><span className="pill-dot" />Seeded book</span>
            </div>
          </header>

          <div className="stage">
            {/* ---------------------------------------- phase 1 */}
            <div className="phase phase-1">
              {ROWS.map((r) => (
                <div key={r.key} className={`row ${r.key}`}>
                  <span className="row-icon"><IconDoc /></span>
                  <span className="row-info">
                    <span className="row-num">
                      <span className="skeleton" />
                      <span>{r.num}</span>
                    </span>
                    <span className="row-sub">
                      <span className="skeleton" />
                      <span>{r.sub}</span>
                    </span>
                  </span>
                  <span className="row-amount">
                    <span className="skeleton" />
                    <span>{r.amount}</span>
                  </span>
                </div>
              ))}
              <div className="drop">
                <span className="flyer" />
                <IconUpload />
                <span>Schedule, invoice, proof of delivery, assignment</span>
              </div>
            </div>

            {/* ---------------------------------------- phase 2 */}
            <div className="phase phase-2">
              {ROWS.map((r) => (
                <div key={r.key} className={`row ${r.key}`}>
                  <span className="scan" />
                  <span className="row-icon"><IconDoc /></span>
                  <span className="row-info">
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 600 }}>{r.num}</span>
                    <span style={{ fontSize: 12.5, color: "var(--fg-muted)" }}>
                      {r.sub} &middot; {r.amount}
                    </span>
                  </span>
                  <span className="verdict"><IconTick />Checked</span>
                </div>
              ))}
              <div className="gates">
                <div className="gates-title"><IconShield />Gates on every submission</div>
                <div className="gate-list">
                  {GATES.map((g) => (
                    <div key={g} className="gate">
                      <span className="gate-tick"><IconTick /></span>
                      {g}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------------------------------------- phase 3 */}
            <div className="phase phase-3">
              <div className="brief">
                {BRIEF.map((b) => (
                  <div key={b.q} className="brief-line">
                    <span className={`brief-sev sev-${b.sev}`} />
                    <span className="brief-q">{b.q}</span>
                    <span className="brief-a">{b.a}</span>
                  </div>
                ))}
              </div>
              <div className="brief-foot">
                <span className="brief-evidence">Every line opens the evidence behind it</span>
                <span className="brief-approve">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Approve in Teams
                </span>
              </div>
            </div>
          </div>

          <span className="strip" />
        </div>
      </div>

      <figcaption className="mt-4 text-center text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Seeded demonstration book. Figures are illustrative and are not taken from a customer.
      </figcaption>
    </figure>
  );
}
