// App.js
import React, { useState } from "react";
import Weather from "./Weather.jsx";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const apiKey = "0c8f27037a6809437b45d7953c146cdf";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Get Weather
        </button>
      </form>
      <Weather data={weatherData} />
    </div>
  );
};

export default App;
