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
      'Robust API and pre-built connectors for QuickBooks, NetSuite, Sage, and more.',
  },
]

function PrecisionModules() {
  return (
    <SectionWrapper className="bg-[var(--set1-bg)]">
      {/* Heading */}
      <AnimatedSection delay={0} className="text-center mb-12">
        <h2
          className="font-black text-gray-900 dark:text-white leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          Precision Modules
        </h2>
        <p className="text-[16px] text-gray-400">
          Scalable building blocks designed for specialized finance workflows.
        </p>
      </AnimatedSection>

      {/* 3×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(({ icon: Icon, title, description }, i) => (
          <AnimatedSection key={title} delay={i * 0.06}>
            <div className="flex flex-col gap-10 bg-[var(--set1-box)] rounded-2xl border border-gray-200/80 dark:border-[var(--set1-stroke)] p-8 h-full">
              <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{title}</h3>
                <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { PrecisionModules }
