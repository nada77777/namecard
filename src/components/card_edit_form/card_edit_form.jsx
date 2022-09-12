import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updatedCard }) => {

    const {name, company, job, email, textarea} = card;
    const nameRef = useRef();
    const companyRef = useRef();
    const jobRef = useRef();
    const emailRef = useRef();
    const textareaRef = useRef();

    const onChange = (event) => {
        // console.log(nameRef.current.value);
        // console.log(event.currentTarget.name);
        let cardn = {
            [event.currentTarget.name]: event.currentTarget.value,
        };

        updatedCard(cardn);

        // console.log(cardn);
    };

    return(
        <form className={styles.form}>
            <input name='name' ref={nameRef} value={name} type='text' placeholder='name' onChange={onChange} ></input>
            <input name='company' ref={companyRef} type='text' placeholder='company'></input>
            <select name='color'>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
            </select>
            <input name='job' ref={jobRef} type='text' placeholder='job'></input>
            <input name='email' ref={emailRef} type='text' placeholder='email'></input>
            <textarea name='textarea' ref={textareaRef} placeholder='textarea'></textarea>
            <div className={styles.buttons}>
                <button>Add</button>
                <button>Delete</button>
            </div>
        </form>
    );
};

export default CardEditForm;