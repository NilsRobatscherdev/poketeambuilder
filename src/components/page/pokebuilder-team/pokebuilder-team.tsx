import { Component, h, Prop } from '@stencil/core';
import { IPokemon } from '../../../interfaces/pokemon';

@Component({
  tag: 'pokebuilder-team',
  styleUrl: 'pokebuilder-team.scss',
})
export class PokebuilderTeam {
  @Prop() poketeam: IPokemon[]

  render() {
    return (
      <div>awd</div>
    );
  }

}
