import { Component, h } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.scss',
})
export class SearchBar {
    onSearchPokemon(ev){
      console.log(ev)
  }
  render() {
    return (
        <ion-searchbar class="custom" onIonChange={(ev) => this.onSearchPokemon(ev)}></ion-searchbar>
    );
  }

}
