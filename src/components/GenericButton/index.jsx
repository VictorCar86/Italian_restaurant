import React from 'react'
import "./GenericButton.css"

const GenericButton = ({ text = "", onClick = null }) => {
  return (
    <button
        className='GenericButton'
        type='submit'
        onClick={onClick}
    >
        { text }
    </button>
  )
}

export default GenericButton