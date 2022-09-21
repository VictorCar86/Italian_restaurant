import React from 'react'
import "./MenuItemPage.css"
import PageTemplate from '../PageTemplate'
import SecondaryNav from '../SecondaryNav'
import Title from '../Title'
import DescriptionInfo from '../DescriptionInfo'

const MenuItemPage = ({
    imgTinySrc = "",
    imgBigSrc = "",
    imgAlt = "",
    title = "",
    schedule = "",
    children,
    article
  }) => {
  return (
    <>
      <PageTemplate
        specialNav={true}
        imgTinySrc={imgTinySrc}
        imgBigSrc={imgBigSrc}
        imgAlt={imgAlt}
      >
        <SecondaryNav
          pages={[ { title: "Menu", route: "/#menu"} ]}
          titlePage={title}
        />

        <Title title={title} />
        <p className='MenuItemPage-main__description'>{schedule}</p>

        <section className='MenuItemPage-main__menu-items-section'>
          {children}
        </section>

        <DescriptionInfo
          description={"For any dietary requirements please ask your waiter or waitress"}
        />

        <div className='MenuItemPage-main__article-container'>
          {article}
        </div>
      </PageTemplate>
    </>
  )
}

export default MenuItemPage