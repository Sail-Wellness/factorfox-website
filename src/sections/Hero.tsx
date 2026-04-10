import { AnimatedSection } from '@/components/AnimatedSection'

const covenantRows = [
  { metric: 'Concentration', current: '14.2%', covenant: '≤15%', status: 'Warning' },
  { metric: 'Collection Rate', current: '99.7%', covenant: '≥95%', status: 'Compliant' },
  { metric: 'Aging HBM', current: '6.2%', covenant: '≤10%', status: 'Compliant' },
  { metric: 'Dilution', current: '3.1%', covenant: '≤5%', status: 'Compliant' },
  { metric: 'Advance Rate', current: '62.9%', covenant: '≤65%', status: 'Compliant' },
  { metric: 'Default Rate', current: '1.8%', covenant: '≤7%', status: 'Compliant' },
]

function DashboardMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b border-gray-200 px-2">
        {['Notifications', 'Collections', 'Reconciliation', 'Monitoring'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2.5 text-[11px] font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${
              tab === 'Monitoring'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-200">
        {[
          { label: 'EXCEPTIONS', value: '13', warn: true },
          { label: 'ACTIVE CLIENTS', value: '94', warn: false },
          { label: 'COMPLIANCE', value: '100%', green: true },
        ].map(stat => (
          <div key={stat.label} className="px-4 py-3">
            <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              {stat.label}
            </p>
            <p
              className={`text-[22px] font-bold leading-none ${
                stat.warn ? 'text-orange-500' : stat.green ? 'text-green-500' : 'text-gray-900'
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Table header */}
      <div className="grid grid-cols-4 px-4 py-2 bg-gray-50 border-b border-gray-200">
        {['METRIC', 'CURRENT', 'COVENANT', 'STATUS'].map(h => (
          <span key={h} className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">
            {h}
          </span>
        ))}
      </div>

      {/* Table rows */}
      {covenantRows.map((row, i) => (
        <div
          key={row.metric}
          className={`grid grid-cols-4 px-4 py-2 items-center ${
            i < covenantRows.length - 1 ? 'border-b border-gray-100' : ''
          }`}
        >
          <span className="text-[12px] text-gray-700">{row.metric}</span>
          <span className="text-[12px] text-gray-700">{row.current}</span>
          <span className="text-[12px] text-gray-500">{row.covenant}</span>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit ${
              row.status === 'Warning'
                ? 'bg-orange-100 text-orange-600'
                : 'bg-green-100 text-green-600'
            }`}
          >
            {row.status}
          </span>
        </div>
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft radial gradient — top-right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 75% at 82% 35%, rgba(186, 230, 253, 0.45) 0%, rgba(255,255,255,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left: text content */}
          <AnimatedSection delay={0} className="flex flex-col">

            {/* Tag */}
            <div className="mb-6 flex items-center gap-2">
              <span className="text-red-500 text-base leading-none select-none">●</span>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: '#0ea5e9' }}
              >
                Migrate in minutes not months
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-black text-gray-900 uppercase leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(52px, 6.5vw, 80px)' }}
            >
              Just Deploy<br />Capital
            </h1>

            {/* Subtitle */}
            <p className="text-[16.5px] leading-relaxed text-gray-500 max-w-[430px] mb-10">
              We automate the entire factoring life-cycle so you reduce cost,
              eliminate fraud, and maximize turnover on every dollar deployed.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-white font-semibold text-[15px] hover:bg-primary/90 transition-colors shadow-sm"
              >
                Request Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold text-[15px] hover:bg-gray-50 transition-colors"
              >
                View Platform
              </a>
            </div>
          </AnimatedSection>

          {/* Right: dashboard mockup */}
          <AnimatedSection delay={0.12} className="relative w-full">
            <DashboardMockup />
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

export { Hero }
