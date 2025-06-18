import React from 'react'

const Banner = ({ img }) => {
  return (
    <div className='bannerContainer'>
        <img src={img} alt="" />

        <div className='banenrOverlay'></div>
    </div>
  )
}

export default Banner