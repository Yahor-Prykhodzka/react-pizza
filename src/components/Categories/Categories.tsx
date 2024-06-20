import React from 'react'
import { useState } from 'react'
import './Categories.css'

const Categories = ({ categoriesArray }) => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="categories">
      <ul className="categories__list">
        {categoriesArray.map((category, index) => (
          <li
            onClick={()=>setActiveCategory(index)}
            key={category.id}
            className={activeCategory == index ? 'categories__item active' : 'categories__item'}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
