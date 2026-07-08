import Link from 'next/link'
import Image from 'next/image'
import TextLink from './TextLink'
import { cn } from '@/lib/cn'

export type BentoCardItem = {
  href: string
  title: string
  description: string
  image: string
  imageAlt?: string
  accent?: string
  external?: boolean
  ctaLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export type BentoCardVariant = 'default' | 'project' | 'scripture' | 'nigeria'

type BentoCardProps = {
  item: BentoCardItem
  variant?: BentoCardVariant
  className?: string
}

function CardCta({
  href,
  external,
  label,
  className,
}: {
  href: string
  external: boolean
  label: string
  className: string
}) {
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {label} ↗
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {label} ↗
    </Link>
  )
}

export default function BentoCard({ item, variant = 'default', className }: BentoCardProps) {
  const isScripture = variant === 'scripture'
  const cta = item.ctaLabel ?? 'View'
  const external = item.external || item.href.startsWith('http')
  const hasSecondary = Boolean(item.secondaryHref && item.secondaryLabel)

  const ctaClass = cn(
    'studio-link bento-card-cta text-xs font-semibold uppercase tracking-wider underline underline-offset-4 hover:opacity-80',
  )

  const article = (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white/40 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5',
        variant === 'project' && 'bento-card-project',
        isScripture && 'bento-card-scripture',
        variant === 'nigeria' && 'bento-card-nigeria',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden',
          isScripture ? 'bento-card-image p-2' : 'aspect-[4/3]',
          !isScripture && item.accent,
        )}
      >
        <div className={cn('relative h-full w-full', isScripture && 'aspect-[4/3] rounded-xl', item.accent)}>
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className={cn(
              'object-cover transition duration-500 group-hover:scale-[1.03]',
              isScripture && 'rounded-xl',
            )}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted dark:text-muted-dark">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {hasSecondary ? (
            <CardCta href={item.href} external={external} label={cta} className={ctaClass} />
          ) : (
            <span className={ctaClass}>{cta} ↗</span>
          )}
          {hasSecondary && item.secondaryHref && item.secondaryLabel && (
            <Link
              href={item.secondaryHref}
              className="studio-link text-xs text-muted underline underline-offset-4 hover:text-ink dark:text-muted-dark dark:hover:text-ink-muted"
            >
              {item.secondaryLabel} →
            </Link>
          )}
        </div>
      </div>
    </article>
  )

  if (hasSecondary) {
    return <div className="h-full">{article}</div>
  }

  if (external) {
    return (
      <a href={item.href} className="studio-link block h-full" target="_blank" rel="noopener noreferrer">
        {article}
      </a>
    )
  }

  return (
    <Link href={item.href} className="studio-link block h-full">
      {article}
    </Link>
  )
}

type BentoGridProps = {
  items: BentoCardItem[]
  columns?: 2 | 3
  variant?: BentoCardVariant
}

export function BentoGrid({ items, columns = 3, variant = 'default' }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid gap-5',
        columns === 3 && 'md:grid-cols-2 xl:grid-cols-3',
        columns === 2 && 'md:grid-cols-2',
      )}
    >
      {items.map((item) => (
        <BentoCard key={item.href + item.title} item={item} variant={variant} />
      ))}
    </div>
  )
}

type PageHeaderProps = {
  title: React.ReactNode
  description?: string
  eyebrow?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, eyebrow, children }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-7xl px-6 pb-10 pt-12 lg:px-10 lg:pt-16">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
        {eyebrow ?? 'raimonvibe'}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-muted dark:text-muted-dark md:text-lg">{description}</p>
      )}
      {children}
    </header>
  )
}

export function PageSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('mx-auto max-w-7xl px-6 pb-16 lg:px-10', className)}>
      {children}
    </section>
  )
}

export function ProseSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('studio-prose mx-auto max-w-3xl text-base', className)}>
      {children}
    </div>
  )
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">{children}</h2>
}

export { TextLink }
