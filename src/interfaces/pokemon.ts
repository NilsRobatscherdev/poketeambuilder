import { Deserializable } from "./deserialize";
import {IItem} from "./item"
import {IAbilitie} from "./abilitie"
import {IMove} from "./move"


export interface IPokemonForms {
    name:string
    url:string
}
export interface IPokemonTypes {
    slot:number
    type:IPokemonForms
}
export interface ISprites {
    back_default:string
    back_female:string
    back_shiny:string
    back_shiny_female:string
    front_default:string
    front_female:string
    front_shiny:string
    front_shiny_female:string
}
export interface INames {
    language:IPokemonForms
    name:string
}
export interface IPokemon {
    name?:string,
    order?: number,
    weight?: number,
    height?: number,
    id?:number,
    held_items?:IItem[],
    moves?:IMove[],
    sprites?:ISprites,
    is_default?:boolean,
    location_area_encounters?:string,
    species?:IPokemonForms,
    names?:[INames],
    base_experience?:number,
    abilities?:IAbilitie[],
    forms?:[IPokemonForms],
    types?:[IPokemonTypes],
}

export class Pokemon implements IPokemon, Deserializable {
    name?:string;
    order?: number;
    weight?: number;
    height?: number;
    id?:number;
    is_default?:boolean;
    location_area_encounters?:string;
    base_experience?:number;
    sprites?:ISprites;
    held_items?:IItem[];
    species?:IPokemonForms;
    names?:[INames];
    moves?:IMove[];
    abilities?:IAbilitie[]
    forms?:[IPokemonForms];
    types?:[IPokemonTypes];

    deserialize(input: IPokemon){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}


