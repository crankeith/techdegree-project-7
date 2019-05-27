import React from 'react';
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
            <Link to="/">RESET</Link>
        </li>
    )
}

export default NotFound;