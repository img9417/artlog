import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import "./Dropzone.scss";

const Dropzone = () => {
    const [imagePath, setImagePath] = useState('');
    const {
        acceptedFiles,
        getRootProps,
        getInputProps } = useDropzone({
            accept: {
                'image/jpeg': [],
                'image/png': []
            },
            maxFiles:1,
            onDrop: acceptedFiles => {
                setImagePath(acceptedFiles.map(file => URL.createObjectURL(file)))
              }
    });
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
                <em>(*.jpeg and *.png only)</em>
            </>
        )}
      </div>
    </section>
  );
}

export default React.memo(Dropzone);