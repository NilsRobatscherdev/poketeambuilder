import { Component,h, State } from '@stencil/core';
import { IPokemon, Pokemon } from '../../../interfaces/pokemon';
import { PokedexService } from '../../../services/pokedex.service';
import { IMove } from '../../../interfaces/move';
import { IAbilitie } from '../../../interfaces/abilitie';
@Component({
  tag: 'pokemon-detail',
  styleUrl: 'pokemon-detail.scss',
})
export class PokemonDetail {
  @State() nameUrl: string
  @State() types : any
  @State() pokemon: IPokemon = new Pokemon()
  @State() pokemonBefore: IPokemon = new Pokemon()
  @State() pokemonAfter: IPokemon = new Pokemon()
  @State() moves = []
  @State() move: IMove
  @State() abilitys = []
  @State() ability: IAbilitie
  componentWillLoad(){
    this.getPokemonFromUrl()
    PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon/${this.nameUrl}`).then((pokemon) => {
      this.pokemon = pokemon
      this.getPokemonBefor(this.pokemon.id)
      this.getPokemonAfter(this.pokemon.id)
      this.pokemon.moves.map(moves => {
        this.getPokemonMoves(moves.move.url)
      })
      this.pokemon.abilities.map(ability =>{
        this.getPokemonAbilitys(ability.ability.url)
      })
    })



    PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).then((pokemons) =>{
      console.log(pokemons)
    })
  }

  getPokemonBefor(pokemonId){
    let id = pokemonId - 1
    if(id !== 0){
      PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`).then((pokemon) =>{
        this.pokemonBefore = pokemon
      })
    }
  }
  getPokemonAfter(pokemonId){
    let id = pokemonId + 1
    if(id !== 0){
      PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`).then((pokemon) =>{
        this.pokemonAfter = pokemon
      })
    }
  }
  getPokemonFromUrl(){
    const locationHref = location.href;
    this.nameUrl = locationHref.split('/pokemon/').pop();
  }
  getPokemonMoves(pokemon){
    PokedexService.getPokedexPokemon(`${pokemon}`).then((move) => {
     this.move = move
      this.moves.push(...[this.move])
      this.moves = [...this.moves]
    })
  }
  getPokemonAbilitys(abilities){
    PokedexService.getPokedexPokemon(`${abilities}`).then((ability) => {
     this.ability = ability
      this.abilitys.push(...[this.ability])
      this.abilitys = [...this.abilitys]
    })
  }
  render() {
    console.log(this.moves)
    return (
      <ion-content>
        <div class='header'>
          {this.pokemon.name}
        <pokemon-ability abilitys={this.abilitys}></pokemon-ability>
        </div> 
        <img src={this.pokemon?.sprites?.front_default} alt="" />

        {
          this.pokemon?.types?.map(types => {
              return [
                <pokemon-types types={types.type.name}></pokemon-types>
              ]
            })
        }
      <div class="wrapper_moves">          
        {
          this.pokemon?.stats?.map(stat => {
            return <pokemon-attributes stat={stat}></pokemon-attributes>
          }
        )}
      
      
      
        <pokemon-moves withSearchFunction={true} moves={this.moves}>
        </pokemon-moves>
      </div>
      <div class="footer">
        <div>
          <a href={this.pokemonBefore?.name}>
            <img src={this.pokemonBefore?.sprites?.front_default}  alt={this.pokemonBefore?.name} />
          </a>
          
        </div>
        <div>
          <a href={this.pokemonAfter?.name}>
            <img src={this.pokemonAfter?.sprites?.front_default}  alt={this.pokemonAfter?.name} />
          </a>
        </div>
          
      </div>
      </ion-content>
    );
  }

}
