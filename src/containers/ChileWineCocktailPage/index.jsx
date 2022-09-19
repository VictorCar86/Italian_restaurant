import React from 'react'
import "./ChileWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import chileTinyImg from '@drinks/chile-wc.jpg'
import chileBigImg from '@drinks/chile-wc-big.jpg'
import chileanProducts from '../../utils/chileanProducts'

const ChileWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Chile'
        imgTinySrc={chileTinyImg}
        imgBigSrc={chileBigImg}
        imgAlt={"Huge cup with ice to maintain cold a bottle of wine"}
        products={chileanProducts}
    />
  )
}

export default ChileWineCocktailPage