import { cn } from '@/lib/utils'

/**
 * SectionWrapper — single source of truth for standard page section layout.
 *
 * Encodes the site's section layout tokens (spacing, max-width, horizontal padding)
 * in ONE place, so changing a value propagates everywhere instead of requiring
 * a find-and-replace across 20+ files.
 *
 * Defaults:
 *   - Vertical padding:   py-20 md:py-28    (80px mobile / 112px desktop)
 *   - Max content width:  max-w-7xl         (1280px)
 *   - Horizontal padding: px-4 sm:px-6 lg:px-8 (16 / 24 / 32px)
 *
 * RULE:
 *   All standard content sections MUST use <SectionWrapper>.
 *   Custom layouts (sections with gradient overlays, min-height flex centering,
 *   or asymmetric Figma pixel-match padding) MAY inline a <section> tag — these
 *   should be intentional exceptions, not the default.
 *
 * Overrides:
 *   className      — merged into the outer <section> (for bg, overflow, custom padding)
 *   innerClassName — merged into the inner max-width <div> (for relative, custom max-w)
 *
 * Example:
 *   <SectionWrapper className="bg-[var(--set1-bg)]" innerClassName="relative">
 *     <Content />
 *   </SectionWrapper>
 */
interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  style?: React.CSSProperties
  as?: React.ElementType
}

function SectionWrapper({
  children,
  className,
  innerClassName,
  style,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag className={cn('py-20 md:py-28', className)} style={style}>
      <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', innerClassName)}>
        {children}
      </div>
    </Tag>
  )
}

export { SectionWrapper }
