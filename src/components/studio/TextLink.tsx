import Link from 'next/link'
import { cn } from '@/lib/cn'

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export default function TextLink({ href, children, className, external }: TextLinkProps) {
  const classes = cn(
    'studio-link studio-touch-target-row gap-1.5 text-sm font-medium text-ink underline underline-offset-4 decoration-ink/40 dark:text-ink-muted dark:decoration-white/40',
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
