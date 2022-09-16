import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ ImgInput, userDatabase }) => {

    const userStateId = useLocation().state.id;
    
    const [userId, setUserId] = useState(userStateId);

    const [cards, setCards] = useState(
        {
            1:{ 
                id: 1,
                imgPath: null,
                fileName: null,
                name: 'Carl',
                company: 'Samsung',
                color: 'red',
                job: 'Software Engineer',
                email: 'ssy@gmail.com',
                textarea: 'Hello, Good to see you'
            },
            2:{   
                id: 2,               
                imgPath: null,
                fileName: null,
                name: 'Ray',
                company: 'Coupang',
                color: 'blue',
                job: 'Software Engineer',
                email: 'Ray@gmail.com',
                textarea: 'Hello, Good to see you'
            },
            3:{ 
                id: 3,
                imgPath: null,
                fileName: null,
                name: 'Ben',
                company: 'Tech',
                color: 'yellow',
                job: 'Software Engineer',
                email: 'Ben@gmail.com',
                textarea: 'Hello, Good to see you'
            },
        }
    );
    

    // const [cards, setCards] = useState([
    //     {   id: 1,
    //         imgPath: null,
    //         name: 'name-index',
    //         company: 'undefined',
    //         job: 'SEsesesfffa',
    //         email: 'gmail@111111',
    //         textarea: '10110111011'
    //     },
    //     {   
    //         id: 2,
    //         imgPath: null,
    //         name: 'name-index--2',
    //         company: 'undefined',
    //         job: 'SEse222fffa',
    //         email: 'gmail@21212',
    //         textarea: '10110110111011'
    //     },
    //     {
    //         id: 3,
    //         imgPath: null,
    //         name: 'name-index--3',
    //         company: 'undefined',
    //         job: 'SEsesetttttsfffa',
    //         email: 'gmail3333',
    //         textarea: '110111110110111011'
    //     },
    // ]);

















    // useEffect(() => {
    //     if(userId){
    //         userDatabase.writeDatabase(userId, cards);
    //     }
    // },[userId]);





    const addItem = (item) => {
        const newCards = {...cards};
        newCards[item.id] = item;
        setCards(newCards);
        // const copyCards = [...cards];
        // console.log(copyCards[0] === cards[0]);
        userDatabase.writeDatabase(userId, item);
    };

    const updatedCard = (card) => {
        const newCards = {...cards};
        newCards[card.id] = card;
        setCards(newCards);
        
        // setCards(newCards);
        // console.log(newCards);
        // console.log(newCards);
    }

    const deleteCard = (card) => {
        console.log(card);
        const newCards = {...cards};
        delete newCards[card.id];
        setCards(newCards);
    };


    return(
        <div className={styles.maker}>
            <Editor addItem={addItem} cards={cards} updatedCard={updatedCard} deleteCard={deleteCard} ImgInput={ImgInput} />
            <Preview cards={cards} />
        </div>
    );
};

export default Maker;


















// {   id: 1,
//     imgPath: null,
//     name: 'Carl',
//     company: 'Samsung',
//     job: 'Software Engineer',
//     email: 'ssy@gmail.com',
//     textarea: 'Hello, Good to see you'
// },
// {   
//     id: 2,
//     imgPath: null,
//     name: 'Ray',
//     company: 'Coupang',
//     job: 'Software Engineer',
//     email: 'Ray@gmail.com',
//     textarea: 'Hello, Good to see you'
// },
// {
//     id: 3,
//     imgPath: null,
//     name: 'Ben',
//     company: 'Tech',
//     job: 'Software Engineer',
//     email: 'Ben@gmail.com',
//     textarea: 'Hello, Good to see you'
// },