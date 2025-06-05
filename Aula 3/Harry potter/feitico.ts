export class FeiticoHarry {
    
    private tipo: string;
    private poder: number;
    private nome: string;

    constructor(tipo: string,nome: string, poder: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.poder = poder;
    }

    setNome(nome: string): void {this.nome = nome};
    setTipo(tipo: string): void {this.tipo = tipo};
    setPoder(poder: number): void {this.poder = poder};

    getNome(): string {return this.nome}
    getTipo(): string {return this.tipo}
    getPoder(): number {return this.poder}
   

    feitico(): void {console.log("Harry lançou o expelliarmus")}
}
const feitico = new FeiticoHarry("expelliarmus", "desarma", 50)
feitico.feitico()