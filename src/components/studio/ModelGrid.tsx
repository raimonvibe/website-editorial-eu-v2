import Image from 'next/image'
import { cn } from '@/lib/cn'

const MODEL_ACCENTS = [
  'bg-accent-peach',
  'bg-accent-lavender',
  'bg-accent-cobalt',
  'bg-accent-canvas',
  'bg-accent-pink',
  'bg-accent-peach',
  'bg-accent-lavender',
  'bg-accent-cobalt',
  'bg-accent-mustard',
  'bg-accent-canvas',
  'bg-accent-teal',
  'bg-accent-orange',
  'bg-accent-pink',
] as const

type ModelItem = {
  id: string
  title: string
  description: string
  url: string
  image: string
  cta: string
}

type ModelGridProps = {
  models: readonly ModelItem[]
  className?: string
}

export default function ModelGrid({ models, className }: ModelGridProps) {
  return (
    <div className={cn('grid gap-5 sm:grid-cols-2 xl:grid-cols-3', className)}>
      {models.map((model, index) => {
        const accent = MODEL_ACCENTS[index % MODEL_ACCENTS.length]
        return (
          <a
            key={model.id}
            href={model.url}
            target="_blank"
            rel="noopener noreferrer"
            className="studio-link group block h-full"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white/40 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
              <div className={cn('relative aspect-square', accent)}>
                <Image
                  src={model.image}
                  alt={`3D model render of ${model.title}`}
                  fill
                  className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold tracking-tight">{model.title}</h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted dark:text-muted-dark">
                  {model.description}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wider underline underline-offset-4">
                  {model.cta} ↗
                </span>
              </div>
            </article>
          </a>
        )
      })}
    </div>
  )
}
