import { Personagem } from './personagemTemporal';

class FilaTemporal<T> {
  private personagens: T[] = [];

  enfileirar(item: T): void {
    this.personagens.push(item);
  }

  desenfileirar(): T | undefined {
    if (this.estaVazia()) {
      console.log('A fila está vazia.');
      return undefined;
    }
    return this.personagens.shift();
  }

  primeiro(): T | undefined {
    if (this.estaVazia()) {
      console.log('A fila está vazia.');
      return undefined;
    }
    return this.personagens[0];
  }

  estaVazia(): boolean {
    return this.personagens.length === 0;
  }

  tamanho(): number {
    return this.personagens.length;
  }

  exibirFila():void{
    console.table(this.personagens)
  }
}


let personagemAtemporal1 = new Personagem("Hulk","Universo 600", 1)
let personagemAtemporal2 = new Personagem("Thanos","universo 601",2)
let personagemAtemporal3 = new Personagem('Motoqueiro Fantasma', 'Universo 616', 3);

const filaDePersonagens = new FilaTemporal<Personagem>();
filaDePersonagens.enfileirar(personagemAtemporal1);
filaDePersonagens.enfileirar(personagemAtemporal2);
filaDePersonagens.enfileirar(personagemAtemporal3);
filaDePersonagens.desenfileirar();
filaDePersonagens.exibirFila();
