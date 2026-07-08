import { Metadata } from 'next'
import AppLanding from '@/components/studio/AppLanding'
import { MUSIC_GUESSES } from '@/data/music-guesses'

export const metadata: Metadata = {
  title: 'Music Guesses - Raimonvibe',
  description:
    'Music Guesses is a free, ad-free educational quiz for Android. Listen to instrument sounds, see pictures, and answer true/false questions.',
  openGraph: {
    title: 'Music Guesses - Raimonvibe',
    description: 'Free educational music instrument quiz for Android. No ads, no in-app purchases.',
    url: 'https://raimonvibe.eu/apps/music-guesses',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function MusicGuessesAppPage() {
  const { name, playStoreUrl, privacyPath, supportEmail } = MUSIC_GUESSES

  return (
    <AppLanding
      name={name}
      description={
        <>
          <strong>{name}</strong> is an educational music quiz for Android by{' '}
          <strong>RaimonVibe</strong>. Listen to instrument sounds, look at pictures, and test what
          you know with simple <strong>true/false</strong> questions.
        </>
      }
      imageSrc="/images/projects/music-guesses.webp"
      imageAlt="Music Guesses app on Google Play"
      features={[
        'Instrument sounds and pictures bundled with the app',
        'True or false questions — easy for young learners',
        'Child-friendly interface; no account required to play',
        'No ads and no in-app purchases',
      ]}
      playStoreUrl={playStoreUrl}
      privacyPath={privacyPath}
      supportEmail={supportEmail}
      accentClass="bg-accent-pink/25"
    />
  )
}
