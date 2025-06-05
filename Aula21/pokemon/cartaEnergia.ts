import { Carta } from "./carta";

export class CartaEnergia extends Carta {
  valor: number;

  constructor(nome: string, valor: number) {
    super(nome, "Energia");
    this.valor = valor;
  }

  exibirCarta(): void {
    super.exibirCarta();
    console.log(`Valor de energia: ${this.valor}`);
  }
}

let cartEnergia = new CartaEnergia("Energia de agua", 1)
cartEnergia.exibirCarta();