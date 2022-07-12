import "./styles/Search.css";

function search({handleUserInput, handleCityName, geoData, handleCityData}) {
    let results = (
        <div>
            {geoData?.map(({ name, country, state, lat, lon }, i) => (
                <div onClick={() => handleCityData(name, state, country, lat, lon)} key={i} className="city-link">
                    <h2>
                        {name}, {state && `${state}, `} {country}
                    </h2>
                </div>
            ))}
        </div>
    );

    return (
        <div className="search_container">
            <div>
                <h1>Search a city</h1>
                <div className="search">
                    <input type="text" onChange={(e) => handleUserInput(e)} />
                    <button onClick={() => handleCityName()}>Search</button>
                </div>
                {results && results}
            </div>
        </div>
    )
}

export default search;
