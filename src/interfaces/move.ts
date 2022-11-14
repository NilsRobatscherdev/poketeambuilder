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
    min_hits: number,
    max_hits: number,
    min_turns: number,
    max_turns: number,
    drain: number,
    healing: number,
    crit_rate: number,
    ailment_chance: number,
    flinch_chance: number,
    stat_chance: number,
    category:IMoveNameAndUrl,
    ailment:IMoveNameAndUrl,
}

export interface IMoveContestCombosSuper {
    use_before:[],
    use_after:[],
}
export interface IMoveContestCombosNormal {
    use_before:[IMoveNameAndUrl],
    use_after:[],
}
export interface IMoveContestCombos {
    normal:IMoveContestCombosNormal,
    super:IMoveContestCombosSuper,
}

export interface IMoveEffectEntries {
    effect: string,
    short_effect: string,
    language:IMoveNameAndUrl,
}

export interface IMoveFlavourTextEntries {
    flavor_text: string,
    language:IMoveNameAndUrl,
    version_group:IMoveNameAndUrl,
}

export interface IMove {
    id:number,
    name: string,
    accuracy: number,
    effect_chance:null,
    pp:number,
    target:IMoveNameAndUrl,
    type:IMoveNameAndUrl,
    learned_by_pokemon:IPokemon[],
    priority:number,
    power:number,
    past_values:[],
    stat_changes:[],
    effect_changes:[],
    generationen:IMoveNameAndUrl,
    damage_class:IMoveNameAndUrl,
    contest_effect:IMoveNameAndUrl,
    contest_type:IMoveNameAndUrl,
    contest_combos:IMoveContestCombos,
    meta:IMoveMeta
    effect_entries:[IMoveMeta]
    flavor_text_entries:[IMoveFlavourTextEntries]
}

export class Moves implements IMove, Deserializable {
    id:number;
    name: string;
    accuracy: number;
    effect_chance:null;
    pp:number;
    target:IMoveNameAndUrl;
    type:IMoveNameAndUrl;
    learned_by_pokemon:IPokemon[];
    priority:number;
    power:number;
    past_values:[];
    stat_changes:[];
    effect_changes:[];
    generationen:IMoveNameAndUrl;
    damage_class:IMoveNameAndUrl;
    contest_effect:IMoveNameAndUrl;
    contest_type:IMoveNameAndUrl;
    contest_combos:IMoveContestCombos;
    meta:IMoveMeta
    effect_entries:[IMoveMeta]
    flavor_text_entries:[IMoveFlavourTextEntries]

    deserialize(input: Moves){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}


