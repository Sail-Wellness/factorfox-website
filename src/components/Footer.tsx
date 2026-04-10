import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import logoSrc from '@/assets/logo.svg'

const footerLinks = {
  Product: [
    { label: 'Features', to: '/features' },
    { label: 'About', to: '/about' },
    { label: 'Contact Sales', to: '/contact-sales' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Blog', href: '#' },
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
  ],
}

interface FooterProps {
  className?: string
}

function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-border bg-background', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="inline-block">
              <img src={logoSrc} alt="FactorFox" className="h-7 w-auto" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Financial intelligence to accelerate your funding operations.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-foreground mb-3">{group}</h4>
              <ul className="space-y-2">
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
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
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

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FactorFox. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
