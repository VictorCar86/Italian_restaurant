import React from 'react'
import "./ItalyWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import italianProducts from '../../utils/italianProducts'

const ItalyWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title="Italy"
        imgSrc={require("../../assets/images/italy-wc-big.jpg")}
        imgAlt={"Two cups of red wine close to a bottle"}
        products={italianProducts}
    />
  )
}

export default ItalyWineCocktailPage