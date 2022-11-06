import { Deserializable } from "./deserialize";


export interface IBerrieNameAndUrl {
    name:string
    url:string
}
export interface IBerrieFlavours {
    potency:number
    flavor:{[key:string]:IBerrieNameAndUrl}
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
    firmness:{[key:string]:IBerrieNameAndUrl},
    flavors:[{[key:string]:IBerrieFlavours}],
    item:{[key:string]:IBerrieNameAndUrl},
    natural_gift_type:{[key:string]:IBerrieNameAndUrl}
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
    firmness:{[key:string]:IBerrieNameAndUrl};
    flavors:[{[key:string]:IBerrieFlavours}];
    item:{[key:string]:IBerrieNameAndUrl};
    natural_gift_type:{[key:string]:IBerrieNameAndUrl};
    deserialize(input: IBerrie){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}