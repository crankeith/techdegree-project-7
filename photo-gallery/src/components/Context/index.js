import React, { Component } from 'react';
import axios from "axios";
import apiKey from "../../config";

export const GalleryContext = React.createContext();

export class Provider extends Component {

    state = {
        searchResults: [],
        loading: true
    };

    toggleLoading = () => {
        this.setState(prevState => {
            return {
                loading: !prevState.loading
            }
        })
    };

    searchFlicker = ( searchText ) => {
        if(!this.state.loading){
            this.toggleLoading();
        }

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=${apiKey}&privacy_filter=1&per_page=24&text=${searchText}`, {
            timeout: 10000
        })
            .then(response => {
                //console.log(response.data.photos.photo);
                this.setState({
                    searchResults: response.data.photos.photo,
                });
                this.toggleLoading();
            }).catch( err => {
            console.log("There was an issue retrieving photos from Flickr", err);
        })
    };

    render(){
        const { children } = this.props;
        const { searchResults, loading } = this.state;

        const providerValue = {
            searchResults,
            loading,
            actions: {
                searchFlicker: this.searchFlicker
            }
        };

        return(
            <GalleryContext.Provider value={providerValue}>
                { children }
            </GalleryContext.Provider>
        )
    }
}

export const Consumer = GalleryContext.Consumer;


