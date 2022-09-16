import React, { useRef, useState } from 'react';
import styles from './image_input.module.css';

const ImageInput = ({ addFile, ImgUploader}) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    
    const onClickBtn = (event) => {
        event.preventDefault();
        console.log(inputRef);
        inputRef.current.click();
 
    };

    const onChange = async(event) => {
        // console.log(event.target.files[0]);
        // const fileName = event.target.files[0].name;
        // const imgPath = event.target.value;
        // onClick(event, fileName, imgPath);
        setLoading(true);
        // const file = await ImgUploader.upload(event.target.files[0]);

        const file = await ImgUploader.upload(event.target.files[0])//
        .then(result => addFile({fileName: result.original_filename, fileURL: result.url}));
        console.log(file);
        setLoading(false);
    };

    //fakepath로 나와서
    //그 이유는 일부 브라우저에서 JavaScript가 local file의 전체 경로를 알지 못하게 하는 보안 기능을 사용하기 때문이다.


    


    return(
        <div className={styles.imageInput}>
            <input ref={inputRef} onChange={onChange} type='file' accept='image/*'></input>
            {loading ? <div className={styles.loading}></div> :
            <button onClick={onClickBtn}>No File</button>
            }
        </div>
    );
};

export default ImageInput;