import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/cn'

type MaskVariant = 'organic' | 'organic-alt' | 'asymmetric' | 'rounded' | 'none'

type OrganicImageProps = Omit<ImageProps, 'className'> & {
  mask?: MaskVariant
  className?: string
  wrapperClassName?: string
  accentClassName?: string
}

const maskClasses: Record<MaskVariant, string> = {
  organic: 'clip-organic',
  'organic-alt': 'clip-organic-alt',
  asymmetric: 'clip-asymmetric overflow-hidden',
  rounded: 'rounded-2xl overflow-hidden',
  none: 'overflow-hidden',
}

export default function OrganicImage({
  mask = 'rounded',
  className,
  wrapperClassName,
  accentClassName,
  alt,
  ...props
}: OrganicImageProps) {
  return (
    <div className={cn('relative', accentClassName, wrapperClassName)}>
      <div className={cn('relative h-full w-full', maskClasses[mask])}>
        <Image
          alt={alt}
          className={cn('h-full w-full object-cover transition duration-700 hover:scale-[1.02]', className)}
          {...props}
        />
      </div>
    </div>
  )
}
