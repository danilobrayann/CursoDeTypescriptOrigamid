// exercise: Union Types
function toNumber(value: number | string) {
  if(typeof value === 'string'){
     return parseFloat(value);
  }
  return value;
}