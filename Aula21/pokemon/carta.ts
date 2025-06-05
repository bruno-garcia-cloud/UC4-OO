export class Carta {
    nome: string;
    tipo: string;
  
    constructor(nome: string, tipo: string) {
      this.nome = nome;
      this.tipo = tipo;
    }
  
    exibirCarta(): void {
      console.log(`nome: ${this.nome}`);
      console.log(`tipo: ${this.tipo}`);
    }
  }

