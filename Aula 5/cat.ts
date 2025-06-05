export class cat{
    public name:string;
    protected race:string;
    private weight:number;

    constructor(nameCat:string, raceCat:string, weightCat){
        this.name = nameCat;
        this.race = raceCat;
        this.weight = weightCat;
    };

    public getName():string{return this.name}

    public meow(): void{
        console.log("Meow Meow");
        console.log(this.showRace())
        console.log(this.revealWeight())
    }


    public eat(quantity:number):void{
        console.log("the cat has eaten"+quantity);
    }
    protected showRace(): string{return this.race}
    private revealWeight(): number{return this.weight}
}

const gato = new cat("Nick","Alemao",4);
gato.meow();
//gato.showRace();
//gato.revealWeight()
    