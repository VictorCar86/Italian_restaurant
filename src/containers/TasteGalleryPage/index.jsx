import React from 'react'
import "./TasteGalleryPage.css"
import PageTemplate from '../../components/PageTemplate'
import SecondaryNav from '../../components/SecondaryNav'
import Title from '../../components/Title'
import ArticleInfo from '../../components/ArticleInfo'
import tasteGalleryBigImg from '@gallery/taste_gallery-big.jpg'
import mainPlateBigImg from '@gallery/main-plate-big.jpg'
import mainPlateTinyImg from '@gallery/main-plate.jpg'
import gallery1Img from '@gallery/gallery-1.jpg'
import gallery2Img from '@gallery/gallery-2.jpg'
import gallery3Img from '@gallery/gallery-3.jpg'
import gallery4Img from '@gallery/gallery-4.jpg'
import gallery5Img from '@gallery/gallery-5.jpg'
import gallery6Img from '@gallery/gallery-6.jpg'
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
          <img className='TasteGalleryPage__grid__img' src={gallery1Img} alt="" />
          {/* <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
          </picture> */}
          <img className='TasteGalleryPage__grid__img' src={gallery2Img} alt="" />
          {/* <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
          </picture> */}
          <p>We are always happy to hear your suggestions and wishes!</p>
          <img className='TasteGalleryPage__grid__img' src={gallery3Img} alt="" />
          {/* <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
          </picture> */}
          <p>
            Our restaurant is glad to see our
            dear guests in the world of delicious
            and exquisite food, cooked
            according to the best Italian recipes
          </p>
          <img className='TasteGalleryPage__grid__img' src={gallery4Img} alt="" />
          {/* <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
          </picture> */}
          <img className='TasteGalleryPage__grid__img' src={gallery5Img} alt="" />
          {/* <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
          </picture> */}
          <img className='TasteGalleryPage__grid__img' src={gallery6Img} alt="" />
          {/* <picture className=''>
            <source srcSet={""} media="(max-width: 850px)" />
          </picture> */}
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