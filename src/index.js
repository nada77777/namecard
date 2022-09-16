import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import ImageInput from './components/image_input/image_input';
import ImgUpload from './service/imgUpload';
import LoginPopup from './service/login';
import { firebase } from './service/firebase';
import Database from './service/database';


const loginPopup = new LoginPopup(firebase);
const userDatabase = new Database(firebase);
const ImgUploader = new ImgUpload();


const ImgInput  = (props) =>(<ImageInput {...props} ImgUploader={ImgUploader} />)


ReactDOM.render(
  <React.StrictMode>
    <App loginPopup={loginPopup} ImgInput={ImgInput} userDatabase={userDatabase} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
