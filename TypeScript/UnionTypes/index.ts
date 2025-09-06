let totalValue: string | number = 200;
totalValue = "abacate";

console.log(totalValue);
// studying union types
// studying union types
function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(isNumber(200));

// studying union types
const button = document.querySelector("button");
button?.click();
