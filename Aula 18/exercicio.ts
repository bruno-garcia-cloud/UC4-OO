class PilhaPratos <T>{
    private prato: T[] = []

    AdicionarPrato(item:T):void{
        this.prato.push(item)
        console.log(`${this.prato} foi adicionado! `)
    }

    RetirarPrato(): T | undefined {
        const item = this.prato.pop();
        console.log(`Prato retirado: ${item}`);
        return item;
    }
    
    isEmpty():boolean{
        return this.prato.length === 0
    }

    Tamanho():number{
        return this.prato.length
    }
    
}
const meuPratos = new PilhaPratos<string>()
meuPratos.AdicionarPrato("Prato de ceramica")
meuPratos.AdicionarPrato("Prato de Vidro")
meuPratos.AdicionarPrato("Prato de Argila")

meuPratos.RetirarPrato()
meuPratos.isEmpty()
