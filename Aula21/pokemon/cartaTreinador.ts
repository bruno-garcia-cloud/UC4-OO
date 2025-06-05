import { Carta } from "./carta";

export class CartaTreinador extends Carta {
  descricao: string;

  constructor(nome: string, descricao: string) {
    super(nome, "Treinador");
    this.descricao = descricao;
  }

  exibirCarta(): void {
    super.exibirCarta();
    console.log(`Descrição: ${this.descricao}`);
  }
}

let trein = new CartaTreinador("Leaf","O custo de recuo do pokémon ativo agora é menos dois")
trein.exibirCarta();
