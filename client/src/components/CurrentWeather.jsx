import "../styles/CurrentWeather.css";

function CurrentWeather(props) {
    const {location, currentWeather, currentUnit} = props;
    const {name, state, country} = location;
    const {temp, feels_like, pressure, humidity, wind_speed, visibility, weather: [{icon, main, description}]} = currentWeather;

    function displayTemp(tempInKelvin) {
        if (currentUnit === "C") return Math.floor((tempInKelvin - 273.15)) + "℃";
        if (currentUnit === "F") return Math.floor((tempInKelvin - 273.15) * 1.8 + 32) + "℉"
    }

    return (
        <div className="current-weather_container">
            <h1>{name}, {state && `${state}, `}{country}</h1>
            <div className="location-main-info">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`Icon of ${description}`} />
                <div>
                    <h2>{displayTemp(temp)}</h2>
                    <h2>{description}</h2>
                </div>
            </div>
            <div className="highlights_container">
                {/* <h2>Today's highlights</h2> */}
                <div className="highlights">
                    <div className="highlight">
                        <p>Feels like</p>
                        <h5>{displayTemp(feels_like)}</h5>
                    </div>
                    <div className="highlight">
                        <p>Humidity</p>
                        <h5>{humidity}%</h5>
                    </div>
                    <div className="highlight">
                        <p>Wind status</p>
                        <h5>{wind_speed}mph</h5>
                    </div>
                    <div className="highlight">
                        <p>Visibility</p>
                        <h5>{visibility}</h5>
                    </div>
                    <div className="highlight">
                        <p>Pressure</p>
                        <h5>{pressure}</h5>
                    </div>
                    <div className="highlight">
                        <p>Feels like</p>
                        <h5>{displayTemp(feels_like)}</h5>
                    </div>
                    <div className="highlight">
                        <p>Feels like</p>
                        <h5>{displayTemp(feels_like)}</h5>
                    </div>
                    <div className="highlight">
                        <p>Feels like</p>
                        <h5>{displayTemp(feels_like)}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;