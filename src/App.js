import { useState, useEffect, useRef } from "react";
import "./App.css";

import Search from "./components/Search";
import City from "./components/City"

function App() {
  const [userCityInput, setUserCityInput] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const isMounted = useRef(false);

  function handleUserInput(e) {
    const userInputValue = e.target.value
    setUserCityInput(userInputValue ? userInputValue : null);
  }

  function handleCityName() {
    setCityName(userCityInput);
  }

  function handleCityData(name, state, country, lat, lon) {
    setCityInfo({name, state, country, lat, lon});
  }

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=30df8105cc64445635b2c2d7452a1466`
    )
      .then((res) => res.json())
      .then(data => setGeoData(data));
  }, [cityName]);

  useEffect(() => {
    if (isMounted.current) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo?.lat}&lon=${cityInfo?.lon}&appid=30df8105cc64445635b2c2d7452a1466`)
        .then(res => res.ok && res.json())
        .then(data => setWeatherData(data))
    } else {
      isMounted.current = true;
    }
  },[cityInfo])

  return (
    <div className="container">
      <Search 
        handleUserInput={handleUserInput}
        handleCityName={handleCityName}
        geoData={geoData}
        handleCityData={handleCityData} 
        cityInfo={cityInfo}
      />
      <City 
        cityInfo={cityInfo || {}}
        weatherData={weatherData || {}}
      />
    </div>
  );
}

export default App;
