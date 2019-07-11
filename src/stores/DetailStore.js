import { observable, action } from "mobx";
import { number } from "prop-types";

export default class DetailStore{
    @observable number = 0; 

    @action
    put = () => {
        this.number++;
    }
    
}