export class monstro{
    private poderDeExplosao: number;
    private distanciaDeExplosao: number;
    private vida: number;



    constructor(poderDeExplosao:number, distanciaDeExplosao: number, vida: number){
    this.poderDeExplosao = poderDeExplosao;
    this.distanciaDeExplosao= distanciaDeExplosao;
    this.vida = vida;
    }
    
    setPoderDeExplosao(poderDeExplosao: number): void {this.poderDeExplosao = poderDeExplosao}
    setDistanciaDeExplosao(distanciaDeExplosao: number): void {this.distanciaDeExplosao= distanciaDeExplosao}
    getVida(vida: number): void{this.vida = vida}


    getPoderDeExplosao(): number {return this.poderDeExplosao}
    getDistanciaDeExplosao(): number {return this.distanciaDeExplosao}
    
    
    exibir():void{console.log(`Monstro tem ${this.vida} de vida, um poder de explosão de ${this.poderDeExplosao},muito forte, e a distancia de explosao é ${this.distanciaDeExplosao}.`)}
    
    }
    
    
    
    const meuMonstro = new monstro(200,50,30)
    meuMonstro.exibir()
