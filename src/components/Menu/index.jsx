import React from "react";
import './style.css';
import {Link} from 'react-router-dom';


const Menu = () => (
    <div className="menu">
            <h1>Menu</h1>
        <nav>   
            <Link to='/'>Domů</Link>
           
            <Link to='/reviews'>Recenze</Link>
            
            <Link to='/articles'>Články</Link>
           
            <Link to='/movies'>Filmy</Link>
        </nav>  
    </div>
)


export default Menu;
