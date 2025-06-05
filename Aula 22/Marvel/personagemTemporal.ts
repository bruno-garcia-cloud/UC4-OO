export class Personagem{
   public nome:string;
   public universo:string;
   public assinaturaTemporal:number;

   constructor(nome:string,universo:string,assinaturaTemporal:number){
    this.nome = nome;
    this.universo = universo;
    this.assinaturaTemporal = assinaturaTemporal;
   }

//set
 public  setNome(nome:string): void {this.nome = nome};

 public setUniverso(universo:string):void {this.universo = universo};

 public setAssinaturaTemporal(assinaturaTemporal:number):void{this.assinaturaTemporal = assinaturaTemporal};

//get
 public getNome():string {return this.nome};

 public getUniverso():string {return this.universo};

 public getAssinaturaTemporal():number {return this.assinaturaTemporal};


 exibirinfo(): void {console.log(`O personagem e o ${this.nome}, o universo dele e o ${this.universo} e a assinatura temporal dele e a numero ${this.assinaturaTemporal}`)}

}

