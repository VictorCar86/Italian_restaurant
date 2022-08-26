import React from 'react'
import "./ReservationSection.css"
import Title from '../Title'
import reginaLogoImg from '@addons/la-regina-logo.png'

const ReservationSection = ({ children }) => {
  return (
    <section className='Reservation-section'>
        <Title title={"Reservation"} />
        <p className='description'>Welcome your visit</p>
        <div className='Reservation-section__relevant-description'>
          { children }
          <img className='Reservation-section__relevant-description__img' src={reginaLogoImg} alt="La regina logo" />
          <div className='Reservation-section__relevant-description__addon'></div>
          <p>La Regina restaurant & fine dining, Via garibaldi 27</p>
          <p>47037 Rimini, Italy restaurant@laregina.com</p>
          <p>open: 10:00 am - 23:00 pm</p>
          <span>396 89735896</span>
        </div>
    </section>
  )
}

export default ReservationSection