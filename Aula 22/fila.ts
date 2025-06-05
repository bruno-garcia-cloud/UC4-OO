class Fila<T>{
 private elementos:T[] = [];
  
  enfileirar(item:T):void{
    this.elementos.push(item)
  }
  desenfileirar():T |undefined{
    if(this.estaVazia()){
        console.log("A fila esta vazia");
        return undefined
    } return this.elementos.shift();
  }
 primeiro():T|undefined{
    if(this.estaVazia()){
        console.log("A fila esta vazia")
    return undefined} 
    return this.elementos[0]
 }
 estaVazia():boolean{
    return this.elementos.length === 0
 }
 tamanho():number{
    return this.elementos.length
 }
}

const FilaDeClientes = new Fila<string>();
FilaDeClientes.enfileirar("Cliente 1")
FilaDeClientes.enfileirar("Cliente 2")
FilaDeClientes.enfileirar("Cliente 3")
console.log(`Proximo cliente a ser atendido ${FilaDeClientes.desenfileirar()}`)
console.log(`A fila esta vazia ${FilaDeClientes.estaVazia}`)