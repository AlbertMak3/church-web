import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'
import Photo from './Photo.jsx'

export default function PageHero({ title, sub, crumb, photo, note }) {
  const { t, lp } = useI18n()

  return (
    <>
      <section className="page-hero">
        {photo && (
          <Photo image={photo} className="page-hero__photo" sizes="100vw" loading="eager" fetchPriority="high" decorative />
        )}
        <div className="page-hero__veil" />
        <div className="page-hero__inner">
          <p className="page-hero__kicker">{t.brand.full}</p>
          <h1>{title}</h1>
          {sub && <p className="page-hero__sub">{sub}</p>}
        </div>
      </section>
      <div className="wrap">
        <nav className="crumbs" aria-label={t.nav.crumbsAria}>
          <Link to={lp('/')}>{t.nav.home}</Link>
          <span aria-hidden="true">{t.nav.crumbSeparator}</span>
          <span aria-current="page">{crumb || title}</span>
        </nav>
        {note && <p className="photo-note">{note}</p>}
      </div>
    </>
  )
}
