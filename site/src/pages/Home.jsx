import { Link } from 'react-router-dom'
import { church, quickLinks, photos } from '../content.js'
import Photo from '../components/Photo.jsx'
import ServiceList from '../components/ServiceList.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <Photo
          image={photos.crossWall}
          className="hero__photo"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          decorative
        />
        <div className="hero__veil" />
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker"><span aria-hidden="true" />{church.nameZhFull}</p>
            <h1 className="hero__slogan">{church.slogan}</h1>
            <p className="hero__tagline">{church.tagline}</p>
            <p className="hero__name-en">{church.sloganEn}</p>
            <Link className="hero__cta" to="/about">
              認識我們 <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <nav className="quick" aria-label="四個入口">
          {quickLinks.map(q => (
            <Link key={q.to} to={q.to}>
              <span className="quick__icon-wrap"><Icon name={q.icon} className="quick__icon" /></span>
              <span className="quick__copy">
                <span className="quick__title">{q.title}</span>
                <span className="quick__sub">{q.sub}</span>
              </span>
            </Link>
          ))}
        </nav>

        <section className="section home-schedule">
          <header className="section-heading">
            <p className="eyebrow">每週聚會</p>
            <h2>聚會時間</h2>
            <p className="section-lead">歡迎所有弟兄姊妹及新朋友參加，一同在主裡相聚。</p>
          </header>

          <div className="schedule-layout">
            <div className="schedule-side">
              <p className="schedule-day">主日崇拜</p>
              <p className="schedule-time">逢星期日<br /><strong>上午 10:30</strong></p>
              <Link className="text-link" to="/times">
                查看全部聚會 <Icon name="arrow" className="btn-icon" />
              </Link>
            </div>
            <ServiceList />
          </div>
        </section>

        <section className="section split-feature">
          <div className="split-feature__copy">
            <p className="eyebrow">第一次來</p>
            <h2>不需要事先通知</h2>
            <p>
              聚會在哪一層、搭哪一部電梯、聚會時間外要按<span className="nowrap">哪一道門</span>，都寫在
              <Link to="/contact">聯絡我們</Link>那一頁。服裝隨意，歡迎你。
            </p>
            <Link className="btn btn--solid" to="/contact">
              查看交通指示 <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
          <figure className="photo-frame">
            <Photo image={photos.greeneryLight} sizes="(max-width: 800px) 100vw, 52vw" />
          </figure>
        </section>

        <aside className="notestrip">
          <Icon name="info" />
          <p>
            我們不會在網站刊登任何人的相片。空間的相片可以在
            <Link to="/facilities">設施</Link>頁看到。
          </p>
        </aside>
      </div>
    </>
  )
}
