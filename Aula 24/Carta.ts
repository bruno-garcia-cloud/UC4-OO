

export enum Cor{
    verde = "verde",
    amarelo = "amarelo",
    azul = "azul",
    vermelho = "vermelho",
}

 export enum valor{
    ZERO = 0,
    UM = 1,
    DOIS = 2,
    TRES = 3,
    QUATRO = 4,
    CINCO = 5,
    SEIS = 6,
    SETE = 7,
    OITO = 8,
    NOVE = 9,
    Comprar2 = "Comprar 2",
    Comprar4 = "Comprar 4",
    Inverter = "Inverter",
    Bloquear = "Bloquear", 
    CORINGA = "Coringa"
}

    export class Cartas{
        constructor(public cor = Cor,public valor = valor){
            this.cor = Cor;
            this.valor = valor
        }
      

        MostrarCarta():string{
            return `${this.valor} da cor: ${this.cor}`
        }

        
    
    }