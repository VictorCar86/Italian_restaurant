import React from 'react'
import "./PlatesMenu.css"
import { Link } from "react-router-dom"

const PlatesMenu = ({ title, alt, imgSrc, linkTo = "/" }) => {
  return (
    <article className='Item-container'>
        <img
            className='Item-container__img'
            src={imgSrc}
            alt={alt}
        />
        <h5 className='Item-container__title'>{title}</h5>
        <p className='Item-container__link'>
          <Link to={linkTo}>
            View menu
          </Link>
        </p>
        <span className='Item-container__addon'></span>
    </article>
  )
}

export default PlatesMenu