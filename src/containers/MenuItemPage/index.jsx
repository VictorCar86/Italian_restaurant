import React from 'react'
import "./MenuItemPage.css"
import { Link } from "react-router-dom"
import Navbar from '../../components/Navbar'
import RightArrows from '../../components/Icons/RightArrows'
import ItemMenu from '../../components/ItemMenu'
import ArticleInfo from '../../components/ArticleInfo'
import ReservationSection from '../../components/ReservationSection'
import ReservationFormSearch from '../../components/ReservationFormSearch'

const MenuItemPage = ({ plateImg, plateImgAlt }) => {
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
              <Link to="/#menu">
                Menu
              </Link>
            </li>
            <RightArrows />
            <li className='MenuItemPage-main__nav__ul__item MenuItemPage-main__nav__ul__item--actual'>Breakfast</li>
          </ul>
        </nav>
        <h2 className='MenuItemPage-main__title title'>Breakfast</h2>
        <span className='title__addon'></span>
        <p className='MenuItemPage-main__description'>6 am - 12 pm 7 days</p>
        <section className='MenuItemPage-main__menu-items-section'>
          <ItemMenu
            title={"Bacon and eggs"}
            price={"$20"}
            description={"Organic bacon with your choice of eggs with fresh pumpkin and sourdough"}
          />
          <ItemMenu
            title={"Big breakfast"}
            price={"$35"}
            description={"Bacon, sausages, eggs, fresh tomato and spinach"}
          />
          <ItemMenu
            title={"Poached eggs and avocado"}
            price={"$15"}
            description={"Banana bread with your choice of spread and sausage"}
          />
          <ItemMenu
            title={"Gino"}
            price={"$10"}
            description={"Sauteed spinach&mushrooms with cheddar"}
          />
          <ItemMenu
            title={"Fresh toast"}
            price={"$25"}
            description={"Fresh toast With Bacon Strips"}
          />
        </section>
        <p className='MenuItemPage-main__recommendation'>
          For any dietary requirements please
          ask your waiter or waitress
        </p>
        <div className='MenuItemPage-main__recommendation-addon'></div>
        <div className='MenuItemPage-main__article-container'>
          <ArticleInfo
            img={require("../../assets/images/desserts.jpg")}
            altImg={"Toasted bread with grapes and butter"}
            description={
                `Breakfast is everything.
                the beginning. the first
                thing. it is the mouthful
                that is the commitment
                to a new day. ${<br />}
                A continuing life`
            }
          />
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