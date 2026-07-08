import Image from 'next/image'
import { PageHeader, PageSection, ProseSection, PillButton, TextLink } from '@/components/studio'
import { cn } from '@/lib/cn'

type AppLandingProps = {
  name: string
  description: React.ReactNode
  imageSrc: string
  imageAlt: string
  features: string[]
  playStoreUrl: string
  privacyPath: string
  supportEmail: string
  accentClass?: string
}

export default function AppLanding({
  name,
  description,
  imageSrc,
  imageAlt,
  features,
  playStoreUrl,
  privacyPath,
  supportEmail,
  accentClass = 'bg-accent-lime/25',
}: AppLandingProps) {
  return (
    <>
      <PageHeader
        eyebrow="Android app"
        title={
          <>
            {name.split(' ')[0]}{' '}
            <em className="font-serif italic font-normal text-accent-orange">
              {name.split(' ').slice(1).join(' ') || name}
            </em>
          </>
        }
        description="Free, ad-free, and built for families."
      />
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className={cn('app-phone-frame rounded-3xl border border-ink/5 p-6 dark:border-white/10', accentClass)}>
            <div className="mx-auto max-w-xs overflow-hidden rounded-[2rem] border-4 border-ink/10 bg-ink shadow-xl dark:border-white/20">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={800}
                className="h-auto w-full"
                priority
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>
          </div>
          <ProseSection className="mx-0 max-w-none">
            <p>{description}</p>
            <h2>Features</h2>
            <ul className="mb-6 list-none space-y-3 pl-0 text-muted dark:text-muted-dark">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
            <h2>Get the app</h2>
            <p>
              Install <strong>{name}</strong> from Google Play on your Android phone or tablet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PillButton href={playStoreUrl} variant="orange" external>
                Get it on Google Play
              </PillButton>
              <PillButton href={privacyPath} variant="secondary">
                Privacy policy
              </PillButton>
            </div>
            <h2 className="mt-10">Support</h2>
            <p>
              Questions about the app or privacy? Email{' '}
              <a href={`mailto:${supportEmail}`} className="studio-link font-medium underline underline-offset-4">
                {supportEmail}
              </a>
              .
            </p>
            <TextLink href="/projects" className="mt-6 inline-flex">
              Back to projects
            </TextLink>
          </ProseSection>
        </div>
      </PageSection>
    </>
  )
}
