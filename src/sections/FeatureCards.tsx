import { Zap, FileText, ShieldAlert, LayoutGrid } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const cards = [
  {
    icon: Zap,
    title: 'Accelerated Funding',
    description: 'Fast-track capital with automated workflows.',
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'AI-powered extraction and classification.',
  },
  {
    icon: ShieldAlert,
    title: 'Fraud & Risk Signals',
    description: 'Real-time monitoring and threat detection.',
  },
  {
    icon: LayoutGrid,
    title: 'Unified Operations',
    description: 'Centralized hub for all factoring activities.',
  },
]

function FeatureCards() {
  return (
    <SectionWrapper className="py-8 md:py-10 bg-[var(--set2-bg)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 0.07}>
              <div className="flex flex-col gap-4 rounded-xl border border-[var(--set2-stroke)] bg-[var(--set2-box)] p-6 h-full">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                <div>
                  <h3 className="text-card-title-sm text-foreground mb-1.5">
                    {title}
                  </h3>
                  <p className="text-body-xs text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
      </div>
    </SectionWrapper>
  )
}

export { FeatureCards }
