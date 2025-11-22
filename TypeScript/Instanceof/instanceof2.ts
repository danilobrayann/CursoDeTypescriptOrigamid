class Produtos {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class jogoos extends Produtos {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

interface carro {
  nome: string;
}

const honda: carro = {
  nome: "Honda Civic",
};
