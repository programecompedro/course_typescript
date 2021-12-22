// string | number | boolean

function adicionaOuConcatena(v: number | string, y: number | string) {
  if (typeof v === "number" && typeof y === "number") return v + y;
  if (typeof v === "string" && typeof y === "string") return v + y;
}

console.log(adicionaOuConcatena("pedro ", "demeu"));
