import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Photo from '../components/Photo.jsx'
import { Icon } from '../components/Icons.jsx'
import { church, photos } from '../content.js'

const faith = ['（待填）第一點', '（待填）第二點', '（待填）第三點', '（待填）第四點', '（待填）第五點']

export default function About() {
  return (
    <>
      <PageHero
        title="關於我們"
        sub="同心敬拜 · 彼此建立 · 見證基督"
        photo={photos.exterior}
        note="頁首照片為設計階段的示意圖，不是教會大樓的實際外貌；聚會在瓊林街擎天廣場 31 樓。"
      />

      <div className="wrap">
        <section className="section intro-split">
          <div className="intro-split__copy">
            <p className="eyebrow">教會簡介</p>
            <h2>{church.nameZhFull}</h2>
            <p className="lead">
              （待填）一段簡介：我們是怎樣的教會、在這區服侍了多久、
              為甚麼搬到今天這個地方。三至四句就夠，其餘留給下面的段落。
            </p>
            <Link className="btn btn--solid" to="/contact">
              聯絡我們 <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
          <figure className="photo-frame">
            <Photo image={photos.doveWood} sizes="(max-width: 800px) 200vw, 120vw" />
          </figure>
        </section>

        <section className="section">
          <header className="section-heading">
            <p className="eyebrow">信仰</p>
            <h2>我們所相信的</h2>
            <p className="section-lead">
              以下五點由教會提供，以簡短、清楚為先。
            </p>
          </header>
          <ol className="faith-list">
            {faith.map((item, i) => (
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
              <p className="eyebrow">歷史</p>
              <h2>從起初到今天</h2>
            </header>
            <p>
              （待填）教會在哪一年開始，起初在哪裡聚會，後來怎樣搬到今天這個地方。
              搬遷的故事值得寫兩三段，因為這是很多弟兄姊妹共同的記憶。
            </p>
          </section>

          <section className="section">
            <header className="section-heading">
              <p className="eyebrow">願景</p>
              <h2>我們想成為的教會</h2>
            </header>
            <p>（待填）兩至三句，說明我們希望在這區成為怎樣的教會。</p>
          </section>
        </div>
      </div>
    </>
  )
}
