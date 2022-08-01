import { BaseModel } from "../models/baseModel.model";

export class Salle extends BaseModel{

    name = "";
    capacity = -1;

    constructor(props){
        super(props);
        this.assign(props);
    }
}