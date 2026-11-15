import { church, access } from '../content.js'

export default function Contact() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>聯絡我們</h1>
        <p>第一次來的話，這一頁最重要。</p>
      </div>

      <section className="section">
        <div className="contact-block">
          <p><strong>{church.address}</strong></p>
          <p>電話：<a href={`tel:${church.phone}`}>{church.phone}</a></p>
          <p>
            <a href={church.mapUrl} target="_blank" rel="noreferrer">在 Google 地圖上開啟</a>
            {' · '}
            <a href={church.instagram} target="_blank" rel="noreferrer">Instagram {church.instagramHandle}</a>
          </p>
        </div>

        <h2>怎樣上來</h2>
        <ul>
          <li>{access.lift}</li>
          <li>{access.door}</li>
          <li>{access.parking}</li>
        </ul>

        <h2>誰會回覆你</h2>
        <p>
          （待填）說明由誰接聽電話、甚麼時間方便聯絡。若在聚會時間致電沒人接，
          可以發訊息到 Instagram，我們通常當天回覆。
        </p>

        <h2>第一次來</h2>
        <p>
          不需要事先通知，也不需要穿得特別正式。聚會前十分鐘到，會有人在門口接待。
        </p>
      </section>
    </div>
  )
}
