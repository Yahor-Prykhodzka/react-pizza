import React from 'react'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import './PizzasContainer.css'
import PizzaBlockSkeleton from '../../components/PizzaBlock/PizzaBlockSkeleton'



const PizzasContainer = ({isLoading, pizzas}) => {

  
  return (
    <div className="pizzas__container container">
      {isLoading
        ? [...new Array(8)].map((item, index) => <PizzaBlockSkeleton key={index}/>)
        : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
    </div>
  )
}

export default PizzasContainer
