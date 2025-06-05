import { usuario } from "./usuario";

export class aluno extends usuario{
private idade:number;
private peso:number;
private altura:number;


public constructor(nome:string,email:string,idade:number,peso:number,altura:number){
   super(nome,email)
   
}

}
