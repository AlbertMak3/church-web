import { rooms } from '../content.js'

function Room({ room }) {
  return (
    <article className="room">
      <div className="room__missing">相片待加</div>
      <div className="room__body">
        <h3>{room.name}</h3>
        <p className="room__cap">可容納 {room.capacity} 人</p>
        <p className="room__cap">{room.note}</p>
      </div>
    </article>
  )
}

export default function Facilities() {
  return (
    <div className="wrap">
      <div className="page-head">
        <h1>設施</h1>
        <p>我們在商業大廈的同一層，以下是各個空間。</p>
      </div>

      <section className="section">
        <p>
          所有空間都是為了聚會、相交與安靜而設。相片只拍攝空間本身，不會拍到人。
        </p>
        <div className="rooms">
          {rooms.map(r => <Room key={r.name} room={r} />)}
        </div>
      </section>
    </div>
  )
}
