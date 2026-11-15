import { Link } from 'react-router-dom'
import Photo from './Photo.jsx'

export default function PageHero({ title, sub, crumb, photo, note }) {
  return (
    <>
      <section className="page-hero">
        {photo && (
          <Photo image={photo} className="page-hero__photo" sizes="100vw" loading="eager" fetchPriority="high" decorative />
        )}
        <div className="page-hero__veil" />
        <div className="page-hero__inner">
          <p className="page-hero__kicker">葵涌平安福音堂（擎天堂）</p>
          <h1>{title}</h1>
          {sub && <p className="page-hero__sub">{sub}</p>}
        </div>
      </section>
      <div className="wrap">
        <nav className="crumbs" aria-label="麵包屑">
          <Link to="/">主頁</Link>
          <span aria-hidden="true">／</span>
          <span aria-current="page">{crumb || title}</span>
        </nav>
        {note && <p className="photo-note">{note}</p>}
      </div>
    </>
  )
}
