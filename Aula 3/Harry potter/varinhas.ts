export class varinha{
private madeira:string
private nucleo:string
private tamanho:number

setMadeira(madeira:string):void{this.madeira=madeira}
setNucleo(nucleo:string):void{this.nucleo = nucleo};
setTamanho(tamanho:number):void{this.tamanho = tamanho};


getNucleo():string {return this.nucleo};
getMadeira():string{return this.madeira};
getTamanho():number{return this.tamanho};


exibirDetalhes():void{console.log(`Varinha de ${this.getMadeira()}, nucleo de ${this.getNucleo()} e tamanho ${this.getTamanho()}.`)}


}


const minhaVarinha = new varinha()
minhaVarinha.setMadeira("pinheiro");
minhaVarinha.setNucleo("dementador");
minhaVarinha.setTamanho(30);
minhaVarinha.exibirDetalhes();