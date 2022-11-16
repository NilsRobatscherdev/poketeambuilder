import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pokemon-attributes',
  styleUrl: 'pokemon-attributes.scss',
})
export class PokemonAttributes {
  @Prop() stat
  render() {
    return (
      <div>
      <span>{this.stat.base_stat}</span>
      <span>{this.stat.effort}</span>
      <span>{this.stat.stat.name}</span>
    </div>
    );
  }

}
