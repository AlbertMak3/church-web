import { times } from '../content.js'

export default function Times() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>聚會時間</h1>
        <p>所有聚會都在同一個地方，歡迎隨時加入。</p>
      </div>

      <section className="section">
        <table className="times">
          <thead>
            <tr>
              <th scope="col">時間</th>
              <th scope="col">聚會</th>
              <th scope="col">備註</th>
            </tr>
          </thead>
          <tbody>
            {times.map(t => (
              <tr key={t.name}>
                <td>{t.day} {t.time}</td>
                <td>{t.name}</td>
                <td>（待填）</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ marginTop: '1.5rem', color: 'var(--ink-soft)' }}>
          公眾假期或颱風期間的聚會安排，會在 Instagram 公布。
        </p>
      </section>
    </div>
  )
}
