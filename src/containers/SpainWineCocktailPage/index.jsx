import React from 'react'
import "./SpainWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import spanishProducts from '../../utils/spanishProducts'

const SpainWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Spain'
        imgSrc={require("../../assets/images/spain-wc-big.jpg")}
        imgAlt={"two glasses of red wine next to a wine bottle"}
        products={spanishProducts}
    />
  )
}

export default SpainWineCocktailPage