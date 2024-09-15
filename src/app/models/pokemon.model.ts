import { PokemonType} from "../utils/pokemon.utils";

export class Pokemon {
    name : string = "Pikachu";
    hp : number = 40 ;
    image : string = "assets/img/pikachu.png";
    type : PokemonType = PokemonType.ELECTRIC;
    figureCaption : string = "N°1";
    attackName : string =  "Electric Storm";
    attackStrength : number = 60;
    attackDescription : string = "Electric power storm"
}