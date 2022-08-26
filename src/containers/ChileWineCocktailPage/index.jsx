import React from 'react'
import "./ChileWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import chileImg from '@drinks/chile-wc-big.jpg'
import chileanProducts from '../../utils/chileanProducts'

const ChileWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Chile'
        imgSrc={chileImg}
        imgAlt={"Huge cup with ice to maintain cold a bottle of wine"}
        products={chileanProducts}
    />
  )
}

export default ChileWineCocktailPage