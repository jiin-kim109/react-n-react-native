import { observable, action } from 'mobx';

export default class RootStore {
    @observable number: number = 0;
  
    @action increase = () => {
      this.number++;
    }
  
    @action decrease = () => {
      this.number--;
    }
}