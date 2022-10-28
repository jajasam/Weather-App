import "./styles/Search.css";

function search({userCityInput, handleUserInput, results, handleCityData, currentWeather, setLocalStorage}) {
    let resultsElem = (
        <div className="results">
            {results?.map(({ name, country, state, lat, lon }, i) => (
                <div onClick={() => handleCityData(name, state, country, lat, lon ) && setLocalStorage(currentWeather.id)} key={i} className="city-link" >
                    <p>
                        {name}, {state && `${state}, `} {country}
                    </p>
                </div>
            ))}
        </div>
    );

    return (
        <div className="search_container">
            <div className="search-container-content">
                <div className="search">
                    <input type="text" onChange={(e) => handleUserInput(e)} placeholder="Search location here" />
                </div>
                {
                    userCityInput &&
                    <div className="results-dropdown">
                        {results && resultsElem}
                    </div>
                }               
            </div>
        </div>
    )
}

export default search;