import { CircleCheckBig, Gauge, Network, FileSearch, ShieldOff } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { AnimatedSection } from '@/components/AnimatedSection'
import { CapitalHeading } from './CapitalHeading'
import { cn } from '@/lib/utils'

interface Item {
  icon: LucideIcon
  title: string
  desc: string
  /** The final card spans the full row with a blue accent. */
  wide?: boolean
}

const items: Item[] = [
  {
    icon: CircleCheckBig,
    title: 'Eligibility enforced at deployment.',
    desc: 'An invoice that meets the covenants can draw the line; one that doesn’t, can’t, checked the moment you fund, NOA-gated. The base self-cleans as invoices age out. Nothing to certify after the fact.',
  },
  {
    icon: Gauge,
    title: 'A live borrowing base, no stale BBC, ever.',
    desc: 'The deployed amount can’t exceed your eligible collateral, by structure. No monthly certificate, no lag between what your book is and what your lender thinks it is.',
  },
  {
    icon: Network,
    title: 'The cross-network screen.',
    desc: 'Network memory on debtors and carriers, real intelligence on every debtor, not a credit report on your top ten.',
  },
  {
    icon: FileSearch,
    title: 'Fund-upon-evidence, you keep the pen.',
    desc: 'Where the network smells smoke, deployment waits on enhanced evidence from you, to a standard we set, we don’t do the verification, and the bar narrows as confidence grows.',
  },
  {
    icon: ShieldOff,
    title: 'We never re-verify your work.',
    desc: 'By design, permanently, so your skin and your guarantee stay enforceable.',
    wide: true,
  },
]

function GlassCard({ icon: Icon, title, desc, wide }: Item) {
  return (
    <div
      className={cn(
        'flex h-full items-start gap-4 rounded-[18px] border px-7 py-[26px]',
        wide
          ? 'border-primary/20 bg-primary/[0.05]'
          : 'border-[var(--set1-stroke)] bg-[var(--set1-box)]'
      )}
    >
      <span
        className={cn(
          'mt-0.5 flex size-[34px] flex-none items-center justify-center rounded-full text-primary',
          wide ? 'bg-primary/[0.12]' : 'bg-primary/10'
        )}
      >
        <Icon className="size-[18px]" />
      </span>
      <div>
        <h3 className="text-section-sm text-foreground">{title}</h3>
        <p className="text-body text-muted-foreground mt-1.5">{desc}</p>
      </div>
    </div>
  )
}

function CapitalGlassBox() {
  return (
    <SectionWrapper id="how" className="scroll-mt-24 bg-[var(--set1-bg)]">
      <CapitalHeading
        align="left"
        size="display"
        eyebrowTone="muted"
        eyebrow={
          <>
            Don&rsquo;t trust, <span className="text-primary">verify.</span>
          </>
        }
        title="The glass box, aimed at the collateral, not at you."
        intro="A bank charges you for its blindness, exams, certificates, reserves, re-verification. FactorFox Capital lends against a book that runs on its own system of record, so the blindness is gone, and so is the friction you paid for it."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <AnimatedSection
            key={item.title}
            delay={Math.min(i, 4) * 0.05}
            className={cn('h-full', item.wide && 'md:col-span-2')}
          >
            <GlassCard {...item} />
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}

export { CapitalGlassBox }
