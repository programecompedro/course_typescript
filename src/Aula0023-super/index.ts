export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    return "Aluno: " + this.nome + " " + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return "CLiente: " + this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Pedro", "Miguel", 21, "000.000.000-00");
const aluno = new Aluno("Pedro", "Miguel", 21, "000.000.000-00", "Sala 3A");
const cliente = new Cliente("Luan", "Dantas", 31, "000.000.000-00");

console.log(pessoa);
console.log(aluno);
console.log(cliente.getNomeCompleto());
