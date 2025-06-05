import { Cartas,Cor,valor} from "./Carta";
import { Decks } from "./decks";



class BaralhoUno extends Decks<Cartas>{
    constructor(){
      super()
      this.criarBaralho()
      }

    protected criarBaralho(){
        const cores = [Cor.amarelo,Cor.azul,Cor.verde,Cor.vermelho]
        const valores = [valor.ZERO,valor.UM,valor.DOIS,valor.TRES,valor.QUATRO,valor.CINCO,valor.SEIS,valor.SETE,valor.OITO,valor.NOVE]
        const coringa = [valor.Bloquear,valor.Comprar2,valor.Comprar4,valor.Inverter]

        for (let cor of cores) {
        
          this.adicionarNoFinal(new Cartas(Cor, valor.ZERO));
         
          }
    
          for (let CorConsy of valores) {
            this.adicionarNoFinal(new Cartas(Cor));
            this.adicionarNoFinal(new Cartas(Cor, CorConsy));
          }
          for (let CoringaConst of coringa) {
            this.adicionarNoFinal(new Cartas(Cor, CoringaConst));
            this.adicionarNoFinal(new Cartas(Cor, CoringaConst));
          }
          for (let i = 0; i < 4; i++) {
            this.adicionarNoFinal(new Cartas(null, valor.Comprar4));
            this.adicionarNoFinal(new Cartas(null, valor.CORINGA)); 
          }

          
        }
        public embaralhar(): void {
          for (let i = this.baralho.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.baralho[i], this.baralho[j]] = [this.baralho[j], this.baralho[i]];
          }
        }

        exibirBaralho(): void {
          console.table(this.baralho)
        }
  
      }