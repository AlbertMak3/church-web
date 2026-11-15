import { photos } from '../content.js'
import PageHero from '../components/PageHero.jsx'

export default function Privacy() {
  return (
    <>
      <PageHero title="隱私與相片聲明" sub="我們對弟兄姊妹的承諾" photo={photos.doveLine} />

      <div className="wrap">
        <article className="section prose-page">
          <section>
            <p className="eyebrow">網站上不會有甚麼</p>
            <h2>不刊登個人資料</h2>
            <ul>
              <li>不會刊登任何人的相片，包括聚會、活動與小組的合照。</li>
              <li>不會刊登姓名、聯絡方法或任何個人資料。</li>
              <li>不設會員帳號、不收集電郵、不使用追蹤或廣告工具。</li>
            </ul>
          </section>

          <section>
            <p className="eyebrow">網站上會有甚麼</p>
            <h2>只有教會與空間的資料</h2>
            <ul>
              <li>教會的聚會時間、地址、信仰與歷史。</li>
              <li>空間的照片：房間、家具、標示、窗外景色，畫面中沒有人。</li>
            </ul>
          </section>

          <section>
            <p className="eyebrow">相片</p>
            <h2>刊登前移除中繼資料</h2>
            <p>
              所有空間相片在刊登前都已移除拍攝時間與位置等中繼資料（EXIF）。
              若你發現任何相片令你不安，或拍到你不希望公開的內容，
              請電郵 <a href="mailto:kwc@hkpec.org">kwc@hkpec.org</a>，我們會盡快移除。
            </p>
          </section>

          <section>
            <p className="eyebrow">外面的平台</p>
            <h2>Instagram 與 Google 地圖</h2>
            <p>
              Instagram 與 Google 地圖是外面的平台，各有自己的條款與私隱政策。
              我們在那裡張貼的內容不受本頁約束；若你不希望自己的相片出現在 Instagram，
              請直接向張貼者反映。
            </p>
          </section>

          <section id="photo-credits" className="photo-credits">
            <p className="eyebrow">相片來源</p>
            <h2>過渡期的示意相片</h2>
            <p>
              目前頁面上的照片，由設計階段製作的暖光拼貼（教會網站暖光背景拼貼.png）裁切而成，
              屬示意素材，不是教會空間的實拍，會在教會提供自己的空間照片後逐張取代。
              這些照片沒有人臉，亦不包含任何個人資料。
            </p>
            <p>
              較早版本使用的四張網上素材相片（Pexels 與 Wikimedia Commons）已不再使用。
            </p>
          </section>
        </article>
      </div>
    </>
  )
}
