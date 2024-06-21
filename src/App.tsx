import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import {Routes, Route} from 'react-router-dom'
import { Header } from './components'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
