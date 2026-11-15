import { times } from '../content.js'
import { Icon } from './Icons.jsx'

export default function ServiceList() {
  return (
    <div className="panel service-panel">
      <ul className="rows">
        {times.map(t => (
          <li className="row" key={t.name}>
            <span className="row__glyph"><Icon name={t.icon} /></span>
            <div className="row__body">
              <h3 className="row__name">{t.name}</h3>
              <div className="row__details">
                <p className="row__meta">{t.day}</p>
                <p className="row__meta"><span>{t.time}</span></p>
                <p className="row__meta row__venue">{t.venue}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
