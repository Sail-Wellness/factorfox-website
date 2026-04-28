import { AnimatedSection } from '@/components/AnimatedSection'

interface QuickRefItem {
  num: string
  label: string
  value: string
  muted?: boolean
}

interface QuickRefStripProps {
  items: QuickRefItem[]
}

function QuickRefStrip({ items }: QuickRefStripProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-14 mb-24 relative z-10">
      <AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] rounded-2xl border border-[var(--set1-stroke)] bg-[var(--set1-box)] shadow-sm overflow-hidden">
          {items.map((item, i) => (
            <div key={item.num} className="contents">
              {i > 0 && (
                <div className="hidden lg:block w-px bg-[var(--set1-stroke)] my-5" aria-hidden="true" />
              )}
              <div className="flex flex-col justify-center px-8 py-7 min-h-[120px] border-b border-[var(--set1-stroke)] lg:border-b-0 last:border-b-0 [&:nth-child(odd)]:border-r [&:nth-child(odd)]:border-[var(--set1-stroke)] lg:[&:nth-child(odd)]:border-r-0">
                <span className="text-eyebrow font-mono text-primary/70 mb-3">
                  {item.num}
                </span>
                <span className="text-[11px] tracking-[0.14em] uppercase font-normal font-mono text-muted-foreground mb-1.5">{item.label}</span>
                <span
                  className={`text-section-sm font-extrabold ${
                    item.muted ? 'text-muted-foreground' : 'text-foreground'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}

export { QuickRefStrip }
