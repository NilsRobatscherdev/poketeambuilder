import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {


  renderRouter(){
    return(
    <ion-router
      useHash={false}
      root={"/"}
    >
      <ion-route url="/pokemon/:pokemonId" component="pokemon-detail" />
      <ion-route url="/pokedex" component="page-pokedex" />
      <ion-route url="/pokebuilder" component="page-pokebuilder" />
      <ion-route url="/pokebuilder/team" component="pokebuilder-team" />
    </ion-router>
    )
  }

  render() {
    return (
      <ion-app>
        <page-header/>
        {this.renderRouter()}
        <ion-nav id='main-nav'/>
      </ion-app>
    );
  }
}
