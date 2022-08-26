import React from 'react'
import "./ItalyWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import italyImg from '@drinks/italy-wc-big.jpg'
import italianProducts from '../../utils/italianProducts'

const ItalyWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title="Italy"
        imgSrc={italyImg}
        imgAlt={"Two cups of red wine close to a bottle"}
        products={italianProducts}
    />
  )
}

export default ItalyWineCocktailPage