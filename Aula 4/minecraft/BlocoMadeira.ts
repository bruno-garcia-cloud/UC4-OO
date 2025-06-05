export class blocoMadeira {
private tipo: string
private durabilidade: number

constructor(tipo: string, durabilidade: number) {
    this.tipo = tipo
    this.durabilidade = durabilidade
}

setDurabilidade(durabilidade: number): void {this.durabilidade = durabilidade}
setTipo (tipo: string): void {this.tipo = tipo}


getDurabilidade(): number {return this.durabilidade}
getTipo(): string {return this.tipo}


exibir(): void {console.log(`Madeira do tipo ${this.tipo} com durabilidade ${this.durabilidade}`)}
}
const madeiraDePinheiro = new blocoMadeira("pinheiro", 10)
madeiraDePinheiro.exibir()

