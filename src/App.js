import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

function App() {
  const [userCityInput, setUserCityInput] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [cityCoord, setCityCoord] = useState(null);
  const [data, setData] = useState(null);
  // let resultsElem = "";

  function handleUserInput(e) {
    const userInputValue = e.target.value
    setUserCityInput(userInputValue ? userInputValue : null);
  }

  function handleCityName() {
    setCityName(userCityInput);
  }

  function handleCityData(lat, lon) {
    setCityCoord({lat: lat, lon: lon})
  }


  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=30df8105cc64445635b2c2d7452a1466`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [cityName]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoord?.lat}&lon=${cityCoord?.lon}&appid=30df8105cc64445635b2c2d7452a1466`)
      .then(res => res.ok && res.json())
      .then(data => console.log(data))
  },[cityCoord])


  
  let resultsElem = (
    <div>
      {data?.map(({ name, country, state, lat, lon }, i) => (
        <h2 key={i} onClick={() => handleCityData(lat, lon)}>
          {name}, {state}, {country}
        </h2>
      ))}
    </div>
  );

  return (
    <div>
      <Home handleUserInput={handleUserInput} handleCityName={handleCityName} />
      <div>{resultsElem}</div>
    </div>
  );
}

export default App;
