import './App.css'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import PizzasContainer from './containers/PizzasContainer/PizzasContainer'
import { Sort } from './components'
import pizzas from './pizza.json'

function App() {
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

  return (
    <>
      <Sort sortingOptions={sortingOptions}/>
      <PizzasContainer pizzasArray={pizzas}/>
    </>
  )
}

export default App
