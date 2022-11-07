import { Component, h, State } from '@stencil/core';
import { IPokedex } from '../../../interfaces/pokedex';
import { IPokemon } from '../../../interfaces/pokemon';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  tag: 'page-pokedex',
  styleUrl: 'page-pokedex.scss',
})
export class PagePokedex {

  @State() pokedex: IPokedex[]
  @State() pokemon: IPokemon

  async componentWillLoad(){
    PokedexService.getPokedex("https://pokeapi.co/api/v2/pokemon").then((pokedex) => {
 
      pokedex.results.map(pokemonList => {
        PokedexService.getPokedexPokemon(pokemonList.url).then((pokemon) =>{
            console.log(pokemon)
        })
      })
    })
  

  }

  render() {
    console.log(this.pokedex)
    return (
        <div>
          awd
        </div>
    );
  }

}
