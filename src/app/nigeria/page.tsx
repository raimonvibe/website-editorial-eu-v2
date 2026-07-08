import { Metadata } from 'next'
import { PageHeader, PageSection } from '@/components/studio'
import ProjectPortfolio from '@/components/studio/ProjectPortfolio'
import StatRow from '@/components/studio/StatRow'
import { NIGERIAN_PROJECTS } from '@/data/nigerian-projects'

export const metadata: Metadata = {
  title: 'Nigerian Projects - Raimonvibe',
  description: "Explore Raimon's portfolio of Nigerian-themed projects and research work.",
}

export default function Nigeria() {
  return (
    <>
      <PageHeader
        eyebrow="Nigeria"
        title={
          <>
            Built for Nigerian <em className="font-serif italic font-normal text-accent-teal">developers</em>
          </>
        }
        description="Guides, tools, and resources tailored to the local tech ecosystem."
      />
      <PageSection>
        <StatRow
          stats={[
            { value: String(NIGERIAN_PROJECTS.length), label: 'Guides & tools' },
            { value: '1', label: 'Ecosystem focus' },
            { value: 'Offline-first', label: 'Design principle' },
          ]}
        />
        <ProjectPortfolio
          variant="nigeria"
          items={NIGERIAN_PROJECTS}
          footer={
            <>
              <h2>Growing the ecosystem</h2>
              <p>
                These resources address real challenges — unreliable connectivity, payment gateways, job
                discovery, and local healthcare navigation. More guides are on the way.
              </p>
            </>
          }
        />
      </PageSection>
    </>
  )
}
