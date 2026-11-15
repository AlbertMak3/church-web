import { Link } from 'react-router-dom'
import { church, times } from '../content.js'

export default function Home() {
  const sunday = times[0]

  return (
    <div className="wrap">
      <section className="hero">
        <h1>{church.name}</h1>
        <p className="lede">{church.tagline}</p>
        <div className="actions">
          <a className="btn btn--solid" href={church.mapUrl} target="_blank" rel="noreferrer">
            在地圖上找我們
          </a>
          <Link className="btn" to="/times">聚會時間</Link>
        </div>
      </section>

      <section className="section">
        <div className="facts">
          <div className="fact">
            <h2>主日崇拜</h2>
            <p>{sunday.day} {sunday.time}</p>
          </div>
          <div className="fact">
            <h2>地址</h2>
            <p>{church.address}</p>
          </div>
          <div className="fact">
            <h2>電話</h2>
            <p>{church.phone}</p>
          </div>
        </div>
      </section>

      <hr />

      <section className="section">
        <h2>第一次來？</h2>
        <p>
          聚會在哪一層、由哪一部電梯上去、聚會時間以外要按哪一道門，都寫在
          <Link to="/contact"> 聯絡我們 </Link>
          那一頁。服裝隨意，不需要事先通知，歡迎你。
        </p>
        <p>
          我們在 <Link to="/facilities">設施 </Link>
          頁放了新地方的相片，可以先看看環境再來。
        </p>
      </section>
    </div>
  )
}
