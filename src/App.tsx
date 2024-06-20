import './App.css'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import PizzasContainer from './containers/PizzasContainer/PizzasContainer'
import { Sort, Categories } from './components'
import { useEffect, useState } from 'react'
import PizzasService from './api/PizzasService'

function App() {

  const [pizzas,setPizzas] = useState([])

  const sortingOptions = [
    {
      id: 0,
      title:"Popularity",
      value:"popularity"
    },
    {
      id: 1,
      title:"Price",
      value:"price"
    },
    {
      id: 2,
      title:"Alphabet",
      value:"alphabet"
    },
  ]

  const categories = [
    {
      id: 0,
      name:'All'
    },
    {
      id: 1,
      name:'Meat'
    },
    {
      id: 2,
      name:'Vege'
    },
    {
      id: 3,
      name:'Childern'
    },
  ]
  
  useEffect(() => {
    return async () => {
      setPizzas(await fetchPizzas())
    }
  }, []);

  async function fetchPizzas(){
    return await PizzasService.getAll()
  }

  return (
    <>
      <Categories categoriesArray={categories} />
      <Sort sortingOptions={sortingOptions}/>
      <PizzasContainer pizzasArray={pizzas}/>
    </>
  )
}

export default App
