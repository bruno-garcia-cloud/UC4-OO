import { Carta } from "./carta";

export class Tabuleiro {
  mao: Carta[] = [];
  descarte: Carta[] = [];

  adicionarCartaMao(carta: Carta): void {
    this.mao.push(carta);
  }

  descartarCarta(): void {
    const carta = this.mao.pop();
    if (carta) {
      this.descarte.push(carta);
    }
  }

  exibirMao(): void {
    for (const carta of this.mao) {
      carta.exibirCarta();
    }
  }

  exibirDescarte(): void {
    for (const carta of this.descarte) {
      carta.exibirCarta();
    }
  }
}