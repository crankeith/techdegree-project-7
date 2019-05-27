import React from 'react';


export default function GalleryItem({ photo }){
    return (
        <li>
            <a target="_blank" rel="noopener noreferrer" href={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}>
                <img src={`https://farm${photo.farm > 0 ? photo.farm : 1}.staticflickr.com/${photo.server === "0" ? "1" : photo.server}/${photo.id}_${photo.secret}.jpg`} alt=""/>
            </a>
        </li>
    )
}