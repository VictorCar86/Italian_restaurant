import React from 'react'
import "./MainPage.css"
import Navbar from '../../components/Navbar'
import MainPresentation from '../../components/MainPresentation'
import AboutUs from '../../components/AboutUs'
import MenuSection from '../../components/MenuSection'
import ReservationFormSearch from '../../components/ReservationFormSearch'
import ReservationSection from '../../components/ReservationSection'

const MainPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='MainPage__main-section'>
        <MainPresentation />
        <AboutUs />
        <MenuSection />
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