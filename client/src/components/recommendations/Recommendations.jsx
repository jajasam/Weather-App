import React, { useState } from "react"
import Movie from "./Movie"
import Music from "./Music"
import Recipe from "./Recipe"
import "../styles/Recommendations.css"
import data from "./data"

function Recommendations(weatherCondition) {
    const [movie, setMovie] = useState("")
    const [recipe, setRecipe] = useState("")
    const [music, setMusic] = useState("")

    return (
        <div className="recommendations_container">
            <h2>Looks like it's a <span>rainy</span> day! Why not...</h2>
            <Movie />
            <Recipe />
            <Music />
        </div>
    )
}

export default Recommendations