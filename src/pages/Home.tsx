import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import PizzasContainer from '../containers/PizzasContainer/PizzasContainer'
import { Sort, Categories } from '../components'
import PizzasService from '../api/PizzasService'

const Home = () => {
  const [categoryId, setCategoryId] = useState(0)
  const [sortId, setSortId] = useState(0)

  const [isLoading, setIsLoading] = useState(true)
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const fetchAndSetPizzas = async () => {
        if (categoryId == 0) {
          setPizzas(await fetchPizzas(`?sortBy=${sortingOptions[sortId].value}`))
        } else {
          setPizzas(await fetchPizzas(`?category=${categoryId}&sortBy=${sortingOptions[sortId].value}`))
        }
        await setIsLoading(false)
    }
    fetchAndSetPizzas()
  }, [categoryId, sortId])

  async function fetchPizzas(params) {
    return await PizzasService.getAll(params)
  }

  const sortingOptions = [
    {
      id: 0,
      title: 'Popularity',
      value: 'rating',
    },
    {
      id: 1,
      title: 'Price',
      value: 'price',
    },
    {
      id: 2,
      title: 'Alphabet',
      value: 'name',
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
      name: 'Spicy',
    },
  ]

  return (
    <>
      <div className="pizzas-actions container">
        <Categories
          setCategoryId={setCategoryId}
          categoryId={categoryId}
          categoriesArray={categories}
        />
        <Sort setSortId={setSortId} sortId={sortId} sortingOptions={sortingOptions} />
      </div>
      <PizzasContainer isLoading={isLoading} pizzas={pizzas} />
    </>
  )
}

export default Home
