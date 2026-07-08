import { BentoGrid, type BentoCardItem, type BentoCardVariant } from './BentoCard'
import { accentForIndex, type PortfolioVariant } from '@/data/accent-palettes'

export type PortfolioItem = {
  id: string
  title: string
  description: string
  url: string
  image: string
  alt: string
  buttonText: string
  siteUrl?: string
  siteButtonText?: string
}

type ProjectPortfolioProps = {
  items: PortfolioItem[]
  variant?: PortfolioVariant
  footer?: React.ReactNode
}

const CTA_LABELS: Record<PortfolioVariant, string> = {
  projects: 'View project',
  scripture: 'Start reading',
  nigeria: 'Open guide',
}

function toCardVariant(variant: PortfolioVariant): BentoCardVariant {
  if (variant === 'scripture') return 'scripture'
  if (variant === 'nigeria') return 'nigeria'
  return 'project'
}

export default function ProjectPortfolio({
  items,
  variant = 'projects',
  footer,
}: ProjectPortfolioProps) {
  const cards: BentoCardItem[] = items.map((item, index) => ({
    href: item.url,
    title: item.title,
    description: item.description,
    image: item.image,
    imageAlt: item.alt,
    accent: accentForIndex(variant, index),
    external: !item.url.startsWith('/'),
    ctaLabel: item.buttonText || CTA_LABELS[variant],
    secondaryHref: item.siteUrl,
    secondaryLabel: item.siteButtonText,
  }))

  return (
    <div>
      <BentoGrid items={cards} variant={toCardVariant(variant)} />
      {footer && <div className="studio-prose mt-14 max-w-3xl">{footer}</div>}
    </div>
  )
}
