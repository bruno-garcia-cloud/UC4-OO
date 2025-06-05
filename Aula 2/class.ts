export class Cat{
//atributos
 private name: string;
private weight: number;

//construtor
/*
constructor(nameCat:string ,weightCat: number){

this.name = nameCat;
this.weight = weightCat;

}
*/




//métodos
setName(nomeCat:string):void{
    this.name = nomeCat;
}
getnName():string{return this.name};

meow():void{

    console.log("Meow Meow")
}
 
eat(quantity:number):void{
    console.log("The cat has eaten"+quantity);
}

}


const meuGato = new Cat();
meuGato.meow();
meuGato.eat(200);
meuGato.setName("Daeny");



