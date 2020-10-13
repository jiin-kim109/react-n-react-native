import * as firebase from 'firebase'
import { store } from "../store/store"
import config from "./config"

/**
 *  Initialize Firebase
 */ 
if(!firebase.apps.length){
    firebase.initializeApp(config);
    firebase.auth().signOut(); // TEMPORARY: NEED TO DELETE WHEN Sign In function is fully implemented. 
}

const app = firebase.app();

const auth = firebase.auth();
auth.onAuthStateChanged((user: firebase.User) => {
    store.dispatch({
        type: 'USER/SET_CURRENT_USER',
        currentUser: user
    })
});

const db = firebase.firestore(app);
const storage = firebase.storage();

export { app, db, auth, storage };