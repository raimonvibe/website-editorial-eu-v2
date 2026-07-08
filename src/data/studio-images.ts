/**
 * Central image paths — filenames match IMAGE-BRIEF-FOR-DESIGNER.md exactly.
 * Drop final WebP assets into public/images/{brand,editorial,nav,...} to replace placeholders.
 */
export const STUDIO_IMAGES = {
  heroWorkspace: '/images/editorial/hero-workspace.webp',
  heroAccentFlower: '/images/editorial/hero-accent-flower.webp',
  heroAccentObject: '/images/editorial/hero-accent-object.webp',
  aboutPortrait: '/images/editorial/about-portrait.webp',
  servicesMedium: '/images/editorial/services-medium.webp',
  servicesYoutube: '/images/editorial/services-youtube.webp',
  servicesWebsites: '/images/editorial/services-websites.webp',
  contactIdeas: '/images/editorial/contact-ideas.webp',
  clientsCollabs: '/images/editorial/clients-collabs.webp',
  clientsTechbullion: '/images/editorial/clients-techbullion.webp',
  opportunitiesJourney: '/images/editorial/opportunities-journey.webp',
  ogCover: '/images/brand/og-cover.webp',
  nav: {
    about: '/images/nav/about.webp',
    certificates: '/images/nav/certificates.webp',
    clients: '/images/nav/clients.webp',
    opportunities: '/images/nav/opportunities.webp',
    projects: '/images/nav/projects.webp',
    models: '/images/nav/models.webp',
  },
} as const
