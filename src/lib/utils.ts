import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * The site defines custom typography utilities in index.css (`.text-hero`,
 * `.text-section-*`, `.text-body-*`, `.text-eyebrow`, `.text-label`, …). They
 * all begin with `text-`, so the default tailwind-merge classifies them in the
 * same conflict group as `text-{color}` utilities and silently strips them when
 * both appear in a cn() call (e.g. cn('text-eyebrow', 'text-primary') → just
 * 'text-primary', losing the uppercase/size). Registering them as `font-size`
 * utilities means they only conflict with each other, never with colors.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-hero",
        "text-section-xl",
        "text-section-lg",
        "text-section-md",
        "text-section-sm",
        "text-card-title",
        "text-card-title-sm",
        "text-body-lg",
        "text-body",
        "text-body-sm",
        "text-body-xs",
        "text-eyebrow",
        "text-label",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
