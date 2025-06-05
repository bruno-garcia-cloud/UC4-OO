export class Decks<Carta> {
    protected baralho: Carta[] = [];

    adicionarNoInicio(item: Carta): void {
        this.baralho.unshift(item);
    }

    adicionarNoFinal(item: Carta): void {
        this.baralho.push(item);
    }

    ComprarCarta(): Carta | undefined {
        return this.baralho.shift();
    }

    removerDoFinal(): Carta | undefined {
        return this.baralho.pop();
    }

    primeiro(): Carta | undefined {
        return this.baralho[0];
    }

    ultimo(): Carta | undefined {
        return this.baralho[this.baralho.length - 1];
    }

    estaVazio(): boolean {
        return this.baralho.length === 0;
    }

    tamanho(): number {
        return this.baralho.length;
    }

    mostrarBaralho(): Carta[] {
        return [...this.baralho]
    }

    exibirBaralho(){
        console.table(this.baralho)
    }
}