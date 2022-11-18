import { Component, h } from '@stencil/core';


@Component({
  tag: 'page-pokedex',
  styleUrl: 'page-pokedex.scss',
})
export class PagePokedex {
  render(){
    return(
      <pokemon-pokedex></pokemon-pokedex>
    )  
  }
}
