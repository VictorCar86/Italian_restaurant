import React from 'react'
import "./MenuItemPage.css"
import Navbar from '../../components/Navbar'

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
            <li className='MenuItemPage-main__nav__ul__item'>Home {">>"}</li>
            <li className='MenuItemPage-main__nav__ul__item'>Menu {">>"}</li>
            <li className='MenuItemPage-main__nav__ul__item'>Breakfast</li>
          </ul>
        </nav>
        <h2 className='MenuItemPage-main__title title'>Breakfast</h2>
        <span className='title__addon'></span>
        <p className='MenuItemPage-main__description'>6 am - 12 pm 7 days</p>
      </main>
    </>
  )
}

export default MenuItemPage