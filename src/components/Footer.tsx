import { Link } from 'react-router-dom'
import { Globe, AtSign, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoSrc from '@/assets/logo.svg'

const LOGIN_URL = 'https://app.factorfox.com'

// TODO: replace placeholder hrefs with real URLs when available
// - Product links: deep links to feature subsections
// - Legal links: real policy page URLs
// - Social links: real company profile URLs
const footerLinks = {
  Product: [
    { label: 'Intake Engine', href: '#' },
    { label: 'Risk Scoring', href: '#' },
    { label: 'Workflow Automation', href: '#' },
    { label: 'Client Portal', href: '#' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Features', to: '/features' },
    { label: 'Contact', to: '/contact-sales' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

const socialLinks = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: AtSign, href: '#', label: 'Email' },
  { icon: Share2, href: '#', label: 'Share' },
]

const bottomLinks = [
  { label: 'Status', href: '#', external: false },
  { label: 'Support', href: '#', external: false },
  { label: 'Login', href: LOGIN_URL, external: true },
]

interface FooterProps {
  className?: string
}

function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-border bg-[var(--footer)]', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <img src={logoSrc} alt="FactorFox" loading="lazy" className="h-8 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-xs">
              The leading operating system for the modern factoring industry. Built by finance experts for high-velocity growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h4 className="text-sm font-bold text-foreground mb-4">{group}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link.label}>
                      {'to' in link ? (
                        <Link
                          to={link.to as string}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FactorFox. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {bottomLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
