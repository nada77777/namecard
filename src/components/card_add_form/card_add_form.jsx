import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';
const CardAddForm = ({ addItem, ImgInput }) => {
    const [file, setFile] = useState({fileName: null, fileURL: null});


    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const colorRef = useRef();
    const jobRef = useRef();
    const emailRef = useRef();
    const textareaRef = useRef();


    const addFile = (file) => {
        setFile(file);
    };


    const updateCard = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || 'blank',
            fileName: file.fileName,
            imgPath: file.fileURL,
            company: companyRef.current.value || 'blank',
            color: colorRef.current.value,
            job: jobRef.current.value || 'blank',
            email: emailRef.current.value || 'blank',
            textarea: textareaRef.current.value || 'blank',
        };
        addItem(card);
        console.log(card);
        formRef.current.reset();
        setFile({fileName: null, fileURL: null});
    };


    return(
        <form ref={formRef} className={styles.form}>
            <input name='name' ref={nameRef} type='text' placeholder='name'></input>
            <input name='company' ref={companyRef} type='text' placeholder='company'></input>
            <select name='color' ref={colorRef}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
            </select>
            <input name='job' ref={jobRef} type='text' placeholder='job'></input>
            <input name='email' ref={emailRef} type='text' placeholder='email'></input>
            <textarea name="textarea" ref={textareaRef} placeholder='textarea'></textarea>
            <div className={styles.buttons}>
                <ImgInput updateCard={updateCard} addFile={addFile} />
                <button onClick={updateCard}>Add</button>
            </div>
        </form>
    );
};

export default CardAddForm;