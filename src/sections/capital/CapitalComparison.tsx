import type { ReactNode } from 'react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { AnimatedSection } from '@/components/AnimatedSection'
import { CapitalHeading } from './CapitalHeading'
import { cn } from '@/lib/utils'

const rows: { bank: string; capital: ReactNode }[] = [
  {
    bank: 'Monthly BBC you assemble and defend',
    capital: 'Live base, true by construction, nothing to assemble',
  },
  {
    bank: 'Quarterly field exams',
    capital: (
      <>
        Continuous, machine-run audit, the visibility <em className="italic">is</em> the
        audit
      </>
    ),
  },
  {
    bank: 'Eligibility certified after the fact, then argued',
    capital: 'Eligibility enforced at deployment, self-cleaning',
  },
  {
    bank: 'Re-verification of your work',
    capital: 'We never re-verify, keep your powder dry',
  },
  {
    bank: 'Sees one book (yours)',
    capital: (
      <>
        Sees the whole network, catches fraud <em className="italic">for</em> you
      </>
    ),
  },
  {
    bank: 'Stale, lagging line',
    capital: (
      <>
        A line that <em className="italic">is</em> your book, minute by minute
      </>
    ),
  },
  {
    bank: 'Zero fraud help',
    capital: '“This load was funded six days ago”, intelligence handed to you',
  },
]

function CapitalComparison() {
  return (
    <SectionWrapper id="compare" className="scroll-mt-24 bg-[var(--set2-bg)]">
      <CapitalHeading
        size="display"
        eyebrow="Bank line vs. FactorFox Capital line"
        title="Same collateral. A different relationship."
      />

      <AnimatedSection delay={0.05} className="mx-auto mt-12 max-w-[1100px]">
        <div className="overflow-hidden rounded-[24px] border border-[var(--set2-stroke)] bg-[var(--set2-box)] shadow-sm">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr>
                <th className="w-1/2 border-b border-[var(--set2-stroke)] px-7 py-[22px] text-left text-[13px] font-bold uppercase tracking-[1px] text-muted-foreground">
                  A bank line
                </th>
                <th className="w-1/2 border-b border-[var(--set2-stroke)] bg-primary/5 px-7 py-[22px] text-left text-[13px] font-extrabold uppercase tracking-[1px] text-primary">
                  A FactorFox Capital line
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ bank, capital }, i) => {
                const last = i === rows.length - 1
                return (
                  <tr key={i}>
                    <td
                      className={cn(
                        'px-7 py-5 align-top text-[15.5px] leading-normal text-muted-foreground',
                        !last && 'border-b border-[var(--set2-stroke)]'
                      )}
                    >
                      {bank}
                    </td>
                    <td
                      className={cn(
                        'bg-primary/[0.04] px-7 py-5 align-top text-[15.5px] font-medium leading-normal text-foreground',
                        !last && 'border-b border-[var(--set2-stroke)]'
                      )}
                    >
                      {capital}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}

export { CapitalComparison }
