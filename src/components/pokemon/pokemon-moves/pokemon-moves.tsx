import { Component, h, State,Prop,Event,EventEmitter } from '@stencil/core';

@Component({
  tag: 'pokemon-moves',
  styleUrl: 'pokemon-moves.scss',
})
export class PokemonMoves  {
  @Prop() moves = []
  @State() movesList = []
  @Prop() withSearchFunction = false
  @Event() search: EventEmitter
  @Event() searchClear: EventEmitter

  private searchbar : HTMLIonSearchbarElement

  componentWillLoad(){
    this.movesList = this.moves
    this.movesList = [...this.movesList]
    console.log(this.moves)
  }
  

  onSearch(event){
    console.log(event)
    this.movesList = []
    this.moves.map(item => {
      if(item.name.includes(event.detail.value)){
        this.moves = []
 
        this.movesList.push(item)
        console.log(item)
        this.movesList = [...this.movesList]
      }
    })
  }

  onSearchClear(event){
   event.preventDefault()
   this.movesList = this.moves
   this.movesList=[...this.movesList]
  }
  render() {
    return (
        <ion-grid>
          {
            this.withSearchFunction && 
              <ion-searchbar ref={ref => this.searchbar = ref}
                          onIonChange={(event) => this.onSearch(event)}
                          onIonClear={(event) => this.onSearchClear(event)}>

              </ion-searchbar>
          }
          <ion-row>
          {this.movesList.map(move =>{
          return [
            <ion-col size="6" size-sm="3">
              <ion-card>
                <h3> {move.name}</h3>
                <span> {move.power}</span>
                <span> {move.pp}</span>
                <span> {move.damage_class.name}</span>
                <span> {move.contest_type?.name}</span>
                <pokemon-types types={move.type.name}></pokemon-types>
                  {move.effect_entries.map(effect=>{
                    if(effect.language.name === "en"){
                      let text = effect.short_effect
                      var newText = text.replace('$effect_chance%', `${move.effect_chance} %`);
                      return <span>{newText}</span>
                    }
                  })} 
                </ion-card>
            </ion-col>
          ]
        })}
          </ion-row>
        </ion-grid>
    );
  }

}
