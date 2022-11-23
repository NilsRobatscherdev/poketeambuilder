import { Component, ComponentInterface, h, Prop, State, Event } from '@stencil/core';
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
  @State() listExcist = false
  @Event() tooMuch

  componentWillLoad(){
    this.list = []
  }
    
  componentWillUpdate() {
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
    const index = this.list.indexOf(pokemom.detail);

    if (index > -1) {
      console.log(index) 
      this.list.splice(index, 1); 

      return this.list
    }
    console.log(this.list)
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
 
    return (
      <ion-grid> 
        <ion-row>
          {
            this.list?.length > 0 ?
              this.list?.map(pokemon =>{
              return [
                <ion-col size="6" size-sm="4">
                  <pokemon-card listExcist={this.listExcist} onDeletePokemon={(ev) => this.deletePokemon(ev)} builder={this.builder} pokemon={pokemon}>
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
