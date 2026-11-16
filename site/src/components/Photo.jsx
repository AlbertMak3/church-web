import { useI18n } from '../i18n/index.jsx'

export default function Photo({
  image,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority,
  decorative = false
}) {
  const { tr } = useI18n()

  return (
    <img
      className={className}
      style={image.focus ? { objectPosition: image.focus } : undefined}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={decorative ? '' : tr(image.alt)}
      aria-hidden={decorative ? 'true' : undefined}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      data-source={image.source || 'moodboard'}
      data-subject={image.subject || 'church-space'}
    />
  )
}
