import React from 'react';

import NotFound from './NotFound'
import Loading from './Loading'

import {Consumer} from "./Context";

function Gallery(props){
    return(
        <div className="photo-container">
            <h2>Results</h2>
            <Consumer>
                {({ loading }) => {
                    if(loading){
                        return <Loading />
                    } else {
                        return (
                            <ul>
                                {props.photos.length > 0 ?
                                    props.photos.map( photo => {
                                        return (
                                            <li>
                                                <a target="_blank" href={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}>
                                                    <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt=""/>
                                                </a>
                                            </li>
                                        )
                                    })
                                    : <NotFound/>
                                }

                            </ul>
                        )
                    }
                }}
            </Consumer>
        </div>
    )
}

export default Gallery;