import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home'
import Gallery from './components/Gallery';
import MissingPage from './components/MissingPage';

class App extends Component {

    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/search" component={ Gallery } />
                        <Route path="/search/:tag" render={( props )=> {
                            return (
                                <Gallery key={props.match.params.tag} {...props} />
                            )
                        }} />
                        <Route component={ MissingPage } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
