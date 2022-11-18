import { Component, h, State } from '@stencil/core';
import { IPokemon } from '../../../interfaces/pokemon';

@Component({
  tag: 'page-pokebuilder',
  styleUrl: 'page-pokebuilder.scss',
})
export class PagePokebuilder {
@State() pokemon : IPokemon
@State() pokemonDelete : IPokemon
@State() disabled = false

  onSendBack(ev){
    this.pokemon = ev.detail
  }

  tooMuch(){
    this.disabled = true
  }



  render() {
    return (
      <ion-content>
        <pokebuilder-pokegrid pokemonDelete={this.pokemonDelete} onTooMuch={() => this.tooMuch()} pokemon={this.pokemon} builder={true}></pokebuilder-pokegrid>
        <pokemon-pokedex  onSendPokemonBack={(ev) => this.onSendBack(ev)} builder={true} disabled={this.disabled}></pokemon-pokedex>
      </ion-content>
    );
  }
}
