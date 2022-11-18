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
  @State() moves = []
  @State() move: IMove
  @State() abilitys = []
  @State() ability: IAbilitie
  componentWillLoad(){
    this.getPokemonFromUrl()
    PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon/${this.nameUrl}`).then((pokemon) => {
      this.pokemon = pokemon
      this.pokemon.moves.map(moves => {
        this.getPokemonMoves(moves.move.url)
      })
      this.pokemon.abilities.map(ability =>{
        this.getPokemonAbilitys(ability.ability.url)
      })
    })
  }
  getPokemonFromUrl(){
    const locationHref = location.href;
    this.nameUrl = locationHref.split('/pokemon/').pop();
  }
  getPokemonMoves(pokemon){
    PokedexService.getPokedexPokemon(`${pokemon}`).then((move) => {
     this.move = move
      this.moves.push(...[this.move])
    })
  }
  getPokemonAbilitys(abilities){
    PokedexService.getPokedexPokemon(`${abilities}`).then((ability) => {
     this.ability = ability
      this.abilitys.push(...[this.ability])
    })
  }
  render() {
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
      </ion-content>
    );
  }

}
