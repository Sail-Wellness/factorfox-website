import { useState } from 'react'
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

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Dashboard views"
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
              onClick={() => handleTabClick(index)}
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

      {/* Screenshot area */}
      <div
        role="tabpanel"
        id={`hero-tabpanel-${TABS[activeIndex].id}`}
        aria-labelledby={`hero-tab-${TABS[activeIndex].id}`}
        className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
      >
        {/* Light mode images */}
        <div className="absolute inset-0 dark:hidden">
          {TABS.map((tab, index) => (
            <img
              key={`light-${tab.id}`}
              src={tab.lightImg}
              alt={`FactorFox ${tab.label} view`}
              className={[
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out',
                index === activeIndex ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
          ))}
        </div>
        {/* Dark mode images */}
        <div className="absolute inset-0 hidden dark:block">
          {TABS.map((tab, index) => (
            <img
              key={`dark-${tab.id}`}
              src={tab.darkImg}
              alt={`FactorFox ${tab.label} view`}
              className={[
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out',
                index === activeIndex ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { HeroDashboardTabs }
