import { BaseModel } from "./baseModel.model";

export class film extends BaseModel{
   
    title = "";
    synopsis = ""; 
    affiche = ""; 
   
    constructor(props){
        super();
        this.assign(props);
    }


}