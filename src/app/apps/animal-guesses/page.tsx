import { Metadata } from 'next'
import AppLanding from '@/components/studio/AppLanding'
import { ANIMAL_GUESSES } from '@/data/animal-guesses'

export const metadata: Metadata = {
  title: 'Animal Guesses - Raimonvibe',
  description:
    'Animal Guesses is a free, ad-free educational quiz for kids and families. Learn about animals with photos, sounds, and true/false questions on Google Play.',
  openGraph: {
    title: 'Animal Guesses - Raimonvibe',
    description: 'Free educational animal quiz for Android. No ads, no in-app purchases.',
    url: 'https://raimonvibe.eu/apps/animal-guesses',
    siteName: 'Raimonvibe',
    type: 'website',
  },
}

export default function AnimalGuessesAppPage() {
  const { name, playStoreUrl, privacyPath, animalCount, supportEmail } = ANIMAL_GUESSES

  return (
    <AppLanding
      name={name}
      description={
        <>
          <strong>{name}</strong> is an educational animal quiz for Android, built by{' '}
          <strong>RaimonVibe</strong>. Explore {animalCount} animals, listen to their sounds, look at
          photographs, and test what you know with simple <strong>true/false</strong> questions.
        </>
      }
      imageSrc="/images/projects/animal-guesses.webp"
      imageAlt="Animal Guesses app on Google Play"
      features={[
        `${animalCount} animals with high-quality photographs`,
        'Animal sounds for each creature',
        'True or false questions — easy for young learners',
        'Child-friendly interface; no account required to play',
        'No ads and no in-app purchases',
        'Teacher Approved on Google Play (Families)',
      ]}
      playStoreUrl={playStoreUrl}
      privacyPath={privacyPath}
      supportEmail={supportEmail}
      accentClass="bg-accent-lime/25"
    />
  )
}
