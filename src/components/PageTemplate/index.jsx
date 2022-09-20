import React from 'react'
import "./PageTemplate.css"
import Navbar from '../Navbar'
import ReservationSection from '../ReservationSection'
import ReservationFormSearch from '../ReservationFormSearch'

const PageTemplate = ({ specialNav, imgTinySrc, imgBigSrc, imgAlt, children }) => {
  return (
    <>
      <header className='PageTemplate-header'>
        <Navbar special={specialNav}/>
        <picture>
          <source srcSet={imgTinySrc} media="(max-width: 768px)" />
          <img
            className='PageTemplate-header__img'
            src={imgBigSrc}
            alt={imgAlt}
          />
        </picture>
      </header>
      <main className='PageTemplate-main BackgroundImgMain'>
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