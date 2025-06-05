import { habilidade } from "./habilidade";

export class magia implements habilidade {
    nomeMagia: string;
    danoMagia: number;

    constructor(nomeMagia: string, danoMagia: number) {
        this.nomeMagia = nomeMagia;
        this.danoMagia = danoMagia;
    }

    usarHabilidade(): void {
        console.log(`O personagem usou ${this.nomeMagia}`);
    }

    calcularDano(): void {
        console.log(`O dano causado pela magia foi: ${this.danoMagia} de dano`);
    }

    exibirDescricao(): void {
        console.log(`O nome da magia é ${this.nomeMagia} e o dano causado foi ${this.danoMagia}`);
    }
}