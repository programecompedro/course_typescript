console.log("Lesson 04");

const objetoA = {
  chaveA: "A",
  chaveB: "B",
};
objetoA.chaveA = "Outro Valor";

const objetoB: {
  chaveA: string;
  chaveB: string;
} = {
  chaveA: "Value A",
  chaveB: "Value B",
};

console.log(objetoB.chaveA);
