import { NavLink, Outlet, Link } from 'react-router-dom'
import { church } from '../content.js'
import { Mark, Icon } from './Icons.jsx'

const links = [
  { to: '/', label: '主頁', end: true },
  { to: '/about', label: '關於我們' },
  { to: '/times', label: '聚會時間' },
  { to: '/facilities', label: '設施' },
  { to: '/contact', label: '聯絡我們' }
]

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main">跳到主要內容</a>

      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/">
            <span className="brand__seal"><Mark className="brand__mark" /></span>
            <span className="brand__type">
              <span className="brand__zh">
                <span>{church.nameZh}</span>
                <span className="brand__zh-sub">（擎天堂）</span>
              </span>
              <span className="brand__en">{church.nameEn}</span>
            </span>
          </Link>

          <nav className="nav" aria-label="主選單">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.end}>{l.label}</NavLink>
            ))}
          </nav>

          <a className="header-cta" href={church.mapUrl} target="_blank" rel="noreferrer">
            <Icon name="pin" className="header-cta__icon" />
            <span>聚會地點</span>
          </a>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-brand__seal"><Mark /></span>
            <div>
              <p className="zh">{church.nameZhFull}</p>
              <p className="en">{church.nameEn}</p>
              <p className="footer-contact">
                {church.address}<br />
                {church.phone} · 傳真 {church.fax} · <a href={`mailto:${church.email}`}>{church.email}</a>
              </p>
            </div>
          </div>

          <div className="footer-slogan">
            <p className="zh">{church.slogan}</p>
            <p className="en">{church.sloganEn}</p>
          </div>

          <div className="footer-nav">
            <nav className="footer-links" aria-label="頁尾選單">
              {links.map(l => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
            </nav>
            <p className="footer-note">
              <Link to="/privacy">隱私與相片聲明</Link>
              <span aria-hidden="true"> · </span>
              <Link to="/privacy#photo-credits">相片來源</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
