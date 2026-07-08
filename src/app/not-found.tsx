import Link from 'next/link'
import PillButton from '@/components/studio/PillButton'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-7xl flex-col items-start justify-center px-6 py-20 lg:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted dark:text-muted-dark">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        Page not <em className="font-serif italic font-normal text-accent-orange">found</em>
      </h1>
      <p className="mt-4 max-w-md text-muted dark:text-muted-dark">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <PillButton href="/" variant="primary">
          Back home
        </PillButton>
        <Link href="/projects" className="studio-link text-sm font-medium underline underline-offset-4">
          View projects ↗
        </Link>
      </div>
    </section>
  )
}
