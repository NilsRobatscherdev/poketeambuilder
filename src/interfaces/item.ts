import { Deserializable } from "./deserialize";
import { IPokemon } from "./pokemon";

export interface IItemNameAndUrl {
    name:string
    url:string
}
export interface IItemHeldByPokemon {
    pokemon: IPokemon
    version_details:[{[key:string]:IItemHeldByPokemonVersionDetails}]
}
export interface IItemHeldByPokemonVersionDetails {
    rarity:number
    version:{[key:string]:IItemHeldByPokemonVersionDetailsVersion}
}
export interface IItemHeldByPokemonVersionDetailsVersion {
    name:string
    url:string
}
export interface IItemName {
    name:string
    language:{[key:string]:IItemNameAndUrl}
}
export interface IItemEffectEntries {
    effect:string
    short_effect:string
    language:{[key:string]:IItemNameAndUrl}
}
export interface IItemFlavourTextEntries {
    text:string
    version_group: {[key:string]:IItemNameAndUrl}
    language:{[key:string]:IItemNameAndUrl}
}
export interface IItemGameIndices {
    game_index:number
    generation:{[key:string]:IItemNameAndUrl}
}


export interface IItem {
    names:[{[key:string]:IItemName}],
    cost: number,
    weight: number,
    height: number,
    id:number,
    is_default:boolean,
    location_area_encounters:string,
    base_experience:number,
    category:{[key:string]:IItemNameAndUrl},
    flavor_text_entries:{[key:string]:IItemFlavourTextEntries},
    effect_entries:{[key:string]:IItemEffectEntries},
    attributes:{[key:string]:IItemNameAndUrl},
    held_by_pokemon:[{[key:string]:IItemHeldByPokemon}],
    fling_effect:{[key:string]:IItemNameAndUrl},
    baby_trigger_for:{url:string},
    sprites:{default:string};
    game_indices:{[key:string]:IItemGameIndices},
}

export class Item implements IItem, Deserializable {
    names:[{[key:string]:IItemName}];
    cost: number;
    weight: number;
    height: number;
    id:number;
    is_default:boolean;
    location_area_encounters:string;
    base_experience:number;
    sprites:{default:string};
    game_indices:{[key:string]:IItemGameIndices};
    category:{[key:string]:IItemNameAndUrl};
    flavor_text_entries:{[key:string]:IItemFlavourTextEntries};
    effect_entries:{[key:string]:IItemEffectEntries};
    attributes:{[key:string]:IItemNameAndUrl};
    held_by_pokemon:[{[key:string]:IItemHeldByPokemon}];
    fling_effect:{[key:string]:IItemNameAndUrl};
    baby_trigger_for:{url:string};

    deserialize(input: IItem){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}


