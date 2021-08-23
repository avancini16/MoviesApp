import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className='movie'>
                MoviesApp
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink className='link' exact to="/" >Home</NavLink>
                        <NavLink to="/favs" className='link'>Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}