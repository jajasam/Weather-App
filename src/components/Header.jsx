import "./styles/Header.css"

function Header({currentSong, currentUnit, changeUnit}) {
    return (
        <div className="header_container">
            <div className="music-player">
                <div className="play-btn"></div>
                <p>{currentSong}</p>
            </div>
            <div className="units-btn">
                <button className={currentUnit === "C" ? "current" : ""} onClick={() => changeUnit("C")}>℃</button>
                <button className={currentUnit === "F" ? "current" : ""} onClick={() => changeUnit("F")}>℉</button>
            </div>
        </div>
    )
}

export default Header;