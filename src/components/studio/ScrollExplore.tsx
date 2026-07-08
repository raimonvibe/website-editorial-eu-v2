import { cn } from '@/lib/cn'

type ScrollExploreProps = {
  className?: string
}

export default function ScrollExplore({ className }: ScrollExploreProps) {
  return (
    <a
      href="#explore"
      className={cn(
        'group relative flex h-16 w-16 items-center justify-center rounded-full border border-ink/15 transition hover:border-ink/30 dark:border-white/20 dark:hover:border-white/40',
        className,
      )}
      aria-label="Scroll to explore"
    >
      <svg viewBox="0 0 64 64" className="h-full w-full animate-badge-spin" aria-hidden>
        <defs>
          <path id="scroll-ring" d="M 32,32 m -24,0 a 24,24 0 1,1 48,0 a 24,24 0 1,1 -48,0" />
        </defs>
        <text
          fill="currentColor"
          className="text-[7px] font-semibold uppercase tracking-[0.15em] text-muted dark:text-muted-dark"
        >
          <textPath href="#scroll-ring" startOffset="0%">
            Explore • Scroll •
          </textPath>
        </text>
      </svg>
      <span className="absolute text-sm transition group-hover:translate-y-0.5" aria-hidden>
        ↓
      </span>
    </a>
  )
}
