import React from 'react'
import "./Navbar.css"

const Navbar = ({special = false}) => {
  return (
    <nav className='navbar'>
        <img className='navbar__regina-logo' src={require("../../assets/images/la-regina-logo.png")} alt="La Regina logo" />
        <ul className='navbar__list-item'>
            <li>about restaurant</li>
            <li>menu</li>
            <li>team</li>
            <li>wine&cocktail bar</li>
            <li className={special ? "navbar__list-item--special" : "navbar__list-item--reserve"}>reservation</li>
        </ul>
    </nav>
  )
}

export default Navbar