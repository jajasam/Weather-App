
function City(props) {
    const {cityInfo, weatherData} = props;
    const {name, state, country} = cityInfo;
    const {main: {feels_like, humidity, temp} = {}, weather: [{icon, main, description}], wind: {speed}} = weatherData;

    return (
        <div className="city_container">
            <h1>{name}, {state && `${state}, `}{country}</h1>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={`Icon of ${description}`} />
            <h2>{feels_like}, {humidity}, {temp}, {icon}, {main}, {description}, {speed}</h2>
            <p>{description}</p>

        </div>
    )
}

export default City;