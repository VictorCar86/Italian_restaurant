import React from 'react'
import "./PortugalWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import portugalTinyImg from '@drinks/portugal-wc.jpg'
import portugalBigImg from '@drinks/portugal-wc-big.jpg'
import portugueseProducts from '../../utils/portugueseProducts'

const PortugalWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Portugal'
        imgTinySrc={portugalTinyImg}
        imgBigSrc={portugalBigImg}
        imgAlt={"Selected collevtion of bottles from portugal"}
        products={portugueseProducts}
    />
  )
}

export default PortugalWineCocktailPage