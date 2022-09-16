import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
    return(
        <div className={styles.preview}>
            <h1>Preview</h1>
            <div className={styles.previewCards}>
                {Object.keys(cards).map(key => <Card key={key} card={cards[key]} />)}
            </div>
        </div>
    );
}

export default Preview;