import React from 'react'
import "./ItemFoodMenu.css"

const ItemFoodMenu = ({ title, price, description }) => {
  return (
    <article className='ItemFoodMenu'>
      <div className='ItemFoodMenu__mainInfo'>
        <h3 className='ItemFoodMenu__mainInfo__title'>{title}</h3>
        <span className='ItemFoodMenu__mainInfo__price'>{price}</span>
      </div>
      <div className='huge-divisor-addon'></div>
      <p className='ItemFoodMenu__description'>{description}</p>
    </article>
  )
}

export default ItemFoodMenu