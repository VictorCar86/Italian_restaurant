import React, { useState } from 'react'
import "./ItalyWineCocktail.css"
import PageTemplate from '../../components/PageTemplate'
import SecondaryNav from '../../components/SecondaryNav'
import Title from '../../components/Title'
import PseudoButton from "../../components/PseudoButton"
import ItemWineCocktailMenu from '../../components/ItemWineCocktailMenu'

const ItalyWineCocktail = () => {

    const pages = [
        {
            title: "Wine&cocktail bar",
            route: "/wine-cocktail"
        },
    ]

    const [category, setCategory] = useState("red-wines");

    function changeState(input){
        setCategory(input.target.id)
    }

    return (
        <PageTemplate
        imgSrc={require("../../assets/images/italy-wc-big.jpg")}
        >
            <SecondaryNav
                pages={pages}
                titlePage='Italy'
            />
            <Title title={"Italy wine&cocktail bar"} />
            <p className='description'>Select the desired type of drink for your convenience</p>
            <nav className='ItalyWineCocktail-navbar'>
                <label htmlFor="red-wines">
                    <PseudoButton text={"red wines"} />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="red-wines" />
                </label>
                <label htmlFor="white-wines">
                    <PseudoButton text={"white wines"} />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="white-wines" />
                </label>
                <label htmlFor="rose-wines">
                    <PseudoButton text={"rose wines"} />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="rose-wines" />
                </label>
                <label htmlFor="champagne">
                    <PseudoButton text={"champagne"} />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="champagne" />
                </label>
                <label htmlFor="cocktails">
                    <PseudoButton text={"cocktails"} />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="cocktails" />
                </label>
            </nav>
            {category === "red-wines" &&
                <ItemWineCocktailMenu
                    title={"Lugana Riserva \"Cutulliano\", Pratello, Veneto"}
                    year={2018}
                    category={"wine"}
                    glassPrice={"$10.00"}
                    carafePrice={"$25.00"}
                />
            }
            {category === "white-wines" &&
                <p>white-wines</p>
            }
            {category === "rose-wines" &&
                <p>rose-wines</p>
            }
            {category === "champagne" &&
                <p>champagne</p>
            }
            {category === "cocktails" &&
                <p>cocktails</p>
            }
        </PageTemplate>
    )
}

export default ItalyWineCocktail