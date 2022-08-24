import React from 'react'
import "./ChileWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import chileanProducts from '../../utils/chileanProducts'

const ChileWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Chile'
        imgSrc={require("../../assets/images/spain-wc-big.jpg")}
        imgAlt={"two glasses of red wine next to a wine bottle"}
        products={chileanProducts}
    />
  )
}

export default ChileWineCocktailPage