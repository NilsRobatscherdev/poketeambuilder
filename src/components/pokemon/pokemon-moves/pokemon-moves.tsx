import { Component, h, Prop } from '@stencil/core';



@Component({
  tag: 'pokemon-moves',
  styleUrl: 'pokemon-moves.scss',
})
export class PokemonMoves {
  @Prop() moves = []
  @Prop() withSearchFunction = false

  render() {
    return (
        <ion-grid>
          {
            this.withSearchFunction && 
              <search-bar></search-bar>
          }
          <ion-row>
          {this.moves.map(move =>{
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
