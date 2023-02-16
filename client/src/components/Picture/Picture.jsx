import React, { memo } from 'react';
import "./Picture.css";

const Picture = memo((props) => {
    const onMouseMoveHandler = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        const card = currentTarget;        
        const THRESHOLD = 15;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;

        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        card.style.transform =`
            perspective(${clientWidth}px) 
            rotateX(${rotateY}deg) 
            rotateY(${rotateX}deg) 
            scale3d(1, 1, 1)
        `;
    }

    const onMouseLeaveHandler = (e) => {
        e.currentTarget.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    return (
        <>
        {console.debug('rendered Picture')}
            <div className="image" onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
                <img src={`/src/assets/${props.imageName}`} alt={props.imageName}/>
                <span>{props.imageDetail ? props.imageDetail : ''}</span>
            </div>
        </>
    )
});
Picture.displayName = 'Picture';

export default Picture;