import { church, access, photos } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import MapArt from '../components/MapArt.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Contact() {
  return (
    <>
      <PageHero title="聯絡我們" sub="歡迎與我們聯絡" photo={photos.whiteFlowers} />

      <div className="wrap">
        <section className="section contact-section">
          <div className="contact-card">
            <div className="contact-card__details">
              <p className="eyebrow">教會資料</p>
              <h2>來之前，可以先問我們</h2>
              <ul className="contact-list">
                <li>
                  <span className="contact-list__icon"><Icon name="pin" /></span>
                  <div>
                    <strong>地址</strong>
                    <span>{church.address}</span>
                  </div>
                </li>
                <li>
                  <span className="contact-list__icon"><Icon name="phone" /></span>
                  <div>
                    <strong>電話</strong>
                    <span><a href={`tel:${church.phone.replace(/\s/g, '')}`}>{church.phone}</a></span>
                  </div>
                </li>
                <li>
                  <span className="contact-list__icon"><Icon name="fax" /></span>
                  <div>
                    <strong>傳真</strong>
                    <span>{church.fax}</span>
                  </div>
                </li>
                <li className="contact-list__wide">
                  <span className="contact-list__icon"><Icon name="mail" /></span>
                  <div>
                    <strong>電郵</strong>
                    <span><a href={`mailto:${church.email}`}>{church.email}</a></span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mapcard">
              <div className="mapcard__art">
                <MapArt />
              </div>
              <div className="mapcard__body">
                <div>
                  <strong>位置</strong>
                  <p>我們在商業大廈內，先看地圖確認位置，再依下面指示乘電梯。</p>
                </div>
                <a className="btn btn--solid" href={church.mapUrl} target="_blank" rel="noreferrer">
                  在地圖上查看 <Icon name="arrow" className="btn-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="access-grid">
            <div>
              <p className="eyebrow">怎樣上來</p>
              <h2>到達這一層</h2>
            </div>
            <ul className="access-list">
              <li><span>電梯</span><p>{access.lift}</p></li>
              <li><span>入口</span><p>{access.door}</p></li>
              <li><span>泊車</span><p>{access.parking}</p></li>
            </ul>
          </div>

          <div className="section-duo">
            <section className="section">
              <header className="section-heading">
                <p className="eyebrow">聯絡安排</p>
                <h2>誰會回覆你</h2>
              </header>
              <p>
                （待填）說明由誰接聽電話、甚麼時間方便聯絡。若在聚會時間致電沒人接，
                可以發訊息到 Instagram，我們通常當天回覆。
              </p>
            </section>

            <section className="section">
              <header className="section-heading">
                <p className="eyebrow">第一次來</p>
                <h2>不需要穿得特別正式</h2>
              </header>
              <p>
                不需要事先通知。聚會前十分鐘到，會有人在門口接待。
                如有任何疑問，歡迎先致電或發訊息給我們。
              </p>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}
