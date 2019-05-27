import React from 'react';
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1><Link to="/"><img src="/images/flickr-icon.svg" alt="Flickr" /></Link> Flickr Search App</h1>
            <p>Type in a tag or keyword to begin.</p>
            <SearchForm />
        </header>
    )
}

export default Header;