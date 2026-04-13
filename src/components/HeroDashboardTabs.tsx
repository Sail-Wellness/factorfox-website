import { useRef, useState } from 'react'
import intelligenceImg from '@/assets/images/intelligence.png'
import intelligenceDarkImg from '@/assets/images/intelligence_dark.png'

type TabConfig = {
  id: string
  label: string
  lightImg: string
  darkImg: string
}

const TABS: TabConfig[] = [
  { id: 'intelligence', label: 'Intelligence', lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'control',      label: 'Control',      lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'recovery',     label: 'Recovery',     lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'certainty',    label: 'Certainty',    lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
]

function HeroDashboardTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tablistRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabs = tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    if (!tabs) return
    const count = tabs.length

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const next = (activeIndex + 1) % count
      setActiveIndex(next)
      tabs[next].focus()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prev = (activeIndex - 1 + count) % count
      setActiveIndex(prev)
      tabs[prev].focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActiveIndex(0)
      tabs[0].focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      setActiveIndex(count - 1)
      tabs[count - 1].focus()
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Tab bar */}
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Dashboard views"
        onKeyDown={handleKeyDown}
        className="flex gap-1 p-1.5 rounded-xl bg-muted border border-border dark:bg-white/5 dark:border-white/10"
      >
        {TABS.map((tab, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={tab.id}
              id={`hero-tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`hero-tabpanel-${tab.id}`}
              onClick={() => setActiveIndex(index)}
              className={[
                'flex-1 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors',
                isActive
                  ? 'bg-card text-foreground shadow-sm dark:bg-white/10 dark:shadow-none'
                  : 'text-muted-foreground hover:text-foreground',
              ].join(' ')}
            >
              <span
                aria-hidden="true"
                className={[
                  'h-2 w-2 rounded-full',
                  isActive ? 'bg-primary' : 'bg-muted-foreground/50',
                ].join(' ')}
              />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Screenshot area — all panels rendered, inactive ones hidden */}
      {TABS.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`hero-tabpanel-${tab.id}`}
          aria-labelledby={`hero-tab-${tab.id}`}
          hidden={index !== activeIndex}
          className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
        >
          {/* Light mode */}
          <img
            src={tab.lightImg}
            alt={`FactorFox ${tab.label} view`}
            className="absolute inset-0 w-full h-full object-cover dark:hidden"
          />
          {/* Dark mode */}
          <img
            src={tab.darkImg}
            alt={`FactorFox ${tab.label} view`}
            className="absolute inset-0 w-full h-full object-cover hidden dark:block"
          />
        </div>
      ))}
    </div>
  )
}

export { HeroDashboardTabs }
