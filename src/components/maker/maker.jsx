import React, { useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = (props) => {

    const [cards, setCards] = useState(
        {
            1:{
                index:'1',

            },
            2:{

            },
            3:{

            }







        }
        




    //     [
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
    // ]
    
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

    const addItem = (item) => {
        const copyCards = [...cards, item];
        setCards(copyCards);
        // const copyCards = [...cards];
        // console.log(copyCards[0] === cards[0]);
    };

    const updatedCard = (card) => {
        console.log(card);
    }


    return(
        <div className={styles.maker}>
            <Editor addItem={addItem} cards={cards} updatedCard={updatedCard} />
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