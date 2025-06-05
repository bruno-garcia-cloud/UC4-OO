import { blocoMadeira } from "./BlocoMadeira";

export class personagem{

private vida: number;
private forca: number;
private inventario:blocoMadeira[];

constructor(vida: number, forca: number){
this.vida = vida;
this.forca = forca;
this.inventario = [];
}

setVida(vida: number): void {this.vida = vida};
setForca(forca: number): void {this.forca = forca};
setBloco(inventarioSet: blocoMadeira): void{this.inventario.push(inventarioSet)};

getVida(): number {return this.vida}
getForca(): number {return this.forca}
getInventario(): Array<blocoMadeira> {return this.inventario}

exibir(): void {
    console.log(`O personagem tem ${this.forca} de força e tem ${this.vida} de vida`)
    console.log("Inventario",this.inventario);
}

}

let blocoM1 = new blocoMadeira("pinheiro", 10)

const meuPersonagem =  new personagem(100,10);
meuPersonagem.setBloco(blocoM1)

let blocoM2 = new blocoMadeira("Carvalho", 10)
meuPersonagem.setBloco(blocoM2);
meuPersonagem.exibir()

