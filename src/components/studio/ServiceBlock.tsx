import OrganicImage from './OrganicImage'
import { ProseSection, TextLink } from './BentoCard'
import { cn } from '@/lib/cn'

type ServiceBlockProps = {
  title: string
  description: string
  href: string
  linkLabel: string
  image: string
  imageAlt: string
  borderAccent: string
  imageAccent?: string
  imagePosition?: 'left' | 'right'
  mask?: 'organic' | 'organic-alt' | 'rounded'
}

export default function ServiceBlock({
  title,
  description,
  href,
  linkLabel,
  image,
  imageAlt,
  borderAccent,
  imageAccent,
  imagePosition = 'left',
  mask = 'rounded',
}: ServiceBlockProps) {
  const imageCol = (
    <OrganicImage
      src={image}
      alt={imageAlt}
      width={900}
      height={600}
      mask={mask}
      sizes="(max-width: 1024px) 100vw, 50vw"
      wrapperClassName="aspect-[3/2] w-full"
      accentClassName={cn('p-2', imageAccent)}
    />
  )

  const textCol = (
    <ProseSection className="mx-0 max-w-none">
      <h2>{title}</h2>
      <p>{description}</p>
      <TextLink href={href} external className="mt-2 inline-flex">
        {linkLabel}
      </TextLink>
    </ProseSection>
  )

  return (
    <article
      className={cn(
        'studio-service-block grid items-center gap-8 rounded-2xl border border-ink/5 border-l-4 bg-white/30 p-6 dark:border-white/10 dark:bg-white/5 md:p-8 lg:grid-cols-2 lg:gap-12',
        borderAccent,
      )}
    >
      {imagePosition === 'left' ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{textCol}</div>
          <div className="order-1 lg:order-2">{imageCol}</div>
        </>
      )}
    </article>
  )
}
