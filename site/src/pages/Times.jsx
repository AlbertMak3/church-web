import { times } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Times() {
  return (
    <>
      <PageHero title="聚會時間" sub="一同敬拜 · 一起成長" />

      <div className="wrap">
        <section className="section" style={{ paddingTop: '1.75rem' }}>
          <div className="panel">
            <ul className="rows">
              {times.map(t => (
                <li className="row" key={t.name}>
                  <Icon name={t.icon} className="row__icon" />
                  <h3 className="row__name">{t.name}</h3>
                  <p className="row__meta">{t.day}</p>
                  <p className="row__meta"><span>{t.time}</span></p>
                  <p className="row__meta row__venue">{t.venue}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="notestrip">
            <Icon name="info" />
            <p>
              歡迎所有弟兄姊妹及新朋友參加，一同在主裡相聚。
              公眾假期或颱風期間的安排，會在 Instagram 公布。
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
