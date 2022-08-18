import React from 'react'
import "./ItalyWineCocktail.css"
import PageTemplate from '../../components/PageTemplate'
import SecondaryNav from '../../components/SecondaryNav'
import Title from '../../components/Title'

const ItalyWineCocktail = () => {

    const pages = [
        {
            title: "Wine&cocktail bar",
            route: "/wine-cocktail"
        },
    ]

    return (
        <PageTemplate
        imgSrc={require("../../assets/images/italy-wc-big.jpg")}>
            <SecondaryNav
                pages={pages}
                titlePage='Italy'
            />
            <Title title={"Italy wine&cocktail bar"} />
            <p className='description'>Select the desired type of drink for your convenience</p>
        </PageTemplate>
    )
}

export default ItalyWineCocktail