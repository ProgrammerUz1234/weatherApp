import React from 'react'
import './App.css'
import search_icon from './assets/search.png'

const App = () => {
  return (
    <div className='app'>
      <div className="weather">
        <div className="search-bar">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="input search icon" />
        </div>
      </div>
    </div>
  )
}

export default App