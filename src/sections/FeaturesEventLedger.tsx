import { AnimatedSection } from '@/components/AnimatedSection'

type EventEntry = {
  timestamp: string
  dotClass: string
  title: string
  badge?: string
  badgeClass?: string
  muted?: boolean
}

const events: EventEntry[] = [
  {
    timestamp: '14:02:31',
    dotClass: 'border-primary',
    title: 'Invoice #8829 Approved for funding',
    badge: 'VERIFIED',
    badgeClass: 'bg-primary/10 text-primary',
  },
  {
    timestamp: '13:58:12',
    dotClass: 'border-red-500',
    title: 'Client Verification: Acme Corp Identity Match',
    badge: 'ACTION',
    badgeClass: 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400',
  },
  {
    timestamp: '13:45:00',
    dotClass: 'border-muted-foreground/30',
    title: 'Portfolio Rebalance initiated',
    muted: true,
  },
]

function FeaturesEventLedger() {
  return (
    <section className="relative overflow-hidden bg-[var(--set2-bg)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">

        {/* Heading + subtitle */}
        <AnimatedSection delay={0} className="text-center mb-12 md:mb-14">
          <h2 className="text-section-xl text-foreground mb-4">
            Event Ledger
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-md mx-auto">
            Every transaction becomes a traceable event. Immutable, high-fidelity
            audit trails for institutional compliance.
          </p>
        </AnimatedSection>

        {/* Event log card */}
        <AnimatedSection delay={0.12} className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-[var(--set1-box)] border border-[var(--set2-stroke)] shadow-2xl overflow-hidden">
            {events.map((event, i) => (
              <div
                key={event.timestamp}
                className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-5 ${
                  i < events.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                {/* Timestamp — hidden on mobile to give title room */}
                <span className="hidden sm:inline-block text-[11px] font-mono text-muted-foreground shrink-0 w-[60px]">
                  {event.timestamp}
                </span>

                {/* Colored circle */}
                <span
                  className={`h-3 w-3 rounded-full border-2 shrink-0 ${event.dotClass}`}
                />

                {/* Title */}
                <span
                  className={`flex-1 text-body-sm ${
                    event.muted ? 'text-muted-foreground/60' : 'text-foreground'
                  }`}
                >
                  {event.title}
                </span>

                {/* Badge */}
                {event.badge && (
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-md shrink-0 ${event.badgeClass}`}
                  >
                    {event.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export { FeaturesEventLedger }
