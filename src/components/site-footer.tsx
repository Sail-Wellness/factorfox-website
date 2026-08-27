import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLUMNS, SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-sunken)]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2.4fr)]">
          <div>
            <Image src="/brand/factorfox-logo.svg" alt="FactorFox" width={300} height={80} className="h-9 w-auto" />
            <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-[1.6] text-[var(--fg-muted)]">
              The intelligence and operating platform for factoring, asset based lending, purchase order
              funding, reverse factoring and specialty finance. Building software for this industry since {SITE.founded}.
            </p>
            <Link
              href="/demo"
              className="mt-6 inline-block rounded-[3px] border border-[var(--line-strong)] px-4 py-2.5 text-[0.875rem] font-semibold hover:border-[var(--fg)]"
            >
              Request a demonstration
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="u-eyebrow">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[0.875rem] leading-[1.5] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:underline underline-offset-4"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--line-strong)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--fg-subtle)]">
            &copy; {year} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/legal/privacy" className="text-[0.8125rem] text-[var(--fg-subtle)] hover:text-[var(--fg)]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="text-[0.8125rem] text-[var(--fg-subtle)] hover:text-[var(--fg)]">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/platform/security" className="text-[0.8125rem] text-[var(--fg-subtle)] hover:text-[var(--fg)]">
                Security
              </Link>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                rel="noopener"
                className="text-[0.8125rem] text-[var(--fg-subtle)] hover:text-[var(--fg)]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
