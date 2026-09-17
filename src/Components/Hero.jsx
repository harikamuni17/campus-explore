import React from 'react'
import '../styles/Hero.css'

const Hero = ({search, setSearch}) => {

  return (
    <section className="hero">

      <h1>Discover Your Campus</h1>

      <p>
        Everything happening on campus, in one simple place.
        Explore clubs, events, departments and student activities.
      </p>

      <input
        type="text"
        placeholder="Search campus..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  )
}

export default Hero