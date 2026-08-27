import Image from "next/image";

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
  // The image optimiser refuses SVG unless dangerouslyAllowSVG is set globally,
  // and there is nothing in a vector file for it to optimise anyway. Serving
  // these two straight from /public keeps that flag off for the whole site.
  const unoptimized = format === "svg";
  const shared =
    "h-auto w-full border border-[var(--line-strong)] bg-[var(--bg-raised)]";

  return (
    <figure className={`m-0 ${className}`}>
      <div style={{ boxShadow: "var(--shadow-card)" }}>
        <Image
          src={light}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          unoptimized={unoptimized}
          sizes="(max-width: 900px) 100vw, 60vw"
          className={`${shared} block dark:hidden`}
        />
        <Image
          src={dark}
          alt=""
          aria-hidden="true"
          width={width}
          height={height}
          priority={priority}
          unoptimized={unoptimized}
          sizes="(max-width: 900px) 100vw, 60vw"
          className={`${shared} hidden dark:block`}
        />
      </div>
      <figcaption className="mt-3 max-w-[58ch] text-[0.75rem] leading-[1.5] text-[var(--fg-subtle)]">
        {caption} Figures are from a seeded demonstration book, not from a customer.
      </figcaption>
    </figure>
  );
}
