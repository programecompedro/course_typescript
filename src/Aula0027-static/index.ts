export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = "000.000.000-00";
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  static print(): void {
    console.log("Hi");
  }
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}
const pessoa = new Pessoa("Pedro", "Miguel", 21, "000.000.000-00");
const pessoa2 = Pessoa.criaPessoa("Pedro", "Miguel");

console.log(pessoa);
console.log(pessoa2);

// Pessoa.print();
