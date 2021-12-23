/* Recomendado */

// Condicional - Aconcelhavel
const body = document.querySelector("body");
if (body) body.style.background = "red";

// Type Assertion - Aconcelhavel
const body3 = document.querySelector("body") as HTMLBodyElement;

// HTMLElement
const input = document.querySelector("./input") as HTMLInputElement;
input.value = "jaisdjdas";
input.focus();

/* Não recomendado */

// Non-null assertion (!) - Não aconcelhável
const body2 = document.querySelector("body")!;
body2.style.background = "red";

// Type assertion - muito difícil usar
const body4 = document.querySelector("body") as unknown as number;
