import { IPokemon, Pokemon } from "../interfaces/pokemon";

export const UpdatePokegrid = (pokeList:IPokemon[],pokemon):IPokemon[]=>{
    const index = pokeList.findIndex((pokemon$$)=> pokemon$$.id === pokemon.id)
    if(index !== -1){
        if(pokemon?.delete === true){
            pokeList.splice(index,1)
        }else{
            pokeList[index] = new Pokemon().deserialize(Object.assign(pokemon))
        }
        return pokeList
    }else{
        return null
    }
}