import React from 'react';
import { useSelector } from 'react-redux';
import { Buffer } from 'buffer';
import "./Picture.scss";
import { RootState } from '../../store';

const Picture = () => {
    const { name, note, base64img } = useSelector((state: RootState) => state.art);

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

    const handleBase64Image = () => {
        if(base64img) {
            const byteString = Buffer.from(base64img.split(",")[1], "base64");

            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString[i];
            }
            const blob = new Blob([ia], {
                type: "image/png"
            });
            const file = new File([blob], "image.png");
    
            return URL.createObjectURL(file);
        } else {
            return '';
        }
    }

    return (
        <>
            {console.debug('rendered Picture')}
            <div className="image" onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler}>
                <img src={handleBase64Image()} alt={name} loading="lazy"/>
                <span>{note}</span>
            </div>
        </>
    )
}
Picture.displayName = 'Picture';

export default React.memo(Picture);