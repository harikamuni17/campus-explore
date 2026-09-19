import React from 'react'
import '../styles/Event.css'
import EventCard from '../Components/EventCard'
import events from '../data/events'
const Events = () => {
  return (
    <section>
        <div className='events-page'>
            <h2>Upcoming Campus Events</h2>
            <h4>Don't miss what's happening around campus..</h4>
            <div className='club-events'>
                {Object.values(events).map((event)=>(
                    <EventCard
                        key={event.name}
                        name={event.name}
                        text={event.description}
                        date={event.date}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Events