import { church, access } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Contact() {
  return (
    <>
      <PageHero title="聯絡我們" sub="歡迎與我們聯絡" />

      <div className="wrap">
        <section className="section" style={{ paddingTop: '1.75rem' }}>
          <div className="contact-grid">
            <div>
              <ul className="contact-list">
                <li>
                  <Icon name="pin" />
                  <div>
                    <strong>地址</strong>
                    <span>{church.address}</span>
                  </div>
                </li>
                <li>
                  <Icon name="phone" />
                  <div>
                    <strong>電話</strong>
                    <span><a href={`tel:${church.phone}`}>{church.phone}</a></span>
                  </div>
                </li>
                <li>
                  <Icon name="instagram" />
                  <div>
                    <strong>Instagram</strong>
                    <span>
                      <a href={church.instagram} target="_blank" rel="noreferrer">
                        {church.instagramHandle}
                      </a>
                    </span>
                  </div>
                </li>
              </ul>

              <h2>怎樣上來</h2>
              <ul>
                <li>{access.lift}</li>
                <li>{access.door}</li>
                <li>{access.parking}</li>
              </ul>
            </div>

            <div className="mapcard">
              <Icon name="map" />
              <p>我們在商業大廈內，先看地圖確認位置，再依上面指示乘電梯。</p>
              <a className="btn" href={church.mapUrl} target="_blank" rel="noreferrer">
                查看 Google 地圖 <Icon name="arrow" className="btn-icon" />
              </a>
            </div>
          </div>

          <section className="section">
            <span className="eyebrow" aria-hidden="true" />
            <h2>誰會回覆你</h2>
            <p>
              （待填）說明由誰接聽電話、甚麼時間方便聯絡。若在聚會時間致電沒人接，
              可以發訊息到 Instagram，我們通常當天回覆。
            </p>
          </section>

          <section className="section">
            <span className="eyebrow" aria-hidden="true" />
            <h2>第一次來</h2>
            <p>
              不需要事先通知，也不需要穿得特別正式。聚會前十分鐘到，會有人在門口接待。
            </p>
          </section>
        </section>
      </div>
    </>
  )
}
