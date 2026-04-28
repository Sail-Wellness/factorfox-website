import { AnimatedSection } from '@/components/AnimatedSection'

interface LegalSectionProps {
  id: string
  num: string
  title: string
  children: React.ReactNode
}

function LegalSection({ id, num, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 [&+&]:mt-14">
      <AnimatedSection>
        <header className="grid grid-cols-[64px_1fr] gap-4 items-baseline pb-6 mb-8 border-b border-[var(--set1-stroke)]">
          <span className="text-eyebrow font-mono text-primary pt-2">{num}</span>
          <h2 className="text-section-md">{title}</h2>
        </header>
        <div className="space-y-5 text-body text-muted-foreground [&>p:first-child]:text-body-lg [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:pl-0 [&_li]:pl-0 [&_strong]:text-foreground [&_a]:text-primary [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-2 [&_h3]:text-card-title-sm [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3">
          {children}
        </div>
      </AnimatedSection>
    </section>
  )
}

export { LegalSection }
