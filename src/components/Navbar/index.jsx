import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img className='navbar__regina-logo' src={require("../../assets/images/la-regina-logo.png")} alt="La Regina logo" />
        <ul className='navbar__list-item'>
            <li>about restaurant</li>
            <li>menu</li>
            <li>team</li>
            <li>wine&coctail bar</li>
            <li className='navbar__list-item--reserve'>reservation</li>
        </ul>
    </nav>
  )
}

export default Navbar