import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


class LoginPopup {
    constructor() {
        this.auth = getAuth();
    }



    login = () => {
        // const provider = new GoogleAuthProvider();
        // return signInWithPopup(this.auth, provider)//
        // .then(result => console.log(result.user.uid));
        //user.uid

        const provider = new GoogleAuthProvider();
        return signInWithPopup(this.auth, provider);

    };

    authChanged = (callBack) => {
        onAuthStateChanged(this.auth, (user) => {callBack(user)});
        // console.log('authChanged : ',user);
    }
    



}

export default LoginPopup;