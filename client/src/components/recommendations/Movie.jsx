import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Movie() {
    const API_KEY =`${process.env.REACT_APP_API_KEY_MOVIE}`

    const [ movie, setMovie ] = useState("")

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`)
        .then(res => setMovie(res.data.results[1]))
        .catch(err => console.log(err))
    })

    const { title, backdrop_path, id} = movie;

    return (
        <div className="recommendation">
            <div className="overview">
                <div className="movie-icon"></div>
                <h3>Watch an <span>action</span> movie</h3>
            </div>
            <div className="details">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                <h4>{title}</h4>
                <div>{`See more action movies ->`}</div>
            </div>
        </div>
    )
}

export default Movie
