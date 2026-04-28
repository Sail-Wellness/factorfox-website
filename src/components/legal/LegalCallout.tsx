import { Info, AlertTriangle, Shield } from 'lucide-react'

type CalloutVariant = 'info' | 'warn' | 'shield'

const iconMap = {
  info: Info,
  warn: AlertTriangle,
  shield: Shield,
}

interface LegalCalloutProps {
  variant?: CalloutVariant
  title: string
  children: React.ReactNode
}

function LegalCallout({ variant = 'info', title, children }: LegalCalloutProps) {
  const Icon = iconMap[variant]

  return (
    <div className="grid grid-cols-[40px_1fr] gap-[18px] items-start rounded-2xl border border-[var(--set1-stroke)] bg-[var(--set1-box)] p-7 mt-8">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius)] bg-primary/10 text-primary">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <div className="min-w-0">
        <p className="text-card-title-sm font-extrabold text-foreground mb-1.5">{title}</p>
        <div className="text-body leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

export { LegalCallout }
