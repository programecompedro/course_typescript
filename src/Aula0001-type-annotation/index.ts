/* eslint-disable */

let nome: string = "Pedrão";
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol("qualquejas");

// Arrays
let arrayDeNumberos: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeString: Array<string> = ["a", "b"];
let arrayDeStrings2: string[] = ["a", "b"];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: "Pedro",
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

const result = soma(2, 2);
