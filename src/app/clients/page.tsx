import { Metadata } from 'next'
import { PageHeader, PageSection } from '@/components/studio'
import { BentoGrid, type BentoCardItem } from '@/components/studio/BentoCard'
import { STUDIO_IMAGES } from '@/data/studio-images'

export const metadata: Metadata = {
  title: 'Clients - Raimonvibe',
  description: "Learn about Raimon's client work and testimonials from satisfied customers.",
}

const CLIENT_FEATURES: BentoCardItem[] = [
  {
    href: 'https://www.collabs.io/mag/raimonvibe/',
    title: 'Interviewed by Collabs',
    description: 'Featured in Collabs magazine — my story on building with technology and creativity.',
    image: STUDIO_IMAGES.clientsCollabs,
    imageAlt: 'Collabs magazine editorial',
    accent: 'bg-accent-peach',
    external: true,
    ctaLabel: 'Read interview',
  },
  {
    href: 'https://techbullion.com/is-software-development-a-dead-end-job-after-age-35/',
    title: 'Fintech Magazine TechBullion',
    description: 'Insights on software development careers — published by TechBullion.',
    image: STUDIO_IMAGES.clientsTechbullion,
    imageAlt: 'TechBullion fintech editorial',
    accent: 'bg-accent-mustard',
    external: true,
    ctaLabel: 'Read article',
  },
]

export default function Clients() {
  return (
    <>
      <PageHeader
        eyebrow="Press"
        title={
          <>
            Clients &amp; <em className="font-serif italic font-normal text-accent-peach">features</em>
          </>
        }
        description="Magazine interviews and published collaborations."
      />
      <PageSection>
        <BentoGrid items={CLIENT_FEATURES} columns={2} />
      </PageSection>
    </>
  )
}
