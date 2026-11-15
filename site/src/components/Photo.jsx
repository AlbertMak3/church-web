export default function Photo({
  image,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority,
  decorative = false
}) {
  return (
    <img
      className={className}
      style={image.focus ? { objectPosition: image.focus } : undefined}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={decorative ? '' : image.alt}
      aria-hidden={decorative ? 'true' : undefined}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      data-source="moodboard"
      data-subject="church-space"
    />
  )
}
