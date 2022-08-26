import React from 'react'
import "./PortugalWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import portugalImg from '@drinks/portugal-wc-big.jpg'
import portugueseProducts from '../../utils/portugueseProducts'

const PortugalWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Portugal'
        imgSrc={portugalImg}
        imgAlt={"Selected collevtion of bottles from portugal"}
        products={portugueseProducts}
    />
  )
}

export default PortugalWineCocktailPage