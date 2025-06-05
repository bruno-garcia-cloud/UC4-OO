export class chapeuSeletor {
private casaDiversas: number = 0;
private grifinoria: number = 1;
private sonserina: number = 2;
private lufalufa: number = 3;
private corvinal: number = 4;

setSonserina(sonserina:number):void{this.sonserina=sonserina}
setlufalufa(lufalufa:number):void{this.lufalufa=lufalufa}
setCorvinal(corvinal:number):void{this.corvinal=corvinal}
setGrifinoria(grifinoria:number):void{this.grifinoria=grifinoria}

getCasa():number{return Math.floor(Math.random()*4+1)}

    





selecionarCasa():void {
    this.casaDiversas = this.getCasa();

    if (this.casaDiversas === this. sonserina) {
        console.log("Voce virou sonserina")
    }

    if (this.casaDiversas === this.grifinoria  ) {
        console.log("Voce virou grifinoria")    
    }

    if (this.casaDiversas === this.corvinal) {
        console.log("Voce virou corvinal")
    }
    if (this.casaDiversas === this.lufalufa) {
        console.log("Voce virou lufalufa")
    }

}
}
const minhaCasa = new chapeuSeletor();
minhaCasa.selecionarCasa();