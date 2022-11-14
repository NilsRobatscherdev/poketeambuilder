import { Component, Prop,h, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { IPokemon, Pokemon } from '../../../interfaces/pokemon';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  tag: 'pokemon-detail',
  styleUrl: 'pokemon-detail.scss',
})
export class PokemonDetail {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @Prop() name: number
  @State() types : any
  @State() pokemon: IPokemon = new Pokemon()
  async componentWillLoad(){
    PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon/${this.name ? this.name :this.match.params.pokemonId}`).then((pokemon) => {
      this.pokemon = pokemon
    })
  }
  render() {
    return (
      <div>
        {this.pokemon.name}
      </div>
    );
  }

}
