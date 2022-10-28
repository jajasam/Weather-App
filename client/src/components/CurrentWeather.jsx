import "./styles/CurrentWeather.css";

function City(props) {
    const {location, currentWeather, currentUnit} = props;
    const {name, state, country} = location;
    const {main: {feels_like, humidity, temp, visibility}, weather: [{icon, main, description}], wind: {speed}} = currentWeather;

    function displayTemp(tempInKelvin) {
        if (currentUnit === "C") return Math.floor((tempInKelvin - 273.15)) + "℃";
        if (currentUnit === "F") return Math.floor((tempInKelvin - 273.15) * 1.8 + 32) + "℉"
    }

    return (
        <div className="current-weather_container">
            <div className="location-main-info">
                <h1>{name}, {state && `${state}, `}{country}</h1>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={`Icon of ${description}`} />
                <h2>{displayTemp(temp)} {description}</h2>
            </div>
            <div className="highlights">
                <h2>Today's highlights</h2>
                <div>
                    <div className="highlight">
                        <h5>Feels like {displayTemp(feels_like)}</h5>
                    </div>
                    <div className="highlight">
                        <h5>Humidity {humidity}%</h5>
                    </div>
                    <div className="highlight">
                        <h5>Win status {speed}mph</h5>
                    </div>
                    <div className="highlight">
                        <h5>Lorem Ipsum</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default City;