//Interface
interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}
//Usando interface
type TipoProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function produto(dados: InterfaceProduto) {
  document.body.innerHTML +
    `
    
    <div>
    <h2>Nome: ${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Iclui Teclado: ${dados.teclado ? "sim" : "não"}</p>
    </div>
    
    `;
}
