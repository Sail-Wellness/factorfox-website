import { AnimatedSection } from '@/components/AnimatedSection'
import { BOOKING_URL } from '@/lib/booking'

/** Small uppercase label used inside the hero dashboard mock. */
function MockLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary/80">
      {children}
    </div>
  )
}

/** A single invoice row in the deploy-on-funding panel. */
function InvoiceRow({
  id,
  status,
  note,
}: {
  id: string
  status: 'deployed' | 'review'
  note?: string
}) {
  const review = status === 'review'
  return (
    <div
      className={
        'flex items-center gap-3 rounded-xl border p-3 ' +
        (review
          ? 'border-[var(--brand-orange)]/30 bg-[var(--brand-orange)]/[0.06]'
          : 'border-border bg-[var(--surface-soft)]')
      }
    >
      <span
        className={
          'flex size-[30px] flex-none items-center justify-center rounded-full ' +
          (review
            ? 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]'
            : 'bg-primary/10 text-primary')
        }
      >
        {review ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate font-mono text-[12.5px] text-foreground">{id}</div>
        {note && (
          <div className="mt-0.5 font-mono text-[10.5px] text-[var(--brand-orange)]">{note}</div>
        )}
      </div>
      <span
        className={
          'flex-none rounded font-bold text-[10px] tracking-[0.5px] px-1.5 py-1 ' +
          (review
            ? 'bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]'
            : 'bg-primary/10 text-primary')
        }
      >
        {review ? 'REVIEW' : 'DEPLOYED'}
      </span>
    </div>
  )
}

/** A borrowing-base bar in the "your line = your book" panel. */
function Bar({ label, sub, pct }: { label: string; sub: string; pct: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between font-mono text-[11px] text-muted-foreground">
        <span>{label}</span>
        <span>{sub}</span>
      </div>
      <div className="h-3.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function CapitalHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Soft brand glow — light + dark variants, mirrors the site's hero treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% -5%, rgba(0,144,255,0.08) 0%, rgba(255,255,255,0) 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% -5%, rgba(0,144,255,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
        {/* Centered intro */}
        <AnimatedSection className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="text-eyebrow flex items-center gap-2 text-primary">
            FactorFox Capital
            <span className="text-muted-foreground/60">·</span>
            For factors
          </div>

          <h1 className="text-hero text-foreground mt-5 max-w-[14ch]">
            A line that <em className="text-primary italic">is</em> your book.
          </h1>

          <p className="text-body-lg text-muted-foreground mt-6 max-w-[680px]">
            A software-native senior lender to freight-factoring companies, built
            on the system of record you already run on.
          </p>
          <p className="text-body-sm text-muted-foreground/80 mt-4 max-w-[620px]">
            It deploys as you fund, sized to your receivables, and it catches fraud{' '}
            <em className="italic">for</em> you across the whole network. No field
            exams. No audit theater. Keep your powder dry.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a href="#factors" className="btn-primary-lg shadow-sm">
              What you get
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-lg"
            >
              Get in touch
            </a>
          </div>

          <div className="text-eyebrow mt-6 flex items-center gap-1.5 text-muted-foreground/70">
            Don&rsquo;t trust, <span className="text-primary">verify.</span>
          </div>
        </AnimatedSection>

        {/* Deploy-on-funding dashboard mock */}
        <AnimatedSection delay={0.12} className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-xl lg:grid-cols-[1.15fr_1fr]">
            {/* Left: deploy-on-funding */}
            <div className="flex flex-col gap-4 border-b border-border p-6 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <MockLabel>Deploy-on-funding</MockLabel>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                  <span className="size-[7px] rounded-full bg-green-500" />
                  Live
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <InvoiceRow id="INV-8829 · Acme Freight" status="deployed" />
                <InvoiceRow id="INV-8830 · Northwind Logistics" status="deployed" />
                <InvoiceRow
                  id="INV-8831 · Cardinal Carriers"
                  status="review"
                  note="Funded by another factor 6d ago"
                />
              </div>
              <p className="text-[12px] leading-relaxed text-muted-foreground/80">
                Fund an invoice and the line deploys onto it in real time. The
                cross-network screen hands you what no single book can see.
              </p>
            </div>

            {/* Right: your line = your book */}
            <div className="flex flex-col gap-5 bg-[var(--surface-soft)] p-6 sm:p-7">
              <MockLabel>Your line = your book</MockLabel>
              <div className="flex flex-col gap-3.5">
                <Bar label="Eligible collateral" sub="performing" pct={88} />
                <Bar label="Deployed" sub="tracks the book" pct={88} />
              </div>
              <p className="rounded-xl border border-border bg-card p-3.5 text-[12.5px] leading-relaxed text-muted-foreground">
                The deployed line moves with your eligible book, minute by minute.
                No fixed line sitting idle or running short, and no certificate to
                assemble.
              </p>
              <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                <span className="size-[7px] rounded-full bg-primary" />
                Cross-network screen · continuous
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export { CapitalHero }
