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
                // setImagePath(acceptedFiles.map(file => URL.createObjectURL(file)))
                setImagePath(URL.createObjectURL(acceptedFiles[0]));
                actionImgCompress(acceptedFiles[0]);
              }
    });

    const actionImgCompress = async (fileSrc) => {
      console.log("Start compressing...");
  
      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 2048,
        useWebWorker: true,
      };
      try {
        // 압축 결과
        const compressedFile = await imageCompression(fileSrc, options);

        // FileReader 는 File 혹은 Blob 객체를 이용하여, 파일의 내용을 읽을 수 있게 해주는 Web API
        const reader = new FileReader();
        reader.readAsDataURL(compressedFile);
        reader.onloadend = () => {
          // 변환 완료!
          const base64data = reader.result;
          dispatch(storeBase64Image({
            base64img: base64data
          }));
          // formData 만드는 함수
          // handlingDataForm(base64data);
        };
      } catch (error) {
        console.log(error);
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