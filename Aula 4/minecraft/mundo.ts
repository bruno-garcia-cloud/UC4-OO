import { blocoMadeira } from "./BlocoMadeira"

export class mundo{
    private blocos:blocoMadeira[];

    constructor(blocosDeMadeira:blocoMadeira[]){
        this.blocos = blocosDeMadeira;
    };
    setBlocosMadeira(blocos:blocoMadeira[]):void{this.blocos = blocos};
    getBlocos():blocoMadeira[]{return this.blocos};
    exibir():void{console.log(`Olha aqui, tem ${this.blocos.length} blocos`)};
};

const blocos:blocoMadeira[] = [new blocoMadeira("Pinheiro",2),new blocoMadeira("jungle",2)]
const mundo2 = new mundo(blocos)
mundo2.exibir()