import { Component,h, State } from '@stencil/core';
import { IPokemon, Pokemon } from '../../../interfaces/pokemon';
import { PokedexService } from '../../../services/pokedex.service';
import { IMove } from '../../../interfaces/move';
import { IAbilitie } from '../../../interfaces/abilitie';
import { ISpecies } from '../../../interfaces/species';
@Component({
  tag: 'pokemon-detail',
  styleUrl: 'pokemon-detail.scss',
})
export class PokemonDetail {
  @State() nameUrl: string
  @State() typesLeft : any
  @State() typesRight : any
  @State() pokemon: IPokemon = new Pokemon()
  @State() pokemonBefore: IPokemon = new Pokemon()
  @State() pokemonAfter: IPokemon = new Pokemon()
  @State() moves = []
  @State() height: string
  @State() weight: string
  @State() info: {}
  @State() move: IMove
  @State() species: ISpecies
  @State() abilitys = []
  @State() ability: IAbilitie
  @State() showInfo: boolean = true
  @State() hasMegaEvolution: boolean = false
  @State() megaEvolutions = []
  @State() types :any
  componentWillLoad(){
    this.getPokemonFromUrl()
    PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon/${this.nameUrl}`).then((pokemon) => {
      this.pokemon = pokemon
      console.log(pokemon)
      this.getPokemonBefor(this.pokemon.id)
      this.getPokemonAfter(this.pokemon.id)
      this.pokemon.moves.map(moves => {
        this.getPokemonMoves(moves.move.url)
      })

      this.pokemon?.types?.map((types,index)=>{
        if(index === 0){
          this.types = types.type.name
        }
      })

      this.getPokemonSpecies(pokemon.species.url)
      this.pokemon.abilities.map(ability =>{
        this.getPokemonAbilitys(ability.ability.url)
      })

      

      this.height = (this.pokemon.height / 10) + "m"
      this.weight = (this.pokemon.weight / 10) + "kg"
    })



    PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).then((pokemons) =>{
     
    })
  }

  getPokemonBefor(pokemonId){
    let id = pokemonId - 1
    if(id !== 0){
      PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`).then((pokemon) =>{
        this.pokemonBefore = pokemon
        this.pokemonBefore.types.map((types,index) =>{
          if(index === 0){
            this.typesLeft = types.type.name
          }
        })
      })
    }
  }
  getPokemonAfter(pokemonId){
    let id = pokemonId + 1
    if(id !== 0){
      PokedexService.getPokedexPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`).then((pokemon) =>{
        this.pokemonAfter = pokemon
        this.pokemonAfter.types.map((types,index) =>{
          if(index === 0){
            this.typesRight = types.type.name
          }
        })
      })
    }
  }
  getPokemonFromUrl(){
    const locationHref = location.href;
    this.nameUrl = locationHref.split('/pokemon/').pop();
  }
  getPokemonMoves(url){
    PokedexService.getPokedexPokemon(`${url}`).then((move) => {
     this.move = move
      this.moves.push(...[this.move])
  
    })
  }
  getPokemonAbilitys(url){
    PokedexService.getPokedexPokemon(`${url}`).then((ability) => {
     this.ability = ability
      this.abilitys.push(...[this.ability])

    })
  }
  getPokemonSpecies(url){
    PokedexService.getPokedexPokemon(`${url}`).then((species) => {
      this.species = species
      let array = []
      this.species.varieties.map(varieties => {
          array.push(varieties.pokemon.name)
      })
      this.megaEvolutions = array
      if(this.megaEvolutions.length > 1){
        this.hasMegaEvolution = true
      }
    })
  }
  render() {
    return (
      <ion-content>
        <div class='header'>
          {this.pokemon.name}
        </div> 
        <img src={this.pokemon?.sprites?.front_default} alt="" />

        {
          this.pokemon?.types?.map(types => {
              return [
                <pokemon-types types={types.type.name}></pokemon-types>
              ]
            })
        }

      <div class="content">
        <div>
        <ion-chip onClick={() => this.showInfo = true}>info</ion-chip>
        <ion-chip onClick={() => this.showInfo = false}>moves</ion-chip>
        </div>
        {
          this.showInfo ?
     
        <div>
        <div class="wrapper-info">          
          <ion-grid>
            <ion-row>
              <ion-col>
              Height
              Weight
              Base Xp
              Abilities
              </ion-col>
              <ion-col>
              {this.height}
              {this.weight}
              {this.pokemon.base_experience}
              <pokemon-ability abilitys={this.abilitys}></pokemon-ability>
              </ion-col>
            </ion-row>
          </ion-grid>

        </div>
        <div class="wrapper-catch-and-breeding"> 
        <h2>Catch and Breeding</h2>         
          <ion-grid>
            <ion-row>
              <ion-col>
              Catchrate
              Gender
              Start friendship
              Egg Groups
              Egg cycle
              </ion-col>
              <ion-col>
              {this.species?.capture_rate}
              {this.species?.base_happiness}
              {
                this.species?.egg_groups.map(names => {
                  return names.name})
              }
              {this.species?.hatch_counter}
              </ion-col>
            </ion-row>
          </ion-grid>

        </div>
        <div class="wrapper-stats">  
          <h2>Stats</h2>  
          {
            this.hasMegaEvolution &&         
            this.megaEvolutions.map(item =>{
              return <div>
              <ion-chip onClick={() => this.showInfo = true}>{item}</ion-chip>
            </div>
            })
          }
          {
            this.pokemon?.stats?.map(stat => {
              return <pokemon-attributes stat={stat}></pokemon-attributes>
            }
          )}
        </div>
        <div class="wrapper-stats">  
          <h2>Battle conditions</h2>  
          {
            this.hasMegaEvolution &&
              this.megaEvolutions.map(item =>{
                return <div>
                <ion-chip onClick={() => this.showInfo = true}>{item}</ion-chip>
              </div>
              })
            }         

          
          {
            this.pokemon?.stats?.map(stat => {
              return <pokemon-attributes progressbarAllowed={true} types={this.types} stat={stat}></pokemon-attributes>
            }
          )}
        </div>
        <div class="wrapper-stats">  
          <h2>Base Evolution</h2>
          <span>If {this.pokemon?.name} is attacked by attacks of these respective types, the damage is multiplied by the specified factor.</span>
          {
            this.pokemon?.stats?.map(stat => {
              return <pokemon-attributes stat={stat}></pokemon-attributes>
            }
          )}
        </div>
        </div>
          :

        <div class="wrapper-moves">
          <pokemon-moves withSearchFunction={true} moves={this.moves}>
          </pokemon-moves>
        </div>
   }
      </div>
      <div class="footer">
      <ion-grid>
      <ion-row>
        <ion-col size="6" class="left-item">
        <ion-icon src={`/assets/icon/pokeball/${this.typesLeft}.svg`} id="footer-icon"/>
          <a href={this.pokemonBefore?.name}>
            <img src={this.pokemonBefore?.sprites?.front_default}  alt={this.pokemonBefore?.name} />
          </a>
        </ion-col>
        <ion-col size="6" class="right-item">
          <a href={this.pokemonAfter?.name}>
            <img src={this.pokemonAfter?.sprites?.front_default}  alt={this.pokemonAfter?.name} />
          </a>
          <ion-icon src={`/assets/icon/pokeball/${this.typesRight}.svg`} id="footer-icon"/>
        </ion-col>

      </ion-row>
      </ion-grid>
      </div>
      </ion-content>
    );
  }

}
