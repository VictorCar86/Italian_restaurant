import React, { useRef, useState } from 'react'
import "./CountryTemplateWineCocktail.css"
import PageTemplate from '../PageTemplate'
import SecondaryNav from '../SecondaryNav'
import Title from '../Title'
import PseudoButton from "../PseudoButton"
import ItemWineCocktailMenu from '../ItemWineCocktailMenu'
import ReservationSection from '../ReservationSection'
import ReservationFormSearch from '../ReservationFormSearch'

const ItalyWineCocktail = ({ title = "undefined", imgSrc, imgAlt, products }) => {

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

    function navbarChangeState(newValue){
        selectRef.current.value = "DEFAULT"
        setCategory(newValue.target.id)
    }

    function filterChangeState(newValue){
        setCategory(newValue.target.value)
    }

    const [category, setCategory] = useState("red-wine");

    const pages = [
        {
            title: "Wine&cocktail bar",
            route: "/wine-cocktail"
        },
    ];

    const selectRef = useRef(null)

    return (
        <PageTemplate
            imgSrc={imgSrc}
            imgAlt={imgAlt}
        >
            <SecondaryNav
                pages={pages}
                titlePage={title}
            />
            <Title title={`${title} wine&cocktail bar`} />
            <p className='description'>Select the desired type of drink for your convenience</p>
            <select
                className='CountryTemplateWineCocktail__accordion'
                onChange={(input) => filterChangeState(input)}
                name="filter"
                id="filter"
                ref={selectRef}
                defaultValue="DEFAULT"
            >
                <option className='CountryTemplateWineCocktail__accordion__option' value="DEFAULT" disabled>filter</option>
                <option className='CountryTemplateWineCocktail__accordion__option' value="newest">Newest wines</option>
                <option className='CountryTemplateWineCocktail__accordion__option' value="oldest">Oldest wines</option>
            </select>
            <nav className='CountryTemplateWineCocktail__navbar'>
                <label htmlFor="red-wine">
                    <PseudoButton
                        text={"red wines"}
                        active={category === "red-wine" ? true : false}
                    />
                    <input
                        onClick={input => navbarChangeState(input)}
                        type="radio"
                        name="wines-cocktail"
                        id="red-wine"
                        defaultChecked
                    />
                </label>
                <label htmlFor="white-wine">
                    <PseudoButton
                        text={"white wines"}
                        active={category === "white-wine" ? true : false}
                    />
                    <input
                        onClick={input => navbarChangeState(input)}
                        type="radio"
                        name="wines-cocktail"
                        id="white-wine"
                    />
                </label>
                <label htmlFor="rose-wine">
                    <PseudoButton
                        text={"rose wines"}
                        active={category === "rose-wine" ? true : false}
                    />
                    <input
                        onClick={input => navbarChangeState(input)}
                        type="radio"
                        name="wines-cocktail"
                        id="rose-wine"
                    />
                </label>
                <label htmlFor="champagne">
                    <PseudoButton
                        text={"champagne"}
                        active={category === "champagne" ? true : false}
                    />
                    <input
                        onClick={input => navbarChangeState(input)}
                        type="radio"
                        name="wines-cocktail"
                        id="champagne"
                    />
                </label>
                <label htmlFor="cocktail">
                    <PseudoButton
                        text={"cocktails"}
                        active={category === "cocktail" ? true : false}
                    />
                    <input
                        onClick={input => navbarChangeState(input)}
                        type="radio"
                        name="wines-cocktail"
                        id="cocktail"
                    />
                </label>
            </nav>
            <section className='CountryTemplateWineCocktail__menu-section'>
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
                {category === "newest" &&
                    showMenu(
                        products.filter(item => item.year)
                            .sort((a, b) => b.year - a.year)
                    )
                }
                {category === "oldest" &&
                    showMenu(
                        products.filter(item => item.year)
                            .sort((a, b) => a.year - b.year)
                    )
                }
            </section>
        </PageTemplate>
    )
}

export default ItalyWineCocktail