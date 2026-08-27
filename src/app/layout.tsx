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
const archivo = localFont({
  variable: "--font-archivo",
  display: "swap",
  src: [{ path: "./fonts/archivo-latin-wght-normal.woff2", weight: "100 900", style: "normal" }],
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

const newsreader = localFont({
  variable: "--font-newsreader",
  display: "swap",
  src: [{ path: "./fonts/newsreader-latin-wght-normal.woff2", weight: "200 800", style: "normal" }],
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
});

const plexMono = localFont({
  variable: "--font-plex-mono",
  display: "swap",
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
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
    { media: "(prefers-color-scheme: light)", color: "#FAFBFC" },
    { media: "(prefers-color-scheme: dark)", color: "#070B11" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable} ${plexMono.variable}`}>
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
