import { Metadata } from 'next'
import { PageHeader, PageSection } from '@/components/studio'
import ModelGrid from '@/components/studio/ModelGrid'
import OrganicImage from '@/components/studio/OrganicImage'
import PillButton from '@/components/studio/PillButton'
import { MODELS } from '@/data/models'

export const metadata: Metadata = {
  title: '3D Models - Raimonvibe',
  description:
    'Explore our collection of unique 3D models including jewelry, keychains, decorative items, and more.',
}

const [FEATURED, ...REST] = MODELS

export default function Models() {
  return (
    <>
      <PageHeader
        eyebrow="Maker studio"
        title={
          <>
            3D <em className="font-serif italic font-normal text-accent-pink">models</em>
          </>
        }
        description="Jewelry, keychains, and decorative prints — free downloads and premium designs on Cults3D."
      />
      <PageSection>
        <div className="mb-12 grid items-center gap-8 rounded-2xl border border-ink/5 bg-white/30 p-6 dark:border-white/10 dark:bg-white/5 lg:grid-cols-2 lg:gap-12 lg:p-8">
          <OrganicImage
            src={FEATURED.image}
            alt={`3D model render of ${FEATURED.title}`}
            width={1000}
            height={1000}
            mask="organic-alt"
            sizes="(max-width: 1024px) 100vw, 50vw"
            wrapperClassName="aspect-square w-full max-w-md"
            accentClassName="bg-accent-peach/40 p-3"
            className="object-contain p-8"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
              Featured print
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{FEATURED.title}</h2>
            <p className="mt-4 max-w-md text-muted dark:text-muted-dark">{FEATURED.description}</p>
            <PillButton href={FEATURED.url} variant="orange" external className="mt-6">
              {FEATURED.cta}
            </PillButton>
          </div>
        </div>
        <ModelGrid models={REST} />
      </PageSection>
    </>
  )
}
