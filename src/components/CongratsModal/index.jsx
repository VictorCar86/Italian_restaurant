import React from 'react'
import "./CongratsModal.css"
import ModalImg from '../../assets/images/addons/modal.jpg'
import ReginaLogoImg from '../../assets/images/addons/la-regina-logo.png'

const CongratsModal = ({ children }) => {
  return (
    <div className='CongratsModal'>
        <img className='CongratsModal__img' src={ModalImg} alt="La regina logo" />
        <div className='CongratsModal__info'>
            <img className='CongratsModal__info__img' src={ReginaLogoImg} alt="Background of blue neon waves" />
            { children }
        </div>
    </div>
  )
}

export default CongratsModal