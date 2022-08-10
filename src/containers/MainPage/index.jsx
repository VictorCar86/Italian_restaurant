import React from 'react'
import "./MainPage.css"
import Navbar from '../../components/Navbar'
import MainPresentation from '../../components/MainPresentation'
import AboutUs from '../../components/AboutUs'
import Menu from '../../components/Menu'
import Reservation from '../../components/Reservation'
import ReservationFormSearch from '../../components/ReservationFormSearch'

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
        <Reservation>
          <ReservationFormSearch />
        </Reservation>
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  )
}

export default MainPage