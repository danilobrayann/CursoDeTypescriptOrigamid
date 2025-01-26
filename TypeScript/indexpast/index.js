"use strict";
//função
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));
const nitendo = {
    nome: 'nitendo',
    preco: '2000'
};
function tranformarpreco(produto) {
    produto.preco = 'R$' + produto.preco;
    return produto;
}
const produtoNovo = tranformarpreco(nitendo);
console.log(produtoNovo);
//
const produtos = "livros";
const preco = 200;
//
// 0201 Annotation e Inference 1
// objetos
const carro = {
    marca: "Audi",
    portas: 5,
};
const barato = 200 < 400 ? true : 'produto caro';
