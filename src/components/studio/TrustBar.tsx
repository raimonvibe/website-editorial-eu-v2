import { TRUST_TECH } from '@/data/navigation'

export default function TrustBar() {
  return (
    <div className="mt-14 border-t border-ink/10 pt-8 dark:border-white/10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted dark:text-muted-dark">
        Trusted stack
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/70 dark:text-ink-muted/70">
        {TRUST_TECH.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}
