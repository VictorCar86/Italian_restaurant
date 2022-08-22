import React from 'react'
import "./ItemWineCocktailMenu.css"

const ItemWineCocktailMenu = ({ title, year, category, glassPrice, carafePrice }) => {
  return (
    <article className='ItemWineCocktailMenu-container'>
        <h3 className='ItemWineCocktailMenu-container__title'>{title}</h3>
        <div className='huge-divisor-addon'></div>
        {category === "champagne" &&
            <>
            <span className='ItemWineCocktailMenu-container__description'>Glass 125ml</span>
            <span className='ItemWineCocktailMenu-container__price'>{glassPrice}</span>
            <span className='ItemWineCocktailMenu-container__description'>Carafe 375ml</span>
            <span className='ItemWineCocktailMenu-container__price'>{carafePrice}</span>
            </>
        }
        {category === "wine" &&
            <>
            <p className='ItemWineCocktailMenu-container__vintage'>Vintage {year}</p>
            <span className='ItemWineCocktailMenu-container__description'>Glass 125ml</span>
            <span className='ItemWineCocktailMenu-container__price'>{glassPrice}</span>
            <span className='ItemWineCocktailMenu-container__description'>Carafe 375ml</span>
            <span className='ItemWineCocktailMenu-container__price'>{carafePrice}</span>
            </>
        }
        {category === "cocktail" &&
            <>
            <span className='ItemWineCocktailMenu-container__description'>Glass 150ml</span>
            <span className='ItemWineCocktailMenu-container__price'>{glassPrice}</span>
            </>
        }
    </article>
  )
}

export default ItemWineCocktailMenu