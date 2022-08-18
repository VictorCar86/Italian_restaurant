import React from 'react'
import "./DescriptionInfo.css"

const DescriptionInfo = ({ description }) => {

  return (
    <>
        <p className="DescriptionInfo">
          {description}
        </p>
        <div className='DescriptionInfo-addon'></div>
    </>
  )
}

export default DescriptionInfo