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
    setUserCityInput(e.target.value);
  }

  function handleCityName() {
    setCityName(userCityInput);
  }

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=30df8105cc64445635b2c2d7452a1466`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [cityName]);

  let resultsElem = (
    <div>
      {data?.map(({ name, country, state }) => (
        <h2>
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
