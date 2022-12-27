import { Deserializable } from "./deserialize";
import { IPokemonForms } from "./pokemon";


export interface ISpeciesNameAndUrl {
    name:string
    url:string
}
export interface ISpeciesVarieties {
    is_default:boolean
    pokemon:ISpeciesNameAndUrl
}

export interface INames {
    language:IPokemonForms
    name:string
}

export interface ISpecies {
    id:number,
    name: string,
    names?:[INames];
    capture_rate: number,
    hatch_counter:number,
    base_happiness:number,
    egg_groups:[ISpeciesNameAndUrl],
    varieties:[ISpeciesVarieties],

}

export class Species implements ISpecies, Deserializable {
    id:number;
    name: string;
    names?:[INames];
    capture_rate: number;
    hatch_counter:number;
    base_happiness:number;
    egg_groups:[ISpeciesNameAndUrl];
    varieties:[ISpeciesVarieties];


    deserialize(input: Species){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}