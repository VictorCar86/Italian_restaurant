import React, { useState } from 'react'
import "./CongratsModal.css"
import ModalImg from '../../assets/images/addons/modal.webp'
import ReginaLogoImg from '../../assets/images/addons/la-regina-logo.webp'
import { useNavigate } from 'react-router-dom'

const CongratsModal = ({ toggleState, children }) => {

  const [modalClass, setModalClass] = useState("")

  const navigator = useNavigate()

  const closeModal = () => {
    setModalClass("CongratsModal--OFF")
    setTimeout(() => {
        toggleState(prev => !prev)
        navigator("/")
    }, 600)
  }

  return (
    <section className={`${modalClass} CongratsModal`} onClick={closeModal} >
      <div className='CongratsModal-container'>
          <img className='CongratsModal-container__img' src={ModalImg} alt="La regina logo" />
          <div className='CongratsModal-container__info'>
              <img className='CongratsModal-container__info__img' src={ReginaLogoImg} alt="Background of blue neon waves" />
              { children }
          </div>
      </div>
    </section>
  )
}

export default CongratsModal