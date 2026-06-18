import type { ReactNode } from 'react'
import { Wallet, Zap, ShieldCheck, Eye, Shield, Clock, DollarSign } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { AnimatedSection } from '@/components/AnimatedSection'
import { CapitalHeading } from './CapitalHeading'
import { cn } from '@/lib/utils'

interface Item {
  icon: LucideIcon
  lead: string
  rest?: ReactNode
  desc: ReactNode
  accent?: boolean
}

const featured: Item[] = [
  {
    icon: Wallet,
    lead: 'Bespoke',
    rest: (
      <>
        a line that <em className="italic text-primary">is</em> your book.
      </>
    ),
    desc: 'Sized to your receivables pool and shaped like it: the live sum of your performing funded invoices. Not a fixed line that sits idle or runs short.',
  },
  {
    icon: Zap,
    lead: 'Automatic',
    rest: 'deploy-on-funding.',
    desc: 'Fund an invoice and our capital deploys onto it in real time, no draw request, no waiting, no phone call. When it pays, it rolls off. The line grows and shrinks with your book, automatically.',
  },
  {
    icon: ShieldCheck,
    lead: 'No field exams',
    rest: 'the software is the audit.',
    desc: 'No quarterly field exams, no borrowing-base certificate to assemble and defend, no sampled re-verification. The audit is continuous and machine-run, because the book is born in the system of record. The friction that eats a week of your controller’s quarter just isn’t there.',
  },
  {
    icon: Eye,
    lead: 'Lower fraud',
    rest: 'caught for you, across the network.',
    accent: true,
    desc: (
      <>
        We see debtor and carrier behavior across the whole FactorFox / FactorEvo
        network, not just your book. When a load you’re about to fund was already
        funded by another factor six days ago, our cross-network screen catches it
        and hands <em className="italic">you</em> the intelligence before your money
        is gone. The duplicate, the chameleon broker, the ring no single book can
        see. Not a rejection, information you didn’t have, in time to act on it.
      </>
    ),
  },
]

const secondary: Item[] = [
  {
    icon: Shield,
    lead: 'Keep your powder dry',
    rest: 'we don’t re-verify your work.',
    desc: 'We don’t call your debtors behind you or second-guess your verification. You keep your first-loss, your validity guarantee, your call. We only intercept what you structurally can’t see, the cross-network signal. Everything else is yours.',
  },
  {
    icon: Clock,
    lead: 'Real-time, not quarterly.',
    desc: 'If a debtor starts paying everyone but you, you see the divergence as it forms, not at the next exam.',
  },
  {
    icon: DollarSign,
    lead: 'A fair, market rate.',
    desc: 'Priced for a short-dated, granular, self-liquidating book with your first-loss beneath it. The reason to move isn’t a teaser rate, it’s everything above.',
  },
]

function ValueCard({
  item: { icon: Icon, lead, rest, desc, accent },
  variant,
}: {
  item: Item
  variant: 'lg' | 'sm'
}) {
  const lg = variant === 'lg'
  return (
    <div
      className={cn(
        'flex h-full flex-col border bg-[var(--set2-box)]',
        lg ? 'gap-4 rounded-[24px] p-7 sm:p-[38px]' : 'gap-3 rounded-[20px] p-[30px]',
        accent ? 'border-[var(--brand-orange)]/30' : 'border-[var(--set2-stroke)]'
      )}
    >
      <span
        className={cn(
          'flex items-center justify-center',
          lg ? 'size-[54px] rounded-[16px]' : 'size-11 rounded-xl',
          accent
            ? 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]'
            : 'bg-primary/10 text-primary'
        )}
      >
        <Icon className={lg ? 'size-[26px]' : 'size-[22px]'} />
      </span>
      <h3 className={cn('text-foreground', lg ? 'text-section-md' : 'text-section-sm')}>
        {lead}
        {rest && <span className="font-bold text-muted-foreground">:</span>}
        {rest && <> {rest}</>}
      </h3>
      <p className={cn('text-muted-foreground', lg ? 'text-body' : 'text-body-sm')}>
        {desc}
      </p>
    </div>
  )
}

function CapitalWhatYouGet() {
  return (
    <SectionWrapper id="factors" className="scroll-mt-24 bg-[var(--set2-bg)]">
      <CapitalHeading
        align="left"
        size="display"
        eyebrow="For factors, what you get"
        title="Capital that fits your book, and works for you."
        intro="You already run your book on FactorFox. FactorFox Capital is a senior lender built on that same system of record, so there’s nothing to reconcile and nothing to fake. We lead with the service, not the rate."
      />

      {/* Featured 2×2 */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {featured.map((item, i) => (
          <AnimatedSection key={item.lead} delay={i * 0.05} className="h-full">
            <ValueCard item={item} variant="lg" />
          </AnimatedSection>
        ))}
      </div>

      {/* Secondary row of 3 */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {secondary.map((item, i) => (
          <AnimatedSection key={item.lead} delay={i * 0.05} className="h-full">
            <ValueCard item={item} variant="sm" />
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { CapitalWhatYouGet }
