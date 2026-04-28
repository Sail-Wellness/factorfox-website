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
    <section className="bg-[var(--set2-bg)] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <AnimatedSection className="flex flex-col items-center text-center gap-6">
        <h2 className="text-section-lg text-foreground">{heading}</h2>
        <p className="text-body-lg text-muted-foreground max-w-[56ch]">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={action.variant === 'ghost' ? 'btn-secondary-lg' : 'btn-primary-lg'}
            >
              {action.label}
            </a>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

export { LegalCta }
