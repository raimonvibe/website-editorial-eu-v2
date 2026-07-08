import { Metadata } from 'next'
import { PageHeader, PageSection, ProseSection, PillButton } from '@/components/studio'
import OrganicImage from '@/components/studio/OrganicImage'
import { STUDIO_IMAGES } from '@/data/studio-images'

export const metadata: Metadata = {
  title: 'About me - Raimonvibe',
  description:
    'Learn about Raimon, a freelance web designer and developer from West Friesland. Discover his journey combining technology with creativity.',
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Hello, I am{' '}
            <em className="font-serif italic font-normal text-accent-orange">Raimon</em>
          </>
        }
        description="Technology and creativity, woven into work that pushes what's possible."
      />
      <PageSection>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ProseSection className="mx-0 max-w-none">
            <p>
              I combine technology with creativity — building designs and tools that push what&apos;s possible.
              A positive mindset helps me realize my potential, unhindered by the expectations of others.
            </p>
            <p>
              Challenges haven&apos;t hindered my growth. I believe everyone, despite obstacles, can achieve
              their dreams with determination and support.
            </p>
            <p>
              Based in West Friesland, I work as a freelance web designer and developer across research,
              full-stack builds, and editorial digital experiences.
            </p>
          </ProseSection>
          <OrganicImage
            src={STUDIO_IMAGES.aboutPortrait}
            alt="Creative professional portrait with organic mask on cobalt background"
            width={900}
            height={600}
            mask="organic"
            sizes="(max-width: 1024px) 100vw, 50vw"
            wrapperClassName="aspect-[3/2] w-full lg:max-w-xl lg:justify-self-end"
            accentClassName="bg-accent-cobalt/25 p-2 shadow-lg"
          />
        </div>

        <aside className="studio-cta-card mt-16 max-w-3xl rounded-2xl border border-ink/5 bg-white/50 p-8 dark:border-white/10 dark:bg-white/5 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight">
            If you have <em className="font-serif italic font-normal text-accent-orange">ideas</em>
          </h2>
          <p className="mt-4 max-w-xl text-muted dark:text-muted-dark">
            I value client feedback — listening builds sustainable connections and better work.
          </p>
          <p className="mt-2 font-medium text-ink dark:text-ink-muted">
            &ldquo;We would love to hear from you.&rdquo;
          </p>
          <PillButton href="/contact" variant="primary" className="mt-6">
            Contact me
          </PillButton>
        </aside>
      </PageSection>
    </>
  )
}
