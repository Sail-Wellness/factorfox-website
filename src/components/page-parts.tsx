import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Section, SectionHead, Eyebrow, CTA, Card, JsonLd, Status, type StatusKind } from "./primitives";
import { Reveal } from "./animate";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

/* ------------------------------------------------------------------ crumbs */

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "FactorFox", path: "/" }, ...trail])} />
      <nav aria-label="Breadcrumb" className="mb-7">
        <ol className="u-label flex flex-wrap items-center gap-x-2 gap-y-1 text-[var(--fg-subtle)]">
          <li>
            <Link href="/" className="hover:text-[var(--accent)]">
              FactorFox
            </Link>
          </li>
          {trail.map((t, i) => (
            <li key={t.path} className="flex items-center gap-2">
              <span aria-hidden="true" className="opacity-50">
                /
              </span>
              {i === trail.length - 1 ? (
                <span className="text-[var(--fg-muted)]" aria-current="page">
                  {t.name}
                </span>
              ) : (
                <Link href={t.path} className="hover:text-[var(--accent)]">
                  {t.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/* -------------------------------------------------------------------- hero */

export function PageHero({
  eyebrow,
  status,
  statusLabel,
  title,
  lede,
  primaryCta,
  secondaryCta,
  aside,
  trail,
}: {
  eyebrow: string;
  status?: StatusKind;
  statusLabel?: string;
  title: string;
  lede: ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  aside?: ReactNode;
  trail: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] pb-16 pt-10 sm:pb-20 sm:pt-14">
      <span className="u-glow-edges pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container width={aside ? "wide" : "default"} className="relative">
        <Breadcrumbs trail={trail} />
        <div className={aside ? "grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20" : ""}>
          <div className="max-w-[40rem]">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow tone="signal">{eyebrow}</Eyebrow>
              {status ? <Status kind={status} label={statusLabel} /> : null}
            </div>
            <h1 className="text-section-xl mt-5">{title}</h1>
            <div className="mt-6 space-y-4 text-[17px] leading-[1.7] text-[var(--fg-muted)] sm:text-[18px]">{lede}</div>
            {primaryCta ? (
              <div className="mt-9 flex flex-wrap gap-3">
                <CTA href={primaryCta.href}>{primaryCta.label}</CTA>
                {secondaryCta ? (
                  <CTA href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </CTA>
                ) : null}
              </div>
            ) : null}
          </div>
          {aside ? <div className="lg:pt-2">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ problem grid */

export function ProblemSolution({
  eyebrow,
  title,
  lede,
  rows,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  rows: { problem: string; response: string }[];
}) {
  return (
    <Section tone="sunken" bordered>
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-xl border border-[var(--line)]">
            <div className="hidden grid-cols-2 gap-px bg-[var(--line)] sm:grid">
              <div className="bg-[var(--bg-sunken)] px-6 py-3.5">
                <span className="u-eyebrow">What happens today</span>
              </div>
              <div className="bg-[var(--bg-sunken)] px-6 py-3.5">
                <span className="u-eyebrow" style={{ color: "var(--accent)" }}>
                  What FactorFox does instead
                </span>
              </div>
            </div>
            <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
              {rows.map((r) => (
                <div key={r.problem} className="contents">
                  <div className="bg-[var(--bg-raised)] px-6 py-5 text-[15px] leading-[1.6] text-[var(--fg-muted)]">
                    {r.problem}
                  </div>
                  <div className="bg-[var(--bg-raised)] px-6 py-5 text-[15px] leading-[1.6] text-[var(--fg)]">
                    {r.response}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------------- feature grid */

export function FeatureGrid({
  eyebrow,
  title,
  lede,
  items,
  columns = 3,
  tone = "default",
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
  items: { title: string; body: string; status?: StatusKind }[];
  columns?: 2 | 3 | 4;
  tone?: "default" | "sunken";
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <Section tone={tone}>
      <Container>
        {title ? <SectionHead eyebrow={eyebrow} title={title} lede={lede} /> : null}
        <div className={`${title ? "mt-12" : ""} grid gap-4 ${cols}`}>
          {items.map((i, n) => (
            <Reveal key={i.title} delay={Math.min(n, 5) * 0.06} className="h-full">
              <div className="h-full rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 transition-shadow duration-200 hover:shadow-[var(--shadow-lift)]">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-card-title">{i.title}</h3>
                  {i.status ? <Status kind={i.status} /> : null}
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-[var(--fg-muted)]">{i.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------- steps */

export function StepList({
  eyebrow,
  title,
  lede,
  steps,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  steps: { label: string; title: string; body: string }[];
}) {
  return (
    <Section>
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} />
        <ol className="mt-12 space-y-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i, 5) * 0.05} as="li">
              <div className="grid gap-4 rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-7">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="u-tabular grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] font-display text-[14px] font-extrabold text-[var(--accent-strong)]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="u-eyebrow pt-2.5 sm:w-[7.5rem]">{s.label}</span>
                </div>
                <div>
                  <h3 className="text-card-title">{s.title}</h3>
                  <p className="mt-2.5 max-w-[62ch] text-[15px] leading-[1.65] text-[var(--fg-muted)]">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ prose block */

export function ProseSection({
  eyebrow,
  title,
  children,
  aside,
  tone = "default",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  aside?: ReactNode;
  tone?: "default" | "sunken" | "deep";
}) {
  return (
    <Section tone={tone} bordered>
      <Container>
        <div className={aside ? "grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16" : ""}>
          <div>
            {eyebrow ? <Eyebrow tone="signal">{eyebrow}</Eyebrow> : null}
            {title ? <h2 className="text-section-lg mt-4 max-w-[24ch]">{title}</h2> : null}
            <div className="mt-6 space-y-4 text-[16.5px] leading-[1.7] text-[var(--fg-muted)] [&_p]:max-w-[68ch] [&_strong]:font-semibold [&_strong]:text-[var(--fg)]">
              {children}
            </div>
          </div>
          {aside ? <div>{aside}</div> : null}
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------------------- faq */

export function FaqBlock({
  items,
  title = "Questions we get asked",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <Section tone="sunken" bordered>
      <Container width="narrow">
        <JsonLd data={faqSchema(items)} />
        <SectionHead eyebrow="Straight answers" title={title} />
        <div className="mt-10 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]">
          {items.map((f, i) => (
            <details key={f.q} className={`group px-6 py-5 ${i > 0 ? "border-t border-[var(--line)]" : ""}`}>
              <summary className="flex cursor-pointer list-none items-start gap-3 text-[17px] font-semibold leading-[1.45]">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] text-[13px] font-bold text-[var(--accent-strong)] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
                {f.q}
              </summary>
              <p className="mt-3 pl-8 text-[15px] leading-[1.65] text-[var(--fg-muted)]">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------------- related */

export function RelatedPages({
  links,
  title = "Related",
}: {
  links: { href: string; label: string; note: string }[];
  title?: string;
}) {
  return (
    <Section>
      <Container>
        <Eyebrow>{title}</Eyebrow>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <Reveal key={l.href} delay={Math.min(i, 5) * 0.05} className="h-full">
              <Link
                href={l.href}
                className="group flex h-full flex-col rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-6 transition-all duration-200 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-lift)]"
              >
                <h3 className="text-card-title-sm group-hover:text-[var(--accent)]">{l.label}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-[var(--fg-muted)]">{l.note}</p>
                <span
                  aria-hidden="true"
                  className="u-label mt-4 inline-flex items-center gap-1.5 text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  Read <span>&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ cta band */

export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <Section tone="deep" className="u-glow-edges relative overflow-hidden">
      <Container width="narrow" className="relative">
        <div className="text-center">
          <h2 className="text-section-lg text-[var(--color-ink-50)]">{title}</h2>
          <p className="mx-auto mt-5 max-w-[54ch] text-[16.5px] leading-[1.65] text-[var(--fg-muted)]">{body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CTA href={primary.href} size="lg">
              {primary.label}
            </CTA>
            {secondary ? (
              <CTA href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </CTA>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------------- data table */

export function DataTable({
  caption,
  head,
  rows,
}: {
  caption?: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div
      className="u-scroll-x rounded-xl border border-[var(--line)] bg-[var(--bg-raised)]"
      tabIndex={0}
      role="region"
      aria-label={caption ?? "Data table"}
    >
      <table className="w-full min-w-[36rem] text-[14px]">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                scope="col"
                className="u-label whitespace-nowrap border-b border-[var(--line-strong)] bg-[var(--bg-sunken)] px-4 py-3.5 text-left text-[var(--fg-subtle)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td
                  key={j}
                  className={`border-b border-[var(--line)] px-4 py-3.5 align-top leading-[1.55] ${
                    j === 0 ? "font-medium text-[var(--fg)]" : "text-[var(--fg-muted)]"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Card, Section, Container, SectionHead, Eyebrow, CTA, Status };
