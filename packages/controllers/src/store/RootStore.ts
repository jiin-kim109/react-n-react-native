import { observable, action } from 'mobx';
import UserStore from './userStore';

export class RootStore {
    public userStore: UserStore;

    constructor(){
      this.userStore = new UserStore();
    }

    @observable number: number = 0;
  
    @action increase = () => {
      this.number++;
    }
  
    @action decrease = () => {
      this.number--;
    }
}