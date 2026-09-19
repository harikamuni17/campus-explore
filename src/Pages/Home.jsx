import React from 'react'
import Hero from '../Components/Hero'
import ClubCard from '../Components/ClubCard'
import EventCard from '../Components/EventCard'
import { useState } from 'react'
import clubs from '../data/clubs'
import events from '../data/events'

const Home = () => {
  const [search, setSearch] = useState("")
  const allClubs = Object.values(clubs)
  const allEvents = Object.values(events)

  const filteredClubs = search.trim()
    ? allClubs.filter((club) =>
        club.name.toLowerCase().includes(search.toLowerCase())||
        club.description.toLowerCase().includes(search.toLowerCase())
      )
    : []
  const filteredEvents = search.trim()
    ? allEvents.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())||
        event.description.toLowerCase().includes(search.toLowerCase())
      )
    : []
  return (
    <div className="home">
      <Hero search={search} setSearch={setSearch}/> 
      <section className="search-results">

      {search.trim() && (
        <h2>Search Results</h2>
      )}

      {filteredClubs.map((club) => (
        <ClubCard
          key={club.name}
          name={club.name}
          text={club.description}
        />
      ))}

      {filteredEvents.map((event) => (
        <EventCard
          key={event.name}
          name={event.name}
          text={event.description}
          date={event.date}
        />
      ))}

      {search.trim() &&
      filteredClubs.length === 0 &&
      filteredEvents.length === 0 && (
        <p>No results found for "{search}"</p>
      )}

    </section>
      <section className="upcoming-events">

        <h2>Upcoming Events</h2>

        <div className="event-container">

          <EventCard
            name="Tech Fest 2026"
            text="Join coding competitions, workshops and exciting technology activities."
            date="September 20, 2026"
          />

          <EventCard
            name="Photography Meetup"
            text="Explore photography, share ideas and learn creative skills."
            date="September 25, 2026"
          />

        </div>

      </section>

    </div>
  )
}

export default Home