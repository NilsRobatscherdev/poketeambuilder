import { Deserializable } from "./deserialize";

export interface IItemNameAndUrl {
    name:string
    url:string
}

export interface MoveOtherNames {
    name:string
    url:string
}

export interface IMove {
    id:number,
    name: string,
    accuracy: number,
    effect_chance:null,
    pp:number,
    priority:number,
    power:number,
    past_values:[],
    stat_changes:[],
    effect_changes:[],
    generationen:{[key:string]:IItemNameAndUrl},
}

export class Moves implements IMove, Deserializable {
    id:number;
    name: string;
    accuracy: number;
    effect_chance:null;
    pp:number;
    priority:number;
    power:number;
    past_values:[];
    stat_changes:[];
    effect_changes:[];
    generationen:{[key:string]:IItemNameAndUrl};


    deserialize(input: Moves){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}


