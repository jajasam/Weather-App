function Home({handleUserInput, handleCityName}) {
    return (
        <div>
            <h1>Search a city</h1>
            <input type="text" onChange={(e) => handleUserInput(e)} />
            <button onClick={handleCityName}>Search</button>
        </div>
    )
}

export default Home;
