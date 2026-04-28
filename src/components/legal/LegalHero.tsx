import { AnimatedSection } from '@/components/AnimatedSection'
import { Phone, Mail } from 'lucide-react'

interface MetaItem {
  label: string
  value: string
}

interface ContactCard {
  type: 'phone' | 'email'
  label: string
  value: string
  href: string
}

interface LegalHeroProps {
  eyebrow: string
  title: string
  lede: string
  meta: MetaItem[]
  contacts?: ContactCard[]
}

function LegalHero({ eyebrow, title, lede, meta, contacts }: LegalHeroProps) {
  return (
    <section className="bg-[var(--surface-soft)] border-b border-border pt-16 pb-20 md:pt-24 md:pb-24">
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${contacts ? 'max-w-[880px]' : 'max-w-7xl'}`}>
        <AnimatedSection>
          <p className="text-eyebrow text-primary/70 mb-8">{eyebrow}</p>
          <h1 className="text-section-xl mb-8 max-w-[14ch]">{title}</h1>
          <p className="text-body-lg text-muted-foreground max-w-[64ch] mb-12">{lede}</p>
        </AnimatedSection>

        {contacts && (
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14 max-w-[720px]">
              {contacts.map((contact) => (
                <a
                  key={contact.type}
                  href={contact.href}
                  className={`group grid grid-cols-[auto_1fr_auto] items-center gap-[18px] rounded-2xl no-underline transition-all duration-200 min-w-0 ${
                    contact.type === 'phone'
                      ? 'bg-primary text-white shadow-[0_18px_40px_-22px] shadow-primary/65 px-5 py-5 hover:-translate-y-0.5 hover:brightness-[1.04]'
                      : 'bg-[var(--card)] text-foreground border border-border px-5 py-5 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_18px_40px_-28px] hover:shadow-primary/60'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      contact.type === 'phone'
                        ? 'bg-white/[0.18] text-white'
                        : 'bg-primary/[0.12] text-primary'
                    }`}
                  >
                    {contact.type === 'phone' ? (
                      <Phone className="h-5 w-5" />
                    ) : (
                      <Mail className="h-5 w-5" />
                    )}
                  </span>
                  <span className="flex flex-col leading-[1.15] min-w-0">
                    <span
                      className={`text-[11px] tracking-[0.14em] uppercase font-normal font-mono mb-1 ${
                        contact.type === 'phone' ? 'text-white/75' : 'text-muted-foreground'
                      }`}
                    >
                      {contact.label}
                    </span>
                    <span
                      className={`font-heading font-extrabold tracking-tight truncate ${
                        contact.type === 'phone'
                          ? 'text-section-md text-white'
                          : 'text-section-sm text-foreground'
                      }`}
                    >
                      {contact.value}
                    </span>
                  </span>
                  <span
                    className={`font-heading font-bold text-[22px] transition-transform duration-200 group-hover:translate-x-1 ${
                      contact.type === 'phone' ? 'text-white' : 'text-primary'
                    }`}
                  >
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={contacts ? 0.2 : 0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-16 pt-8 border-t border-border">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-[11px] tracking-[0.14em] uppercase font-normal font-mono text-muted-foreground">{item.label}</span>
                <strong className="text-section-sm font-extrabold text-foreground mt-1.5">{item.value}</strong>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export { LegalHero }
