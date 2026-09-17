import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NotFound.css'
const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>404</h2>
        <h3>Page not found!</h3>
        <p>Sorry, the page you are looking for is not available</p>
        <Link to='/'>Go back to Home</Link>
    </div>
  )
}

export default NotFound