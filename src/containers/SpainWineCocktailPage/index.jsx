import React from 'react'
import "./SpainWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import spainImg from '@drinks/spain-wc-big.jpg'
import spanishProducts from '../../utils/spanishProducts'

const SpainWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Spain'
        imgSrc={spainImg}
        imgAlt={"Showing a bottle's collection of red wine"}
        products={spanishProducts}
    />
  )
}

export default SpainWineCocktailPage