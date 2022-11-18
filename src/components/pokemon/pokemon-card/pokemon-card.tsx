import { Component, h, Prop, State,Event } from '@stencil/core';
import { IPokemon } from '../../../interfaces/pokemon';

@Component({
  tag: 'pokemon-card',
  styleUrl: 'pokemon-card.scss',
})
export class PokemonCard  {

  @Prop() pokemon : IPokemon
  @Prop() builder = false
  @Prop() disabled = false
  @Prop() listExcist = false
  @State() name : string
  @State() id : number
  @State() types : any
  @State() japaneseName : string
  @Event() sendPokemonBack
  @Event() deletePokemon

  componentWillLoad(){
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

  onClickCard(pokemon){
    if(this.builder){
      if(this.listExcist){
        this.deletePokemon.emit(pokemon)
      }else{
        this.sendPokemonBack.emit(pokemon)
      }
    }else{
      location.href = `/pokemon/${pokemon.name}`;
    }
   
  }


  render() {
    return (
    <ion-card disabled={this.disabled} onClick={() => this.onClickCard(this.pokemon)} button={true} class={this.types + "Bg"}>
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
