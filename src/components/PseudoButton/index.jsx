import React from 'react'
import "./PseudoButton.css"
import { Link } from "react-router-dom"

const index = ({ text, linkTo = "" }) => {
    if (linkTo.length !== 0){
      return (
        <button className='PseudoButton'>
          <Link to={linkTo}>
            <span className='PseudoButton-info'>{text}</span>
          </Link>
          <div className='PseudoButton-addon'></div>
        </button>
      )
    } else {
      return (
        <span className='PseudoButton'>
          <span className='PseudoButton-info'>{text}</span>
          <div className='PseudoButton-addon'></div>
        </span>
      )
    }
}

export default index