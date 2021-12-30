export class Empresa {
  public readonly nome: string; // public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador.nome, colaborador.sobrenome);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super("Udemy", "00.000.000/0001-00");
  }

  pop(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador("Pedro", "Miguel");
const colaborador2 = new Colaborador("Pedro", "Neves");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.pop();
empresa1.mostrarColaboradores();
