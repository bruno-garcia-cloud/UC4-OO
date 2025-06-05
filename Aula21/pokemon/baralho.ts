import { Carta } from "./carta";

export class Baralho {
  private pilha: Carta[] = [];

  constructor(cartas: Carta[]) {
    this.pilha = cartas;
    this.embaralhar();
  }

  embaralhar(): void {
    const cartasEmbaralhadas: Carta[] = [];
    for (let i = this.pilha.length - 1; i >= 0; i--) {
      cartasEmbaralhadas.push(this.pilha[i]);
    }
    this.pilha = cartasEmbaralhadas;
  }

  comprarCarta(): Carta | undefined {
    return this.pilha.pop();
  }

  visualizarTopo(): Carta | undefined {
    return this.pilha[this.pilha.length - 1];
  }
}


