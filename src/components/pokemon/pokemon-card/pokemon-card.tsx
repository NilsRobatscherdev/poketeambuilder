import { Component, h, Prop, State } from '@stencil/core';
import { IPokemon } from '../../../interfaces/pokemon';

@Component({
  tag: 'pokemon-card',
  styleUrl: 'pokemon-card.scss',
})
export class PokemonCard  {

  @Prop() pokemon : IPokemon
  @State() name : string
  @State() id : number
  @State() types : any
  @State() japaneseName : string

  componentWillLoad(){
    console.log(this.pokemon)
    this.pokemon.names.map(jap =>{
      if(jap.language.name === "ja"){
        this.japaneseName = jap.name
      }
    })
    this.pokemon.types.map((types,index)=>{
      if(index === 0){
        this.types = types.type.name
      }
    })
    this.name = this.pokemon.name
    this.id = this.pokemon.id
  }

  onClickCard(name){
    location.href = `/pokemon/${name}`;
  }


  render() {
    return (
    <ion-card onClick={() => this.onClickCard(this.name)} button={true} class={this.types + "Bg"}>
      <ion-card-header>
      <div class={"types"}>
      {
      this.pokemon.types.map(types => {
              return [
                <pokemon-types types={types.type.name}></pokemon-types>
              ]
            })
        }
      </div>
        <ion-card-subtitle>{this.id}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <img src={this.pokemon.sprites.front_default} alt="" />
        <ion-card-title>{this.name}</ion-card-title>
        <span>{this.japaneseName}</span>
      </ion-card-content>
</ion-card>
    );
  }

}
