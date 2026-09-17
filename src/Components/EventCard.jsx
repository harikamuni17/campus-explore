import React from 'react'
import {Link} from 'react-router-dom'
const EventCard = (props) => {
  return (
      <section>
        <div className='card'>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <p>{props.date}</p>
            <Link to = {`/events/${props.name.toLowerCase().replaceAll(' ','-')}`}>View Event</Link>
        </div>
      </section>
  )
}

export default EventCard