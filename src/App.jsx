import React from 'react'
import './App.css'
import search_icon from './assets/search.png'
import clear_icon from './assets/clear.png'
import cloud_icon from './assets/cloud.png'
import drizzle_icon from './assets/drizzle.png'
import rain_icon from './assets/rain.png'
import snow_icon from './assets/snow.png'
import wind_icon from './assets/wind.png'
import humidity_icon from './assets/humidity.png'

const App = () => {
  return (
    <div className='app'>
      <div className="weather">
        <div className="search-bar">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="input search icon" />
        </div>

        <img src={clear_icon} alt="weather clear icon" className='weather-icon' />
        <p className='temperature'>16<sup>o</sup> C</p>
        <p className='location'>Samarkand</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity_icon} alt="weather humidity icon"  />
            <div>
              <p>91 %</p>
              <span>Humidity</span>
            </div>
          </div>

          <div className="col">
            <img src={wind_icon} alt="weather wind icon"  />
            <div>
              <p>3.6 Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App