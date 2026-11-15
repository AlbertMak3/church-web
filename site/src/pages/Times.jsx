import { church, photos } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ServiceList from '../components/ServiceList.jsx'
import { Icon } from '../components/Icons.jsx'

export default function Times() {
  return (
    <>
      <PageHero title="聚會時間" sub="一同敬拜 · 一起成長" photo={photos.bibleCross} />

      <div className="wrap">
        <section className="section times-section">
          <div className="times-intro">
            <p className="eyebrow">每週節奏</p>
            <h2>星期日，預留給神</h2>
            <p>
              主日崇拜、聖經學習與祈禱會，都在同一層舉行。
              新朋友不需要事先登記，聚會前十分鐘到，會有人在門口接待。
            </p>
            <p>
              公眾假期或颱風期間的安排，會在
              <a href={church.instagram} target="_blank" rel="noreferrer">Instagram</a>公布。
            </p>
          </div>

          <div>
            <ServiceList />
            <div className="notestrip">
              <Icon name="info" />
              <p>歡迎所有弟兄姊妹及新朋友參加，一同在主裡相聚。</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
