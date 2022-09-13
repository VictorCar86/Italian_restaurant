import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import reginaLogoImg from '@addons/la-regina-logo.png'
import AlignerIcon from '../Icons/AlignerIcon'
import ReservationIcon from '../Icons/ReservationIcon'
import RightArrowsIcon from '../Icons/RightArrowsIcon'

const Navbar = ({special = false}) => {

  const [modalMenu, setModalMenu] = useState(false)
  const [modalClass, setModaClass] = useState("")

  const toggleModal = () => {
    setModaClass("")
    if (!modalMenu){
      setModalMenu(prev => !prev)
    }
    else {
      setModaClass("modalNavbar--modalMenuOFF")
      setTimeout(
        () => setModalMenu(prev => !prev),
        500
      )
    }
  }

  const closeModalAuto = () => {
    setModalMenu(false)
  }

  return (
    <nav className='navbar'>
        <button className='navbar__aligner' onClick={toggleModal} type='button'>
          <AlignerIcon />
        </button>
        {modalMenu && (
          <nav className={`modalNavbar ${modalClass}`}>
            <ul className='modalNavbar__ul'>
              <li onClick={closeModalAuto}>
                <RightArrowsIcon />
                <Link to="/">
                  Home
                </Link>
              </li>
              <li onClick={closeModalAuto}>
                <RightArrowsIcon />
                <HashLink smooth to="/#about">
                  About restaurant
                </HashLink>
              </li>
              <li onClick={closeModalAuto}>
                <RightArrowsIcon />
                <HashLink smooth to="/#menu">
                  Menu
                </HashLink>
              </li>
              <li onClick={closeModalAuto}>
                <RightArrowsIcon />
                  Team
              </li>
              <li onClick={closeModalAuto}>
                <RightArrowsIcon />
                <HashLink smooth to="/wine-cocktail">
                  Wine&cocktail bar
                </HashLink>
              </li>
            </ul>
          </nav>
        )}
        <Link onClick={closeModalAuto} className='navbar__regina-link' to="/">
          <img className='navbar__regina-link__logo' src={reginaLogoImg} alt="La Regina logo" />
        </Link>
        <ul className='navbar__list-item'>
            <li>
              <HashLink smooth to="/#about">
                about restaurant
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#menu">
                menu
              </HashLink>
            </li>
            <li>team</li>
            <li>
              <HashLink smooth to="/wine-cocktail">
                wine&cocktail bar
              </HashLink>
            </li>
            <li className={special ? "navbar__list-item--special" : "navbar__list-item--reserve"}>
              <Link to="/reservation">
                reservation
              </Link>
            </li>
        </ul>
        <button className='navbar__reserv-button' type='button'>
          <Link to="/reservation">
            <ReservationIcon />
          </Link>
        </button>
    </nav>
  )
}

export default Navbar