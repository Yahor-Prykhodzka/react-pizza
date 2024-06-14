import React from 'react'
import './PizzaBlock.css'

const PizzaBlock = ({ id, image, price, title }) => {
  return (
    <article className='pizza-block'>
      <img className='pizza-block__image' src="" alt="" />
      <span className='pizza-block__name'></span>
    </article>
  )
}

export default PizzaBlock
