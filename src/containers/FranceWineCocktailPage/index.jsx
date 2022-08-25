import React from 'react'
import "./FranceWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import frenchProducts from '../../utils/frenchProducts'

const FranceWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='France'
        imgSrc={require("../../assets/images/france-wc-big.jpg")}
        imgAlt={"A lot of bottles one on top of another"}
        products={frenchProducts}
    />
  )
}

export default FranceWineCocktailPage