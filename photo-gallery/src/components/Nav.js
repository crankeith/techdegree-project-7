import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav(){
    return(
        <nav className="main-nav">
            <ul>
                <li style={{lineHeight: '30px'}}>Examples:</li>
                <li><NavLink to='/search/marvel'>Marvel</NavLink></li>
                <li><NavLink to='/search/dc+comics'>DC Comics</NavLink></li>
                <li><NavLink to='/search/dragonball+super'>DB Super</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;