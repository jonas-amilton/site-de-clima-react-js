import React from "react";
import "./style.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const api = {
  key: "f905983e37bd4154b4d48255b9c2600e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("São Leopoldo");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <>
      <div className="card">
        <div style={{ display: "flex" }}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>
            <FaSearch />
          </button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <h2>Clima em {weather.name}</h2>

            <h3>{weather.main.temp} °C</h3>

            <p>{weather.weather[0].main}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
