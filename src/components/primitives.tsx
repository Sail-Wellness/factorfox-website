import Link from "next/link";
import type { ReactNode } from "react";

/* ---------------------------------------------------------------- JSON-LD */

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Content is authored in this repository, never user supplied.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}

/* ---------------------------------------------------------------- layout */

export function Container({
  children,
  width = "default",
  className = "",
}: {
  children: ReactNode;
  width?: "default" | "narrow" | "wide";
  className?: string;
}) {
  const max =
    width === "narrow" ? "max-w-[760px]" : width === "wide" ? "max-w-[1320px]" : "max-w-[1180px]";
  return <div className={`${max} mx-auto px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  tone = "default",
  className = "",
  bordered = false,
}: {
  children: ReactNode;
  id?: string;
  tone?: "default" | "sunken" | "deep";
  className?: string;
  bordered?: boolean;
}) {
  const toneClass =
    tone === "sunken"
      ? "bg-[var(--bg-sunken)]"
      : tone === "deep"
        ? "on-deep bg-[var(--color-ink-950)] text-[var(--color-ink-50)]"
        : "bg-[var(--bg)]";
  return (
    <section
      id={id}
      className={`${toneClass} ${bordered ? "border-t border-[var(--line)]" : ""} py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, tone }: { children: ReactNode; tone?: "signal" }) {
  return (
    <p
      className="u-eyebrow"
      style={tone === "signal" ? { color: "var(--signal)" } : undefined}
    >
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-[46rem]`}>
      {eyebrow ? <Eyebrow tone="signal">{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-[clamp(1.75rem,3.4vw,2.6rem)]">{title}</h2>
      {lede ? (
        <p className="mt-5 text-[1.0625rem] sm:text-[1.15rem] leading-[1.6] text-[var(--fg-muted)]">
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/* ---------------------------------------------------------------- actions */

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
  className?: string;
};

export function CTA({ href, children, variant = "primary", external, className = "" }: CTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[3px] px-5 py-3 text-[0.9375rem] font-semibold tracking-[-0.005em] transition-colors duration-150";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--color-navy-800)] dark:hover:bg-[var(--color-navy-300)]"
      : variant === "secondary"
        // text-inherit, not text-[var(--fg)]: this button also sits on the deep
        // sections, where the ground is ink-950 and --fg is still the light
        // theme's near black. Inheriting keeps it legible on both grounds.
        ? "border border-[var(--line-strong)] text-inherit hover:border-current hover:bg-[color-mix(in_srgb,currentColor_8%,transparent)]"
        : "text-[var(--accent)] px-0 py-1 hover:underline underline-offset-4";

  const content = (
    <>
      {children}
      {variant !== "quiet" ? null : <span aria-hidden="true">&rsaquo;</span>}
    </>
  );

  if (external) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} rel="noopener">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {content}
    </Link>
  );
}

/* ---------------------------------------------------------------- status */

export type StatusKind =
  | "available"
  | "controlled"
  | "contract"
  | "planned"
  | "ecosystem"
  | "critical"
  | "attention"
  | "info";

const STATUS_STYLE: Record<StatusKind, { bg: string; fg: string; label: string }> = {
  available: { bg: "var(--color-ok-100)", fg: "var(--color-ok-600)", label: "Available" },
  controlled: { bg: "var(--color-warn-100)", fg: "var(--color-warn-600)", label: "Controlled release" },
  contract: { bg: "var(--color-navy-100)", fg: "var(--color-navy-700)", label: "Contract required" },
  planned: { bg: "var(--color-ink-100)", fg: "var(--color-ink-500)", label: "Planned" },
  ecosystem: { bg: "var(--color-navy-50)", fg: "var(--color-navy-600)", label: "Ecosystem" },
  critical: { bg: "var(--color-crit-100)", fg: "var(--color-crit-600)", label: "Critical" },
  attention: { bg: "var(--color-warn-100)", fg: "var(--color-warn-600)", label: "Attention" },
  info: { bg: "var(--color-ink-100)", fg: "var(--color-ink-600)", label: "Info" },
};

export function Status({ kind, label }: { kind: StatusKind; label?: string }) {
  const s = STATUS_STYLE[kind];
  return (
    <span
      className="inline-flex items-center whitespace-nowrap rounded-[2px] px-2 py-[3px] font-mono text-[0.625rem] font-semibold uppercase tracking-[0.11em]"
      style={{ background: s.bg, color: s.fg }}
    >
      {label ?? s.label}
    </span>
  );
}

/* ---------------------------------------------------------------- cards */

export function Card({
  children,
  className = "",
  accent,
}: {
  children: ReactNode;
  className?: string;
  accent?: "signal" | "accent";
}) {
  const top =
    accent === "signal"
      ? "border-t-[3px] border-t-[var(--signal)]"
      : accent === "accent"
        ? "border-t-[3px] border-t-[var(--accent)]"
        : "";
  return (
    <div
      className={`border border-[var(--line)] ${top} bg-[var(--bg-raised)] p-6 sm:p-7 ${className}`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- prose */

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[42ch] font-serif text-[1.25rem] leading-[1.5] text-[var(--fg-muted)] sm:text-[1.4rem]">
      {children}
    </p>
  );
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`u-prose space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)] ${className}`}>{children}</div>;
}

/* ---------------------------------------------------------------- misc */

export function Rule() {
  return <hr className="border-0 border-t border-[var(--line)]" />;
}

export function KeyLine({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-[var(--line)] py-4 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-8">
      <dt className="u-eyebrow pt-1">{term}</dt>
      <dd className="m-0 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">{children}</dd>
    </div>
  );
}
