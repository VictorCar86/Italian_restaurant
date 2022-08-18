import React from 'react'
import "./PlatesMenu.css"
import { Link } from "react-router-dom"

const PlatesMenu = ({ title, alt, imgSrc, linkTo = "/" }) => {
  return (
    <article className='PlatesMenu-container'>
        <img
            className='PlatesMenu-container__img'
            src={imgSrc}
            alt={alt}
        />
        <h5 className='Item-title'>{title}</h5>
        <p className='Item-link'>
          <Link to={linkTo}>
            View menu
          </Link>
        </p>
        <span className='Item-addon'></span>
    </article>
  )
}

export default PlatesMenu