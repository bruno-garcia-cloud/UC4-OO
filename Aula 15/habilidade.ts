export interface habilidade {
    usarHabilidade(): void;
    calcularDano(): void;
    exibirDescricao(): void;
}

export class ataqueFisico implements habilidade {
    nomeAtaque: string;
    danoHabilidade: number;

    constructor(nomeAtaque: string, danoHabilidade: number) {
        this.nomeAtaque = nomeAtaque;
        this.danoHabilidade = danoHabilidade;
    }

    usarHabilidade(): void {
        console.log(`O personagem usou ${this.nomeAtaque}`);
    }

    calcularDano(): void {
        console.log(`O dano causado pela habilidade foi: ${this.danoHabilidade} de dano`);
    }

    exibirDescricao(): void {
        console.log(`A ${this.nomeAtaque} causou ${this.danoHabilidade} de dano ao inimigo.`);
    }
}

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