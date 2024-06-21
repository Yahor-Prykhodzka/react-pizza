import React from 'react'
import { useState, useEffect } from 'react'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import './PizzasContainer.css'
import PizzaBlockSkeleton from '../../components/PizzaBlock/PizzaBlockSkeleton'
import PizzasService from '../../api/PizzasService'


const PizzasContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pizzas,setPizzas] = useState([])

  useEffect(() => {
    return async () => {
      setPizzas(await fetchPizzas())
      setIsLoading(false)
    }
  }, []);

  async function fetchPizzas(){
    return await PizzasService.getAll()
  }
  
  return (
    <div className="pizzas__container container">
      {isLoading
        ? [...new Array(8)].map((item, index) => <PizzaBlockSkeleton key={index}/>)
        : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
    </div>
  )
}

export default PizzasContainer
