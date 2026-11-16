import { rooms, access, gallery, photos } from '../content.js'
import { useI18n, Rich } from '../i18n/index.jsx'
import PageHero from '../components/PageHero.jsx'
import MockPhoto from '../components/MockPhoto.jsx'
import { Icon } from '../components/Icons.jsx'

const extraSpacePhotos = gallery.filter((_, i) => [1, 3, 9, 10, 11].includes(i))

export default function Facilities() {
  const { t, lp, tr } = useI18n()

  return (
    <>
      <PageHero title={t.facilities.title} sub={t.facilities.sub} photo={photos.sanctuaryWood} />

      <div className="wrap">
        <section className="section facilities-intro">
          <div>
            <p className="eyebrow">{t.facilities.eyebrow}</p>
            <h2>{t.facilities.heading}</h2>
          </div>
          <p>{t.facilities.body}</p>
        </section>

        <div className="facility-facts" aria-label={t.facilities.factsAria}>
          <div><strong>{t.facilities.factRooms.count}</strong><span>{t.facilities.factRooms.label}</span></div>
          <div><strong>{t.facilities.factFloors.count}</strong><span>{t.facilities.factFloors.label}</span></div>
          <div><strong>{t.facilities.factFaces.count}</strong><span>{t.facilities.factFaces.label}</span></div>
        </div>

        <div className="rooms">
          {rooms.map((r, i) => (
            <article className="room" key={r.id}>
              <div className="room__photo">
                <MockPhoto variant={r.art} label={tr(r.name)} />
                <span className="room__index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="room__body">
                <div>
                  <h3>{tr(r.name)}</h3>
                  <p className="room__cap">
                    {r.capacity ? t.facilities.capacity.replace('{n}', r.capacity) : t.facilities.capacityUnknown}
                  </p>
                </div>
                <p className="room__note">{tr(r.note)}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="section facilities-gallery">
          <header className="section-heading">
            <p className="eyebrow">{t.facilities.galleryEyebrow}</p>
            <h2>{t.facilities.galleryHeading}</h2>
            <p className="section-lead">{t.facilities.galleryLead}</p>
          </header>

          <div className="gallery">
            {extraSpacePhotos.map((g, i) => (
              <figure className={`gallery__item gallery__item--${i % 6}`} key={g.id}>
                <div className="gallery__photo">
                  <MockPhoto variant={g.variant} label={tr(g.label)} />
                </div>
                <figcaption>{tr(g.label)}</figcaption>
              </figure>
            ))}
          </div>

          <div className="notestrip">
            <Icon name="info" />
            <p>{t.facilities.galleryNote}</p>
          </div>
        </section>

        <div className="notestrip notestrip--large">
          <Icon name="pin" />
          <div>
            <strong>{t.facilities.accessHeading}</strong>
            <p>
              <Rich
                text={t.facilities.accessBody}
                slots={{
                  lift: tr(access.lift),
                  contactLink: <strong>{t.nav.items[4].label}</strong>
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
