import React from 'react'
import "./PageTemplate.css"
import Navbar from '../Navbar'
import ReservationSection from '../ReservationSection'
import ReservationFormSearch from '../ReservationFormSearch'

const PageTemplate = ({ specialNav, imgSrc, imgAlt, children }) => {
  return (
    <>
      <header className='PageTemplate-header'>
        <Navbar special={specialNav}/>
        <img className='PageTemplate-header__img' src={imgSrc} alt={imgAlt} />
      </header>
      <main className='PageTemplate-main'>
        { children }
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

export default PageTemplate