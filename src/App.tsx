import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Header } from './components'

function App() {
  const [searchValue,setSearchValue]  = useState()

  return (
    <>
      <Header search={searchValue} setSearch={setSearchValue} />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
