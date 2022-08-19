import React from 'react'
import "./ItemWineCocktailMenu.css"

const ItemWineCocktailMenu = ({ title, year, category, glassPrice, carafePrice }) => {
  return (
    <article>
        <h3>{title}</h3>
        <div></div>
        {category === "champagne" &&
            <>
            <span>Glass 125ml</span>
            <span>{glassPrice}</span>
            <span>Carafe 375ml</span>
            <span>{carafePrice}</span>
            </>
        }
        {category === "wine" &&
            <>
            <p>Vintage {year}</p>
            <span>Glass 125ml</span>
            <span>{glassPrice}</span>
            <span>Carafe 375ml</span>
            <span>{carafePrice}</span>
            </>
        }
        {category === "cocktail" &&
            <>
            <p>Vintage {year}</p>
            <span>Glass 125ml</span>
            <span>{glassPrice}</span>
            </>
        }
    </article>
  )
}

export default ItemWineCocktailMenu