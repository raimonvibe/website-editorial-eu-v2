import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="studio-shell flex min-h-screen flex-col bg-canvas text-ink dark:bg-canvas-dark dark:text-ink-muted">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-canvas dark:focus:bg-ink-muted dark:focus:text-canvas-dark"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
