import { AnimatedSection } from '@/components/AnimatedSection'

interface CtaAction {
  label: string
  href: string
  variant?: 'primary' | 'ghost'
}

interface LegalCtaProps {
  heading: string
  description: string
  actions: CtaAction[]
}

function LegalCta({ heading, description, actions }: LegalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:hidden"
        style={{
          width: '60%',
          height: '55%',
          background: 'rgba(120, 160, 255, 0.55)',
          borderRadius: '50%',
          mixBlendMode: 'overlay',
          filter: 'blur(120px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden dark:block"
        style={{
          width: '55%',
          height: '50%',
          background: '#041324',
          borderRadius: '50%',
          mixBlendMode: 'screen',
          filter: 'blur(120px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center justify-center py-24 md:py-32">
        <AnimatedSection className="flex flex-col items-center text-center gap-6">
          <h2 className="text-section-xl text-foreground">{heading}</h2>
          <p className="text-body-lg text-muted-foreground max-w-md">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={action.variant === 'ghost'
                  ? 'px-7 py-3 text-body font-semibold text-foreground hover:text-primary transition-colors'
                  : 'btn-primary shadow-sm'}
              >
                {action.label}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export { LegalCta }
