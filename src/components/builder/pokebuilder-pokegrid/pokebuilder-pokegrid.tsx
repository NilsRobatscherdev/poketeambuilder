import { Component, ComponentInterface, h, Prop, State, Event, Listen } from '@stencil/core';
import { UpdatePokegrid } from '../../../helpers/pokebuilder-pokegrid.utils';
import { IPokemon } from '../../../interfaces/pokemon';


@Component({
  tag: 'pokebuilder-pokegrid',
  styleUrl: 'pokebuilder-pokegrid.scss',
})
export class PokebuilderPokegrid implements ComponentInterface {
  @Prop() pokemonList: IPokemon[]
  @Prop() pokemon: IPokemon
  @Prop() seeDetails = true
  @Prop() builder = true
  @Prop() pokemonDelete: IPokemon
  @State() list: IPokemon[]
  @State() isDelete : boolean = false
  @State() listExcist = false
  @Event() tooMuch

  @Listen('sendPokemonBack')
  todoCompletedHandler(event) {
    console.log(event)
    if(event.type === "sendPokemonBack"){
      console.log(event.detail)
      this.list?.push({...event.detail})
      if(this.list?.length > 5) {
        this.tooMuch.emit()
      }
      if(this.list?.length > 0){
        this.listExcist = true
      }
      if(this.list?.length < 0){
        this.listExcist = false
      }
    }

  }

  componentWillLoad(){
    this.list = []
  } 

  componentWillUpdate(){
    this.list?.push({...this.pokemon})
    if(this.list?.length > 5) {
      this.tooMuch.emit()
    }
    if(this.list?.length > 0){
      this.listExcist = true
    }
    if(this.list?.length < 0){
      this.listExcist = false
    }
  }

  seeDetail(){
    location.href = `/pokemonbuilder/team`;
  }

  deletePokemon(pokemom){
    console.log("awd")
    pokemom.delete = true
    this.isDelete = true
    const changedPokeList = UpdatePokegrid(this.list, pokemom)

    if(changedPokeList){
      console.log(changedPokeList)
      this.list = changedPokeList
    }

    this.list = [...this.list]
  }

  showEmptyGrid(){
    for (let i = 0; i < 6; i++) {
    
      return [
        <div>awd</div>
      ]
      
    }
  }

  render() {
    console.log(this.list)
    return (
      <ion-grid> 
        <ion-row>
          {
            this.list?.length > 0 ?
              this.list?.map(pokemon =>{
              return [
                <ion-col size="6" size-sm="4">
                  <pokemon-card listExcist={this.listExcist} onDeletePokemon={(ev) => this.deletePokemon(ev.detail)} builder={this.builder} pokemon={pokemon}>
                  </pokemon-card>
                </ion-col>
                ]
              })
              :
              this.showEmptyGrid()
          }
        </ion-row>
        {
          this.seeDetails &&  
          <button>See Details</button>
        }
       
    </ion-grid>
    );
  }

}
