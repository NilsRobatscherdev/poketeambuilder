import { Component, ComponentInterface, h, Prop, State, Event } from '@stencil/core';
import { IPokemon } from '../../../interfaces/pokemon';


@Component({
  tag: 'pokebuilder-pokegrid',
  styleUrl: 'pokebuilder-pokegrid.scss',
})
export class PokebuilderPokegrid implements ComponentInterface {
  @Prop() pokemonList = []
  @Prop() pokemon: IPokemon
  @Prop() seeDetails = true
  @Prop() builder = true
  @Prop() pokemonDelete: IPokemon
  @State() list = []
  @State() listExcist = false
  @Event() tooMuch
    
  private router = HTMLIonRouterElement

  componentWillUpdate() {

    this.list.push({...this.pokemon})
    if(this.list.length > 5) {
      this.tooMuch.emit()
    }
  
    if(this.list.length > 0){
      this.listExcist = true
    }

  }

  seeDetail(){
    
  }

 

  delete(array,pokemon){
    return array.filter(item=>{
      console.log(pokemon.detail.id)
      console.log(item.id)
      return pokemon.detail.id !== item.id
    })



  }

  deletePokemon(pokemom){
      let result = this.delete(this.list,pokemom)
      this.list = result
  }

  render() {
    return (
      <ion-grid>
        <ion-row>
        {this.list?.map(pokemon =>{
          return [
            <ion-col size="6" size-sm="4">
              <pokemon-card listExcist={this.listExcist} onDeletePokemon={(ev) => this.deletePokemon(ev)} builder={this.builder} pokemon={pokemon}>
              </pokemon-card>
            </ion-col>
            ]
          })}
        </ion-row>
        {
          this.seeDetails &&  
          <button>See Details</button>
        }
       
    </ion-grid>
    );
  }

}
