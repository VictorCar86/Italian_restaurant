import React from 'react'
import "./TasteGalleryPage.css"
import PageTemplate from '../../components/PageTemplate'
import SecondaryNav from '../../components/SecondaryNav'
import Title from '../../components/Title'
import ArticleInfo from '../../components/ArticleInfo'
import tasteGalleryBigImg from '@gallery/taste_gallery-big.jpg'
import mainPlateBigImg from '@gallery/main-plate-big.jpg'
import mainPlateTinyImg from '@gallery/main-plate.jpg'
import tasteGalleryArtBigImg from '@articles/article-taste-gallery-big.jpg'

const TasteGalleryPage = () => {
  return (
    <PageTemplate
        imgSrc={tasteGalleryBigImg}
        imgAlt={"Room with candle illumination a decorated with bottles of wine"}
    >
        <SecondaryNav titlePage={'Taste gallery'} />
        <Title title={'Taste gallery'} />
        <picture className='TasteGalleryPage__main-plate'>
          <source srcSet={mainPlateTinyImg} media="(max-width: 850px)" />
          <img className='TasteGalleryPage__main-plate__img' src={mainPlateBigImg} alt="" />
          <div className='TasteGalleryPage__main-plate__addon'></div>
        </picture>
        <section className='TasteGalleryPage__grid'>
          <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
            <img className='' src={""} alt="" />
          </picture>
          <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
            <img className='' src={""} alt="" />
          </picture>
          <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
            <img className='' src={""} alt="" />
          </picture>
          <p>We are always happy to hear your suggestions and wishes!</p>
          <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
            <img className='' src={""} alt="" />
          </picture>
          <p>
            Our restaurant is glad to see our
            dear guests in the world of delicious
            and exquisite food, cooked
            according to the best Italian recipes
          </p>
          <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
            <img className='' src={""} alt="" />
          </picture>
          <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
            <img className='' src={""} alt="" />
          </picture>
        </section>
        <ArticleInfo
          imgSrc={tasteGalleryArtBigImg}
          imgAlt={"Golden plate with a fork above"}
          description={<>
            The best wine is the wine
            that the person who
            drinks it likes best
          </>}
        />
    </PageTemplate>
  )
}

export default TasteGalleryPage