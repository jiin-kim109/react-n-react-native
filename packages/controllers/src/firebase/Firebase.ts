import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

/**
 *  Initialize Firebase
 */ 
const firebaseConfig = {
    apiKey: "AIzaSyCDq2VErMgE9PycNPHr0U6TZYIJ72653Sw",
    authDomain: "act-dev-a4876.firebaseapp.com",
    databaseURL: "https://act-dev-a4876.firebaseio.com",
    projectId: "act-dev-a4876",
    storageBucket: "act-dev-a4876.appspot.com",
    messagingSenderId: "1016558907429",
    appId: "1:1016558907429:web:08ded1a47dad15312bcfcc",
    measurementId: "G-41Q5BHZBW8"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const app = firebase.app();

/**
 * Firebase Auth
 */
interface IUserInfo {
    email:      string;
    password?:   any; 
}
const auth = firebase.auth();
const signInWithEmail = ({email, password}: IUserInfo) => 
    auth.signInWithEmailAndPassword(email, password);
const registerWithEmail = (user: IUserInfo) => 
    auth.createUserWithEmailAndPassword(user.email, user.password);
const logout = () => auth.signOut();
const passwordReset = (user:IUserInfo) => auth.sendPasswordResetEmail(user.email);

/**
 * Firebase db (Firestore)
 */
const db = firebase.firestore(app);
// TODO : DB Handeling



export { app, db, auth, signInWithEmail, registerWithEmail, logout, passwordReset };