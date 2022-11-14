import { Component, ComponentInterface, h } from '@stencil/core';
import { PageProcessService } from '../../services/pageProcess.service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot implements ComponentInterface {

  private router: HTMLIonRouterElement



  ionRouteDidChange(_event){
    PageProcessService.stop()
  }
  ionRouteWillChange(_event){
    PageProcessService.start()
  }

  renderRouter(){
    return(
    <ion-router
      useHash={false}
      ref={ref => this.router = ref}
      root={"/"}
      onIonRouteDidChange={(event) => this.ionRouteDidChange(event)}
      onIonRouteWillChange={(event) => this.ionRouteWillChange(event)}
    >
      <ion-route url="/pokemon/:pokemonId" component="pokemon-detail" />
      <ion-route url="/pokedex" component="page-pokedex" />
    </ion-router>
    )
  }
  render() {
    return (
      <ion-app>
      {this.renderRouter()}
         <ion-nav id='main-nav'></ion-nav>
      </ion-app>
    );
  }
}
