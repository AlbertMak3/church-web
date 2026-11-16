import { Link } from 'react-router-dom'
import { quickLinks, photos } from '../content.js'
import { useI18n, Rich } from '../i18n/index.jsx'
import Photo from '../components/Photo.jsx'
import ServiceList from '../components/ServiceList.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Home() {
  const { locale, t, lp, tr } = useI18n()

  return (
    <>
      <section className="hero">
        <Photo
          image={photos.crossWall}
          className="hero__photo"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          decorative
        />
        <div className="hero__veil" />
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker"><span aria-hidden="true" />{t.brand.full}</p>
            <h1 className={`hero__slogan hero__slogan--${locale}`}>{t.home.slogan}</h1>
            <p className="hero__tagline">{t.home.tagline}</p>
            <p className="hero__name-en" lang={locale === 'en' ? 'zh-Hant' : 'en'}>{t.home.secondLine}</p>
            <Link className="hero__cta" to={lp('/about')}>
              {t.home.cta} <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <nav className="quick" aria-label={t.home.quickAria}>
          {quickLinks.map(q => (
            <Link key={q.to} to={lp(q.to)}>
              <span className="quick__icon-wrap"><Icon name={q.icon} className="quick__icon" /></span>
              <span className="quick__copy">
                <span className="quick__title">{tr(q.title)}</span>
                <span className="quick__sub">{tr(q.sub)}</span>
              </span>
            </Link>
          ))}
        </nav>

        <section className="section home-schedule">
          <header className="section-heading">
            <p className="eyebrow">{t.home.scheduleEyebrow}</p>
            <h2>{t.home.scheduleHeading}</h2>
            <p className="section-lead">{t.home.scheduleLead}</p>
          </header>

          <div className="schedule-layout">
            <div className="schedule-side">
              <p className="schedule-day">{t.home.scheduleDay}</p>
              <p className="schedule-time">
                {t.home.scheduleDayMeta}<br /><strong>{t.home.scheduleTimeStrong}</strong>
              </p>
              <Link className="text-link" to={lp('/times')}>
                {t.home.viewAll} <Icon name="arrow" className="btn-icon" />
              </Link>
            </div>
            <ServiceList />
          </div>
        </section>

        <section className="section split-feature">
          <div className="split-feature__copy">
            <p className="eyebrow">{t.home.firstVisitEyebrow}</p>
            <h2>{t.home.firstVisitHeading}</h2>
            <p>
              <Rich
                text={t.home.firstVisitBody}
                slots={{ contactLink: <Link to={lp('/contact')}>{t.nav.items[4].label}</Link> }}
              />
            </p>
            <Link className="btn btn--solid" to={lp('/contact')}>
              {t.home.firstVisitCta} <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
          <figure className="photo-frame">
            <Photo image={photos.greeneryLight} sizes="(max-width: 800px) 100vw, 52vw" />
          </figure>
        </section>

        <aside className="notestrip">
          <Icon name="info" />
          <p>
            <Rich
              text={t.home.noteBody}
              slots={{ facilitiesLink: <Link to={lp('/facilities')}>{t.nav.items[3].label}</Link> }}
            />
          </p>
        </aside>
      </div>
    </>
  )
}
