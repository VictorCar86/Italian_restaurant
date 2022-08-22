import React from 'react'
import "./ItemFoodMenu.css"

const ItemFoodMenu = ({ title, price, description }) => {
  return (
    <article className='ItemFoodMenu'>
        <h3 className='ItemFoodMenu__title'>{title}</h3>
        <span className='ItemFoodMenu__price'>{price}</span>
        <div className='huge-divisor-addon'></div>
        <p className='ItemFoodMenu__description'>{description}</p>
    </article>
  )
}

export default ItemFoodMenu