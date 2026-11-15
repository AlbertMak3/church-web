import { Link } from 'react-router-dom'
import HeroArt from './HeroArt.jsx'

export default function PageHero({ title, sub, crumb }) {
  return (
    <>
      <section className="page-hero">
        <HeroArt className="page-hero__art" />
        <div className="page-hero__scrim" />
        <div className="page-hero__inner">
          <h1>{title}</h1>
          {sub && <p>{sub}</p>}
        </div>
      </section>
      <div className="wrap">
        <nav className="crumbs" aria-label="麵包屑">
          <Link to="/">主頁</Link>
          <span aria-hidden="true"> › </span>
          <span aria-current="page">{crumb || title}</span>
        </nav>
      </div>
    </>
  )
}
