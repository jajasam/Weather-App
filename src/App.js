import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import City from "./components/City"

function App() {
  const [userCityInput, setUserCityInput] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  // let resultsElem = "";

  function handleUserInput(e) {
    const userInputValue = e.target.value
    setUserCityInput(userInputValue ? userInputValue : null);
  }

  function handleCityName() {
    setCityName(userCityInput);
  }

  function handleCityData(name, state, country, lat, lon) {
    setCityInfo({name, state, country, lat, lon})
  }

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=30df8105cc64445635b2c2d7452a1466`
    )
      .then((res) => res.json())
      .then(data => setGeoData(data));
  }, [cityName]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo?.lat}&lon=${cityInfo?.lon}&appid=30df8105cc64445635b2c2d7452a1466`)
      .then(res => res.ok && res.json())
      .then(data => setWeatherData(data))
  },[cityInfo])


  
  let resultsElem = (
    <div>
      {geoData?.map(({ name, country, state, lat, lon }, i) => (
        <Link to="/city">
          <h2 key={i} onClick={() => handleCityData(name, state, country, lat, lon)}>
          {name}, {state && `${state}, `} {country}
        </h2>
        </Link>
      ))}
    </div>
  );

  return (
    <div>
      {/* <Routes>
        <Route path="/"> */}
          <Home handleUserInput={handleUserInput} handleCityName={handleCityName} />
          <div>{resultsElem}</div>
        {/* </Route>
        <Route path="/city"> */}
          {weatherData && <City cityInfo={cityInfo} weatherData={weatherData} />}
        {/* </Route>
      </Routes> */}
    </div>
  );
}

export default App;
