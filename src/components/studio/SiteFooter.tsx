import Link from 'next/link'
import { FOOTER_NAV, SOCIAL_LINKS } from '@/data/navigation'

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/5 bg-canvas dark:border-white/10 dark:bg-canvas-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="text-lg font-bold tracking-tight">raimonvibe</p>
          <p className="mt-2 max-w-xs text-sm text-muted dark:text-muted-dark">
            Technical research, thoughtful builds, and digital experiences from West Friesland.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted dark:text-muted-dark">
            Explore
          </p>
          <ul className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-2 sm:gap-x-12">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="studio-link studio-touch-target-row text-ink/90 hover:text-ink dark:text-ink-muted/90 dark:hover:text-ink-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted dark:text-muted-dark">
            Connect
          </p>
          <ul className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="studio-link studio-touch-target px-2 text-ink/90 hover:text-ink dark:text-ink-muted/90 dark:hover:text-ink-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/5 px-6 py-5 text-center text-xs text-muted dark:border-white/10 dark:text-muted-dark lg:px-10">
        <p>
          © {new Date().getFullYear()}{' '}
          <a href="https://www.raimonvibe.com/" className="studio-link underline" target="_blank" rel="noreferrer">
            raimonvibe
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}
