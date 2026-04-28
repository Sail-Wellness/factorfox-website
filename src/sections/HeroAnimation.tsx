import { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './HeroAnimation.css'

const PHASE_DURATION = 5000
const TOTAL_PHASES = 3
const DEPLOY_TARGET = 2847500
const DEPLOY_ANIM_MS = 1800

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString()
}

function HeroAnimation() {
  const deployRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const barsResetRef = useRef(false)

  const animateDeploy = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    const start = performance.now()
    function step(now: number) {
      const t = Math.min((now - start) / DEPLOY_ANIM_MS, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      if (deployRef.current) deployRef.current.textContent = fmt(DEPLOY_TARGET * eased)
      if (t < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  const setBarsVisible = useCallback((active: boolean) => {
    document.querySelectorAll<HTMLElement>('.hero-anim .deploy-bar').forEach((bar) => {
      bar.style.height = active
        ? getComputedStyle(bar).getPropertyValue('--h')
        : '0'
    })
  }, [])

  useEffect(() => {
    const root = document.documentElement
    let current = 0

    function setPhase(idx: number) {
      const phaseNum = idx + 1
      root.setAttribute('data-phase', String(phaseNum))
      if (phaseNum === 3) {
        setTimeout(() => {
          animateDeploy()
          setBarsVisible(true)
        }, 250)
      } else {
        if (deployRef.current) deployRef.current.textContent = '$0'
        setBarsVisible(false)
      }
    }

    setPhase(0)
    const interval = setInterval(() => {
      current = (current + 1) % TOTAL_PHASES
      setPhase(current)
    }, PHASE_DURATION)

    return () => {
      clearInterval(interval)
      cancelAnimationFrame(rafRef.current)
      root.removeAttribute('data-phase')
    }
  }, [animateDeploy, setBarsVisible])

  return (
    <section className="relative overflow-hidden bg-[var(--set1-bg)]">
      <div className="hero-anim">
        {/* Headlines */}
        <div className="headline-stack">
          <h1 className="headline h-1">Automate Everything</h1>
          <h1 className="headline h-2">
            Eliminate <span className="accent-red">Fraud</span>
          </h1>
          <h1 className="headline h-3">
            Just Deploy <span className="accent">Capital</span>
          </h1>
        </div>

        {/* Subtitles */}
        <div className="subtitle-stack">
          <p className="subtitle s-1">
            Operate less. Increase returns. Focus on what matters.
          </p>
          <p className="subtitle s-2">
            Verify every invoice. Catch every duplicate. Sleep at night.
          </p>
          <p className="subtitle s-3">
            From submission to funding in minutes, not days.
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-ctas">
          <Link to="/contact-sales" className="btn-primary shadow-sm">
            Request Demo
          </Link>
          <Link to="/features" className="btn-secondary">
            View Platform
          </Link>
        </div>

        {/* Dashboard */}
        <div className="dashboard">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-logo">
              <img src="/favicon-32x32.png" alt="FactorFox" className="sidebar-logo-mark" />
              FactorFox OS
            </div>
            <nav className="sidebar-nav">
              <div className="sidebar-item si-document">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Document
              </div>
              <div className="sidebar-item si-risk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Risk
              </div>
              <div className="sidebar-item si-workflow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                Workflow
              </div>
              <div className="sidebar-item si-collections">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
                Collections
              </div>
            </nav>
          </aside>

          {/* Main panel */}
          <main className="panel">
            <header className="panel-header">
              <div className="panel-title-stack">
                <h2 className="panel-title pt-1">Pending Invoices</h2>
                <h2 className="panel-title pt-2">Risk Verification</h2>
                <h2 className="panel-title pt-3">Capital Deployed Today</h2>
              </div>
              <div className="panel-actions">
                <span className="pill pill-1">
                  <span className="pill-dot" />
                  AI Extracting
                </span>
                <span className="pill pill-2">
                  <span className="pill-dot" />
                  All Clear
                </span>
                <span className="pill pill-3">
                  <span className="pill-dot" />
                  Live
                </span>
              </div>
            </header>

            <div className="phase-content">
              {/* Phase 1: Ingestion */}
              <div className="phase phase-1">
                <InvoiceRow
                  rowClass="row-1"
                  num="INV-04821"
                  vendor="Acme Logistics · Net 60"
                  amount="$45,200"
                />
                <InvoiceRow
                  rowClass="row-2"
                  num="INV-04822"
                  vendor="Northwind Co · Net 30"
                  amount="$28,750"
                />
                <div className="upload-zone">
                  <span className="flying-doc" />
                  <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <polyline points="9 14 12 11 15 14" />
                    <line x1="12" y1="11" x2="12" y2="17" />
                  </svg>
                  <span>Drop invoice to extract data</span>
                </div>
              </div>

              {/* Phase 2: Verification */}
              <div className="phase phase-2">
                <VerifyRow rowClass="v-row-1" num="INV-04821" vendor="Acme Logistics · $45,200" />
                <VerifyRow rowClass="v-row-2" num="INV-04822" vendor="Northwind Co · $28,750" />
                <div className="verify-trail">
                  <div className="verify-trail-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Fraud Checks
                  </div>
                  <div className="check-list">
                    <CheckItem label="Duplicate ledger scan" />
                    <CheckItem label="Vendor authenticated" />
                    <CheckItem label="Amount matches PO" />
                    <CheckItem label="Fraud signals: 0" />
                  </div>
                </div>
              </div>

              {/* Phase 3: Deploy Capital */}
              <div className="phase phase-3">
                <div className="deploy-grid">
                  <div className="deploy-hero">
                    <div>
                      <div className="deploy-label">Funded · Last 24h</div>
                      <div className="deploy-amount" ref={deployRef}>
                        $0
                      </div>
                      <div className="deploy-meta">
                        <span className="deploy-meta-up">▲ 18.4%</span>
                        <span>vs. yesterday</span>
                      </div>
                    </div>
                    <div className="deploy-chart">
                      {[35, 50, 42, 65, 58, 78, 70, 92, 85, 100].map((h, i) => (
                        <div
                          key={i}
                          className="deploy-bar"
                          style={
                            {
                              '--bar-delay': `${0.2 + i * 0.08}s`,
                              '--h': `${h}%`,
                            } as React.CSSProperties
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <div className="deploy-stats">
                    <StatCard icon="time" value="4.2 min" label="avg. time to fund" />
                    <StatCard icon="rate" value="98.7%" label="approval rate" />
                    <StatCard icon="fraud" value="$0" label="fraud loss this quarter" />
                  </div>
                </div>
              </div>
            </div>

            <span className="progress-strip" />
          </main>
        </div>
      </div>
    </section>
  )
}

/* ── Sub-components ── */

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const CheckSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

function InvoiceRow({ rowClass, num, vendor, amount }: { rowClass: string; num: string; vendor: string; amount: string }) {
  return (
    <div className={`invoice-row ${rowClass}`}>
      <div className="invoice-icon"><DocIcon /></div>
      <div className="invoice-info">
        <div className="invoice-num">
          <span className="skeleton" />
          <span>{num}</span>
        </div>
        <div className="invoice-vendor">
          <span className="skeleton" />
          <span>{vendor}</span>
        </div>
      </div>
      <div className="invoice-amount">
        <span className="skeleton" />
        <span className="amount-text">{amount}</span>
      </div>
    </div>
  )
}

function VerifyRow({ rowClass, num, vendor }: { rowClass: string; num: string; vendor: string }) {
  return (
    <div className={`verify-row ${rowClass}`}>
      <span className="scan-line" />
      <div className="invoice-icon"><DocIcon /></div>
      <div className="invoice-info">
        <span className="v-num">{num}</span>
        <span className="v-vendor">{vendor}</span>
      </div>
      <div className="verify-status">
        <CheckSvg />
        Verified
      </div>
    </div>
  )
}

function CheckItem({ label }: { label: string }) {
  return (
    <div className="check-item">
      <span className="check-icon"><CheckSvg /></span>
      {label}
    </div>
  )
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  const icons: Record<string, JSX.Element> = {
    time: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    rate: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    fraud: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  }

  return (
    <div className="stat-card">
      <div className={`stat-icon icon-${icon}`}>{icons[icon]}</div>
      <div className="stat-text">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  )
}

export { HeroAnimation }
