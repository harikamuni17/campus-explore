import React from 'react'
import ClubCard from '../Components/ClubCard'
import '../styles/Club.css'
import clubs from '../data/clubs'
const Clubs = () => {
  return (
    <section>
        <div className='clubs-page'>
            <h2>Explore Campus Clubs</h2>
            <h4>Discover clubs, meet people and learn new things.</h4>
            <div className='club-cards'>
                {
                  Object.values(clubs).map((club)=>(
                    <ClubCard
                      key = {club.name}
                      name = {club.name}
                      text = {club.description}
                    />
                  ))
                }
            </div>
        </div>
    </section>
  )
}

export default Clubs;