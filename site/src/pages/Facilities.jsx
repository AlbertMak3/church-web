import { rooms, access } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import MockPhoto from '../components/MockPhoto.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Facilities() {
  return (
    <>
      <PageHero title="設施" sub="同一層，七個空間" />

      <div className="wrap">
        <section className="section" style={{ paddingTop: '1.75rem' }}>
          <p>
            我們在商業大廈的同一層。所有空間都是為了聚會、相交與安靜而設，
            相片只拍攝空間本身，不會拍到人。
          </p>

          <div className="rooms">
            {rooms.map(r => (
              <article className="room" key={r.name}>
                <div className="room__photo">
                  <MockPhoto variant={r.art} label={r.name} />
                </div>
                <div className="room__body">
                  <h3>{r.name}</h3>
                  <p className="room__cap">可容納 {r.capacity} 人</p>
                  <p className="room__cap">{r.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="notestrip">
            <Icon name="info" />
            <p>怎樣上來：{access.lift}。詳細指示在「聯絡我們」頁。</p>
          </div>
        </section>
      </div>
    </>
  )
}
