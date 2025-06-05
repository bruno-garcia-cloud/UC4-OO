import { animal } from "./animal";

export class ave extends animal{

    constructor(nome:string,especie:string,fome:number,sede:number){
        super(nome,especie,sede,fome);
    }

    public getNome(): string {return this.nome}

    fazerAcao(quaisquerAve:animal){
        quaisquerAve.mover()
    };
    fazerSom(quaisquerAve:animal){
        quaisquerAve.emitirSom()
    }
    buscarRecursos(quaisquerAve:animal,recurso:string){
        quaisquerAve.buscarRecurso(recurso)
    }

    interagir (animaal:ave){
        console.log(`O ${animaal.nome} agrediu o ${this.nome}`)
    }
}

