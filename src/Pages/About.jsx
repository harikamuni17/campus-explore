import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section className="about-page">
      <div className="about-content">
        <h1>About Campus Explorer</h1>

        <p>
          Campus Explorer is a simple platform that helps students discover
          campus clubs, upcoming events and student activities in one place.
        </p>

        <h2>Our Purpose</h2>

        <p>
          We want to make it easier for students to stay informed, explore
          their interests, connect with others and participate in campus life.
        </p>

        <h2>What You Can Explore</h2>

        <ul>
          <li>Discover different campus clubs.</li>
          <li>Explore upcoming campus events.</li>
          <li>View details about clubs and their activities.</li>
          <li>Search for clubs and events by name or description.</li>
        </ul>
      </div>
    </section>
  )
}

export default About