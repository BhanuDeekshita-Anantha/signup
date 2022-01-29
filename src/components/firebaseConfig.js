import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCFZL5L5L0o1cMMJPE_6U-ofOKbA7KOnjA",
    authDomain: "homepage-88603.firebaseapp.com",
    projectId: "homepage-88603",
    storageBucket: "homepage-88603.appspot.com",
    messagingSenderId: "164472039637",
    appId: "1:164472039637:web:83766773457d16b0da9a5c"
};
const app = initializeApp(firebaseConfig);

 export const auth=getAuth(app)