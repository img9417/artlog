import React, { memo, useState, useEffect } from 'react';
import "./Picture.css";

const Picture = (props) => {
    return (
        <>
            <div className="image">
                <img src={`/src/assets/${props.imageName}`} alt={props.imageName}/>
            </div>
        </>
    )
}

export default Picture;