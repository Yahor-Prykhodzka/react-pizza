import React from 'react'
import '../App.css'
import PizzasContainer from '../containers/PizzasContainer/PizzasContainer'
import { Sort, Categories, } from '../components'

const Home = () => {
  const sortingOptions = [
    {
      id: 0,
      title: 'Popularity',
      value: 'popularity',
    },
    {
      id: 1,
      title: 'Price',
      value: 'price',
    },
    {
      id: 2,
      title: 'Alphabet',
      value: 'alphabet',
    },
  ]

  const categories = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Meat',
    },
    {
      id: 2,
      name: 'Vege',
    },
    {
      id: 3,
      name: 'Childern',
    },
  ]

  return (
    <>
      <div className="pizzas-actions container">
        <Categories categoriesArray={categories} />
        <Sort sortingOptions={sortingOptions} />
      </div>
      <PizzasContainer />
    </>
  )
}

export default Home
