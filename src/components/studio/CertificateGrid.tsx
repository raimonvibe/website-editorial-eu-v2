import Image from 'next/image'
import { TextLink } from './BentoCard'
import { cn } from '@/lib/cn'

const FRAME_STYLES = [
  { bg: 'bg-accent-lavender/25', border: 'border-accent-lavender/40' },
  { bg: 'bg-accent-mustard/25', border: 'border-accent-mustard/40' },
  { bg: 'bg-accent-parchment/40', border: 'border-accent-parchment/60' },
] as const

type Certificate = {
  title: string
  description: string
  image: string
  url: string
}

type CertificateGridProps = {
  certificates: readonly Certificate[]
}

export default function CertificateGrid({ certificates }: CertificateGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {certificates.map((cert, index) => {
        const frame = FRAME_STYLES[index % FRAME_STYLES.length]
        return (
          <article
            key={cert.title}
            className={cn(
              'overflow-hidden rounded-2xl border border-ink/5 bg-white/50 dark:border-white/10 dark:bg-white/5',
              frame.border,
            )}
          >
            <div className={cn('relative aspect-[4/3]', frame.bg)}>
              <Image
                src={cert.image}
                alt={`${cert.title} certificate`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="border-t border-ink/5 p-5 dark:border-white/10">
              <h3 className="text-lg font-bold tracking-tight">{cert.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted dark:text-muted-dark">{cert.description}</p>
              <TextLink
                href={cert.url}
                external
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wider"
              >
                View course
              </TextLink>
            </div>
          </article>
        )
      })}
    </div>
  )
}
