import { Deserializable } from "./deserialize";

export interface IBattleConditionsCondition {
    type:string
    multiplicator:number
}


export interface IBattleConditions {
    conditions?:IBattleConditionsCondition[],
}

export class BattleConditions implements IBattleConditions, Deserializable {
    conditions?:IBattleConditionsCondition[];

    deserialize(input: IBattleConditions){
        if(input){
            Object.assign(this,input);
        }
        return this
    }
}


