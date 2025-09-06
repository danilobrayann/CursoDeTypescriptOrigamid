const ipunt = document.querySelector("input");

const total = localStorage.getItem("total");

if (ipunt && total) {
  ipunt.value = total;
  CalcularGanho(Number(ipunt.value));
}

function CalcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (ipunt) {
    localStorage.setItem("total", ipunt.value);
    CalcularGanho(Number(ipunt.value));
  }
}

if (ipunt) {
  ipunt.addEventListener("keyup", totalMudou);
}
