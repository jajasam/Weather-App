import React, { useEffect } from 'react'
import '../styles/Previsions.css'


function Previsions({ prevs }) {
    return (
        <div className="previsions_container">
            <h2>Forecast 7 days</h2>
            <div>
                {
                prevs && 
                prevs.map((el) => (
                    <div className="prevision">
                        <h2>{el.temp.day}</h2>
                        <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt={`Icon of ${el.weather[0].description}`} />
                        <p>{`${el.weather[0].description}`}</p>
                    </div>
                ))
                } 
            </div>
        </div>
    )
}

export default Previsions
