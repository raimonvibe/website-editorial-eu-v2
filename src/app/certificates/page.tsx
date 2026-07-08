import { Metadata } from 'next'
import { PageHeader, PageSection, ProseSection } from '@/components/studio'
import CertificateGrid from '@/components/studio/CertificateGrid'
import { CERTIFICATES } from '@/data/certificates'

export const metadata: Metadata = {
  title: 'Certificates - Raimonvibe',
  description:
    'View my professional certificates and qualifications in programming, web development, and more.',
}

export default function Certificates() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title={
          <>
            Certificates &amp;{' '}
            <em className="font-serif italic font-normal text-accent-mustard">credentials</em>
          </>
        }
        description="Continuous learning across programming, web development, and professional skills."
      />
      <PageSection>
        <ProseSection className="mb-10 max-w-2xl">
          <p>
            Real course certificates — framed here, not recreated. Each represents knowledge gained through
            comprehensive study in programming and related fields.
          </p>
        </ProseSection>
        <CertificateGrid certificates={CERTIFICATES} />
      </PageSection>
    </>
  )
}
