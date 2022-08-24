import React from 'react'
import "./WineCocktailPage.css"
import { Link } from "react-router-dom"
import PageTemplate from '../../components/PageTemplate'
import SecondaryNav from '../../components/SecondaryNav'
import Title from '../../components/Title'
import DescriptionInfo from "../../components/DescriptionInfo"
import ArticleInfo from "../../components/ArticleInfo"
import ReservationSection from "../../components/ReservationSection"
import ReservationFormSearch from "../../components/ReservationFormSearch"

const WineCocktailPage = () => {

  const title = "Wine&cocktail bar";

  const winesInfo = [
    {
      title: "Italy",
      imgSrc: require("../../assets/images/wines-italy.jpg"),
      imgAlt: "",
      linkTo: "/wine-cocktail/italy",
    },
    {
      title: "Spain",
      imgSrc: require("../../assets/images/wines-spain.jpg"),
      imgAlt: "",
      linkTo: "/wine-cocktail/spain",
    },
    {
      title: "France",
      imgSrc: require("../../assets/images/wines-france.jpg"),
      imgAlt: "",
      linkTo: "/wine-cocktail/france",
    },
    {
      title: "Portugal",
      imgSrc: require("../../assets/images/wines-portugal.jpg"),
      imgAlt: "",
      linkTo: "/wine-cocktail/portugal",
    },
    {
      title: "Chile",
      imgSrc: require("../../assets/images/wines-portugal.jpg"),
      imgAlt: "",
      linkTo: "/wine-cocktail/chile",
    },
  ];

  function createWines(winesArray){
    return winesArray.map((wine, index) => {
      return (
        <li className='WineCocktailPage__slider-wines__ul__li' key={index}>
          <article className='WineCocktailPage__slider-wines__ul__li__article'>
            <img className='WineCocktailPage__slider-wines__ul__li__article__img' src={wine.imgSrc} alt={wine.imgAlt} />
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
      <DescriptionInfo description={"Choose The Country You Like"} />
      <section className='WineCocktailPage__slider-wines'>
        <ul className='WineCocktailPage__slider-wines__ul'>
          {!!winesInfo && createWines(winesInfo)}
        </ul>
      </section>
      <DescriptionInfo description={"For any dietary requirements please ask your waiter or waitress"} />
      <ArticleInfo
        imgSrc={require("../../assets/images/article-wine&cocktail-big.jpg")}
        description={"The best wine is the wine that the person who drinks it likes best"}
      />
      <ReservationSection>
        <ReservationFormSearch />
      </ReservationSection>
    </PageTemplate>
  )
}

export default WineCocktailPage