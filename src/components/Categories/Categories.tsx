import React from 'react'
import './Categories.css'

const Categories = ({categoriesArray}) => {
  return (
    <div className='categories'>
      <ul className="categories__list">
        {categoriesArray.map((category)=><li key={category.id} className="categories__item">{category.name}</li>)}
      </ul>
    </div>
  )
}

export default Categories