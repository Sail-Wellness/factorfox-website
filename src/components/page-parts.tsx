import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Section, SectionHead, Eyebrow, CTA, Card, JsonLd, Status, type StatusKind } from "./primitives";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

/* ------------------------------------------------------------------ crumbs */

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "FactorFox", path: "/" }, ...trail])} />
      <nav aria-label="Breadcrumb" className="mb-7">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.11em] text-[var(--fg-subtle)]">
          <li>
            <Link href="/" className="hover:text-[var(--fg)]">
              FactorFox
            </Link>
          </li>
          {trail.map((t, i) => (
            <li key={t.path} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {i === trail.length - 1 ? (
                <span className="text-[var(--fg-muted)]" aria-current="page">
                  {t.name}
                </span>
              ) : (
                <Link href={t.path} className="hover:text-[var(--fg)]">
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
    <section className="border-b border-[var(--line)] pb-14 pt-10 sm:pb-18 sm:pt-14">
      <Container width={aside ? "wide" : "default"}>
        <Breadcrumbs trail={trail} />
        <div className={aside ? "grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20" : ""}>
          <div className="max-w-[38rem]">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow tone="signal">{eyebrow}</Eyebrow>
              {status ? <Status kind={status} label={statusLabel} /> : null}
            </div>
            <h1 className="mt-4 text-[clamp(2.1rem,4.6vw,3.25rem)]">{title}</h1>
            <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)] sm:text-[1.125rem]">
              {lede}
            </div>
            {primaryCta ? (
              <div className="mt-8 flex flex-wrap gap-3">
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
        <div className="mt-11 overflow-hidden border border-[var(--line)]">
          <div className="hidden grid-cols-2 gap-px bg-[var(--line)] sm:grid">
            <div className="bg-[var(--bg-sunken)] px-6 py-3">
              <span className="u-eyebrow">What happens today</span>
            </div>
            <div className="bg-[var(--bg-sunken)] px-6 py-3">
              <span className="u-eyebrow">What FactorFox does instead</span>
            </div>
          </div>
          <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
            {rows.map((r) => (
              <div key={r.problem} className="contents">
                <div className="bg-[var(--bg-raised)] px-6 py-5 text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
                  {r.problem}
                </div>
                <div className="bg-[var(--bg-raised)] px-6 py-5 text-[0.9375rem] leading-[1.6] text-[var(--fg)]">
                  {r.response}
                </div>
              </div>
            ))}
          </div>
        </div>
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
  const cols = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <Section tone={tone}>
      <Container>
        {title ? <SectionHead eyebrow={eyebrow} title={title} lede={lede} /> : null}
        <div className={`${title ? "mt-11" : ""} grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] ${cols}`}>
          {items.map((i) => (
            <div key={i.title} className="bg-[var(--bg-raised)] p-6">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[1rem]">{i.title}</h3>
                {i.status ? <Status kind={i.status} /> : null}
              </div>
              <p className="mt-2.5 text-[0.875rem] leading-[1.6] text-[var(--fg-muted)]">{i.body}</p>
            </div>
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
        <ol className="mt-11 border-t border-[var(--line-strong)]">
          {steps.map((s, i) => (
            <li key={s.title} className="grid gap-3 border-b border-[var(--line)] py-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8">
              <div className="u-eyebrow pt-1">
                <span className="u-tabular">{String(i + 1).padStart(2, "0")}</span> &middot; {s.label}
              </div>
              <div>
                <h3 className="text-[1.0625rem]">{s.title}</h3>
                <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">{s.body}</p>
              </div>
            </li>
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
            {title ? <h2 className="mt-3 max-w-[24ch] text-[clamp(1.7rem,3.2vw,2.4rem)]">{title}</h2> : null}
            <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--fg-muted)] [&_p]:max-w-[68ch] [&_strong]:text-[var(--fg)] [&_strong]:font-semibold">
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

export function FaqBlock({ items, title = "Questions we get asked" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <Section tone="sunken" bordered>
      <Container width="narrow">
        <JsonLd data={faqSchema(items)} />
        <SectionHead eyebrow="Straight answers" title={title} />
        <div className="mt-10 border-t border-[var(--line-strong)]">
          {items.map((f) => (
            <details key={f.q} className="group border-b border-[var(--line)] py-5">
              <summary className="cursor-pointer list-none text-[1.0625rem] font-semibold leading-[1.4]">
                <span className="mr-3 font-mono text-[0.75rem] text-[var(--signal)] group-open:opacity-40">+</span>
                {f.q}
              </summary>
              <p className="mt-3 pl-7 text-[0.9375rem] leading-[1.65] text-[var(--fg-muted)]">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------------- related */

export function RelatedPages({ links, title = "Related" }: { links: { href: string; label: string; note: string }[]; title?: string }) {
  return (
    <Section>
      <Container>
        <Eyebrow>{title}</Eyebrow>
        <div className="mt-6 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="group bg-[var(--bg-raised)] p-6 transition-colors hover:bg-[var(--bg-sunken)]">
              <h3 className="text-[1rem] group-hover:text-[var(--accent)]">{l.label}</h3>
              <p className="mt-2 text-[0.8125rem] leading-[1.55] text-[var(--fg-muted)]">{l.note}</p>
            </Link>
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
    <Section tone="deep">
      <Container width="narrow">
        <div className="text-center">
          <h2 className="text-[clamp(1.8rem,3.6vw,2.5rem)] text-[var(--color-ink-50)]">{title}</h2>
          <p className="mx-auto mt-5 max-w-[54ch] text-[1.0625rem] leading-[1.65] text-[var(--color-ink-300)]">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTA href={primary.href}>{primary.label}</CTA>
            {secondary ? (
              <CTA
                href={secondary.href}
                variant="secondary"
                className="border-[var(--color-ink-700)] text-[var(--color-ink-50)] hover:border-[var(--color-ink-400)] hover:bg-[var(--color-ink-900)]"
              >
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
      className="u-scroll-x border border-[var(--line)] bg-[var(--bg-raised)]"
      tabIndex={0}
      role="region"
      aria-label={caption ?? "Data table"}
    >
      <table className="w-full min-w-[36rem] text-[0.875rem]">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                scope="col"
                className="whitespace-nowrap border-b border-[var(--line-strong)] bg-[var(--bg-sunken)] px-4 py-3 text-left font-mono text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--fg-subtle)]"
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
                  className={`border-b border-[var(--line)] px-4 py-3 align-top leading-[1.55] ${
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
