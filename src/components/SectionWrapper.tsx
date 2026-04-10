import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  style?: React.CSSProperties
  as?: React.ElementType
}

function SectionWrapper({
  children,
  className,
  innerClassName,
  style,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag className={cn('w-full py-16 md:py-24', className)} style={style}>
      <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', innerClassName)}>
        {children}
      </div>
    </Tag>
  )
}

export { SectionWrapper }
