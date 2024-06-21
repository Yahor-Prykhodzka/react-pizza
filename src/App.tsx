import './App.css'
import PizzasContainer from './containers/PizzasContainer/PizzasContainer'
import { Sort, Categories } from './components'

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
  

  return (
    <>
      <Categories categoriesArray={categories} />
      <Sort sortingOptions={sortingOptions}/>
      <PizzasContainer />
    </>
  )
}

export default App
