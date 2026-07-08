export default function CircleBadge() {
  return (
    <div
      className="relative flex h-24 w-24 items-center justify-center rounded-full bg-accent-lime text-[9px] font-semibold uppercase tracking-wider text-ink shadow-lg"
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-badge-spin">
        <defs>
          <path id="badge-circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
        </defs>
        <text fill="currentColor" fontSize="8.5" letterSpacing="2">
          <textPath href="#badge-circle" startOffset="0%">
            RESEARCH • CODE • DESIGN •
          </textPath>
        </text>
      </svg>
      <span className="relative text-lg">↗</span>
    </div>
  )
}
