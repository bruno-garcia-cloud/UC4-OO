import { ataqueFisico,habilidade, magia, } from "./habilidade";
import { cura } from "./cura";

export class Cacador {
    nome: string;
    nivel: number;
    habilidades: habilidade[] = [];

    constructor(nome: string, nivel: number, habilidades: habilidade[]) {
        this.nome = nome
        this.nivel = nivel
        this.habilidades = habilidades
    }

    equiparHabilidade(habilidade: habilidade): void {
        this.habilidades.push(habilidade)
    }

    usarHabilidade(): void {
        console.log(`${this.nome} está usando suas habilidades:`)
        this.habilidades.forEach((habilidade) => {
            habilidade.usarHabilidade()
        })
    }

    exibirInformacoes(): void {
        console.log(`Caçador ${this.nome}`)
        console.log(`Nível ${this.nivel}`)
        console.log("Habilidades:")
        this.habilidades.forEach((habilidade) => {
            habilidade.exibirDescricao()
        })
    }
}


let ha = new ataqueFisico("Ataque Poderoso", 9);
let ca = new Cacador("Fernando", 9, [ha]);
ca.exibirInformacoes();
ca.usarHabilidade();



let cur = new cura("HP")
let cac = new Cacador("Roberson", 10, [cur]);
cur.exibirDescricao();
cac.usarHabilidade();



let ma = new magia("magia",30)
let caca = new Cacador ("Sol",20,[ma])
ma.exibirDescricao()
caca.usarHabilidade()