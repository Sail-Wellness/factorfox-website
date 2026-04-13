import { useEffect, useRef, useState } from 'react'
import intelligenceImg from '@/assets/images/intelligence.png'
import intelligenceDarkImg from '@/assets/images/intelligence_dark.png'

type TabConfig = {
  id: string
  label: string
  lightImg: string
  darkImg: string
}

const TABS: TabConfig[] = [
  // TODO: replace lightImg/darkImg with real per-tab screenshots when available
  { id: 'recovery',     label: 'Recovery',     lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'intelligence', label: 'Intelligence', lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'control',      label: 'Control',      lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
  { id: 'certainty',    label: 'Certainty',    lightImg: intelligenceImg, darkImg: intelligenceDarkImg },
]

function HeroDashboardTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tablistRef = useRef<HTMLDivElement>(null)
  const hasInteractedRef = useRef(false)
  const intervalRef = useRef<number | null>(null)

  const startRotation = () => {
    if (hasInteractedRef.current) return
    if (intervalRef.current !== null) return
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % TABS.length)
    }, 4000)
  }

  const stopRotation = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startRotation()
    return stopRotation
  }, [])

  const handleTabClick = (index: number) => {
    hasInteractedRef.current = true
    stopRotation()
    setActiveIndex(index)
  }

  const handleMouseEnter = () => {
    if (hasInteractedRef.current) return
    stopRotation()
  }

  const handleMouseLeave = () => {
    if (hasInteractedRef.current) return
    startRotation()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return
    e.preventDefault() // prevent page scroll on Home/End and stray arrow scroll

    const tabs = tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    if (!tabs) return
    const count = tabs.length
    const currentIndex = [...tabs].findIndex((t) => t === document.activeElement)
    if (currentIndex === -1) return

    let nextIndex: number
    if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % count
    else if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + count) % count
    else if (e.key === 'Home') nextIndex = 0
    else nextIndex = count - 1 // End

    handleTabClick(nextIndex)
    tabs[nextIndex].focus()
  }

  return (
    <div
      className="flex flex-col gap-4 w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tab bar */}
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Dashboard views"
        onKeyDown={handleKeyDown}
        className="flex gap-1 p-1 sm:p-1.5 rounded-xl bg-muted border border-border dark:bg-white/5 dark:border-white/10"
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
              tabIndex={isActive ? 0 : -1}
              className={[
                'flex-1 flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-medium transition-colors whitespace-nowrap',
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
