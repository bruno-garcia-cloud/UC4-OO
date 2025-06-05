import { Carta } from "./carta";

export class CartaItem extends Carta {
  efeito: string;

  constructor(nome: string, efeito: string) {
    super(nome, "Item");
    this.efeito = efeito;
  }

  exibirCarta(): void {
    super.exibirCarta();
    console.log(`Efeito: ${this.efeito}`);
  }
}

let item = new CartaItem("Panela","Adiciona 30 de dano a pokemon metalico")
item.exibirCarta();