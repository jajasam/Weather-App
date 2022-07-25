import "./styles/CurrentWeather.css";

function City(props) {
    const {location, currentWeather} = props;
    const {name, state, country} = location;
    const {main: {feels_like, humidity, temp}, weather: [{icon, main, description}], wind: {speed}} = currentWeather;

    return (
        <div className="city_container">
            <div>
                <h1>{name}, {state && `${state}, `}{country}</h1>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={`Icon of ${description}`} />
            </div>
            <h2>Today's highlight</h2>
            <div class="weather-details">
                <h2>Feels like {feels_like}</h2>
                <h2>Humidity {humidity}%</h2>
                <h2>Temp {temp}</h2>
                <h2>Main {main}</h2>
                <h2>Description {description}</h2>
                <h2>Speed {speed} q `   mph</h2>
            </div>
        </div>
    )
}

export default City;