import React from 'react';
import styles from './card.module.css';


const defaultImg = './imgs/111.jpeg';

const Card = ({ card }) => {
    const { imgPath, name, company, job, email, textarea } = card;
    const img = imgPath || defaultImg;
    console.log(img);
    return(
        <div className={styles.card}>
            <img src={img} alt="img"></img>
            <div className={styles.cardInfo}>
                <p>{name}</p>
                <p>{company}</p>
                <p>{job}</p>
                <p>{email}</p>
                <p>{textarea}</p>
            </div>
        </div>
    );
};


function selectRgba(theme){
    switch(theme){
        case 'rgba1' :
            return 'styles.dark';
        case 'rgba2' :
            return 'styles.aa';
        case 'rgba33':
            return 'styles.aa1';
        default :
        throw new Error(`unknown theme ${theme}`);
    }
};

export default Card;