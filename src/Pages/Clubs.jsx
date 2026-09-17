import React from 'react'
import ClubCard from '../Components/ClubCard'
import '../styles/Club.css'
const Clubs = () => {
  return (
    <section>
        <div className='clubs-page'>
            <h2>Explore Campus Clubs</h2>
            <h4>Discover clubs, meet people and learn new things.</h4>
            <div className='club-cards'>
                <ClubCard name="Coding Club" text="Learn Coding and build Projects" />

                <ClubCard name="Photography Club" text="Capture moments and explore creativity" />

                <ClubCard name="Robotics Club" text="Build robots and experiment with tech" />

                <ClubCard name="Arts Club" text="Explore art and express your creativity" />
            </div>
        </div>
    </section>
  )
}

export default Clubs;