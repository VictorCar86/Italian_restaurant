import React from 'react'
import "./ChileWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import chileanProducts from '../../utils/chileanProducts'

const ChileWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Chile'
        imgSrc={require("../../assets/images/chile-wc-big.jpg")}
        imgAlt={"Huge cup with ice to maintain cold a bottle of wine"}
        products={chileanProducts}
    />
  )
}

export default ChileWineCocktailPage