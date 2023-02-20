import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import imageCompression from "browser-image-compression";
import { useDispatch } from 'react-redux';
import { storeBase64Image } from '../../_reducers/artSlice';

import "./Dropzone.scss";

const Dropzone = () => {
    const dispatch = useDispatch();
    const [imagePath, setImagePath] = useState('');
    const {
        acceptedFiles,
        getRootProps,
        getInputProps } = useDropzone({
            accept: {
                'image/png': []
            },
            maxFiles:1,
            onDrop: acceptedFiles => {
                setImagePath(URL.createObjectURL(acceptedFiles[0]));
                actionImgCompress(acceptedFiles[0]);
              }
    });

    const actionImgCompress = async (fileSrc) => {
      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 2048,
        useWebWorker: true,
      };
      try {
        const compressedFile = await imageCompression(fileSrc, options);
        const reader = new FileReader();
        reader.readAsDataURL(compressedFile);
        reader.onloadend = () => {
          const base64data = reader.result;
          dispatch(storeBase64Image({
            base64img: base64data
          }));
        };
      } catch (error) {
        console.debug(error);
      }
    };

  return (
    <section className="dropzone-wrapper">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {imagePath && (
            <img src={imagePath} width={450} height={450} alt={'uploadd image'}/>
        )}
        {!imagePath && (
            <>
                <p>Drag 'n' drop a file here, or click to select a file.</p>
                <em>(*.png only)</em>
            </>
        )}
      </div>
    </section>
  );
}

export default React.memo(Dropzone);