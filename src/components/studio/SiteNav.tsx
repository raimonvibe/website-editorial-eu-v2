'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MAIN_NAV } from '@/data/navigation'
import PillButton from './PillButton'
import ThemeToggle from './ThemeToggle'

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-canvas/90 backdrop-blur-md dark:border-white/10 dark:bg-canvas-dark/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/" className="studio-link shrink-0">
          <span className="block text-lg font-bold tracking-tight">raimonvibe</span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
            Tech Research
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="studio-link text-sm text-ink/80 transition hover:text-ink dark:text-ink-muted/80 dark:hover:text-ink-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <PillButton href="/contact" variant="primary" className="hidden sm:inline-flex">
            Let&apos;s talk
          </PillButton>
          <button
            type="button"
            className="studio-icon-btn rounded-lg text-xl leading-none md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden>{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-ink/5 bg-canvas px-6 py-4 md:hidden dark:border-white/10 dark:bg-canvas-dark"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="studio-link block py-1 text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <PillButton href="/contact" variant="primary" className="w-full justify-center">
                Let&apos;s talk
              </PillButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
