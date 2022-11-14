import { Component, Host, h, Prop, State, getAssetPath } from '@stencil/core';

@Component({
  tag: 'pokemon-types',
  styleUrl: 'pokemon-types.scss',
  assetsDirs: ['assets']
})
export class PokemonTypes {
  @Prop() types:any
  @State() imageSrc:any

  componentWillLoad(){
    this.imageSrc = getAssetPath(`/assets/types/${this.types}.svg`);
  }
  render() {
    console.log(this.types)
    return (
        <img src={this.imageSrc} alt={this.types} />
    );
  }

}
