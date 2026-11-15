import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>找不到這一頁</h1>
        <p>網址可能已經改變。</p>
      </div>
      <section className="section">
        <p><Link to="/">回到首頁</Link></p>
      </section>
    </div>
  )
}
