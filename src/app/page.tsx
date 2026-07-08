import { Metadata } from 'next'
import HomeHero from '@/components/studio/HomeHero'
import { BentoGrid, PageSection, SectionHeading, type BentoCardItem } from '@/components/studio/BentoCard'
import { STUDIO_IMAGES } from '@/data/studio-images'

export const metadata: Metadata = {
  title: 'Home - Raimonvibe',
  description:
    'Welcome to Raimonvibe - Technical research, thoughtful builds, and digital experiences from West Friesland.',
}

const NAV_SECTIONS: BentoCardItem[] = [
  {
    href: '/about',
    title: 'About',
    description: 'The story behind the studio and the research mindset.',
    image: STUDIO_IMAGES.nav.about,
    imageAlt: 'About section preview',
    accent: 'bg-accent-lavender',
  },
  {
    href: '/certificates',
    title: 'Certificates',
    description: 'Courses, credentials, and continuous learning.',
    image: STUDIO_IMAGES.nav.certificates,
    imageAlt: 'Certificates section preview',
    accent: 'bg-accent-mustard',
  },
  {
    href: '/clients',
    title: 'Clients',
    description: 'Collaborations, interviews, and published work.',
    image: STUDIO_IMAGES.nav.clients,
    imageAlt: 'Clients section preview',
    accent: 'bg-accent-teal',
  },
  {
    href: '/opportunities',
    title: 'Opportunities',
    description: 'Companies and communities along the journey.',
    image: STUDIO_IMAGES.nav.opportunities,
    imageAlt: 'Opportunities section preview',
    accent: 'bg-accent-orange',
  },
  {
    href: '/projects',
    title: 'Projects',
    description: 'Apps, tools, and experiments worth exploring.',
    image: STUDIO_IMAGES.nav.projects,
    imageAlt: 'Projects section preview',
    accent: 'bg-accent-cobalt',
  },
  {
    href: '/models',
    title: '3D library',
    description: 'Printable models and maker-studio creations.',
    image: STUDIO_IMAGES.nav.models,
    imageAlt: '3D models section preview',
    accent: 'bg-accent-pink',
  },
]

export default function Home() {
  return (
    <>
      <HomeHero />
      <PageSection id="explore">
        <SectionHeading>
          Explore the <em className="font-serif italic font-normal text-accent-cobalt">studio</em>
        </SectionHeading>
        <BentoGrid items={NAV_SECTIONS} columns={3} />
      </PageSection>
    </>
  )
}
