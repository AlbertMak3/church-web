import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'
import { Icon } from '../components/Icons.jsx'

export default function NotFound() {
  const { t, lp } = useI18n()

  return (
    <div className="wrap">
      <section className="not-found">
        <p className="eyebrow">404</p>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.body}</p>
        <div className="not-found__actions">
          <Link className="btn btn--solid" to={lp('/')}>{t.notFound.home}</Link>
          <Link className="text-link" to={lp('/times')}>
            {t.notFound.times} <Icon name="arrow" className="btn-icon" />
          </Link>
        </div>
      </section>
    </div>
  )
}
