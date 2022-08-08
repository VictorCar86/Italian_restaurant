import React from 'react'
import "./PlatesMenu.css"

const PlatesMenu = ({title, alt, imgSrc}) => {
  return (
    <article className='Item-container'>
        <img
            className='Item-container__img'
            src={imgSrc}
            alt={alt}
        />
        <h5 className='Item-container__title'>{title}</h5>
        <p className='Item-container__link'>View menu</p>
        <span className='Item-container__addon'></span>
    </article>
  )
}

export default PlatesMenu