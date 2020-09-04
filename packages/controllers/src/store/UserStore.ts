import { observable, action } from 'mobx';
import { db } from '../firebase/Firebase';
import PubSub from 'pubsub-js';

export default class UserStore {
    constructor(){
        PubSub.subscribe('sampleTopic', this.resSampleAsyncAction);
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
                PubSub.publish('sampleTopic');
            });
    }
    resSampleAsyncAction() {
        this.sampleAsyncItem = "published"
    }
}