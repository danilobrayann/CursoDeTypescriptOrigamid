const ipunt = document.querySelector("input");

const total = localStorage.getItem("total");
ipunt.value = total;
CalcularGanho(ipunt.value)

function CalcularGanho(value) {
  const p = document.querySelector("p");
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(ipunt.value);
  localStorage.setItem("total", value);
  CalcularGanho(value)
}

ipunt.addEventListener("keyup", totalMudou);
