import { Component, h, Prop, State,Event } from '@stencil/core';
import { IPokedex, Pokedex } from '../../../interfaces/pokedex';
import { IPokemon, Pokemon } from '../../../interfaces/pokemon';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  tag: 'pokemon-pokedex',
  styleUrl: 'pokemon-pokedex.scss',
})
export class PokemonPokedex {
  @Prop() builder = false
  @Prop() disabled = false
  @State() pokemon: IPokemon = new Pokemon()
  @State() pokedex: IPokedex = new Pokedex().deserialize({
    pokemons: []
  })
  @Event() sendPokemonBack
  @Event() deletePokemon
  private infiniteScroll: HTMLIonInfiniteScrollElement
  private offset = 0
  private limit = 24
  async componentWillLoad(){
    await this.getPokemons()
  }
  async getPokemons(){
    PokedexService.getPokedex(`https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}?limit=${this.limit}`).then((pokedex) => {
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
  async getSearchPokemon(text){
    PokedexService.getPokedex(`https://pokeapi.co/api/v2/pokemon`).then((pokedex) => {
      pokedex.results.map(pokemonList => {
        console.log()
        if(pokemonList.name.includes(text)){
          PokedexService.getPokedexPokemon(pokemonList.url).then((pokemon) =>{
              console.log(pokemon)
          })
        }
      })
    })
  }

  onMore(callback?){
      this.offset = this.pokedex.pokemons.length
      this.getPokemons()
  }
  infiniteScrollHandler = async (event: any) => {
    await this.onMore(() => {
      event.target.complete()
    })
  }

  sendBack(pokemon){
    
    this.sendPokemonBack.emit(pokemon.detail)
  }

  search(ev){
    this.offset = this.pokedex.pokemons.length
    console.log(ev)
    this.getSearchPokemon(ev.detail.data)
  }

  deletePokemonFromList(pokemon){
    this.deletePokemon.emit(pokemon.detail)
  }
 
  render() {
    return (
      <ion-content>
          <ion-searchbar onIonInput={(ev) => this.search(ev)}></ion-searchbar>
        <ion-grid>
          <ion-row>
              {
            this.pokedex.pokemons.map(pokemon => {
                  return[
                    <ion-col size="6" size-sm="3">
                      <pokemon-card onDeletePokemon={(pokemon) => this.deletePokemonFromList(pokemon)} disabled={this.disabled} onSendPokemonBack={(pokemon) => this.sendBack(pokemon)} builder={this.builder} pokemon={pokemon}/>
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
