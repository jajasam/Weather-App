import { useState, useEffect, useRef } from "react";
import "./App.css";

import Header from "./components/Header"
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather"

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
          `http://api.openweathermap.org/geo/1.0/direct?q=${userCityInput}&limit=5&appid=30df8105cc64445635b2c2d7452a1466`
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
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&appid=30df8105cc64445635b2c2d7452a1466`)
        .then(res => res.ok && res.json())
        .then(data => setCurrentWeather(data))
        .catch(e => console.log(e))
    } else {
      isMounted.current = true;
    }
  },[location])

  // useEffect(() => {
  //   if (isMounted.current) {
  //     fetch("https://api.spotify.com/v1/tracks/{id}",
  //     {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${userAccessToken}`
  //     }
  //   })
  //       .then(res => res.ok && res.json())
  //       .then(data => setCurrentSong(data))
  //       .catch(e => console.log(e))
  //   } else {
  //     isMounted.current = true;
  //   }
  // },[location])

  return (
    <div className="container">
        <Header
        currentSong={currentSong}
          currentUnit={currentUnit}
          changeUnit={changeUnit}
        />
          <Search
            userCityInput={userCityInput}
            handleUserInput={handleUserInput}
            results={results}
            handleCityData={handleCityData} 
            location={location}
            currentWeather={currentWeather}
            setLocalStorage={setLocalStorage}
          />
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
  );
}

export default App;
