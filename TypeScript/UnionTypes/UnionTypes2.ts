// exercise: Union Types
function toNumber(value: number | string) {
  if (typeof value === "string") {
    return parseFloat(value);
  } else if (typeof value === "number") {
    return value;
  } else {
    throw "value deve ser um number | string";
  }
}

console.log(toNumber("300"));
