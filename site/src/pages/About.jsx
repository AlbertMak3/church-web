import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/index.jsx'
import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import { Icon } from '../components/Icons.jsx'
import { church, photos } from '../content.js'

export default function About() {
  const { t, lp } = useI18n()

  return (
    <>
      <PageHero
        title={t.about.title}
        sub={t.about.sub}
        photo={photos.exterior}
        note={t.about.note}
      />

      <div className="wrap">
        <section className="section intro-split">
          <div className="intro-split__copy">
            <p className="eyebrow">{t.about.introEyebrow}</p>
            <h2>{t.brand.full}</h2>
            <p className="lead">{t.about.introLead}</p>
            <Link className="btn btn--solid" to={lp('/contact')}>
              {t.about.introCta} <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
          <figure className="photo-frame photo-frame--wide">
            <Photo image={photos.nameplate} sizes="(max-width: 920px) 92vw, 46vw" />
          </figure>
        </section>

        <section className="section">
          <header className="section-heading">
            <p className="eyebrow">{t.about.faithEyebrow}</p>
            <h2>{t.about.faithHeading}</h2>
            <p className="section-lead">{t.about.faithLead}</p>
          </header>
          <ol className="faith-list">
            {t.about.faith.map((item, i) => (
              <li key={item}>
                <span className="faith-list__num">{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="section-duo">
          <section className="section">
            <header className="section-heading">
              <p className="eyebrow">{t.about.historyEyebrow}</p>
              <h2>{t.about.historyHeading}</h2>
            </header>
            <p>{t.about.historyBody}</p>
          </section>

          <section className="section">
            <header className="section-heading">
              <p className="eyebrow">{t.about.visionEyebrow}</p>
              <h2>{t.about.visionHeading}</h2>
            </header>
            <p>{t.about.visionBody}</p>
          </section>
        </div>
      </div>
    </>
  )
}
