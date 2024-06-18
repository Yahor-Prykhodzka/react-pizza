import './App.css'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import PizzasContainer from './containers/PizzasContainer/PizzasContainer'
import pizzas from './pizza.json'

function App() {
  return (
    <>
      <PizzasContainer pizzasArray={pizzas}/>
    </>
  )
}

export default App
