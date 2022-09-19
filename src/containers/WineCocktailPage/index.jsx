import React from 'react'
import "./WineCocktailPage.css"
import { Link } from "react-router-dom"
import PageTemplate from '@components/PageTemplate'
import SecondaryNav from '@components/SecondaryNav'
import Title from '@components/Title'
import DescriptionInfo from "@components/DescriptionInfo"
import ArticleInfo from "@components/ArticleInfo"
import wineItalyImg from '@drinks/wines-italy.jpg'
import wineSpainImg from '@drinks/wines-spain.jpg'
import wineFranceImg from '@drinks/wines-france.jpg'
import winePortugalImg from '@drinks/wines-portugal.jpg'
import wineChileImg from '@drinks/wines-chile.jpg'
import wineCocktailTinyImg from '@drinks/wine&cocktail.jpg'
import wineCocktailBigImg from '@drinks/wine&cocktail-big.jpg'
import wineCocktailDescImg from '@drinks/desc-wine&cocktail.jpg'
import wineCocktailArtTinyImg from '@articles/article-wine&cocktail.jpg'
import wineCocktailArtBigImg from '@articles/article-wine&cocktail-big.jpg'

const WineCocktailPage = () => {

  const staticTitle = (<>
                  <span style={{"marginRight": "-6px", "fontSize": "inherit"}}>
                    Wine&
                  </span>
                  <> cocktail bar</>
                </>);

  const winesInfo = [
    {
      title: "Italy",
      imgSrc: wineItalyImg,
      imgAlt: "",
      linkTo: "/wine-cocktail/italy",
    },
    {
      title: "Spain",
      imgSrc: wineSpainImg,
      imgAlt: "",
      linkTo: "/wine-cocktail/spain",
    },
    {
      title: "France",
      imgSrc: wineFranceImg,
      imgAlt: "",
      linkTo: "/wine-cocktail/france",
    },
    {
      title: "Portugal",
      imgSrc: winePortugalImg,
      imgAlt: "",
      linkTo: "/wine-cocktail/portugal",
    },
    {
      title: "Chile",
      imgSrc: wineChileImg,
      imgAlt: "",
      linkTo: "/wine-cocktail/chile",
    },
  ];

  function createWines(winesArray){
    return winesArray.map((wine, index) => {
      return (
        <li className='WineCocktailPage__slider-wines__ul__li' key={index}>
          <article className='WineCocktailPage__slider-wines__ul__li__article'>
            <img
              className='WineCocktailPage__slider-wines__ul__li__article__img'
              src={wine.imgSrc}
              alt={wine.imgAlt}
            />
            <h5 className='Item-title'>{wine.title}</h5>
            <p className='Item-link'>
              <Link to={wine.linkTo}>
                View menu
              </Link>
            </p>
            <div className='Item-addon'></div>
          </article>
        </li>
      )
    })
  }

  return (
    <PageTemplate
      imgTinySrc={wineCocktailTinyImg}
      imgBigSrc={wineCocktailBigImg}
      imgAlt={"cocktail with ice"}
    >
      <SecondaryNav titlePage={staticTitle} />
      <Title title={staticTitle} />
      <p className='WineCocktailPage__description description'>
        Our wine list is the result of a fine selection made
        with our head sommelier Ricardo Tolly
      </p>
      <article className='WineCocktailPage__article'>
        <img
          className='WineCocktailPage__article__img'
          src={wineCocktailDescImg}
          alt="Wine collection in front a wall"
        />
        <span className='WineCocktailPage__article__info description'>
          Our wines, have a strong personality and
          character related to a specific territory,
          as well as wines that can be drunk
          with pleasure. Territory, as well as wines
          for which elegance and balance are the
          main feature not forgetting the amazing
          value
        </span>
      </article>
      <DescriptionInfo description={"Choose The Country You Like"} />
      <section className='WineCocktailPage__slider-wines'>
        <ul className='WineCocktailPage__slider-wines__ul'>
          {!!winesInfo && createWines(winesInfo)}
        </ul>
      </section>
      <div className="WineCocktailPage__specialDescription">
        <DescriptionInfo
          description={"For any dietary requirements please ask your waiter or waitress"}
        />
      </div>
      <ArticleInfo
        imgTinySrc={wineCocktailArtTinyImg}
        imgBigSrc={wineCocktailArtBigImg}
        imgAlt={"Four glasses of wine served on a barrel"}
        description={"The best wine is the wine that the person who drinks it likes best"}
      />
    </PageTemplate>
  )
}

export default WineCocktailPage