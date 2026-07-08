import { Metadata } from 'next'
import { PageHeader, PageSection, PillButton } from '@/components/studio'

export const metadata: Metadata = {
  title: 'Resume - Raimonvibe',
  description: "View Raimon's professional resume and download his CV.",
}

export default function Resume() {
  return (
    <>
      <PageHeader
        eyebrow="CV"
        title={
          <>
            Professional <em className="font-serif italic font-normal text-accent-cobalt">resume</em>
          </>
        }
        description="Background, experience, and skills."
      />
      <PageSection>
        <div className="mb-6 flex flex-wrap gap-3">
          <PillButton href="/images/resume.pdf" variant="primary" external>
            Download PDF
          </PillButton>
          <PillButton href="/contact" variant="secondary">
            Get in touch
          </PillButton>
        </div>
        <div className="overflow-hidden rounded-2xl border border-ink/5 bg-white/30 shadow-sm dark:border-white/10 dark:bg-white/5">
          <iframe
            src="/images/resume.pdf"
            title="Resume PDF"
            className="h-[70vh] min-h-[480px] w-full"
            loading="lazy"
            aria-label="Raimonvibe Resume PDF"
          />
        </div>
        <aside className="studio-cta-card mt-12 max-w-2xl rounded-2xl border border-ink/5 bg-white/40 p-8 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-bold">
            Interested in <em className="font-serif italic font-normal text-accent-orange">collaborating</em>?
          </h2>
          <p className="mt-3 text-muted dark:text-muted-dark">We would love to hear from you.</p>
          <PillButton href="/contact" variant="primary" className="mt-5">
            Contact me
          </PillButton>
        </aside>
      </PageSection>
    </>
  )
}
