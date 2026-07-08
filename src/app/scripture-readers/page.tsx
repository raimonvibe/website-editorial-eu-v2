import { Metadata } from 'next'
import { PageHeader, PageSection } from '@/components/studio'
import ProjectPortfolio from '@/components/studio/ProjectPortfolio'
import { SCRIPTURE_READERS } from '@/data/scripture-readers'

export const metadata: Metadata = {
  title: 'Scripture Readers - Raimonvibe',
  description:
    'Online scripture readers for the Tanach, Holy Bible, Bible Stories for Children, Book of Mormon, Apocrypha, and Lost Scriptures.',
}

export default function ScriptureReaders() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title={
          <>
            Scripture <em className="font-serif italic font-normal text-accent-sage">readers</em>
          </>
        }
        description="Sacred texts with search, chapter navigation, and a calm reading experience."
      />
      <PageSection className="scripture-section">
        <p className="mb-8 max-w-2xl text-sm text-muted dark:text-muted-dark">
          Respectful editorial design — warm palettes, readable typography, and tools for study and reflection.
        </p>
        <ProjectPortfolio variant="scripture" items={SCRIPTURE_READERS} />
      </PageSection>
    </>
  )
}
