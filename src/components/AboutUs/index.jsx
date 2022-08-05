import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <section className='AbousUs-section'>
        <div className='AbousUs-container'>
            <aside className='AbousUs-container__main-description'>
                <h2 className='AbousUs-container__main-description__title title'>About us</h2>
                <span className='title__addon'></span>
                <p className='AbousUs-container__main-description__info'>
                    Our restaurant has become <br />
                    synonymous with high-quality <br />
                    Italian cuisine, served in a stylish <br />
                    yet casual setting.
                </p>
            </aside>
            <div className='AbousUs-container__hero'>
                <img className='AbousUs-container__hero__img' src={require("../../assets/images/pylyp-sukhenko-chef-unsplash.jpg")} alt="A chef cutting vegetables" />
                <div className='AbousUs-container__hero__info'>
                    <span className='AbousUs-container__hero__info__addon'></span>
                    <p className='AbousUs-container__hero__info__description'>
                        Our dishes are based on
                        classic recipes from all over
                        Italy, these wonderful
                        dishes focus on authenticity
                        and seasonal ingredients.
                    </p>
                    <span className='AbousUs-container__hero__info__addon'></span>
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
                <img className='AboutUs-section__extra-info__music-container__img' src={require("../../assets/images/musical.png")} alt="Musical notes" />
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