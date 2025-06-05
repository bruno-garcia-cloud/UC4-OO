export class espadaDiamante{
private dano: number;
private durabilidade: number;

constructor(dano:number, durabilidade: number){
this.dano = dano;
this.durabilidade = durabilidade;

}

setDano(dano: number): void {this.dano = dano}
setDurabilidade(durabilidade: number): void {this.durabilidade = durabilidade}

getDano(): number {return this.dano}
getDurabilidade(): number {return this.durabilidade}


exibir():void{console.log(`A espada de diamante tem ${this.dano} de dano, monstruoso, e uma durabilidade de ${this.durabilidade} que é foda`)}

}



const minhaEspada = new espadaDiamante(50,200)
minhaEspada.exibir()