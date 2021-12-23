// & = and

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: "Pedro",
  sobrenome: "Demeu",
  idade: 10,
};

console.log(pessoa);

export { pessoa };
