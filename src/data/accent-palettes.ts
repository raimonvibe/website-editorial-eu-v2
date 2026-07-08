export type PortfolioVariant = 'projects' | 'scripture' | 'nigeria'

/** Full rotation A→H — no two adjacent tiles share a color in a 3-col grid */
export const PROJECT_ACCENTS = [
  'bg-accent-cobalt',
  'bg-accent-orange',
  'bg-accent-lavender',
  'bg-accent-lime',
  'bg-accent-peach',
  'bg-accent-teal',
  'bg-accent-mustard',
  'bg-accent-pink',
] as const

/** Calm scripture palette — parchment, sage, warm blue, soft mustard */
export const SCRIPTURE_ACCENTS = [
  'bg-accent-parchment',
  'bg-accent-sage',
  'bg-accent-warm-blue',
  'bg-accent-mustard',
  'bg-accent-peach',
  'bg-accent-lavender',
  'bg-accent-parchment',
] as const

/** Vibrant Nigeria palette — teal, orange, cobalt emphasis */
export const NIGERIA_ACCENTS = [
  'bg-accent-teal',
  'bg-accent-orange',
  'bg-accent-cobalt',
  'bg-accent-lime',
  'bg-accent-teal',
  'bg-accent-orange',
  'bg-accent-cobalt',
  'bg-accent-mustard',
  'bg-accent-teal',
] as const

export function accentForIndex(variant: PortfolioVariant, index: number): string {
  const palettes = {
    projects: PROJECT_ACCENTS,
    scripture: SCRIPTURE_ACCENTS,
    nigeria: NIGERIA_ACCENTS,
  }
  const palette = palettes[variant]
  return palette[index % palette.length]
}
