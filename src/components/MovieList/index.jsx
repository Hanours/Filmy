import React from "react";
import './style.css';
import {Link} from 'react-router-dom';
import movies from '../../../movie-database.js';


const MovieList = () => (
	       
    <nav class="movie-list">
       {movies.map((film) => {
           return (
           <Link
               to={`/movies/${film.id}`}
               key={film.id}>
               {film.title}
           </Link>             
           )
       })}
     </nav>  
)


export default MovieList;
