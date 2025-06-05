import { habilidade } from "./habilidade";

export class cura implements habilidade {
    nomeCura: string;
    danoCura: number;

    constructor(nomeCura: string) {
        this.nomeCura = nomeCura;
        this.danoCura = 0;
    }

    usarHabilidade(): void {
        console.log(`O personagem usou ${this.nomeCura} e não morreu`);
    }

    calcularDano(): void {
        console.log(`A cura deu ${this.danoCura} de dano (ou seja, nenhum)`);
    }

    exibirDescricao(): void {
        console.log(`A habilidade de cura usada foi: ${this.nomeCura}`);
    }
}