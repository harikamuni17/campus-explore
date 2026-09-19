import React from 'react'
import {useParams} from 'react-router-dom'
import '../styles/EventDetails.css'
import NotFound from './NotFound'
import events from '../data/events'

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