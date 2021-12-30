export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    protected _cpf: string
  ) {}

  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }

  set cpf(value: string) {
    this._cpf = value;
  }
}
const pessoa = new Pessoa("Pedro", "Miguel", 21, "000.000.000-00");
pessoa.cpf = "456.123.123-12";
console.log(pessoa.cpf);
