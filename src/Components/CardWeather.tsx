import React from "react";
import "./CardWeather.css";
import { FaSearch } from "react-icons/fa";

function CardWeather() {
  return (
    <>
      <div className="card">
        <div className="search">
          <input type="text" className="search-bar" placeholder="Search" />
          <button>
            <FaSearch className="App-logo" />
          </button>
        </div>
        <div className="weather loading">
          <h2 className="city">Clima em São Leopoldo</h2>
          <h1 className="temp">51°C</h1>
          <div className="flex">
            <img
              src="https://openweathermap.org/img/wn/04n.png"
              alt=""
              className="icon"
            />
            <div className="description">Nublado</div>
          </div>
          <div className="humidity">Umidade: 60%</div>
          <div className="wind">Vento: 6.2 km/h</div>
        </div>
      </div>
    </>
  );
}

export default CardWeather;
