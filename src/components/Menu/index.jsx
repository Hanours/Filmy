import React from "react";
import './style.css';
import {Link} from 'react-router-dom';



const Menu = () => (

    <div className="container">
            <h1>Menu</h1>
        <nav>   
            <Link to='/reviews'>Recenze</Link>
            <span> | </span>
            <Link to='/articles'>Články</Link>
            <span> | </span>
            <Link to='/movies'>Filmy</Link>
        </nav>  
    </div>
)


export default Menu;
