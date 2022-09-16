import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
const Login = ({ loginPopup }) => {

    const navigate = useNavigate();

    useEffect(() => {
        loginPopup.authChanged(user => {user && openMaker(user)});
    });

    


    const onClick = (event) => {
        event.preventDefault();
        loginPopup.login()//
        .then(result => openMaker(result.user));
    };

    const openMaker= (user) => {
        const userId = user.uid;
        if(userId){
            navigate('/maker',{state: {id: userId}});
            console.log('success');
        }
    };



    return(
        <div className={styles.login}>
            <Header/>
            <div className={styles.buttons}>
                <button onClick={onClick} className={styles.button}>Google</button>
                <button className={styles.button}>Github</button>
            </div>
            <Footer/>
        </div>

    );
};

export default Login;