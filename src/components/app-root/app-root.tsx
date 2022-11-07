import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <page-header>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/pokedex" component="page-pokedex" exact={true} />
              </stencil-route-switch>
          </stencil-router>
        </page-header>
      </ion-app>
    );
  }
}
