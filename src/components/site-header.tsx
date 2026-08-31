"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg-nav)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--accent-fg)]"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-[1320px] items-center gap-6 px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="FactorFox home">
          <Image src="/brand/factorfox-mark.svg" alt="" width={30} height={28} priority className="h-7 w-auto" />
          <Image
            src="/brand/factorfox-wordmark.svg"
            alt="FactorFox"
            width={489}
            height={75}
            priority
            className="h-[19px] w-auto"
          />
        </Link>

        <nav ref={navRef} className="ml-auto hidden min-[1300px]:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {NAV.map((group) => {
              const isOpen = openGroup === group.label;
              const active = group.href && pathname.startsWith(group.href);
              // A group with no children is a destination, not a menu.
              if (!group.children) {
                return (
                  <li key={group.label}>
                    <Link
                      href={group.href ?? "/"}
                      className={`block whitespace-nowrap rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--fg)] ${
                        active ? "bg-[var(--accent-soft)] text-[var(--fg)]" : "text-[var(--fg-muted)]"
                      }`}
                    >
                      {group.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={group.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--fg)] ${
                      active ? "bg-[var(--accent-soft)] text-[var(--fg)]" : "text-[var(--fg-muted)]"
                    }`}
                  >
                    {group.label}
                    <span aria-hidden="true" className={`ml-1.5 inline-block align-middle text-[0.6rem] opacity-60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>

                  {isOpen && group.children ? (
                    <div className="absolute left-0 top-[calc(100%+10px)] w-[min(30rem,88vw)] rounded-xl border border-[var(--line)] bg-[var(--bg-raised)] p-2" style={{ boxShadow: "var(--shadow-card)" }}>
                      <ul className="grid gap-0.5">
                        {group.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--accent-soft)]"
                            >
                              <span className="block text-[15px] font-semibold text-[var(--fg)]">{child.label}</span>
                              {child.note ? (
                                <span className="mt-0.5 block text-[13px] leading-[1.45] text-[var(--fg-subtle)]">
                                  {child.note}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {group.href ? (
                        <Link
                          href={group.href}
                          className="u-label mt-1 block border-t border-[var(--line)] px-3 pb-1 pt-3 text-[var(--accent)]"
                        >
                          All {group.label.toLowerCase()}
                        </Link>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 min-[1300px]:ml-4">
          <a
            href={SITE.appUrl}
            className="hidden whitespace-nowrap text-[15px] font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] sm:block"
            rel="noopener"
          >
            Sign in
          </a>
          <Link
            href="/demo"
            className="btn-primary hidden whitespace-nowrap !px-5 !py-2.5 !text-[14px] sm:inline-flex"
          >
            Request a demonstration
          </Link>
          <button
            type="button"
            className="rounded-lg border border-[var(--line-strong)] px-3.5 py-2 text-[13.5px] font-semibold min-[1300px]:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-[var(--line)] bg-[var(--bg-raised)] min-[1300px]:hidden">
          <div className="mx-auto max-w-[1320px] px-5 py-4 sm:px-8">
            {NAV.map((group) =>
              !group.children ? (
                <div key={group.label} className="border-b border-[var(--line)] py-1">
                  <Link href={group.href ?? "/"} className="block py-3 text-[15px] font-semibold">
                    {group.label}
                  </Link>
                </div>
              ) : (
              <details key={group.label} className="border-b border-[var(--line)] py-1">
                <summary className="cursor-pointer list-none py-3 text-[15px] font-semibold">
                  {group.label}
                </summary>
                <ul className="pb-3">
                  {group.children?.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="block py-2 text-[15px] text-[var(--fg-muted)]">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
              ),
            )}
            <div className="flex flex-col gap-3 pt-5">
              <Link
                href="/demo"
                className="btn-primary w-full"
              >
                Request a demonstration
              </Link>
              <a href={SITE.appUrl} className="text-center text-[15px] font-medium text-[var(--fg-muted)]" rel="noopener">
                Sign in
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
