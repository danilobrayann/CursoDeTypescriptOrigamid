"use strict";
const frase = 'Front End';
const precos = 500;
const condi = precos > 100;
// typeof
console.log(typeof frase);
console.log(typeof precos);
if (typeof frase === "string") {
    console.log("Frase é uma string");
}
else {
    console.log("Frase não é uma string");
}
