import React from 'react'
import './InfoBlock.css'

const InfoBlock = ({emoji, title, description}) => {
  return (
    <div className='info container'>
        <span className='info__emoji'>{emoji}</span>
        <br/>
        <h1 className="info__title">{title}</h1>
        <p className="info__text">{description}</p>
    </div>
  )
}

export default InfoBlock