import React from 'react'
import PageTemplate from '../../components/PageTemplate'
import SecondaryNav from '../../components/SecondaryNav'
import Title from '../../components/Title'

const TasteGalleryPage = () => {
  return (
    <PageTemplate
        imgSrc={require("../../assets/images/taste_gallery-big.jpg")}
        imgAlt={"Room with candle illumination a decorated with bottles of wine"}
    >
        <SecondaryNav titlePage={'Taste gallery'} />
        <Title title={'Taste gallery'} />
        <picture>
            <source srcSet={require("../../assets/images/main-plate-tg.jpg")} media="(max-width: 850px)" />
            <img src={require("../../assets/images/main-plate-big-tg.jpg")} alt="" />
        </picture>
    </PageTemplate>
  )
}

export default TasteGalleryPage