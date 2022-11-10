import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Recipe() {
    const API_KEY =`${process.env.REACT_APP_API_KEY_MOVIE}`

    const [ recipe, setRecipe ] = useState("")

    // useEffect(() => {
    //     fetch(`https://api.edamam.com/search?q=pizza&app_id=c7624ee6&app_key=15d967d36015740b9b532835eb085dd5
    //     `)
    //     .then(res => res.json())
    //     .then(data => setRecipe(data.hits[0]))
    //     .catch(err => console.error(err))
    // })

    return (
        <>
            <div className="overview">
                <div className="recipe-icon"></div>
                <h3>Make a <span>pizza</span></h3>
            </div>
            <div className="details">
                <img src="https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg" alt="" />
                <h4>Pizza Dough</h4>
            </div>
            <div>See more pizza recipes</div>
        </>
    )
}

export default Recipe
