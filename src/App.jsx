import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Clubs from './Pages/Clubs'
import Events from './Pages/Events'
import ClubDetails from './Pages/ClubDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventDetails from './Pages/EventDetails'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
         <Navbar/>
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/clubs' element={<Clubs/>}/>
              <Route path='/events' element={<Events/>}/>
              <Route path='/clubs/:clubName' element={<ClubDetails/>}/>
              <Route path='/events/:eventName' element={<EventDetails/>}/>
              <Route path='*' element={<NotFound/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
