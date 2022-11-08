import React, { useState } from "react"
import Movie from "./Movie"
import Music from "./Music"
import Recipe from "./Recipe"
import "../../styles/Recommendations.css"
import data from "./data"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Recommendations(weatherCondition) {
    const [movie, setMovie] = useState("")
    const [recipe, setRecipe] = useState("")
    const [music, setMusic] = useState("")

    return (
        <div className="recommendations_container">
            <h2>Looks like it's a <span>rainy</span> day ! Why not...</h2>
            <div 
            className="recommendation"
            data-aos="fade-up">
                <Movie />
            </div>
            <div 
            className="recommendation"
            data-aos="fade-up">
                <Recipe />
            </div>
            <div 
            className="recommendation"
            data-aos="fade-up">
                <Music />
            </div>
        </div>
    )
}

export default Recommendations