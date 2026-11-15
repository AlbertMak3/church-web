import { Link } from 'react-router-dom'
import { church, times, quickLinks } from '../content.js'
import HeroArt from '../components/HeroArt.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroArt />
        <div className="hero__scrim" />
        <div className="hero__inner">
          <p className="hero__slogan">{church.slogan}</p>
          <p className="hero__name">{church.nameZhFull}</p>
          <p className="hero__name-en">{church.nameEn}</p>
          <Link className="hero__cta" to="/about">
            認識我們 <Icon name="arrow" className="btn-icon" />
          </Link>
        </div>
      </section>

      <div className="wrap">
        <nav className="quick" aria-label="四個入口">
          {quickLinks.map(q => (
            <Link key={q.to} to={q.to}>
              <Icon name={q.icon} className="quick__icon" />
              <span className="quick__title">{q.title}</span>
              <span className="quick__sub">{q.sub}</span>
            </Link>
          ))}
        </nav>

        <section className="section">
          <span className="eyebrow" aria-hidden="true" />
          <h2>聚會時間</h2>
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
          <p style={{ marginTop: '1.25rem' }}>
            <Link to="/times">聚會時間詳細資料</Link>
          </p>
        </section>

        <section className="section">
          <span className="eyebrow" aria-hidden="true" />
          <h2>第一次來？</h2>
          <p>
            聚會在哪一層、由哪一部電梯上去、聚會時間以外要按哪一道門，都寫在
            <Link to="/contact"> 聯絡我們 </Link>
            那一頁。服裝隨意，不需要事先通知，歡迎你。
          </p>
          <div className="notestrip">
            <Icon name="info" />
            <p>
              我們不會在網站刊登任何人的相片。空間的相片可以在
              <Link to="/facilities"> 設施 </Link>頁看到。
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
