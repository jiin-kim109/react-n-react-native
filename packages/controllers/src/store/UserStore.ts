import { observable, action } from 'mobx';
import { db } from '../firebase/Firebase';

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

    }

    @observable sampleAsyncItem: string;

    // from either app or web, called userStore.sampleAsyncAction()
    @action sampleAsyncAction(){
        db.collection("coll_name")
            .doc("doc_name")
            .onSnapshot({
                // Listen for document metadata changes
                includeMetadataChanges: true
            }, function(doc) {
                this.sampleAsyncItem = "aa";
            });
    }

    @observable userInfo : UserInfo
    
    @action getUserInfo = ({userId}) => {

    } 

}