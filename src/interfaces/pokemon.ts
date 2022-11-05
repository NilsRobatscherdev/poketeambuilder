import { Deserializable } from "./deserialize";
import {IItem} from "./item"
import {IAbilitie} from "./abilitie"
import {IMove} from "./move"


export interface IPokemonForms {
    name:string
    url:string
}

export interface IPokemon {
    name:string,
    order: number,
    weight: number,
    height: number,
    id:number,
    held_items:IItem[],
    moves:IMove[]
    is_default:boolean,
    location_area_encounters:string,
    base_experience:number,
    abilities:IAbilitie[],
    forms:[{[key:string]:IPokemonForms}],
}

export class Pokemon implements IPokemon, Deserializable {
    name:string;
    order: number;
    weight: number;
    height: number;
    id:number;
    is_default:boolean;
    location_area_encounters:string;
    base_experience:number;
    held_items:IItem[];
    moves:IMove[];
    abilities:IAbilitie[]
    forms:[{[key:string]:IPokemonForms}];

    deserialize(input: IPokemon){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}


