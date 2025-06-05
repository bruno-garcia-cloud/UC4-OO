import { animal } from "./animal";

export class cat extends animal{

constructor(name:string,weight:number){
    super(name,weight);
}

meow():void {console.log("meow meow")}
}

function realizaAção(qualquerAnimal:animal){
    qualquerAnimal.eat(10);
}


let meuAnimal = new animal("animal1",10)
let meuGato = new cat("daeny",5)
realizaAção(meuGato)


