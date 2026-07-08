import { Metadata } from 'next'
import { PageHeader, PageSection, ProseSection, TextLink } from '@/components/studio'
import AnimalGuessesPrivacyContent from '@/components/AnimalGuessesPrivacyContent'
import { ANIMAL_GUESSES } from '@/data/animal-guesses'

export const metadata: Metadata = {
  title: 'Privacy Policy — Animal Guesses - Raimonvibe',
  description:
    'Privacy policy for the Animal Guesses Android app. Free, ad-free, no personal data collection for gameplay.',
  openGraph: {
    title: 'Privacy Policy — Animal Guesses',
    description: 'How Animal Guesses handles your information on Android.',
    url: 'https://raimonvibe.eu/apps/animal-guesses/privacy',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function AnimalGuessesPrivacyPage() {
  return (
    <>
      <PageHeader title={`Privacy Policy — ${ANIMAL_GUESSES.name}`} />
      <PageSection>
        <ProseSection>
          <AnimalGuessesPrivacyContent />
          <p className="mt-8">
            <TextLink href={ANIMAL_GUESSES.sitePath}>← {ANIMAL_GUESSES.name} app page</TextLink>
            {' · '}
            <TextLink href="/projects">Projects</TextLink>
          </p>
        </ProseSection>
      </PageSection>
    </>
  )
}
