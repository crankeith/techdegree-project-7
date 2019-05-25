import React, { Component } from 'react';
import './App.css';

import { Consumer } from './components/Context'

import Header from './components/Header';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

class App extends Component {

    render(){
        return (
            <Consumer>
                {({ searchResults }) => (
                    <div className="container">
                        <Header />
                        <Nav />
                        <Gallery photos={ searchResults }  />
                    </div>
                )}
            </Consumer>
        );
    }
}

export default App;
