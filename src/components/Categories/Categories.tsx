import React from 'react'
import { useState } from 'react'
import './Categories.css'

const Categories = ({ categoriesArray, categoryId, setCategoryId }) => {

  return (
    <div className="categories">
      <ul className="categories__list">
        {categoriesArray.map((category, index) => (
          <li
            onClick={()=>setCategoryId(index)}
            key={category.id}
            className={categoryId == index ? 'categories__item active' : 'categories__item'}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
