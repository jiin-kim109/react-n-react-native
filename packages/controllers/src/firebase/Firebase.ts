import * as firebase from 'firebase';

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
    firebase.auth().signOut(); // TEMPORARY: NEED TO DELETE WHEN Sign In function is fully implemented. 
}

const app = firebase.app();

const auth = firebase.auth();
const db = firebase.firestore(app);
const storage = firebase.storage();

export { app, db, auth, storage };