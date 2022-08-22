import React, { useState } from 'react'
import "./ItalyWineCocktail.css"
import products from "../../utils/products"
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
    ];

    function showMenu(items) {
        return items.map((item, index) => {
            return (
                <ItemWineCocktailMenu
                    title={item.title}
                    year={item.year}
                    category={item.category}
                    glassPrice={item.glassPrice}
                    carafePrice={item.carafePrice}
                    key={index}
                />
            )
        })
    }

    const [category, setCategory] = useState("red-wine");

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
            <select className='ItalyWineCocktail__accordion' name="filter" id="filter" defaultValue="DEFAULT">
                <option value="DEFAULT" disabled>filter</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <nav className='ItalyWineCocktail__navbar'>
                <label htmlFor="red-wine">
                    <PseudoButton
                        text={"red wines"}
                        active={category === "red-wine" ? true : false}
                    />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="red-wine" defaultChecked />
                </label>
                <label htmlFor="white-wine">
                    <PseudoButton
                        text={"white wines"}
                        active={category === "white-wine" ? true : false}
                    />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="white-wine" />
                </label>
                <label htmlFor="rose-wine">
                    <PseudoButton
                        text={"rose wines"}
                        active={category === "rose-wine" ? true : false}
                    />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="rose-wine" />
                </label>
                <label htmlFor="champagne">
                    <PseudoButton
                        text={"champagne"}
                        active={category === "champagne" ? true : false}
                    />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="champagne" />
                </label>
                <label htmlFor="cocktail">
                    <PseudoButton
                        text={"cocktails"}
                        active={category === "cocktail" ? true : false}
                    />
                    <input onClick={input => changeState(input)} type="radio" name="wines-cocktail" id="cocktail" />
                </label>
            </nav>
            <section className='ItalyWineCocktail__menu-section'>
                {category === "red-wine" &&
                    showMenu(products.filter(item => item.subcategory === category))
                }
                {category === "white-wine" &&
                    showMenu(products.filter(item => item.subcategory === category))
                }
                {category === "rose-wine" &&
                    showMenu(products.filter(item => item.subcategory === category))
                }
                {category === "champagne" &&
                    showMenu(products.filter(item => item.category === category))
                }
                {category === "cocktail" &&
                    showMenu(products.filter(item => item.category === category))
                }
            </section>
        </PageTemplate>
    )
}

export default ItalyWineCocktail