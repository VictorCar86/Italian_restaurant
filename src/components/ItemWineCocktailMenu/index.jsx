import React from 'react'
import "./ItemWineCocktailMenu.css"

const ItemWineCocktailMenu = ({ title, year, category, glassPrice, carafePrice }) => {
  return (
    <article className='ItemWineCocktailMenu-container'>
        <h3 className='ItemWineCocktailMenu-container__title'>{title}</h3>
        <div className='huge-divisor-addon'></div>
        {category === "champagne" &&
            <>
              <div className='ItemWineCocktailMenu-container__info'>
                <span className='ItemWineCocktailMenu-container__info__description'>Glass 125ml</span>
                <span className='ItemWineCocktailMenu-container__info__price'>{glassPrice}</span>
              </div>
              <div className='ItemWineCocktailMenu-container__info'>
                <span className='ItemWineCocktailMenu-container__info__description'>Carafe 375ml</span>
                <span className='ItemWineCocktailMenu-container__info__price'>{carafePrice}</span>
              </div>
            </>
        }
        {category === "wine" &&
            <>
              <p className='ItemWineCocktailMenu-container__vintage'>Vintage {year}</p>
              <div className='ItemWineCocktailMenu-container__info'>
                <span className='ItemWineCocktailMenu-container__info__description'>Glass 125ml</span>
                <span className='ItemWineCocktailMenu-container__info__price'>{glassPrice}</span>
              </div>
              <div className='ItemWineCocktailMenu-container__info'>
                <span className='ItemWineCocktailMenu-container__info__description'>Carafe 375ml</span>
                <span className='ItemWineCocktailMenu-container__info__price'>{carafePrice}</span>
              </div>
            </>
        }
        {category === "cocktail" &&
            <div className='ItemWineCocktailMenu-container__info'>
              <span className='ItemWineCocktailMenu-container__info__description'>Glass 150ml</span>
              <span className='ItemWineCocktailMenu-container__info__price'>{glassPrice}</span>
            </div>
        }
    </article>
  )
}

export default ItemWineCocktailMenu