import { church, photos } from '../content.js'
import { useI18n, Rich } from '../i18n/index.jsx'
import PageHero from '../components/PageHero.jsx'

export default function Privacy() {
  const { t } = useI18n()
  const p = t.privacy

  return (
    <>
      <PageHero title={p.title} sub={p.sub} photo={photos.doveLine} />

      <div className="wrap">
        <article className="section prose-page">
          <section>
            <p className="eyebrow">{p.notHere.eyebrow}</p>
            <h2>{p.notHere.heading}</h2>
            <ul>
              {p.notHere.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <p className="eyebrow">{p.here.eyebrow}</p>
            <h2>{p.here.heading}</h2>
            <ul>
              {p.here.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <p className="eyebrow">{p.metadata.eyebrow}</p>
            <h2>{p.metadata.heading}</h2>
            <p>
              <Rich
                text={p.metadata.body}
                slots={{ emailLink: <a href={`mailto:${church.email}`}>{church.email}</a> }}
              />
            </p>
          </section>

          <section>
            <p className="eyebrow">{p.outside.eyebrow}</p>
            <h2>{p.outside.heading}</h2>
            <p>{p.outside.body}</p>
          </section>

          <section id="photo-credits" className="photo-credits">
            <p className="eyebrow">{p.credits.eyebrow}</p>
            <h2>{p.credits.heading}</h2>
            <p>{p.credits.body}</p>
            <p>{p.credits.footnote}</p>
          </section>
        </article>
      </div>
    </>
  )
}
