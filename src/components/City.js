
function City({cityInfo, weatherData}) {
    const {main: {feels_like, humidity, temp}, weather: [{icon, main, description}], wind: {speed}} = weatherData;
    const {name, state, country} = cityInfo;

    return (
        <div>
            <h1>{name}, {state && `${state}, `}{country}</h1>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={`Icon of ${description}`} />
            <h3>{description}</h3>
            {/* <h1>data.</h1> */}
        </div>
    )
}

export default City
