import React from 'react'
import "./AboutUs.css"
import Title from '../Title'
import chefTinyImg from '@addons/chef-cutting.webp'
import chefBigImg from '@addons/chef-cutting-big.webp'
import musicalImg from '@addons/musical.webp'

const AboutUs = () => {
  return (
    <section id='about' className='AboutUs-section'>
        <div className='AboutUs-container'>
            <aside className='AboutUs-container__main-description'>
                <Title title={"About Us"} />
                <p className='AboutUs-container__main-description__info'>
                    Our restaurant has become <br />
                    synonymous with high-quality <br />
                    Italian cuisine, served in a stylish <br />
                    yet casual setting.
                </p>
            </aside>
            <div className='AboutUs-container__hero'>
                <picture>
                    <source srcSet={chefTinyImg} media="(max-width: 768px)" />
                    <img className='AboutUs-container__hero__img' src={chefBigImg} alt="A chef cutting vegetables" />
                </picture>
                <div className='AboutUs-container__hero__info'>
                    <span className='line-addon'></span>
                    <p className='AboutUs-container__hero__info__description'>
                        Our dishes are based on
                        classic recipes from all over
                        Italy, these wonderful
                        dishes focus on authenticity
                        and seasonal ingredients.
                    </p>
                    <span className='line-addon'></span>
                </div>
            </div>
        </div>
        <div className='AboutUs-section__extra-info'>
            <aside className='AboutUs-section__extra-info__descrip-container'>
                <p className='AboutUs-section__extra-info__descrip-container__text'>
                    Restaurant la regina is one of the cozy
                    Italian restaurants in the center of Rome.
                    offering exquisite dishes to be enjoyed <br />
                    in a pleasant and comfortable
                    atmosphere.
                </p>
            </aside>
            <div className='AboutUs-section__extra-info__music-container'>
                <img className='AboutUs-section__extra-info__music-container__img' src={musicalImg} alt="Musical notes" />
                <span className='AboutUs-section__extra-info__music-container__text'>
                    Our food is like a piece of music
                    each in its place
                </span>
            </div>
        </div>
    </section>
  )
}

export default AboutUs