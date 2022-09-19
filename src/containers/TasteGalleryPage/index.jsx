import React from 'react'
import "./TasteGalleryPage.css"
import PageTemplate from '../../components/PageTemplate'
import SecondaryNav from '../../components/SecondaryNav'
import Title from '../../components/Title'
import ArticleInfo from '../../components/ArticleInfo'
import tasteGalleryTinyImg from '@gallery/taste_gallery.jpg'
import tasteGalleryBigImg from '@gallery/taste_gallery-big.jpg'
import mainPlateBigImg from '@gallery/main-plate-big.jpg'
import mainPlateTinyImg from '@gallery/main-plate.jpg'
import gallery1TinyImg from '@gallery/gallery-1.jpg'
import gallery1BigImg from '@gallery/gallery-1-big.jpg'
import gallery2TinyImg from '@gallery/gallery-2.jpg'
import gallery2BigImg from '@gallery/gallery-2-big.jpg'
import gallery3TinyImg from '@gallery/gallery-3.jpg'
import gallery3BigImg from '@gallery/gallery-3-big.jpg'
import gallery4TinyImg from '@gallery/gallery-4.jpg'
import gallery4BigImg from '@gallery/gallery-4-big.jpg'
import gallery5TinyImg from '@gallery/gallery-5.jpg'
import gallery5BigImg from '@gallery/gallery-5-big.jpg'
import gallery6TinyImg from '@gallery/gallery-6.jpg'
import gallery6BigImg from '@gallery/gallery-6-big.jpg'
import tasteGalleryArtTinyImg from '@articles/article-taste-gallery.jpg'
import tasteGalleryArtBigImg from '@articles/article-taste-gallery-big.jpg'

const TasteGalleryPage = () => {
  return (
    <PageTemplate
        imgTinySrc={tasteGalleryTinyImg}
        imgBigSrc={tasteGalleryBigImg}
        imgAlt={"Room with candle illumination a decorated with bottles of wine"}
    >
        <SecondaryNav titlePage={'Taste gallery'} />
        <Title title={'Taste gallery'} />
        <picture className='TasteGalleryPage__main-plate'>
          <source srcSet={mainPlateTinyImg} media="(max-width: 768px)" />
          <img className='TasteGalleryPage__main-plate__img' src={mainPlateBigImg} alt="" />
          <div className='TasteGalleryPage__main-plate__addon'></div>
        </picture>
        <section className='TasteGalleryPage__grid'>
          <picture>
            <source srcSet={gallery1TinyImg} media="(max-width: 768px)" />
            <img className='TasteGalleryPage__grid__img' src={gallery1BigImg} alt="" />
          </picture>
          <picture>
            <source srcSet={gallery2TinyImg} media="(max-width: 768px)" />
            <img className='TasteGalleryPage__grid__img' src={gallery2BigImg} alt="" />
          </picture>
          <p>We are always happy to hear your suggestions and wishes!</p>
          <picture>
            <source srcSet={gallery3TinyImg} media="(max-width: 768px)" />
            <img className='TasteGalleryPage__grid__img' src={gallery3BigImg} alt="" />
          </picture>
          <p>
            Our restaurant is glad to see our
            dear guests in the world of delicious
            and exquisite food, cooked
            according to the best Italian recipes
          </p>
          <picture>
            <source srcSet={gallery4TinyImg} media="(max-width: 768px)" />
            <img className='TasteGalleryPage__grid__img' src={gallery4BigImg} alt="" />
          </picture>
          <picture>
            <source srcSet={gallery5TinyImg} media="(max-width: 768px)" />
            <img className='TasteGalleryPage__grid__img' src={gallery5BigImg} alt="" />
          </picture>
          <picture>
            <source srcSet={gallery6TinyImg} media="(max-width: 768px)" />
            <img className='TasteGalleryPage__grid__img' src={gallery6BigImg} alt="" />
          </picture>
        </section>
        <ArticleInfo
          imgTinySrc={tasteGalleryArtTinyImg}
          imgBigSrc={tasteGalleryArtBigImg}
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