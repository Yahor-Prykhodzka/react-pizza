import React from 'react'
import logo from '/logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to='/'><img src={logo} alt="logo" className="header__logo" /></Link>
        <Link to='/cart' className="header__cart cart__btn">
          Cart
        </Link>
      </div>
    </header>
  )
}

export default Header