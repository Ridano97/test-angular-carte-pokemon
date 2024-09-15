import { Component, computed, effect, model, signal } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';
import { Pokemon } from './models/pokemon.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonType } from './utils/pokemon.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,CardsComponent, SearchBarComponent],
  templateUrl: './app.component.html' ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  pokemons! : Pokemon[] ;

  selectedPokemonIndex = (0) ; 


  constructor() {

    this.pokemons = [];
    const pokemon1 = new Pokemon();
    pokemon1.name = "Pichu";
    pokemon1.hp = 40 ; 
    pokemon1.type = PokemonType.ELECTRIC;
    pokemon1.image = "https://www.media.pokekalos.fr/img/pokemon/home/pichu.png"
    pokemon1.attackName = "Charge"
    pokemon1.attackDescription = "Run and "
    pokemon1.figureCaption = "N°2";
    pokemon1.attackStrength = 20 ;
    this.pokemons.push(pokemon1)

    const pokemon2 = new Pokemon();
    pokemon2.name = "Mew";
    pokemon2.hp = 60 ; 
    pokemon2.type = PokemonType.PSY;
    pokemon2.image = "https://www.pokepedia.fr/images/thumb/1/16/Mew-DEPS.png/800px-Mew-DEPS.png"
    pokemon2.figureCaption = "N°3";
    pokemon2.attackName = "Universe Canon"
    pokemon2.attackDescription = "Most powerfull canon"
    pokemon2.attackStrength = 80 ;
    this.pokemons.push(pokemon2)

    const pokemon3 = new Pokemon();
    pokemon3.name = "Reptincel";
    pokemon3.hp = 40 ; 
    pokemon3.type = PokemonType.FIRE;
    pokemon3.image = "https://www.media.pokekalos.fr/img/pokemon/models/reptincel.png"
    pokemon3.figureCaption = "N°4";
    pokemon3.attackName = "Fire Tails"
    pokemon3.attackDescription = "A Fire Strike"
    pokemon3.attackStrength = 30 ;
    this.pokemons.push(pokemon3)

    const pokemon4 = new Pokemon();
    pokemon4.name = "Carabaffe";
    pokemon4.hp = 40 ; 
    pokemon4.type = PokemonType.WATER;
    pokemon4.image = "https://www.media.pokekalos.fr/img/pokemon/models/carabaffe.png"
    pokemon4.figureCaption = "N°5";
    pokemon4.attackName = "Water canon"
    pokemon4.attackDescription = "A hot canon water"
    pokemon4.attackStrength = 35 ;
    this.pokemons.push(pokemon4)
  }

  togglePokemon() {
    this.selectedPokemonIndex = ((this.selectedPokemonIndex + 1) % this.pokemons.length)
  }
}
