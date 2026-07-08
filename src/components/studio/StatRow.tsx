type StatRowProps = {
  stats: { value: string; label: string }[]
}

export default function StatRow({ stats }: StatRowProps) {
  return (
    <div
      className="mb-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-ink/10 py-7 dark:border-white/10"
      aria-label="Highlights"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-bold tracking-tight md:text-3xl">{stat.value}</p>
          <p className="mt-1 text-sm text-muted dark:text-muted-dark">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
