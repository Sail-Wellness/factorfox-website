import type { ReactNode } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { cn } from '@/lib/utils'

interface CapitalHeadingProps {
  eyebrow: ReactNode
  title: string
  intro?: string
  align?: 'center' | 'left'
  /** 'display' matches the export's larger eyebrow + heading scale. */
  size?: 'default' | 'display'
  /** 'muted' renders the eyebrow in gray (the export uses this for the
   *  "Don’t trust, verify." asides); 'brand' is the default blue. */
  eyebrowTone?: 'brand' | 'muted'
  /** Override the heading size (e.g. a section whose export heading is smaller
   *  than the standard display scale). */
  titleClassName?: string
}

function CapitalHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  size = 'default',
  eyebrowTone = 'brand',
  titleClassName,
}: CapitalHeadingProps) {
  const centered = align === 'center'
  const display = size === 'display'
  const eyebrowColor =
    eyebrowTone === 'muted'
      ? 'text-muted-foreground'
      : display
        ? 'text-primary/75'
        : 'text-primary'
  return (
    <AnimatedSection className={cn('max-w-3xl', centered && 'mx-auto text-center')}>
      <div
        className={cn('text-eyebrow', eyebrowColor, centered && 'flex justify-center')}
        style={display ? { fontFamily: 'var(--font-heading)' } : undefined}
      >
        {eyebrow}
      </div>
      <h2
        className={cn(
          'text-foreground mt-3 text-balance',
          display ? 'text-section-xl' : 'text-section-lg',
          titleClassName
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className="text-body-lg text-muted-foreground mt-5">{intro}</p>
      )}
    </AnimatedSection>
  )
}

export { CapitalHeading }
