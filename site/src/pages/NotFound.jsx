import { Link } from 'react-router-dom'
import { Icon } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <div className="wrap">
      <section className="not-found">
        <p className="eyebrow">404</p>
        <h1>找不到這一頁</h1>
        <p>網址可能已經改變。你可以回到主頁，或直接查看聚會時間。</p>
        <div className="not-found__actions">
          <Link className="btn btn--solid" to="/">回到主頁</Link>
          <Link className="text-link" to="/times">聚會時間 <Icon name="arrow" className="btn-icon" /></Link>
        </div>
      </section>
    </div>
  )
}
