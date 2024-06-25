import React from 'react'
import { useState, useRef, useEffect } from 'react'
import './Sort.css'

const Sort = ({ sortingOptions, sortId, setSortId }) => {
  const rootRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      rootRef.current.contains(e.target) || setPopupIsOpen(false);
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [activeSort, setActiveSort] = useState(0)

  function togglePopup() {
    if (popupIsOpen) {
      setPopupIsOpen(false)
    } else {
      setPopupIsOpen(true)
    }
  }

  function optionClickHandler(index) {
    setSortId(index)
    setPopupIsOpen(false)
  }

  return (
    <div ref={rootRef} className="sort">
      <div className="sort__label">
        <b>Sort by</b>
        <span onClick={() => togglePopup()}>{sortingOptions[sortId].title}</span>
      </div>
      <div className="sort__popup">
        <ul className={popupIsOpen ? 'sort__options active' : 'sort__options'}>
          {sortingOptions.map((option, index) => (
            <li
              key={option.id}
              onClick={() => optionClickHandler(index)}
              className={sortId == index ? 'sort__option active' : 'sort__option '}>
              {option.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sort
