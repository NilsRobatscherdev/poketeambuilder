import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'berries-card',
  styleUrl: 'berries-card.scss',
  shadow: true,
})
export class BerriesCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
