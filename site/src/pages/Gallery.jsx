const shots = [
  '大堂', '大堂', '共享空間', '共享空間',
  '安靜室', '多用途室', '兒主房', 'BB房',
  '鏡房', '走廊', '入口', '窗外'
]

export default function Gallery() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>相片</h1>
        <p>只有空間，沒有人。</p>
      </div>

      <section className="section">
        <p>
          我們不會在網站刊登任何人的相片。這裡只放教會空間的照片，
          讓第一次來的朋友先看看環境。聚會與活動的相片，請看我們的 Instagram。
        </p>
        <div className="gallery">
          {shots.map((label, i) => (
            <figure key={i}>
              <div className="room__missing">相片待加</div>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}
