import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
const CardAddForm = ({ addItem }) => {

    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const jobRef = useRef();
    const emailRef = useRef();
    const textareaRef = useRef();

    const onClick = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value,
            company: companyRef.current.value,
            job: jobRef.current.value,
            email: emailRef.current.value,
            textarea: textareaRef.current.value,
        };
        addItem(card);
        formRef.current.reset();
    };


    return(
        <form ref={formRef} className={styles.form}>
            <input name='name' ref={nameRef} type='text' placeholder='name'></input>
            <input name='company' ref={companyRef} type='text' placeholder='company'></input>
            <select name='color'>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
            </select>
            <input name='job' ref={jobRef} type='text' placeholder='job'></input>
            <input name='email' ref={emailRef} type='text' placeholder='email'></input>
            <textarea name="textarea" ref={textareaRef} placeholder='textarea'></textarea>
            <div className={styles.buttons}>
                <button onClick={onClick}>Add</button>
                <button>Delete</button>
            </div>
        </form>
    );
};

export default CardAddForm;