import React from 'react'
import "./PortugalWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import portugueseProducts from '../../utils/portugueseProducts'

const PortugalWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Portugal'
        imgSrc={require("../../assets/images/portugal-wc-big.jpg")}
        imgAlt={"Selected collevtion of bottles from portugal"}
        products={portugueseProducts}
    />
  )
}

export default PortugalWineCocktailPage