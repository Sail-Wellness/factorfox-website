import { FileText, CreditCard, Bot, Layers, LayoutDashboard, Network } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { SectionWrapper } from '@/components/SectionWrapper'

const modules = [
  {
    icon: FileText,
    title: 'Document Intelligence',
    description:
      'Automate the paper trail. Intelligent classification and parsing for any document type.',
  },
  {
    icon: CreditCard,
    title: 'Credit & Risk',
    description:
      'Advanced underwriting tools with integrated credit bureau data and behavioral scoring.',
  },
  {
    icon: Bot,
    title: 'Operations Automation',
    description:
      'Custom RPA-style workflows to handle routine tasks, funding approvals, and client notifications.',
  },
  {
    icon: Layers,
    title: 'Collections Engine',
    description:
      'Streamlined dunning, automated reminders, and centralized debtor management.',
  },
  {
    icon: LayoutDashboard,
    title: 'Client Experience',
    description:
      'A premium, white-labeled portal for your clients to upload schedules and track funding.',
  },
  {
    icon: Network,
    title: 'Integrations',
    description:
      'Open API, plus connectors for QuickBooks Online and Xero that propose into the intake rail rather than posting to your book.',
  },
]

function PrecisionModules() {
  return (
    <SectionWrapper className="bg-[var(--set1-bg)]">
      {/* Heading */}
      <AnimatedSection delay={0} className="text-center mb-12">
        <h2 className="text-section-lg text-foreground mb-3">
          Precision Modules
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Scalable building blocks designed for specialized finance workflows.
        </p>
      </AnimatedSection>

      {/* 3×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(({ icon: Icon, title, description }, i) => (
          <AnimatedSection key={title} delay={i * 0.06}>
            <div className="flex flex-col gap-10 bg-[var(--set1-box)] rounded-2xl border border-[var(--set1-stroke)] p-8 h-full">
              <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
              <div>
                <h3 className="text-section-sm text-foreground mb-3 tracking-tight">{title}</h3>
                <p className="text-body text-muted-foreground">{description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { PrecisionModules }
