import React from 'react'
import "./ItemMenu.css"

const ItemMenu = ({ title, price, description }) => {
  return (
    <article className='ItemMenu'>
        <h3 className='ItemMenu__title'>{title}</h3>
        <span className='ItemMenu__price'>{price}</span>
        <div className='ItemMenu__addon'></div>
        <p className='ItemMenu__description'>{description}</p>
    </article>
  )
}

export default ItemMenu