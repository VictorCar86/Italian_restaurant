import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import reginaLogoImg from '@addons/la-regina-logo.png'

const Navbar = ({special = false}) => {
  return (
    <nav className='navbar'>
        <Link to="/">
          <img className='navbar__regina-logo' src={reginaLogoImg} alt="La Regina logo" />
        </Link>
        <ul className='navbar__list-item'>
            <li>about restaurant</li>
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
            <li className={special ? "navbar__list-item--special" : "navbar__list-item--reserve"}>reservation</li>
        </ul>
    </nav>
  )
}

export default Navbar