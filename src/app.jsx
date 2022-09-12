import styles from './app.module.css';
import React from 'react';
import Maker from './components/maker/maker';

const App = (props) => {
  return(
    <div className={styles.app}>
        <Maker />      
    </div>
  );
};

export default App;
