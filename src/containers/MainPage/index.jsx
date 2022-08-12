import React from 'react'
import "./MainPage.css"
import Navbar from '../../components/Navbar'
import MainPresentation from '../../components/MainPresentation'
import AboutUs from '../../components/AboutUs'
import Menu from '../../components/Menu'
import ReservationFormSearch from '../../components/ReservationFormSearch'
import ReservationSection from '../../components/ReservationSection'

const MainPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MainPresentation />
        <AboutUs />
        <Menu />
        <ReservationSection>
          <ReservationFormSearch />
        </ReservationSection>
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  )
}

export default MainPage