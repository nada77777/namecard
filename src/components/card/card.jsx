import React from 'react';
import styles from './card.module.css';


// const defaultImg = './imgs/111.jpeg';
const defaultImg = './imgs/profile.png';

const Card = ({ card }) => {
    const { imgPath, name, company, color, job, email, textarea } = card;
    const img = imgPath || defaultImg;
    // console.log(img);
    // console.log(card.key);
    return(
        // <div className={`${styles.card} ${selectColor(color)}`}>
        <div className={`${styles.card} ${selectColor(color)}`}>
            <img src={img} alt="img"></img>
            <div className={styles.cardInfo}>
                <p>Name : {name}</p>
                <p>Company : {company}</p>
                <p>Job : {job}</p>
                <p>Email : {email}</p>
                <p>Textarea : {textarea}</p>
            </div>
        </div>
    );
};



function selectColor(theme){
    switch(theme){
        case 'red' :
            return styles.red;
        case 'blue' :
            return styles.blue;
        case 'yellow':
            return styles.yellow;
        default :
        throw new Error(`unknown theme ${theme}`);
    }
};

export default Card;