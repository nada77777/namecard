import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ addItem, cards, updatedCard, deleteCard, ImgInput }) => {
    return(
        <div className={styles.editor}>
            <h1>Editor</h1>
            <div className={styles.editorCards}>
                {Object.keys(cards).map(key => <CardEditForm key={key} card={cards[key]} updatedCard={updatedCard} deleteCard={deleteCard} />)}
                <CardAddForm addItem={addItem} ImgInput={ImgInput} />
            </div>
        </div>
    );
};

export default Editor;