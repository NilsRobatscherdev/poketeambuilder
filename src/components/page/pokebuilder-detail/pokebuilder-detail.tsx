import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pokebuilder-detail',
  styleUrl: 'pokebuilder-detail.scss',
})
export class PokebuilderDetail {

  @Prop() pokemonList = []
  render() {
    return (
        <ion-content>
          awd
        </ion-content>
    );
  }

}
