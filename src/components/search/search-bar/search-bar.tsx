import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.css',
})
export class SearchBar {
    onSearchPokemon(ev){
      console.log(ev)
  }
  render() {
    return (
      <ion-toolbar>
      <ion-searchbar onIonChange={(ev) => this.onSearchPokemon(ev)}></ion-searchbar>
    </ion-toolbar>
    );
  }

}
