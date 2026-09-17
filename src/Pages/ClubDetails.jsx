import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ClubDetails.css'
import NotFound from './NotFound'
const clubs = {
  "coding-club": {
    name: "Coding Club",
    description: "Learn coding, build projects and improve your programming skills.",
    activities: [
      "Coding workshops",
      "Project building",
      "Programming competitions",
      "Team activities"
    ]
  },

  "photography-club": {
    name: "Photography Club",
    description: "Capture moments and explore your creativity through photography.",
    activities: [
      "Photography workshops",
      "Photo walks",
      "Photo exhibitions",
      "Editing sessions"
    ]
  },

  "robotics-club": {
    name: "Robotics Club",
    description: "Build robots and experiment with technology.",
    activities: [
      "Robot building",
      "Robotics workshops",
      "Technical competitions",
      "Team projects"
    ]
  },

  "arts-club": {
    name: "Arts Club",
    description: "Explore art and express your creativity.",
    activities: [
      "Drawing sessions",
      "Painting activities",
      "Art exhibitions",
      "Creative workshops"
    ]
  }
}
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