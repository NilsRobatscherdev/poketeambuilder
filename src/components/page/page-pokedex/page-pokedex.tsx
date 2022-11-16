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

  private infiniteScroll: HTMLIonInfiniteScrollElement
  private offset = 0


  async componentWillLoad(){
    await this.getPokemons(true)
  }


  async getPokemons(callback){
    console.log(this.offset)
    PokedexService.getPokedex(`https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}?limit=24`).then((pokedex) => {
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

  onMore(callback?){
      this.offset = this.pokedex.pokemons.length
      this.getPokemons(callback)
  }

  infiniteScrollHandler = async (event: any) => {
    await this.onMore(() => {
      event.target.complete()
    })
  }
 
  render() {
    return (
      <ion-content>
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
        <ion-infinite-scroll
          ref={el => this.infiniteScroll = el}
          threshold='10%'
          onIonInfinite={(ev) => this.infiniteScrollHandler(ev)}
        >
          <ion-infinite-scroll-content loading-spinner="crescent">
          </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
      );
  }

}
