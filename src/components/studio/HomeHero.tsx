import PillButton from './PillButton'
import TextLink from './TextLink'
import OrganicImage from './OrganicImage'
import CircleBadge from './CircleBadge'
import ScrollExplore from './ScrollExplore'
import TrustBar from './TrustBar'
import { STUDIO_IMAGES } from '@/data/studio-images'

const FEATURES = [
  {
    title: 'Data & AI',
    body: 'TensorFlow pipelines and clear analytics for decisions that matter.',
    accent: 'bg-accent-lavender',
  },
  {
    title: 'Full-stack craft',
    body: 'React, Django, Node.js, and Flutter — systems built for production.',
    accent: 'bg-accent-teal',
  },
  {
    title: 'Research mindset',
    body: 'VPS hosting, scalable architecture, and tools that push boundaries.',
    accent: 'bg-accent-peach',
  },
  {
    title: 'Design & UX',
    body: 'Responsive interfaces with cross-browser polish and thoughtful UX.',
    accent: 'bg-accent-mustard',
  },
]

export default function HomeHero() {
  return (
    <>
      <section className="hero-splash mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="animate-fade-up lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
              Tech Research
            </p>
            <h1 className="mt-4 text-[clamp(2.75rem,7vw,4.75rem)] font-bold leading-[0.95] tracking-tight">
              Research with{' '}
              <em className="font-serif italic font-normal text-accent-orange">purpose.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted dark:text-muted-dark md:text-lg">
              A technical researcher building thoughtful brands, tools, and digital experiences from West
              Friesland.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PillButton href="/projects" variant="orange">
                View my work
              </PillButton>
              <TextLink href="/about">About the studio</TextLink>
            </div>
            <TrustBar />
          </div>

          <div className="relative lg:col-span-7">
            <div className="hero-mosaic relative mx-auto aspect-[4/5] max-w-lg md:max-w-none md:aspect-auto md:min-h-[32rem] lg:min-h-[36rem]">
              <OrganicImage
                src={STUDIO_IMAGES.heroWorkspace}
                alt="Minimal developer workspace"
                width={900}
                height={700}
                priority
                mask="organic"
                sizes="(max-width: 1024px) 70vw, 45vw"
                wrapperClassName="hero-mosaic-main animate-fade-up animate-fade-up-delay-1"
                accentClassName="bg-accent-peach/40 p-1.5 shadow-lg"
              />
              <OrganicImage
                src={STUDIO_IMAGES.heroAccentFlower}
                alt="Editorial floral accent"
                width={400}
                height={500}
                mask="rounded"
                sizes="(max-width: 1024px) 35vw, 20vw"
                wrapperClassName="hero-mosaic-flower animate-fade-up animate-fade-up-delay-2"
                accentClassName="bg-white p-2 shadow-2xl dark:bg-white/95"
              />
              <OrganicImage
                src={STUDIO_IMAGES.heroAccentObject}
                alt="Sculptural design object on cobalt"
                width={500}
                height={620}
                mask="asymmetric"
                sizes="(max-width: 1024px) 40vw, 22vw"
                wrapperClassName="hero-mosaic-object animate-fade-up animate-fade-up-delay-3"
                accentClassName="bg-accent-cobalt p-1.5"
              />
              <div className="hero-mosaic-badge hidden md:block">
                <CircleBadge />
              </div>
              <ScrollExplore className="hero-mosaic-scroll hidden lg:flex" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
          Technological <em className="font-serif italic font-normal text-accent-cobalt">impact</em>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className={`studio-feature-tile rounded-2xl p-6 ${feature.accent} text-ink animate-fade-up`}
              style={{ animationDelay: `${0.15 + index * 0.08}s` }}
            >
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
