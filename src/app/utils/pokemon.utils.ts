export enum PokemonType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
    PSY = "psy"
}

export interface IPokemonProperties {
    imageURL : string ;
    color : string;
}

export const PokemonTypeProperties : {[key : string ] : IPokemonProperties} = {
    [PokemonType.PSY] : {
        imageURL : "https://www.cards-capital.com/43569-product/lot-de-10-cartes-psy-pokemon.jpg",
        color : 'rgb(252,228,252)'
    },

    [PokemonType.ELECTRIC] : {
        imageURL : "assets/img/energie-icone.jpg",
        color : 'rgba(255, 255, 86, 0.676)'
    },

    [PokemonType.FIRE] : {
        imageURL : "https://www.cards-capital.com/43566-product/lot-de-10-cartes-feu-pokemon.jpg",
        color : 'rgb(255, 144, 85)'
    },
    [PokemonType.WATER] : {
        imageURL : "https://www.cards-capital.com/43567-product/lot-de-10-cartes-eau-pokemon.jpg",
        color : 'rgb(57, 183, 251)'
    }
}