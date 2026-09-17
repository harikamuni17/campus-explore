import React from 'react'
import '../styles/Event.css'
import EventCard from '../Components/EventCard'

const Events = () => {
  return (
    <section>
        <div className='events-page'>
            <h2>Upcoming Campus Events</h2>
            <h4>Don't miss what's happening around campus..</h4>
            <div className='club-events'>
                <EventCard 
                name="Tech Fest 2026" 
                text="Coding competitions, workshops and technology activities" 
                date="Sep 20, 2026"
                />

                <EventCard 
                name="Photography Meetup" 
                text="Capture moments, share ideas and explore photography" 
                date="Sep 25, 2026"
                />

                <EventCard 
                name="Cultural Fest" 
                text="Enjoy music, dance and exciting cultural performances" 
                date="Oct 2, 2026"
                />

                <EventCard 
                name="Sports Day" 
                text="Participate in exciting games and sports competitions" 
                date="Nov 6, 2026"
                />
            </div>
        </div>
    </section>
  )
}

export default Events