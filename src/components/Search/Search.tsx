import React from 'react'
import './Search.css'

const Search = ({search, setSearch}) => {
  return (
    <div className="search">
      <svg
        className="search__icon"
        width="22px"
        height="22px"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="Interface / Search_Magnifying_Glass">
          <path
            id="Vector"
            d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
            stroke="#c1c1c1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
      <input onChange={(e)=>setSearch(e.target.value)} value={search} className="search__input" placeholder="Search..." type="text" />
    </div>
  )
}

export default Search
