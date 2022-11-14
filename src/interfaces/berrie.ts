import { Deserializable } from "./deserialize";


export interface IBerrieNameAndUrl {
    name:string
    url:string
}
export interface IBerrieFlavours {
    potency:number
    flavor:IBerrieNameAndUrl
}

export interface IBerrie {
    id:number,
    name:string,
    growth_time:number,
    max_harvest:number,
    natural_gift_power:number,
    size:number,
    smoothness:number,
    soil_dryness:number,
    firmness:IBerrieNameAndUrl,
    flavors:[IBerrieFlavours],
    item:IBerrieNameAndUrl,
    natural_gift_type:IBerrieNameAndUrl
}

export class Berrie implements IBerrie, Deserializable {
    id:number;
    name:string;
    growth_time:number;
    max_harvest:number;
    natural_gift_power:number;
    size:number;
    smoothness:number;
    soil_dryness:number;
    firmness:IBerrieNameAndUrl;
    flavors:[IBerrieFlavours];
    item:IBerrieNameAndUrl;
    natural_gift_type:IBerrieNameAndUrl;

    deserialize(input: IBerrie){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}