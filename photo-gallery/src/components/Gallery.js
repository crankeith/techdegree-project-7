import React, { Component } from 'react';

import GalleryItem from './GalleryItem'
import NotFound from './NotFound'
import Loading from './Loading'

import { GalleryContext } from "./Context";

class Gallery extends Component {

    componentDidMount() {
        const tag = this.props.match.params.tag;
        if(tag){
            this.context.actions.searchFlicker(tag);
        } else if(this.context.searchResults.length < 1) {
            let path = `/search/marvel`;
            this.props.history.push(path);
        }
    }

    render(){
        const { loading, searchResults } = this.context;
        const { tag } = this.props.match.params;

        return(
            <div className="photo-container">
                <h2><hr />Results for: <hr /></h2>
                <p className="tag">{ tag }</p>
                <p>Click image to open original in new window/tab</p>
                    {
                        loading ?
                            <Loading />
                        :
                            <ul>
                                {searchResults.length > 0 ?
                                    searchResults.map( photo => {
                                        return (
                                            <GalleryItem key={photo.id} photo={ photo } />
                                        )
                                    })
                                    : <NotFound/>
                                }
                            </ul>
                    }
            </div>
        )
    }
}

Gallery.contextType = GalleryContext;

export default Gallery;