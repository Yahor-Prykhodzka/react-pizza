import React from 'react'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import './PizzasContainer.css'

const PizzasContainer = ({ pizzasArray }) => {

  return (
    <div className="pizzas__container">
      {pizzasArray.map((pizza) => (
        <PizzaBlock key={pizza.id} {...pizza}/>
      ))}
    </div>
  )
}

export default PizzasContainer
