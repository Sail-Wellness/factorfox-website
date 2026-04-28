import { AnimatedSection } from '@/components/AnimatedSection'

interface LegalSectionProps {
  id: string
  num: string
  title: string
  children: React.ReactNode
}

function LegalSection({ id, num, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 [&+&]:mt-24">
      <AnimatedSection>
        <header className="grid grid-cols-[64px_1fr] gap-4 items-baseline pb-6 mb-8 border-b border-[var(--set1-stroke)]">
          <span className="text-eyebrow font-mono text-primary pt-2">{num}</span>
          <h2 className="text-section-md font-extrabold">{title}</h2>
        </header>
        <div className="space-y-5 text-body text-muted-foreground [&_ul]:list-none [&_ul]:space-y-0 [&_ul]:pl-0 [&_li]:pl-6 [&_li]:py-3.5 [&_li]:border-b [&_li]:border-[var(--set1-stroke)] [&_li:last-child]:border-b-0 [&_li]:relative [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[24px] [&_li]:before:w-3 [&_li]:before:h-px [&_li]:before:bg-primary [&_strong]:text-foreground [&_li_strong]:block [&_li_strong]:mb-1 [&_a]:text-primary [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-2 [&_h3]:text-card-title-sm [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3">
          {children}
        </div>
      </AnimatedSection>
    </section>
  )
}

export { LegalSection }
