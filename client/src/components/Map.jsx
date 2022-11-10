import React, {useEffect} from 'react'
import "../styles/Map.css"

function Map({map, mapSetting}) {
    return (
        <div className="map_container">
            {useEffect(() => {
                fetch(
                    `https://tile.openweathermap.org/map/${mapSetting}/2/3/2.png?appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}`
                  )
                    .then((res) => res.json())
                    .then(data => data)
            }, [mapSetting])}
        </div>
    )
}

export default Map
