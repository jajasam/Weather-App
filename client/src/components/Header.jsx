import "./styles/Header.css"

function Header({currentSong, currentUnit, changeUnit}) {
    return (
        <>
            <div class="logo"></div>
            <div className="search-form">
                <input 
                type="text" 
                // onChange={(e) => handleUserInput(e)} 
                placeholder="Search location here" />
            </div>
            <div className="units-btn">
                    <button className={currentUnit === "C" ? "current" : ""} onClick={() => changeUnit("C")}>℃</button>
                    <button className={currentUnit === "F" ? "current" : ""} onClick={() => changeUnit("F")}>℉</button>
            </div>
        </>
        
    )
}

export default Header;