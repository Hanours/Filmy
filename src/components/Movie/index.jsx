import React from "react";
import './style.css';
import movies from '../../../movie-database.js';
import { useParams } from "react-router-dom";

const Movie = () => {
    const {id} = useParams();
    const choosenMovie = movies[id - 1];
  
    return(
        <div >
            <img src={choosenMovie.poster} alt={choosenMovie.title}/>
            <h1>{choosenMovie.title}</h1>
            <p>{choosenMovie.storyline}</p>
        </div>              
    )
}


export default Movie;
