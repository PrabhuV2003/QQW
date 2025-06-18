import React from 'react'

const PopupCard = ({ data, onClose }) => {

    if (!data) return null;

    const { title, description, bgImg } = data;

  return (
    <div>PopupCard</div>
  )
}

export default PopupCard