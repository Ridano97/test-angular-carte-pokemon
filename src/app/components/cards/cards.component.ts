import { Component, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonTypeProperties } from '../../utils/pokemon.utils';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

   @Input() pokemon  = new Pokemon();
   pokemonTypeIcon : string = "assets/img/energie-icone.jpg";
   backgroundColor : string  = "rgba(255, 255, 104)";

   ngOnInit(): void {
    this.pokemonTypeIcon = PokemonTypeProperties[this.pokemon.type].imageURL;
    this.backgroundColor = PokemonTypeProperties[this.pokemon.type].color; 
   }

}
