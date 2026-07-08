import { Metadata } from 'next'
import { PageHeader, PageSection } from '@/components/studio'
import ProjectPortfolio from '@/components/studio/ProjectPortfolio'
import { PROJECTS } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects - Raimonvibe',
  description: "Explore Raimon's portfolio of technical projects and research work.",
}

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Selected <em className="font-serif italic font-normal text-accent-cobalt">projects</em>
          </>
        }
        description="Experiments, tools, and research builds — always learning, always shipping."
      />
      <PageSection>
        <p className="mb-8 max-w-2xl text-sm text-muted dark:text-muted-dark">
          {PROJECTS.length} builds spanning physics simulators, scripture readers, mobile apps, and web tools.
        </p>
        <ProjectPortfolio
          variant="projects"
          items={PROJECTS}
          footer={
            <>
              <h2>Keep exploring</h2>
              <p>
                Each project reflects a step in the journey — from classroom tools to production apps. More
                experiments are always in progress.
              </p>
            </>
          }
        />
      </PageSection>
    </>
  )
}
