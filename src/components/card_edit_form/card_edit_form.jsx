import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updatedCard, deleteCard }) => {

    const {name, company, job, email, textarea, fileName} = card;
    const nameRef = useRef();
    const companyRef = useRef();
    const jobRef = useRef();
    const emailRef = useRef();
    const textareaRef = useRef();

    const onChange = (event) => {
        // console.log(nameRef.current.value);
        // console.log(event.currentTarget.name);
        updatedCard({...card, [event.currentTarget.name]: event.currentTarget.value});
        // console.log(cardn);
    };

    const onDelete = (event) => {
        event.preventDefault();
        deleteCard(card);
        console.log('delete');
    };

    return(
        <form className={styles.form}>
            <input name='name' ref={nameRef} defaultValue={name} type='text' placeholder='name' onChange={onChange} ></input>
            <input name='company' ref={companyRef} defaultValue={company} type='text' placeholder='company' onChange={onChange}></input>
            <select name='color'>
                <option defaultValue="red">red</option>
                <option defaultValue="blue">blue</option>
                <option defaultValue="yellow">yellow</option>
            </select>
            <input name='job' ref={jobRef} defaultValue={job} type='text' placeholder='job' onChange={onChange}></input>
            <input name='email' ref={emailRef} defaultValue={email} type='text' placeholder='email' onChange={onChange}></input>
            <textarea name='textarea' ref={textareaRef} defaultValue={textarea} placeholder='textarea' onChange={onChange}></textarea>
            <div className={styles.buttons}>
                <button>{fileName || 'No File'}</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </form>
    );
};

export default CardEditForm;