// src/components/NavBar/NavBar.js
import React from 'react';
import './NavBar.css'

function NavBar(){
    return(
        <nav className='navbar-container'>
            <ul className='nav-list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Birria</li>
            <li className='nav-item'>Services</li>
            <li className='nav-item'>Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;