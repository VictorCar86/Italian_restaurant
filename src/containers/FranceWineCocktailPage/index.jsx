import React from 'react'
import "./FranceWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import franceImg from '@drinks/france-wc-big.jpg'
import frenchProducts from '../../utils/frenchProducts'

const FranceWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='France'
        imgSrc={franceImg}
        imgAlt={"A lot of bottles one on top of another"}
        products={frenchProducts}
    />
  )
}

export default FranceWineCocktailPage