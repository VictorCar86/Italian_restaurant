import React from 'react'
import "./MenuItemPage.css"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import Navbar from '../Navbar'
import RightArrows from '../Icons/RightArrows'
import Title from '../Title'
import ReservationSection from '../ReservationSection'
import ReservationFormSearch from '../ReservationFormSearch'

const MenuItemPage = ({ plateImg, plateImgAlt, title, schedule, children, article }) => {
  return (
    <>
      <header className='MenuItemPage-header'>
        <Navbar special={true}/>
        <img className='MenuItemPage-header__img' src={plateImg} alt={plateImgAlt} />
      </header>
      <main className='MenuItemPage-main'>
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
        <p className='MenuItemPage-main__recommendation'>
          For any dietary requirements please
          ask your waiter or waitress
        </p>
        <div className='MenuItemPage-main__recommendation-addon'></div>
        <div className='MenuItemPage-main__article-container'>
          {article}
        </div>
        <ReservationSection>
          <ReservationFormSearch />
        </ReservationSection>
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  )
}

export default MenuItemPage