import { Carta } from "./carta";

export class CartaPokemon extends Carta {
  ataque: string;
  hp: number;

  constructor(nome: string, ataque: string, hp: number) {
    super(nome, "Pokémon");
    this.ataque = ataque;
    this.hp = hp;
  }

  exibirCarta(): void {
    super.exibirCarta();
    console.log(`Ataque: ${this.ataque}`);
    console.log(`HP: ${this.hp}`);
  }
}

let pokemon = new CartaPokemon("Charmander","bola de fogo",70)
pokemon.exibirCarta();