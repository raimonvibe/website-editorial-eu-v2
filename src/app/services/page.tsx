import { Metadata } from 'next'
import { PageHeader, PageSection } from '@/components/studio'
import ServiceBlock from '@/components/studio/ServiceBlock'
import { STUDIO_IMAGES } from '@/data/studio-images'

export const metadata: Metadata = {
  title: 'Services - Raimonvibe',
  description:
    "Discover Raimon's services including blog writing on Medium and YouTube content creation about technology and 3D printing.",
}

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Writing, video &amp;{' '}
            <em className="font-serif italic font-normal text-accent-orange">websites</em>
          </>
        }
        description="Content and web development for teams that want to grow online."
      />
      <PageSection className="space-y-8">
        <ServiceBlock
          title="Blogs about my studies"
          description="On Medium, I share in-depth articles about coding bootcamps, project examples, 3D printing, and my design process."
          href="https://medium.com/@raimonvibe"
          linkLabel="Read on Medium"
          image={STUDIO_IMAGES.servicesMedium}
          imageAlt="Writing notebook and coffee"
          borderAccent="border-l-accent-mustard"
          imageAccent="bg-accent-mustard/15"
        />
        <ServiceBlock
          title="YouTube creator"
          description="Instructional videos on 3D models, AI technology, and the technical side of starting an online business."
          href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos"
          linkLabel="Watch on YouTube"
          image={STUDIO_IMAGES.servicesYoutube}
          imageAlt="Video creator setup"
          borderAccent="border-l-accent-orange"
          imageAccent="bg-accent-orange/15"
          imagePosition="right"
          mask="organic-alt"
        />
        <ServiceBlock
          title="Websites for businesses"
          description="Efficient, scalable, mobile-ready sites for businesses that want to share services, location, and contact details online."
          href="https://www.raimonvibe.com/"
          linkLabel="Visit raimonvibe.com"
          image={STUDIO_IMAGES.servicesWebsites}
          imageAlt="Responsive website mockup"
          borderAccent="border-l-accent-teal"
          imageAccent="bg-accent-teal/15"
        />
      </PageSection>
    </>
  )
}
