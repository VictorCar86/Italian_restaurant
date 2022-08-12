import React from 'react'
import "./Title.css"

const Title = ({ title }) => {
  return (<>
        <div className='Title-container'>
            <h2 className='Title-container__title'>{title}</h2>
            <span className='Title-container__title-shadow'>{title}</span>
            <div className='Title-container__addon'></div>
        </div>
    </>
  )
}

export default Title