//Acesso aos Recursos distrito

class Distrito {
    public recursos: string[];
    public populacao: number;

    constructor(public nome: string, populacao: number, recursos: string[]) {
        this.populacao = populacao;
        this.recursos = recursos;
    }

    public fornecerRecursos(): string[] {
        return this.recursos;
    }
}

class Tributo {
    constructor(public nome: string, private distrito: Distrito) {}

    public coletarRecursos(): string[] | string {
        return this.distrito.fornecerRecursos();
    }
}

const distrito12 = new Distrito("Distrito 12", 8000, ["Arco e flecha", "Plantas medicinais"]);
const katniss = new Tributo("Katniss", distrito12);

console.log(katniss.coletarRecursos());
distrito12.recursos