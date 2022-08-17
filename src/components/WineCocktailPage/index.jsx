import React from 'react'
import "./WineCocktailPage.css"
import PageTemplate from '../PageTemplate'
import SecondaryNav from '../SecondaryNav'
import Title from '../Title'

const WineCocktailPage = () => {

  const title = "Wine&cocktail bar";

  return (
    <PageTemplate
      imgSrc={require("../../assets/images/wine&cocktail-big.jpg")}
      imgAlt={"cocktail with ice"}
    >
      <SecondaryNav titlePage={title} />
      <Title title={title} />
      <p className='description'>
        Our wine list is the result of a fine selection made <br />
        with our head sommelier Ricardo Tolly
      </p>
      <article className='WineCocktailPage__description'>
        <img className='WineCocktailPage__description__img' src={require("../../assets/images/desc-wine&cocktail.jpg")} alt="Wine collection in front a wall" />
        <span className='WineCocktailPage__description__info description'>
          Our wines, have a strong personality and
          character related to a specific territory,
          as well as wines that can be drunk
          with pleasure. Territory, as well as wines
          for which elegance and balance are the
          main feature not forgetting the amazing
          value
        </span>
      </article>
    </PageTemplate>
  )
}

export default WineCocktailPage