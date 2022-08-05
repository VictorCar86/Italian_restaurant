import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import MainPresentation from './components/MainPresentation'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'

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
      </main>
    </>
  )
}

export default App