import { observable, action } from "mobx";

export default class DetailStore{
    @observable number = 0; 

    @action
    put = () => {
        this.number++;
    }
    
}