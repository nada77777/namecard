
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECR_ID,
  appId: process.env.REACT_APP_APP_ID,

};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);





