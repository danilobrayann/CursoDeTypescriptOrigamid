
//função
function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(2, 3));

const nitendo = {
  nome: 'nitendo',
  preco: '2000'
}

function tranformarpreco (produto: {nome: string , preco: string}){
produto.preco = 'R$' + produto.preco

return produto
}

 const produtoNovo =  tranformarpreco(nitendo)
console.log(produtoNovo)
//




const produtos: string = "livros";
const preco: number = 200;


//
// 0201 Annotation e Inference 1


// objetos
const carro: {
marca:string;
portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

const barato = 200 < 400 ? true : 'produto caro'