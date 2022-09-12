import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
    return(
        <div className={styles.preview}>
            <h1>Preview</h1>
            {cards.map(card => <Card key={card.id} card={card} />)}
        </div>
    );
}

export default Preview;