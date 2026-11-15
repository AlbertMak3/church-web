import { rooms, access, gallery, photos } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import MockPhoto from '../components/MockPhoto.jsx'
import { Icon } from '../components/Icons.jsx'

const extraSpacePhotos = gallery.filter((_, i) => [1, 3, 9, 10, 11].includes(i))

export default function Facilities() {
  return (
    <>
      <PageHero title="設施" sub="同一層，七個空間" photo={photos.sanctuaryWood} />

      <div className="wrap">
        <section className="section facilities-intro">
          <div>
            <p className="eyebrow">我們的空間</p>
            <h2>為聚會、相交與安靜而設</h2>
          </div>
          <p>
            我們在商業大廈的同一層。相片只拍攝空間本身，不會拍到人。
            以下為空間示意圖，實際照片會在拍攝後取代。
          </p>
        </section>

        <div className="facility-facts" aria-label="設施概要">
          <div><strong>7</strong><span>個空間</span></div>
          <div><strong>1</strong><span>個樓層</span></div>
          <div><strong>0</strong><span>張人臉</span></div>
        </div>

        <div className="rooms">
          {rooms.map((r, i) => (
            <article className="room" key={r.name}>
              <div className="room__photo">
                <MockPhoto variant={r.art} label={r.name} />
                <span className="room__index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="room__body">
                <div>
                  <h3>{r.name}</h3>
                  <p className="room__cap">
                    {r.capacity.includes('待填') ? '容額待確認' : `可容納 ${r.capacity} 人`}
                  </p>
                </div>
                <p className="room__note">{r.note}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="section facilities-gallery">
          <header className="section-heading">
            <p className="eyebrow">空間相片</p>
            <h2>更多空間角度</h2>
            <p className="section-lead">
              大堂、共享空間與走廊的不同角度，讓第一次來的朋友先看看環境。
              聚會與活動的相片不會在網站刊登。
            </p>
          </header>

          <div className="gallery">
            {extraSpacePhotos.map((g, i) => (
              <figure className={`gallery__item gallery__item--${i % 6}`} key={g.label}>
                <div className="gallery__photo">
                  <MockPhoto variant={g.variant} label={g.label} />
                </div>
                <figcaption>{g.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="notestrip">
            <Icon name="info" />
            <p>以上為空間示意圖，實際相片拍攝後會取代；刊登前會移除拍攝時間與位置資料。</p>
          </div>
        </section>

        <div className="notestrip notestrip--large">
          <Icon name="pin" />
          <div>
            <strong>怎樣上來</strong>
            <p>{access.lift}。詳細指示在<strong>聯絡我們</strong>頁。</p>
          </div>
        </div>
      </div>
    </>
  )
}
