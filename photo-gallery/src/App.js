import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import apiKey from './config.js'

import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import Gallery from './components/Gallery'

class App extends Component {

    state = {
        searchResults:[]
    };

    componentDidMount() {
        //TODO update variable with search text from form
        const searchText = "cat";
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=${apiKey}&text=${searchText}`)
            .then(response => {
                console.log(response.data.photos.photo)
                this.setState({
                    searchResults: response.data.photos.photo
                })
            })
    }

    render(){
      return (
        <div className="container">
          <SearchForm />
          <Nav />
          <Gallery photos={this.state.searchResults} />
        </div>
      );
    }
}

export default App;
