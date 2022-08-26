import React from 'react'
import "./MainPresentation.css"
import restaurantImg from '@addons/fallon-travels.jpg'
import FacebookIcon from '../Icons/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import EmailIcon from '../Icons/EmailIcon'
import PseudoButton from '../PseudoButton'

const MainPresentation = () => {
  return (
    <section className='MainPresentation'>
        <div className='MainPresentation__gallery'>
            <aside className='MainPresentation__gallery__aside'>
                <PseudoButton text={"taste gallery"} linkTo="/taste-gallery" />
            </aside>
            <img
              className='MainPresentation__gallery__image'
              src={restaurantImg}
              alt="Restaurant decoration from Italy"
            />
        </div>
        <article className='MainPresentation__contact-info-container'>
          <section className='MainPresentation__social-media-container'>
            <FacebookIcon />
            <InstagramIcon />
            <EmailIcon />
          </section>
          <section className='MainPresentation__contacts-container'>
            <PseudoButton text={"contacts"} linkTo="#" />
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