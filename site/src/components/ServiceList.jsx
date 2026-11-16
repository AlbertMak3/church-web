import { times } from '../content.js'
import { useI18n } from '../i18n/index.jsx'
import { Icon } from './Icons.jsx'

export default function ServiceList() {
  const { tr } = useI18n()

  return (
    <div className="panel service-panel">
      <ul className="rows">
        {times.map(item => (
          <li className="row" key={item.id}>
            <span className="row__glyph"><Icon name={item.icon} /></span>
            <div className="row__body">
              <h3 className="row__name">{tr(item.name)}</h3>
              <div className="row__details">
                <p className="row__meta">{tr(item.day)}</p>
                <p className="row__meta"><span>{tr(item.time)}</span></p>
                <p className="row__meta row__venue">{tr(item.venue)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
