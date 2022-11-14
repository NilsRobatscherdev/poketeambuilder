import { Deserializable } from "./deserialize";
import { IPokemon } from "./pokemon";

export interface IPokedex {
    pokemons: IPokemon[],
}

export class Pokedex implements IPokedex, Deserializable {
    pokemons: IPokemon[];

    deserialize(input: IPokedex){
        if(input){
            Object.assign(this,input);
        }
        return this;
    }
}