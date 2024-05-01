//função
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));
var nitendo = {
    nome: 'nitendo',
    preco: '2000'
};
function tranformarpreco(produto) {
    produto.preco = 'R$' + produto.preco;
    return produto;
}
var produtoNovo = tranformarpreco(nitendo);
console.log(produtoNovo);
//
var produtos = "livros";
var preco = 200;
//
// 0201 Annotation e Inference 1
// objetos
var carro = {
    marca: "Audi",
    portas: 5,
};
var barato = 200 < 400 ? true : 'produto caro';
