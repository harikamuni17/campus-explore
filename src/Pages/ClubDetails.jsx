import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ClubDetails.css'
import NotFound from './NotFound'
import clubs from '../data/clubs'

const ClubDetails = () => {
  const {clubName} = useParams()
  const club = clubs[clubName]
  if(!club) {
    return <><NotFound/></>
  }
  return (

     <div className="club-details">
      <h1>{club.name}</h1>

      <p>
        {club.description}
      </p>

      <h3>What we do</h3>

      <ul>
        {club.activities.map((it)=>(
            <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

export default ClubDetails