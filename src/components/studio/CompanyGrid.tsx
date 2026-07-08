type CompanyGridProps = {
  companies: readonly { name: string; url: string }[]
}

export default function CompanyGrid({ companies }: CompanyGridProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <li key={company.url}>
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="studio-link flex items-center justify-between rounded-xl border border-ink/5 bg-white/40 px-4 py-3.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <span>{company.name}</span>
            <span className="text-muted dark:text-muted-dark" aria-hidden>
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
