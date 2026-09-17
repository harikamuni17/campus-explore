import React from 'react'
import '../styles/Club.css'
import {Link} from 'react-router-dom'

const ClubCard = ({name,text}) => {
  return (
     <section>
        <div className='card'>
            <h3>{name}</h3>
            <p>{text}</p>
            <Link to = {`/clubs/${name.toLowerCase().replaceAll(' ','-')}`}>View Club</Link>
        </div>
     </section>
  )
}

export default ClubCard