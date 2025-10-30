const buttonn = document.querySelector("buttonn");
const config = localStorage.getItem("config");

if (button !== null) {
  button.click();
}

// propiedade opcionais

interface Product {
  nomee?: string;
}

const jogo: Product = {
  nomee: "The Last of Us",
};

if (jogo.nomee) {
  jogo.nomee.toLowerCase();
}
