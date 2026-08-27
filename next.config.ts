import type { NextConfig } from "next";

/**
 * Static export, deliberately.
 *
 * The site deploys to GitHub Pages, which is where factorfox.com already
 * points. That means no DNS change and no new hosting account to launch, and
 * it means every page is a file on a CDN rather than a render on request.
 *
 * What that costs, stated plainly so nobody rediscovers it later:
 *
 *   . Redirects are meta refresh documents written by scripts/postbuild.mjs
 *     rather than real 301 responses. See src/lib/redirects.ts.
 *   . The demonstration form posts to an external endpoint set in
 *     NEXT_PUBLIC_LEAD_ENDPOINT, because there is no server here to receive it.
 *   . Social cards are pre generated PNGs rather than rendered on request.
 *   . Security headers come from GitHub's defaults rather than from this file.
 *
 * Moving to a host that runs Node upgrades all four in one commit: set
 * output back to the default, move LEGACY_REDIRECTS into redirects() below,
 * and the API route and the OG route come back with it. The rest of the site
 * does not know the difference.
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,

  // GitHub Pages resolves /platform/ to /platform/index.html without argument.
  // Extensionless resolution is less certain there, so every route is a
  // directory with an index, and canonicals and the sitemap match.
  trailingSlash: true,

  images: {
    // No image optimiser on a static host. Everything in /public/product is
    // already sized and encoded as webp for this reason.
    unoptimized: true,
  },
};

export default nextConfig;
