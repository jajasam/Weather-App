import { useState, useEffect, useRef } from "react";
import "./App.css";

import Header from "./components/Header"
import CurrentWeather from "./components/CurrentWeather"
import Recommendations from "./components/recommendations/Recommendations"

function App() {
  const [userCityInput, setUserCityInput] = useState(null)
  const [location, setLocation] = useState({name: 'Cappaghnanool', state: undefined, country: 'IE', lat: 53.3201094, lon: -8.567809712252107});
  const [results, setResults] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentUnit, setCurrentUnit] = useState("C");
  const [currentSong, setCurrentSong] = useState("")
  const isMounted = useRef(false);

  function handleUserInput(e) {
    const userInputValue = e.target.value
    setUserCityInput(userInputValue ? userInputValue : null);
  }

  function handleCityData(name, state, country, lat, lon) {
    setLocation({name, state, country, lat, lon});
  }

  function setLocalStorage(id) {
    localStorage.setItem("cityId", id)
  }

  function changeUnit(unit) {
    setCurrentUnit(unit)
  }

  useEffect(() => {
      if (isMounted.current) {
        fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${userCityInput}&limit=5&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}`
        )
          .then((res) => res.json())
          .then(data => setResults(data))
          .catch(e => console.log(e))
        } else {
          isMounted.current = true;
        }
  }, [userCityInput]);

  useEffect(() => {
    if (isMounted.current) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}`)
        .then(res => res.ok && res.json())
        .then(data => setCurrentWeather(data))
        .catch(err => console.error(err))
    } else {
      isMounted.current = true;
    }
  },[location])

  console.log(currentWeather)

  return (
    <>
      <div className="hero-img">
        <header>
          <Header
            currentUnit={currentUnit}
            changeUnit={changeUnit}
            userCityInput={userCityInput}
            handleUserInput={handleUserInput}
            results={results}
            handleCityData={handleCityData} 
            location={location}
            currentWeather={currentWeather}
            setLocalStorage={setLocalStorage}
          />
        </header>
        {
          location &&
          currentWeather &&
          <CurrentWeather 
            location={location}
            currentWeather={currentWeather}
            currentUnit={currentUnit}
          />
        }
      </div>
      <main>
        {/* <div>
          Previsions 7 jours
        </div> */}
        <Recommendations />
      </main>
      <footer>
        <div>
          <small>2022 - Created by Jana Samson</small>
        </div>
      </footer>
    </>
  );
}

export default App;
