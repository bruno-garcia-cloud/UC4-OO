import { distrito } from "./distrito";

export class organizador{
public nome: string;
private distritos: distrito[];


constructor(nome:string, distritos: distrito[]){
    this.nome = nome
    this.distritos = distritos
}

setNome(nome: string): void{this.nome = nome}
setDistritos(distritos: distrito[]): void{this.distritos = distritos}

getNome(): string{return this.nome}
getDistritos(): distrito[]{return this.distritos}

LiberarAnimais(): void {console.log(`O organizador liberou os animais `)}
criarDesastre(): void {console.log(`O organizador causou um desastre`)}

mostrarDistritos():void{
    for(let cont:number = 0; cont<this.distritos.length; cont++){
        console.log(`\nNome do Distrito: ${this.distritos[cont].getNome()} \nRecuros do Distrito: ${this.distritos[cont].getRecurso()} \nPopulação: ${this.distritos[cont].getPopu()}\n`)
    }
}

}
const distrito12 = new distrito("Distrito 12",8000,["carvão"])
const distrito2 = new distrito("Distrito 2",2000,["Pedreira de Pedras","Marmore","Armas","Munições"])
const organizador2 = new organizador("Coriolanus Snow",[distrito12])
const organizador1 = new organizador("Coriolanus Snow",[distrito2])



console.log(organizador2.getNome())
organizador2.mostrarDistritos()
organizador1.mostrarDistritos()