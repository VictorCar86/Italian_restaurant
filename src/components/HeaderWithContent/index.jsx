import React from 'react'
import "./HeaderWithContent.css"
import Navbar from '../Navbar'

const HeaderWithContent = ({ specialNav, imgSrc, imgAlt, children }) => {
  return (
    <>
      <header className='HeaderWithContent-header'>
        <Navbar special={specialNav}/>
        <img className='HeaderWithContent-header__img' src={imgSrc} alt={imgAlt} />
      </header>
      <main className='HeaderWithContent-main'>
        { children }
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  )
}

export default HeaderWithContent