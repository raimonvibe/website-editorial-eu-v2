import { Metadata } from 'next'
import { PageHeader, PageSection, ProseSection } from '@/components/studio'
import CompanyGrid from '@/components/studio/CompanyGrid'
import OrganicImage from '@/components/studio/OrganicImage'
import StatRow from '@/components/studio/StatRow'
import { OPPORTUNITY_COMPANIES } from '@/data/certificates'
import { STUDIO_IMAGES } from '@/data/studio-images'

export const metadata: Metadata = {
  title: 'Opportunities - Raimonvibe',
  description: 'Explore career opportunities and collaborations with Raimon.',
}

export default function Opportunities() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title={
          <>
            Professional <em className="font-serif italic font-normal text-accent-cobalt">journey</em>
          </>
        }
        description="Perspectives from connecting with companies across industries."
      />
      <PageSection>
        <OrganicImage
          src={STUDIO_IMAGES.opportunitiesJourney}
          alt="Career journey concept"
          width={1200}
          height={600}
          mask="rounded"
          sizes="100vw"
          wrapperClassName="mb-10 aspect-[21/9] w-full max-h-72"
          accentClassName="bg-accent-cobalt/20 p-2"
        />
        <StatRow
          stats={[
            { value: String(OPPORTUNITY_COMPANIES.length), label: 'Companies engaged' },
            { value: '3', label: 'Industry sectors' },
            { value: 'NL + remote', label: 'Opportunity scope' },
          ]}
        />
        <ProseSection className="mx-0 mb-6 max-w-2xl">
          <p>
            Throughout my career I have connected with organizations that value innovation, technology, and
            creative problem-solving — from e-commerce to IT consulting and talent development.
          </p>
        </ProseSection>
        <h2 className="mb-4 text-xl font-bold tracking-tight">Companies I have engaged with</h2>
        <CompanyGrid companies={OPPORTUNITY_COMPANIES} />
        <ProseSection className="mx-0 mt-10 max-w-2xl text-sm">
          <p className="italic text-muted dark:text-muted-dark">
            These listings reflect professional engagement and do not imply formal endorsement or partnership.
          </p>
        </ProseSection>
      </PageSection>
    </>
  )
}
