import React from 'react'
import "./ItalyWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import italyTinyImg from '@drinks/italy-wc.jpg'
import italyBigImg from '@drinks/italy-wc-big.jpg'
import italianProducts from '../../utils/italianProducts'

const ItalyWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title="Italy"
        imgTinySrc={italyTinyImg}
        imgBigSrc={italyBigImg}
        imgAlt={"Two cups of red wine close to a bottle"}
        products={italianProducts}
    />
  )
}

export default ItalyWineCocktailPage