import React from 'react'
import "./MainPresentation.css"
import restaurantTinyImg from '@addons/fallon-travels.webp'
import restaurantBigImg from '@addons/fallon-travels-big.webp'
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
            <picture>
              <source srcSet={restaurantTinyImg} media="(max-width: 768px)" />
              <img
                className='MainPresentation__gallery__image'
                src={restaurantBigImg}
                alt="Restaurant decoration from Italy"
              />
            </picture>
        </div>
        <div className='MainPresentation__main-description'>
          <h1 className='MainPresentation__main-description__title'>La Regina</h1>
          <p className='MainPresentation__main-description__subtitle'>A taste of Italy on your table <br /> every day</p>
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
    </section>
  )
}

export default MainPresentation