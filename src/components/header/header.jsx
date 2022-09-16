import React from 'react';
import styles from './header.module.css';
const Header = (props) => {
    return(
        <div className={styles.header}>
            <h1>Name card maker</h1>
        </div>
    );
}

export default Header;