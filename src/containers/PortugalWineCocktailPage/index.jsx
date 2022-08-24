import React from 'react'
import "./PortugalWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import portugueseProducts from '../../utils/portugueseProducts'

const PortugalWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Portugal'
        imgSrc={require("../../assets/images/spain-wc-big.jpg")}
        imgAlt={"two glasses of red wine next to a wine bottle"}
        products={portugueseProducts}
    />
  )
}

export default PortugalWineCocktailPage