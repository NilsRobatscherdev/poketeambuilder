import { Component, h, Prop } from '@stencil/core';
import { IBattleConditions } from '../../../interfaces/battle-conditions';

@Component({
  tag: 'battle-conditions',
  styleUrl: 'battle-conditions.scss',
})
export class BattleConditions {
  @Prop() data: IBattleConditions

  componentWillLoad(){
  }

  render() {
    return (
      <div>
    {
      this.data?.conditions?.map(item=>{
        return <div class={item.type + "Bg"}>
          <pokemon-types types={item.type}></pokemon-types>
          {item.multiplicator + "x"}
        </div>
      })
    }    
      </div>
    );
  }

}
