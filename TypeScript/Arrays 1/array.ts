const numeros = [10, 20, 30, 40, 50];
const valores = [10, "Taxas", 30, "produtos", 50];

function maiorQue10(data: Array<number>) {
  return data.filter((n) => n > 10);
}

function filtrarValores(data: Array<string | number>) {
  return data.filter((item) => typeof item === "number");
}

console.log(filtrarValores(valores));
console.log(filtrarValores(numeros));

const dados = [
  ["Gabriel", 30],
  ["Ana", 25],
  ["Maria", 28],
];
