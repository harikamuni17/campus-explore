import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-bar">

      <div className="logo">
        Campus Explorer
      </div>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>Events</NavLink>
        <NavLink to="/clubs" className={({ isActive }) => isActive ? "active" : ""}>Clubs</NavLink>
      </div>

    </nav>
  )
}

export default Navbar