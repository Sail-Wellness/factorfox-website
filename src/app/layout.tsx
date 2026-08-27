import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/primitives";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

/**
 * Fonts are vendored into the repository and served from our own origin.
 * No request leaves the visitor's browser for a third party, which keeps the
 * privacy answer simple for a bank's vendor review and removes a render
 * blocking round trip from largest contentful paint.
 */
const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [{ path: "./fonts/manrope-latin-wght-normal.woff2", weight: "200 800", style: "normal" }],
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [{ path: "./fonts/inter-latin-wght-normal.woff2", weight: "100 900", style: "normal" }],
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "FactorFox | Factoring and asset based lending software built on briefings, not dashboards",
    template: "%s | FactorFox",
  },
  description:
    "FactorFox is the intelligence and operating platform for factoring, asset based lending, purchase order funding and reverse factoring. Role aware briefings, evidence behind every conclusion, covenant monitoring, and approvals inside Microsoft Teams.",
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [{ url: "/brand/factorfox-mark.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#040811" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Scroll reveal hides its content until it is observed. Without
            JavaScript nothing observes it, so it is given back here. */}
        <noscript>
          <style>{".u-reveal{opacity:1 !important;transform:none !important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
