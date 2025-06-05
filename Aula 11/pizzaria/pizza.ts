import { saborPizza } from "./saborPizza";

export class pizza {
    sabor:saborPizza;
    tamanho:number;
    preco:number

    constructor(saborConst:saborPizza = saborPizza.brocolis,tamanho:number,preco:number){
        this.sabor = saborConst
        this.tamanho = tamanho
        this.preco = preco
    }
getPreco():number{return this.preco}
getTamanho():number{return this.tamanho}
getSabor():saborPizza{return this.sabor}

descricao():void{console.log(`A pizza é de ${this.sabor}, o tamanho é de ${this.tamanho} cm. O preço é ${this.preco} reais`)}
}

let pizza1 = new pizza(saborPizza.frango,30,50);
pizza1.descricao()