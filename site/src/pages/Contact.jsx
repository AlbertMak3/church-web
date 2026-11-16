import { church, access, photos } from '../content.js'
import { useI18n } from '../i18n/index.jsx'
import PageHero from '../components/PageHero.jsx'
import MapArt from '../components/MapArt.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Contact() {
  const { t, tr } = useI18n()

  return (
    <>
      <PageHero title={t.contact.title} sub={t.contact.sub} photo={photos.whiteFlowers} />

      <div className="wrap">
        <section className="section contact-section">
          <div className="contact-card">
            <div className="contact-card__details">
              <p className="eyebrow">{t.contact.detailsEyebrow}</p>
              <h2>{t.contact.detailsHeading}</h2>
              <ul className="contact-list">
                <li>
                  <span className="contact-list__icon"><Icon name="pin" /></span>
                  <div>
                    <strong>{t.contact.address}</strong>
                    <span>{tr(church.address)}</span>
                  </div>
                </li>
                <li>
                  <span className="contact-list__icon"><Icon name="phone" /></span>
                  <div>
                    <strong>{t.contact.phone}</strong>
                    <span><a href={`tel:${church.phone.replace(/\s/g, '')}`}>{church.phone}</a></span>
                  </div>
                </li>
                <li>
                  <span className="contact-list__icon"><Icon name="fax" /></span>
                  <div>
                    <strong>{t.contact.fax}</strong>
                    <span>{church.fax}</span>
                  </div>
                </li>
                <li className="contact-list__wide">
                  <span className="contact-list__icon"><Icon name="mail" /></span>
                  <div>
                    <strong>{t.contact.email}</strong>
                    <span><a href={`mailto:${church.email}`}>{church.email}</a></span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mapcard">
              <div className="mapcard__art">
                <MapArt />
              </div>
              <div className="mapcard__body">
                <div>
                  <strong>{t.contact.location}</strong>
                  <p>{t.contact.locationBody}</p>
                </div>
                <a className="btn btn--solid" href={church.mapUrl} target="_blank" rel="noreferrer">
                  {t.contact.mapCta} <Icon name="arrow" className="btn-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="access-grid">
            <div>
              <p className="eyebrow">{t.contact.accessEyebrow}</p>
              <h2>{t.contact.accessHeading}</h2>
            </div>
            <ul className="access-list">
              <li><span>{t.contact.accessLift}</span><p>{tr(access.lift)}</p></li>
              <li><span>{t.contact.accessDoor}</span><p>{tr(access.door)}</p></li>
              <li><span>{t.contact.accessParking}</span><p>{tr(access.parking)}</p></li>
            </ul>
          </div>

          <div className="section-duo">
            <section className="section">
              <header className="section-heading">
                <p className="eyebrow">{t.contact.replyEyebrow}</p>
                <h2>{t.contact.replyHeading}</h2>
              </header>
              <p>{t.contact.replyBody}</p>
            </section>

            <section className="section">
              <header className="section-heading">
                <p className="eyebrow">{t.contact.visitEyebrow}</p>
                <h2>{t.contact.visitHeading}</h2>
              </header>
              <p>{t.contact.visitBody}</p>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}
