// Weather.js
import React from "react";
import "./Weather.css";

const Weather = ({ data }) => {
  if (!data) return null;

  const { name, main, weather } = data;

  return (
    <div className="weather">
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels like: {main.feels_like}°C</p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
};

export default Weather;
