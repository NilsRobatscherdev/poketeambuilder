import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pokemon-ability',
  styleUrl: 'pokemon-ability.scss',
})
export class PokemonAbility {
  @Prop() abilitys = []

  render() {
    return (
        <div>
          {
            this.abilitys.map(ability =>{
              return <div>
                <h3>{ability.name}</h3>
                  {ability.effect_entries.map(effect=>{
                    if(effect.language.name === "en"){
                      return <span>{effect.short_effect}</span>
                    }
                  })}            
              </div>
            })
            }
        </div>
    )
  }

}
