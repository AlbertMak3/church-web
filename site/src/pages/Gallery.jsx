import { gallery } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import MockPhoto from '../components/MockPhoto.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Gallery() {
  return (
    <>
      <PageHero title="相片" sub="只有空間，沒有人" />

      <div className="wrap">
        <section className="section" style={{ paddingTop: '1.75rem' }}>
          <p>
            我們不會在網站刊登任何人的相片。這裡只放教會空間的照片，
            讓第一次來的朋友先看看環境。聚會與活動的相片，請看我們的 Instagram。
          </p>

          <div className="gallery">
            {gallery.map((g, i) => (
              <figure key={i}>
                <div className="room__photo">
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
      </div>
    </>
  )
}
