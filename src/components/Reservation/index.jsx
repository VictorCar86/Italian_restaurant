import React from 'react'
import "./ReservationSection.css"

const ReservationSection = ({ children }) => {
  return (
    <section className='Reservation-section'>
        <h2 className='Reservation-section__title title'>Reservation</h2>
        <span className='title__addon'></span>
        <p className='description'>Welcome your visit</p>
        <div className='Reservation-section__relevant-description'>
          { children }
          <img className='Reservation-section__relevant-description__img' src={require("../../assets/images/la-regina-logo.png")} alt="La regina logo" />
          <div className='Reservation-section__relevant-description__addon'></div>
          <p>La Regina restaurant & fine dining, Via garibaldi 27</p>
          <p>47037 Rimini, Italy restaurant@laregina.com</p>
          <p>open: 10:00 am - 23:00 pm</p>
          <span>+396 89735896</span>
        </div>
    </section>
  )
}

export default ReservationSection