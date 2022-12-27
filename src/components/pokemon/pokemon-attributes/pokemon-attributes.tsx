import { Component, h, Prop, State,Event } from '@stencil/core';

@Component({
  tag: 'pokemon-attributes',
  styleUrl: 'pokemon-attributes.scss',
})
export class PokemonAttributes {
  @Prop() stat :any
  @Prop() types:any
  @Prop() progressbarAllowed : boolean = false
  @State() hp : number = 255
  @State() atk : number = 190
  @State() def : number = 250
  @State() sp_atk : number = 194
  @State() sp_def : number = 250
  @State() speed : number = 200
  @State() total : number = 1125
  @State() avg : number = 255
  @State() value : number = 187.5


  componentWillLoad(){    
      if(this.stat.stat.name === "hp"){
        this.value = this.stat.base_stat / this.hp * 100
      }else if(this.stat.stat.name === "attack"){
        this.value = this.stat.base_stat / this.atk * 100
      }
      else if(this.stat.stat.name === "defense"){
        this.value = this.stat.base_stat / this.def* 100
      }
      else if(this.stat.stat.name === "special-attack"){
        this.value = this.stat.base_stat / this.sp_atk* 100
      }
      else if(this.stat.stat.name === "special-defense"){
        this.value = this.stat.base_stat / this.sp_def* 100
      }
      else if(this.stat.stat.name === "speed"){
        this.value = this.stat.base_stat / this.speed* 100
      }
  }
  render() {
    return (
      <ion-grid>
        <ion-row>
          <ion-col>
          <span>{this.stat.stat.name}</span>
          </ion-col>
          <ion-col>
          <span>{this.stat.base_stat}</span>
            </ion-col>
            {
              this.progressbarAllowed &&
              <ion-col>
                <div class="progressbar">
                  <div style={{width:this.value + "%"}} id="progress" class={this.types + "Bg"}></div>
                </div>  
              </ion-col>
            }
      

           
        </ion-row>
    </ion-grid>
    );
  }

}
