import React from 'react'
import logo from '/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <img src={logo} alt="logo" className="header__logo" />
        <button className="header__cart cart__btn">
          Cart
        </button>
      </div>
    </header>
  )
}

export default Header