import React from 'react'

import "./image_card.styles.css";

function ImageCard({Isrc}) {
    return (
        <div>
             <div className="card">
                <img src={Isrc} className="image" ></img>
                </div>
        </div>
    )
}

export default ImageCard


