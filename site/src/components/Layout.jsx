import { NavLink, Outlet, Link } from 'react-router-dom'
import { church } from '../content.js'

const links = [
  { to: '/', label: '首頁', end: true },
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
        <div className="site-header__inner">
          <Link className="brand" to="/">{church.name}</Link>
          <nav className="nav" aria-label="主選單">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <p className="label">{church.name}</p>
            <p>{church.address}</p>
            <p>電話：{church.phone}</p>
          </div>
          <div>
            <p className="label">連結</p>
            <p><a href={church.mapUrl} target="_blank" rel="noreferrer">在 Google 地圖上查看</a></p>
            <p><a href={church.instagram} target="_blank" rel="noreferrer">Instagram {church.instagramHandle}</a></p>
            <p><Link to="/privacy">隱私與相片聲明</Link></p>
          </div>
          <div>
            <p className="label">聚會</p>
            <p>主日崇拜 星期日上午（待填）</p>
            <p>歡迎第一次來的朋友</p>
          </div>
        </div>
      </footer>
    </>
  )
}
