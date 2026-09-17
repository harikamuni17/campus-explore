import React from 'react'
import {useParams} from 'react-router-dom'
import '../styles/EventDetails.css'
import NotFound from './NotFound'
const events = {
  "tech-fest-2026": {
    name: "Tech Fest 2026",
    description: "Join coding competitions, workshops and exciting technology activities.",
    date: "September 20, 2026",
    venue: "Main Auditorium",
    activities: [
      "Coding competitions",
      "Technical workshops",
      "Project exhibition",
      "Tech quiz"
    ]
  },

  "photography-meetup": {
    name: "Photography Meetup",
    description: "Explore photography, share ideas and learn creative skills.",
    date: "September 25, 2026",
    venue: "College Garden",
    activities: [
      "Photo walk",
      "Photography discussion",
      "Editing session",
      "Photo showcase"
    ]
  },

  "cultural-fest": {
    name: "Cultural Fest",
    description: "Enjoy music, dance and exciting cultural performances.",
    date: "October 2, 2026",
    venue: "Open Ground",
    activities: [
      "Dance performances",
      "Music performances",
      "Drama",
      "Cultural competitions"
    ]
  },

  "sports-day": {
    name: "Sports Day",
    description: "Participate in exciting games and sports competitions.",
    date: "November 6, 2026",
    venue: "College Sports Ground",
    activities: [
      "Cricket",
      "Volleyball",
      "Running events",
      "Team games"
    ]
  }
}
const EventDetails = () => {
  const {eventName} = useParams();
  const event = events[eventName]
  if(!event){
    return <><NotFound/></>
  }
  return (
    <div className='event-details'>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <p>{event.venue}</p>
        <ul>
            {event.activities.map((it)=>(
                <li key={it}>{it}</li>
            ))}
        </ul>
    </div>
  )
}

export default EventDetails