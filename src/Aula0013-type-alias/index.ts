type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "CIano" | "Magenta" | "Amarelo" | "preto";
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: "Pedrp",
  salario: 200_00,
  idade: 21,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, "CIano"));
