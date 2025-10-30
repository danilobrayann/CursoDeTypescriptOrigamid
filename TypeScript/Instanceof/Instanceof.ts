class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  precoReal() {
    return `R$ ${this.preco}`;
  }
}

const livro = new Produto("O Senhor dos Anéis", 49.9);

// insttanceof

class livros {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class jogos {
  jogadores: string;
  constructor(jogadores: string) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "livro") {
    return new livros("J.R.R. Tolkien");
  }
  if (busca === "jogo") {
    return new jogos("1-4 jogadores");
  }
}
