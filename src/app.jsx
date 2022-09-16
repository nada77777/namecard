import styles from './app.module.css';
import React from 'react';
import Maker from './components/maker/maker';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = ({ ImgInput, loginPopup, userDatabase}) => {
  return(
    <BrowserRouter>
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Login loginPopup={loginPopup} />} />
        <Route path='/maker' element={<Maker ImgInput={ImgInput} userDatabase={userDatabase} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
























// import styles from './app.module.css';
// import React from 'react';
// import Maker from './components/maker/maker';


// const App = ({ ImgInput }) => {
//   return(
   
//     <div className={styles.app}>
      
//         <Maker ImgInput={ImgInput} />      
       
//     </div>
   
//   );
// };

// export default App;
