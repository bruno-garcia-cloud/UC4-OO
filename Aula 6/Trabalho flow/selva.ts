
import { ave } from "./ave";

let aves = new ave ("FRU FRU","Secretario",20,10)
aves.buscarRecurso("Alimento")
aves.mover()
aves.emitirSom()
aves.morrerDeFome()
console.log(aves.getNome())

let capirava = new ave ("Jonas (capivara","Capivara",23,34)
aves.interagir(capirava)