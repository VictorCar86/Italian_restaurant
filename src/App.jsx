import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import MainPresentation from './components/MainPresentation'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import Reservation from './components/Reservation'

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MainPresentation />
        <AboutUs />
        <Menu />
        <Reservation />
      </main>
    </>
  )
}

export default App