import React from 'react'
import { useState } from 'react'
import './PizzaBlock.css'

const PizzaBlock = ({ id, imageUrl, price, name, sizes, types }) => {
  const typesArr = ['Traditional', 'Thin']

  const [activeType,setActiveType] = useState(0)
  const [activeSize,setActiveSize] = useState(0)

  return (
    <article className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={name} />
      <span className="pizza-block__name">{name}</span>
      <div className="pizza-block__options">
        <ul className="pizza-block__options-list">
          {types.map((type, index) => (
            <li onClick={()=>setActiveType(index)} key={type} className={index == activeType ? "pizza-block__options-item active" : "pizza-block__options-item"}>{typesArr[type]}</li>
          ))}
        </ul>
        <ul className="pizza-block__options-list">
          {sizes.map((size, index) => (
            <li onClick={()=>setActiveSize(index)} key={size} className={index == activeSize ? "pizza-block__options-item active" : "pizza-block__options-item"}>{size}cm</li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__footer">
        <span className="pizza-block__price">from {price}€</span>
        <button className="pizza-block__add-btn cart__add-btn">Add</button>
      </div>
    </article>
  )
}

export default PizzaBlock
