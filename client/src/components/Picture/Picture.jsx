import React, { memo } from 'react';
import "./Picture.css";

const Picture = memo((props) => {
    return (
        <>
            <div className="image">
                <img src={`/src/assets/${props.imageName}`} alt={props.imageName}/>
            </div>
        </>
    )
});
Picture.displayName = 'Picture';

export default Picture;