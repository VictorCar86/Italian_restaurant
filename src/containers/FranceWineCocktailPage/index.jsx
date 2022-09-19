import React from 'react'
import "./FranceWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import franceTinyImg from '@drinks/france-wc.jpg'
import franceBigImg from '@drinks/france-wc-big.jpg'
import frenchProducts from '../../utils/frenchProducts'

const FranceWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='France'
        imgTinySrc={franceTinyImg}
        imgBigSrc={franceBigImg}
        imgAlt={"A lot of bottles one on top of another"}
        products={frenchProducts}
    />
  )
}

export default FranceWineCocktailPage