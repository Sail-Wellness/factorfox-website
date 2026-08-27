import { BRIEF_QUESTIONS, SEVERITY_META, type BriefItem } from "@/content/briefing";

function SeverityDot({ severity }: { severity: keyof typeof SEVERITY_META }) {
  const s = SEVERITY_META[severity];
  return (
    <span
      aria-hidden="true"
      className="mt-[7px] inline-block h-2 w-2 shrink-0 rounded-full"
      style={{ background: s.color }}
    />
  );
}

function EvidenceChip({ kind, label }: { kind: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[2px] border border-[var(--line)] bg-[var(--bg)] px-2 py-1">
      <span className="font-mono text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">{kind}</span>
      <span className="text-[0.75rem] text-[var(--fg-muted)]">{label}</span>
    </span>
  );
}

function Item({ item }: { item: BriefItem }) {
  const s = SEVERITY_META[item.severity];
  return (
    <div className="border-t border-[var(--line)] pt-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          className="rounded-[2px] px-1.5 py-0.5 font-mono text-[0.5625rem] font-semibold uppercase tracking-[0.11em]"
          style={{ background: s.bg, color: s.color }}
        >
          {s.label}
        </span>
        <span className="flex-1 text-[0.9375rem] font-semibold leading-[1.35] text-[var(--fg)]">{item.headline}</span>
        {item.amount ? (
          <span className="u-tabular font-mono text-[0.9375rem] font-semibold text-[var(--fg)]">{item.amount}</span>
        ) : null}
      </div>

      <p className="mt-2 text-[0.8125rem] leading-[1.55] text-[var(--fg-muted)]">{item.why}</p>

      <div className="mt-3">
        <p className="u-eyebrow mb-2">Evidence</p>
        <div className="flex flex-wrap gap-1.5">
          {item.evidence.map((e) => (
            <EvidenceChip key={e.label} kind={e.kind} label={e.label} />
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {item.actions.map((a) => (
          <span
            key={a.label}
            className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--line-strong)] px-2.5 py-1.5 text-[0.75rem] font-semibold text-[var(--fg)]"
          >
            {a.label}
            <span className="font-mono text-[0.5625rem] uppercase tracking-[0.09em] text-[var(--fg-subtle)]">
              {a.permission}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * A schematic of the briefing structure. The six questions and the shape of
 * each answer are the platform's real contract. The figures are from a seeded
 * demonstration book and the caption says so on every page that uses this.
 */
export function BriefingPanel({ compact = false }: { compact?: boolean }) {
  const expanded = BRIEF_QUESTIONS[0];
  const rest = BRIEF_QUESTIONS.slice(1);

  return (
    <figure className="m-0">
      <div
        className="overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-raised)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--bg-sunken)] px-5 py-3.5">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.13em] text-[var(--fg-subtle)]">
              Morning briefing
            </p>
            <p className="mt-0.5 text-[0.875rem] font-semibold">
              Owner <span className="font-normal text-[var(--fg-muted)]">&middot; whole book &middot; 07:00</span>
            </p>
          </div>
          <span
            className="rounded-[2px] px-2 py-1 font-mono text-[0.5625rem] font-semibold uppercase tracking-[0.11em]"
            style={{ background: "var(--color-crit-100)", color: "var(--color-crit-600)" }}
          >
            2 require you
          </span>
        </div>

        {/* expanded question */}
        <div className="px-5 py-5">
          <div className="flex gap-3">
            <SeverityDot severity={expanded.severity} />
            <div className="min-w-0 flex-1">
              <p className="font-serif text-[1.0625rem] font-medium leading-[1.35] text-[var(--fg)]">
                {expanded.question}
              </p>
              <p className="mt-1.5 text-[0.9375rem] leading-[1.55] text-[var(--fg-muted)]">{expanded.answer}</p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {(compact ? expanded.items?.slice(0, 1) : expanded.items)?.map((item) => (
              <Item key={item.headline} item={item} />
            ))}
          </div>
        </div>

        {/* remaining questions */}
        <ul className="border-t border-[var(--line)]">
          {rest.map((q) => (
            <li key={q.id} className="flex gap-3 border-b border-[var(--line)] px-5 py-3.5 last:border-b-0">
              <SeverityDot severity={q.severity} />
              <div className="min-w-0">
                <p className="font-serif text-[0.9375rem] font-medium leading-[1.3] text-[var(--fg)]">{q.question}</p>
                <p className="mt-0.5 text-[0.8125rem] leading-[1.5] text-[var(--fg-muted)]">{q.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="mt-3 max-w-[52ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        Illustration of the briefing structure. The six questions, the severity model, the evidence
        references and the permission on each action are the platform&rsquo;s own contract. Figures shown are
        from a seeded demonstration book, not from a customer.
      </figcaption>
    </figure>
  );
}
