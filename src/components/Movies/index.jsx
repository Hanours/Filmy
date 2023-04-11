import React from "react";
import './style.css';
import MovieList from "../MovieList";
import { Outlet } from "react-router-dom";


const Movies = () => (

    <div className="movies-container">
        <h1>Filmy</h1>
        <MovieList/>
        <Outlet/>
    </div>
)

export default Movies;
