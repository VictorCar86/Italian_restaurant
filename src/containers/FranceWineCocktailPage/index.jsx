import React from 'react'
import "./FranceWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import frenchProducts from '../../utils/frenchProducts'

const FranceWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='France'
        imgSrc={require("../../assets/images/spain-wc-big.jpg")}
        imgAlt={"two glasses of red wine next to a wine bottle"}
        products={frenchProducts}
    />
  )
}

export default FranceWineCocktailPage