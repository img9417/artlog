import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../_reducers/artSlice';
import { Buffer } from 'buffer';
import "./Picture.scss";

const Picture = () => {
    const imageName = useSelector((state) => state.art.name);
    const imageNote = useSelector((state) => state.art.note);
    const imageCupless = useSelector((state) => state.art.cupless);
    const base64img = useSelector((state) => state.art.base64img);
    const dispatch = useDispatch();

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

    const onClickHandler = (e) => {
        if(imageCupless?.name) {
            dispatch(update({
                name: imageCupless.name,
                note: imageNote,
            }))
        }
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
            <div className="image" onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler} onClick={onClickHandler}>
                {/* <img src={`/src/assets/${imageName}`} alt={imageName} loading="lazy"/> */}
                <img src={handleBase64Image()} alt={imageName} loading="lazy"/>
                <span>{imageNote}</span>
                {imageCupless?.name && (
                    <span className="cupless-symbol"> 🗝️</span>
                )}
            </div>
        </>
    )
}
Picture.displayName = 'Picture';

export default React.memo(Picture);