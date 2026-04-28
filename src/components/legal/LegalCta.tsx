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
    <section className="px-4 sm:px-6 lg:px-8 mt-24 pb-20 md:pb-28">
      <AnimatedSection>
        <div className="mx-auto max-w-[1200px] rounded-3xl bg-foreground px-8 sm:px-12 py-16 text-center">
          <h2 className="text-section-lg text-background mb-4">{heading}</h2>
          <p className="text-body-lg text-background/70 mb-8 max-w-[56ch] mx-auto">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`inline-flex items-center rounded-full no-underline font-bold text-body transition-all duration-150 ${
                  action.variant === 'ghost'
                    ? 'border border-white/30 text-background px-8 sm:px-12 py-5 hover:bg-white/[0.08] hover:border-white/50'
                    : 'bg-primary text-white px-8 sm:px-12 py-5 shadow-[0_12px_32px_-12px] shadow-primary/40 hover:brightness-95 hover:-translate-y-px'
                }`}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

export { LegalCta }
