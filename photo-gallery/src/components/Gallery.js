import React from 'react';

import NotFound from './NotFound'

function Gallery(props){
    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {props.photos.map( photo => {
                    return (
                        <li>
                            <a target="_blank" href={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}>
                                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt=""/>
                            </a>
                        </li>
                    )
                })}
                <NotFound/>
            </ul>
        </div>
    )
}

export default Gallery;