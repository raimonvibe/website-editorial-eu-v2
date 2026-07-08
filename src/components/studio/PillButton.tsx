import Link from 'next/link'
import { cn } from '@/lib/cn'

type PillButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'orange'
  className?: string
  external?: boolean
}

export default function PillButton({
  href,
  children,
  variant = 'primary',
  className,
  external,
}: PillButtonProps) {
  const classes = cn(
    'studio-link inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-sm font-medium transition-opacity hover:opacity-85',
    variant === 'primary' && 'bg-ink text-canvas dark:bg-ink-muted dark:text-canvas-dark',
    variant === 'orange' && 'bg-accent-orange text-ink',
    variant === 'secondary' && 'border border-ink/15 bg-transparent dark:border-white/20',
    className,
  )

  if (external || href.startsWith('http')) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <span aria-hidden>↗</span>
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <span aria-hidden>↗</span>
    </Link>
  )
}
