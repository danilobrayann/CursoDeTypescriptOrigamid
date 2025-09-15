// muito cuidado o uso do any evite ele o maximo possivel
// any desabilita o sistema de tipos do typescript
// qualquer valor pode ser atribuido a uma variavel any
// qualquer metodo pode ser chamado em uma variavel any
// qualquer propriedade pode ser acessada em uma variavel any

function normalizar(texto: any) {
  return texto.trim().toLowerCase();
}

console.log(normalizar("  Hola Mundo  ")); // "hola mundo"

async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

fetchJSON("https://api.origamid.dev/json/cursos.json");
