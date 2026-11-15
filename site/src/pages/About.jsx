import PageHero from '../components/PageHero.jsx'

export default function About() {
  return (
    <>
      <PageHero title="關於我們" sub="同心敬拜 · 彼此建立 · 見證基督" />

      <div className="wrap">
        <section className="section" style={{ paddingTop: '1.75rem' }}>
          <p>
            （待填）一段簡介：我們是怎樣的教會、在這區服侍了多久、
            為甚麼搬到今天這個地方。三至四句就夠，其餘留給下面的段落。
          </p>
        </section>

        <section className="section">
          <span className="eyebrow" aria-hidden="true" />
          <h2>信仰</h2>
          <ul>
            <li>（待填）第一點</li>
            <li>（待填）第二點</li>
            <li>（待填）第三點</li>
            <li>（待填）第四點</li>
            <li>（待填）第五點</li>
          </ul>
        </section>

        <section className="section">
          <span className="eyebrow" aria-hidden="true" />
          <h2>歷史</h2>
          <p>
            （待填）教會在哪一年開始，起初在哪裡聚會，後來怎樣搬到今天這個地方。
            搬遷的故事值得寫兩三段，因為這是很多弟兄姊妹共同的記憶。
          </p>
        </section>

        <section className="section">
          <span className="eyebrow" aria-hidden="true" />
          <h2>願景</h2>
          <p>（待填）兩至三句，說明我們希望在這區成為怎樣的教會。</p>
        </section>
      </div>
    </>
  )
}
