import React from 'react'
import "./MenuItemPage.css"
import Navbar from '../../components/Navbar'

const MenuItemPage = ({ plateImg, plateImgAlt }) => {
  return (
    <header className='MenuItemPage-header'>
      <Navbar special={true}/>
      <img className='MenuItemPage-header__img' src={plateImg} alt={plateImgAlt} />
    </header>
  )
}

export default MenuItemPage