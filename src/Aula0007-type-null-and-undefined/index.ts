let x;
if (typeof x === "undefined") x = 20;

console.log(x);

function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

squareOf(10);
squareOf("Pedro");
