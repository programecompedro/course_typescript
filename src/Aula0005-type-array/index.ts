// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((i, valor) => i * valor, 1);
}

export function concatString(...args: string[]): string {
  return args.reduce((i, valor) => i + valor);
}

const r = multiplicaArgs(1, 2, 3);
const r2 = concatString("pedro", "miguel", " demeu");
console.log(r);
console.log(r2);
