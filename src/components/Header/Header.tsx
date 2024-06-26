import React from 'react'
import logo from '/logo.svg'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import './Header.css'

const Header = ({search, setSearch}) => {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to='/'><img src={logo} alt="logo" className="header__logo" /></Link>
        <Search search={search} setSearch={setSearch} />
        <Link to='/cart' className="header__cart cart__btn">
          Cart
        </Link>
      </div>
    </header>
  )
}

export default Header