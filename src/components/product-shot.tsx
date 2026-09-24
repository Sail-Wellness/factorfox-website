/**
 * A real FactorFox screen, in the viewer's theme.
 *
 * Both variants are rendered and one is hidden by CSS rather than swapped by
 * script, so the correct image is in the first paint and nothing shifts. The
 * width and height are always declared, so the space is reserved before the
 * bytes arrive.
 *
 * Every caption states what the screen is and that the figures come from a
 * seeded demonstration book. That sentence is not optional. We are selling
 * evidence, and a screenshot without provenance is the thing we are arguing
 * against.
 */

type Props = {
  /** File stem in /public/product. A matching "-dark" file must exist. */
  name: string;
  /** Real alternative text describing what the screen shows, not "screenshot". */
  alt: string;
  /** What this screen is, in the reader's language. */
  caption: string;
  width?: number;
  height?: number;
  priority?: boolean;
  format?: "webp" | "svg";
  className?: string;
};

export function ProductShot({
  name,
  alt,
  caption,
  width = 2000,
  height = 1200,
  priority = false,
  format = "webp",
  className = "",
}: Props) {
  const light = `/product/${name}.${format}`;
  const dark = `/product/${name}-dark.${format}`;
  // The image optimizer refuses SVG unless dangerouslyAllowSVG is set globally,
  // and there is nothing in a vector file for it to optimize anyway. Serving
  // these two straight from /public keeps that flag off for the whole site.
  const unoptimized = format === "svg";
  const shared =
    "h-auto w-full border border-[var(--line-strong)] bg-[var(--bg-raised)]";

  /* Raster screens ship at 2000 and 1000 pixels wide. The static host has no
     image optimizer, so the srcset is written here: a phone takes the 1000
     pixel file and a wide screen takes the 2000. */
  const srcSet = (base: string) =>
    unoptimized ? undefined : `${base}-1000.${format} 1000w, ${base}.${format} 2000w`;
  const sizes = "(max-width: 900px) 100vw, 60vw";
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : "auto";
  const lightBase = `/product/${name}`;
  const darkBase = `/product/${name}-dark`;

  return (
    <figure className={`m-0 ${className}`}>
      <div style={{ boxShadow: "var(--shadow-card)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={light}
          srcSet={srcSet(lightBase)}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          className={`${shared} block dark:hidden`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dark}
          srcSet={srcSet(darkBase)}
          sizes={sizes}
          alt=""
          aria-hidden="true"
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className={`${shared} hidden dark:block`}
        />
      </div>
      <figcaption className="mt-3 max-w-[58ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        {caption} Figures are from a seeded demonstration book, not from a customer.
      </figcaption>
    </figure>
  );
}
