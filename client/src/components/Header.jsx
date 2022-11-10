import "../styles/Header.css"

function Header({currentUnit, changeUnit, userCityInput, handleUserInput, results, handleCityData, currentWeather,
    //  setLocalStorage
    }) {
    let resultsElem = (
        <div className="results">
            {results?.map(({ name, country, state, lat, lon }, i) => (
                <div onClick={() => handleCityData(name, state, country, lat, lon )}
                // && setLocalStorage(currentWeather.id)} 
                key={i} className="city-link" >
                    <p>
                        {name}, {state && `${state}, `} {country}
                    </p>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <div className="logo"></div>
            <div className="search_container">
                <div>
                    <div className="search-form">
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
            <div className="units-btn">
                    <button className={currentUnit === "C" ? "current" : ""} onClick={() => changeUnit("C")}>℃</button>
                    <button className={currentUnit === "F" ? "current" : ""} onClick={() => changeUnit("F")}>℉</button>
            </div>
        </>
        
    )
}

export default Header;