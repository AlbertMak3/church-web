import { NavLink, Outlet, Link } from 'react-router-dom'
import { church } from '../content.js'
import { Mark } from './Icons.jsx'

const links = [
  { to: '/', label: '主頁', end: true },
  { to: '/about', label: '關於我們' },
  { to: '/times', label: '聚會時間' },
  { to: '/facilities', label: '設施' },
  { to: '/gallery', label: '相片' },
  { to: '/contact', label: '聯絡我們' }
]

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main">跳到主要內容</a>

      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/">
            <Mark className="brand__mark" />
            <span>
              <span className="brand__zh">{church.nameZhFull}</span>
              <span className="brand__en">{church.nameEn}</span>
            </span>
          </Link>

          <nav className="nav" aria-label="主選單">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.end}>{l.label}</NavLink>
            ))}
          </nav>

          <a className="header-cta" href={church.mapUrl} target="_blank" rel="noreferrer">在地圖上找我們</a>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Mark />
            <div>
              <p className="zh">{church.nameZhFull}</p>
              <p className="en">{church.nameEn}</p>
              <p className="en">{church.address}</p>
            </div>
          </div>

          <div className="footer-slogan">
            <p className="zh">{church.slogan}</p>
            <p className="en">{church.sloganEn}</p>
          </div>

          <div>
            <nav className="footer-links" aria-label="頁尾選單">
              {links.map(l => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
              <a href={church.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </nav>
            <p className="footer-note">
              電話：{church.phone} · <Link to="/privacy">隱私與相片聲明</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
