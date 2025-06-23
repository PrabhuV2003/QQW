import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const WhatWeDoCards = ({ title, bgImg, description, onClick }) => {
  return (
    <div className='WhatWeDoCards' onClick={onClick}>
        <img src={bgImg} alt={title} />

        <div className='cardsContent'>
          <div className='cardTitle'>
            <h1>{title}</h1>
            <FaArrowRight />
          </div>

          {/* <p>{description.slice(0, 100) + '...'}</p> */}
        </div>
    </div>
  )
}

export default WhatWeDoCards