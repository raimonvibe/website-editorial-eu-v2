'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/cn'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggle = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        'studio-icon-btn rounded-full border border-ink/10',
        'text-sm transition hover:border-ink/25 dark:border-white/15 dark:hover:border-white/30',
      )}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {resolvedTheme === 'dark' ? '☀' : '☾'}
    </button>
  )
}
