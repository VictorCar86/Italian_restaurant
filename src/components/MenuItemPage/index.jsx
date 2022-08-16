import React from 'react'
import "./MenuItemPage.css"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import RightArrows from '../Icons/RightArrows'
import Title from '../Title'
import ReservationSection from '../ReservationSection'
import ReservationFormSearch from '../ReservationFormSearch'
import DescriptionInfo from '../DescriptionInfo'
import HeaderWithContent from '../HeaderWithContent'

const MenuItemPage = ({ plateImg, plateImgAlt, title, schedule, children, article }) => {
  return (
    <>
      <HeaderWithContent
        specialNav={true}
        imgSrc={plateImg}
        imgAlt={plateImgAlt}
      >

        <nav className='MenuItemPage-main__nav'>
          <ul className='MenuItemPage-main__nav__ul'>
            <li className='MenuItemPage-main__nav__ul__item'>
              <Link to="/">
                Home
              </Link>
            </li>
            <RightArrows />
            <li className='MenuItemPage-main__nav__ul__item'>
              <HashLink smooth to="/#menu">
                Menu
              </HashLink>
            </li>
            <RightArrows />
            <li className='MenuItemPage-main__nav__ul__item MenuItemPage-main__nav__ul__item--actual'>{title}</li>
          </ul>
        </nav>

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

        <ReservationSection>
          <ReservationFormSearch />
        </ReservationSection>

      </HeaderWithContent>
    </>
  )
}

export default MenuItemPage