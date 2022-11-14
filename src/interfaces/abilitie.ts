import { Deserializable } from "./deserialize";

export interface IPokemonAbility {
    name:string
    url:string
}

export interface IAbilitie {
    is_hidden:boolean,
    slot: number,
    abilitity: IPokemonAbility,
}

export class Abilitie implements IAbilitie, Deserializable {
    is_hidden:boolean;
    slot: number;
    abilitity: IPokemonAbility;


    deserialize(input: Abilitie){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}


