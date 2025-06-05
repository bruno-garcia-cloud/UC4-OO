import { cat } from "./cat"

export class siames extends cat{
public showRaceSiames():string{return this.showRace()}

}

let meuGato = new siames("cafezinho","listradinho",10)
console.log(meuGato.showRaceSiames());
















