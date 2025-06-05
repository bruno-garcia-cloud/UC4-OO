export class Monstro{
 private nome: string;
private força: number;
private velocidade: number;
private nivel:number;
private vida:number;
private raca:number;

constructor(nomeMonstro:string ,nivelMonstro: number,racaMonstro:number, velocidadeMostro: number ){

    this.nome = nomeMonstro;
    this.nivel = nivelMonstro;
    this.raca = racaMonstro;
    this.vida = 100
    this.força = 100
    this.velocidade = velocidadeMostro



}

bater(): void{
    console.log("O monstro bateu na pessoa")
}

sofreDano(quantity:number): void{
    console.log("O monstro sofreu dano da pessoa"+quantity)
}

ataqueEspecial(): void{
    console.log("O monstro fez o kamehameha")
}
}

const meuMonstro = new Monstro("gorgona",10,10,10);
meuMonstro.ataqueEspecial();


