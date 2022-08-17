import React from 'react'
import "./MainPresentation.css"
import FacebookIcon from '../Icons/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import EmailIcon from '../Icons/EmailIcon'

const MainPresentation = () => {
  return (
    <section className='MainPresentation'>
        <div className='MainPresentation__gallery'>
            <aside className='MainPresentation__gallery__aside'>
                <span className='MainPresentation__gallery__link'>taste gallery</span>
                <span className='MainPresentation__gallery__addon'></span>
            </aside>
            <img
              className='MainPresentation__gallery__image'
              src={require("../../assets/images/fallon-travels.jpg")}
              alt="Restaurant image"
            />
        </div>
        <article className='MainPresentation__contact-info-container'>
          <section className='MainPresentation__social-media-container'>
            <FacebookIcon />
            <InstagramIcon />
            <EmailIcon />
          </section>
          <section className='MainPresentation__contacts-container'>
            <aside className='MainPresentation__contacts-container__info'>
                <span className='MainPresentation__contacts-container__link'>contacts</span>
                <span className='MainPresentation__contacts-container__addon'></span>
            </aside>
          </section>
        </article>
        <div className='MainPresentation__main-description'>
          <h1 className='MainPresentation__main-description__title'>La Regina</h1>
          <p className='MainPresentation__main-description__subtitle'>A taste of Italy on your table <br /> every day</p>
        </div>
    </section>
  )
}

export default MainPresentation