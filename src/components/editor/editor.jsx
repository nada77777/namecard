import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ addItem, cards, updatedCard }) => {
    return(
        <div className={styles.editor}>
            <h1>Editor</h1>
            {cards.map(card => <CardEditForm key={card.id} card={card} updatedCard={updatedCard} />)}
            <CardAddForm addItem={addItem} />
        </div>
    );
};

export default Editor;