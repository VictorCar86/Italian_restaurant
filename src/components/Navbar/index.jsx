import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = ({special = false}) => {
  return (
    <nav className='navbar'>
        <Link to="/">
          <img className='navbar__regina-logo' src={require("../../assets/images/la-regina-logo.png")} alt="La Regina logo" />
        </Link>
        <ul className='navbar__list-item'>
            <li>about restaurant</li>
            <li>
              <Link to="/#menu">
                menu
              </Link>
            </li>
            <li>team</li>
            <li>wine&cocktail bar</li>
            <li className={special ? "navbar__list-item--special" : "navbar__list-item--reserve"}>reservation</li>
        </ul>
    </nav>
  )
}

export default Navbar