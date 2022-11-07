import {RestService} from './rest.service'

class PokedexServiceController extends RestService {

    public read(url){
        return super.read("https://pokeapi.co/api/v2/pokemon")
    }

    public async getPokedex(url){
        const response = await fetch(url);
        var data = await response.json();
        return data
    }
    public async getPokedexPokemon(url){
        const response = await fetch(url);
        var data = await response.json();
        return data
    }
    
}



export const PokedexService = new PokedexServiceController();

