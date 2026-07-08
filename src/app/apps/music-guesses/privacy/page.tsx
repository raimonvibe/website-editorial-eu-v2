import { Metadata } from 'next'
import { PageHeader, PageSection, ProseSection, TextLink } from '@/components/studio'
import MusicGuessesPrivacyContent from '@/components/MusicGuessesPrivacyContent'
import { MUSIC_GUESSES } from '@/data/music-guesses'

export const metadata: Metadata = {
  title: 'Privacy Policy — Music Guesses - Raimonvibe',
  description:
    'Privacy policy for the Music Guesses Android app. Free, ad-free, no personal data collection for gameplay.',
  openGraph: {
    title: 'Privacy Policy — Music Guesses',
    description: 'How Music Guesses handles your information on Android.',
    url: 'https://raimonvibe.eu/apps/music-guesses/privacy',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function MusicGuessesPrivacyPage() {
  return (
    <>
      <PageHeader title={`Privacy Policy — ${MUSIC_GUESSES.name}`} />
      <PageSection>
        <ProseSection>
          <MusicGuessesPrivacyContent />
          <p className="mt-8">
            <TextLink href={MUSIC_GUESSES.sitePath}>← {MUSIC_GUESSES.name} app page</TextLink>
            {' · '}
            <TextLink href="/projects">Projects</TextLink>
          </p>
        </ProseSection>
      </PageSection>
    </>
  )
}
