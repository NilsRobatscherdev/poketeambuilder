import { Deserializable } from "./deserialize";
import { IPokemon } from "./pokemon";

export interface IMoveNameAndUrl {
    name:string
    url:string
}

export interface MoveOtherNames {
    name:string
    url:string
}

export interface IMoveMeta {
    "min_hits": number,
    "max_hits": number,
    "min_turns": number,
    "max_turns": number,
    "drain": number,
    "healing": number,
    "crit_rate": number,
    "ailment_chance": number,
    "flinch_chance": number,
    "stat_chance": number,
    "category":{[key:string]:IMoveNameAndUrl},
    "ailment":{[key:string]:IMoveNameAndUrl},
}

export interface IMoveContestCombosSuper {
    "use_before":[],
    "use_after":[],
}
export interface IMoveContestCombosNormal {
    "use_before":[{[key:string]:IMoveNameAndUrl}],
    "use_after":[],
}
export interface IMoveContestCombos {
    "normal":{[key:string]:IMoveContestCombosNormal},
    "super":{[key:string]:IMoveContestCombosSuper},
}

export interface IMoveEffectEntries {
    "effect": string,
    "short_effect": string,
    "language":{[key:string]:IMoveNameAndUrl},
}

export interface IMoveFlavourTextEntries {
    "flavor_text": string,
    "language":{[key:string]:IMoveNameAndUrl},
    "version_group":{[key:string]:IMoveNameAndUrl},
}

export interface IMove {
    id:number,
    name: string,
    accuracy: number,
    effect_chance:null,
    pp:number,
    target:{[key:string]:IMoveNameAndUrl},
    type:{[key:string]:IMoveNameAndUrl},
    learned_by_pokemon:IPokemon[],
    priority:number,
    power:number,
    past_values:[],
    stat_changes:[],
    effect_changes:[],
    generationen:{[key:string]:IMoveNameAndUrl},
    damage_class:{[key:string]:IMoveNameAndUrl},
    contest_effect:{[key:string]:IMoveNameAndUrl},
    contest_type:{[key:string]:IMoveNameAndUrl},
    contest_combos:{[key:string]:IMoveContestCombos},
    meta:{[key:string]:IMoveMeta}
    effect_entries:[{[key:string]:IMoveMeta}]
    flavor_text_entries:[{[key:string]:IMoveFlavourTextEntries}]
}

export class Moves implements IMove, Deserializable {
    id:number;
    name: string;
    accuracy: number;
    effect_chance:null;
    pp:number;
    target:{[key:string]:IMoveNameAndUrl};
    type:{[key:string]:IMoveNameAndUrl};
    learned_by_pokemon:IPokemon[];
    priority:number;
    power:number;
    past_values:[];
    stat_changes:[];
    effect_changes:[];
    generationen:{[key:string]:IMoveNameAndUrl};
    damage_class:{[key:string]:IMoveNameAndUrl};
    contest_effect:{[key:string]:IMoveNameAndUrl};
    contest_type:{[key:string]:IMoveNameAndUrl};
    contest_combos:{[key:string]:IMoveContestCombos};
    meta:{[key:string]:IMoveMeta}
    effect_entries:[{[key:string]:IMoveMeta}]
    flavor_text_entries:[{[key:string]:IMoveFlavourTextEntries}]

    deserialize(input: Moves){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}


