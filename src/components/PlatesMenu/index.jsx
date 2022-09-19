import React from 'react'
import "./PlatesMenu.css"
import { Link } from "react-router-dom"

const PlatesMenu = ({ title, imgAlt, imgTinySrc, imgBigSrc, linkTo = "/" }) => {
  return (
    <article className='PlatesMenu-container'>
      <picture>
        <source srcSet={imgTinySrc} media="(max-width: 768px)" />
        <img
          className='PlatesMenu-container__img'
          src={imgBigSrc}
          alt={imgAlt}
        />
      </picture>
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