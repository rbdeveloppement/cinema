import { BaseModel } from "./baseModel.model";

export class Reservation extends BaseModel{

    customer = ";"
    nbPlace = 0;
    is_seance = -1;

    constructor(props){
        super(props);
        this.assign(props);
    }
}