import { church, photos } from '../content.js'
import { useI18n, Rich } from '../i18n/index.jsx'
import PageHero from '../components/PageHero.jsx'
import ServiceList from '../components/ServiceList.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Times() {
  const { t, tr } = useI18n()

  return (
    <>
      <PageHero title={t.times.title} sub={t.times.sub} photo={photos.bibleCross} />

      <div className="wrap">
        <section className="section times-section">
          <div className="times-intro">
            <p className="eyebrow">{t.times.eyebrow}</p>
            <h2>{t.times.heading}</h2>
            <p>{t.times.body}</p>
            <p>
              <Rich
                text={t.times.instagramBody}
                slots={{
                  instagramLink: (
                    <a href={church.instagram} target="_blank" rel="noreferrer">{tr(church.instagramHandle)}</a>
                  )
                }}
              />
            </p>
          </div>

          <div>
            <ServiceList />
            <div className="notestrip">
              <Icon name="info" />
              <p>{t.times.note}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
