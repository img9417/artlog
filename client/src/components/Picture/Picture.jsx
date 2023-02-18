import React from 'react';
import { useSelector } from 'react-redux';
import "./Picture.scss";

const Picture = () => {
    const imageName = useSelector((state) => state.art.name);
    const imageNote = useSelector((state) => state.art.note);
  
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
        {console.log('rendered Picture')}
            <div className="image" onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
                <img src={`/src/assets/${imageName}`} alt={imageName} loading="lazy"/>
                <span>{imageNote}</span>
            </div>
        </>
    )
}
Picture.displayName = 'Picture';

export default React.memo(Picture);