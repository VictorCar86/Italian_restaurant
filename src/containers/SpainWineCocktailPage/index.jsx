import React from 'react'
import "./SpainWineCocktailPage.css"
import CountryTemplateWineCocktail from "../../components/CountryTemplateWineCocktail"
import spainTinyImg from '@drinks/spain-wc.jpg'
import spainBigImg from '@drinks/spain-wc-big.jpg'
import spanishProducts from '../../utils/spanishProducts'

const SpainWineCocktailPage = () => {
  return (
    <CountryTemplateWineCocktail
        title='Spain'
        imgTinySrc={spainTinyImg}
        imgBigSrc={spainBigImg}
        imgAlt={"Showing a bottle's collection of red wine"}
        products={spanishProducts}
    />
  )
}

export default SpainWineCocktailPage