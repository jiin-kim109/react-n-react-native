import { observable, action } from 'mobx';
import { User } from "firebase";
import { auth } from "../firebase/Firebase";
import { getAdministration } from 'mobx/lib/internal';

interface UserInfo {
    userUID : string; // Primary Unique Key
    userName? : string; 
    userCategory? : Array<string>;
    userLoc? : Location; 
    userGender? : string; 
    userActivity? : Array<Activity>;
}

interface Location { 
    lat? : number;
    lng? : number; 
    address1? : string;
    address2? : string; 
    city? : string;
    state? : string;
    country?: string;
    postcode? : string 
}

interface Activity { 

}

export default class UserStore {
    constructor(){
        auth.onAuthStateChanged(this.setCurrentUser);
    }

    @observable sampleAsyncItem: string
    @observable user: User;
    
    //--- Actions ---
    @action 
    setCurrentUser(user: User){
        if(user){
            this.user = user;
        }
        else{
            this.user = null;
        }
    }

    //--- Async Action Bounds ---

    //--- Logging for dev ---

}