import { observable, action } from 'mobx';
import { db } from '../firebase/Firebase';

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
}