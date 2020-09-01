import { observable, action } from 'mobx';

export class RootStore {
    @observable number: number = 0;
  
    @action increase = () => {
      this.number++;
    }
  
    @action decrease = () => {
      this.number--;
    }
}