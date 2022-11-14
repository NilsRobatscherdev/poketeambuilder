import { Component, h, State } from '@stencil/core';
import { IPokedex, Pokedex } from '../../../interfaces/pokedex';
import { IPokemon, Pokemon } from '../../../interfaces/pokemon';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  tag: 'page-pokedex',
  styleUrl: 'page-pokedex.scss',
})
export class PagePokedex {
  @State() pokemon: IPokemon = new Pokemon()
  @State() pokedex: IPokedex = new Pokedex().deserialize({
    pokemons: []
  })
  async componentWillLoad(){
    PokedexService.getPokedex("https://pokeapi.co/api/v2/pokemon/?limit=24").then((pokedex) => {
      pokedex.results.map(pokemonList => {
        PokedexService.getPokedexPokemon(pokemonList.url).then((pokemon) =>{
          this.pokemon = pokemon
          this.pokedex?.pokemons?.push(this.pokemon)
          PokedexService.getPokedexPokemon(pokemon.species.url).then((japaneseName) =>{
              pokemon.names = japaneseName.names
          })
        })
      })
    })
  }
 
  render() {
    return (
      <div>
        <search-bar></search-bar>
      <ion-grid>
        <ion-row>
            {
          this.pokedex.pokemons.map(pokemon => {
                return[
                  <ion-col size="6" size-sm="3">
                  <pokemon-card pokemon={pokemon}/>
                  </ion-col>
                ]
            })
          }
    
        </ion-row>
      </ion-grid>

      </div>
      );
  }

}
