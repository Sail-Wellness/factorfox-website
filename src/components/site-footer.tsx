import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLUMNS, SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-nav)]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2.4fr)]">
          <div>
            <Image src="/brand/factorfox-logo.svg" alt="FactorFox" width={300} height={80} className="h-9 w-auto" />
            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.65] text-[var(--fg-muted)]">
              The intelligence and operating platform for factoring, asset based lending, purchase order
              funding, reverse factoring and specialty finance. Building software for this industry since {SITE.founded}.
            </p>
            <Link href="/demo" className="btn-secondary mt-7">
              Request a demonstration
            </Link>

            {/* Preferred Vendor and Preferred Ally Member, confirmed by the owner
                28 August 2026. The mark links to our own listing so a reader can
                check the designation rather than take the image on faith. */}
            <a
              href={SITE.ifaListing}
              rel="noopener"
              className="mt-8 flex items-center gap-3 no-underline"
            >
              <Image
                src="/brand/ifa-preferred-vendor.png"
                alt="International Factoring Association Preferred Vendor"
                width={400}
                height={124}
                className="h-9 w-auto"
              />
              <span className="text-[12.5px] leading-[1.45] text-[var(--fg-subtle)]">
                Preferred Vendor and Preferred Ally Member
                <br />
                of the International Factoring Association
              </span>
            </a>

            {/* A published number is a statement that a person answers. It is
                deliberately above the fold of the footer rather than buried on
                a contact page. */}
            <dl className="mt-8 space-y-2.5 text-[14px] leading-[1.5]">
              <div className="flex gap-2">
                <dt className="u-label w-[3.5rem] shrink-0 pt-[3px] text-[var(--fg-subtle)]">Call</dt>
                <dd className="m-0">
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="font-semibold text-[var(--fg)] hover:text-[var(--accent)]"
                  >
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="u-label w-[3.5rem] shrink-0 pt-[3px] text-[var(--fg-subtle)]">Write</dt>
                <dd className="m-0">
                  <a
                    href={`mailto:${SITE.contactEmail}`}
                    className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
                  >
                    {SITE.contactEmail}
                  </a>
                </dd>
              </div>
            </dl>
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
                        className="text-[14px] leading-[1.5] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:underline underline-offset-4"
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
          <p className="u-label text-[var(--fg-subtle)]">
            &copy; {year} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/legal/privacy" className="text-[13.5px] text-[var(--fg-subtle)] hover:text-[var(--fg)]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="text-[13.5px] text-[var(--fg-subtle)] hover:text-[var(--fg)]">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/platform/security" className="text-[13.5px] text-[var(--fg-subtle)] hover:text-[var(--fg)]">
                Security
              </Link>
            </li>
            <li>
              <a
                href={SITE.linkedin}
                rel="noopener"
                className="text-[13.5px] text-[var(--fg-subtle)] hover:text-[var(--fg)]"
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
