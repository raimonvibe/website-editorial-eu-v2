import { Metadata } from 'next'
import { PageHeader, PageSection } from '@/components/studio'
import ProjectPortfolio from '@/components/studio/ProjectPortfolio'
import { PROJECTS } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects - Raimonvibe',
  description: 'Explore featured projects from Raimonvibe.',
}

export default function SidebarProjectsPage() {
  return (
    <>
      <PageHeader title="Featured projects" description="A selection of recent work and experiments." />
      <PageSection>
        <ProjectPortfolio items={PROJECTS.slice(0, 6)} />
      </PageSection>
    </>
  )
}
