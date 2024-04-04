let speed1 = parseFloat(prompt("insira a velocidade do primeiro veiculo"));
let speed2 = parseFloat(prompt("insira a velocidade do segundo veiculo"));

if (speed1 > speed2) {
  alert("o primeiro veiculo é mais rapido que o segundo");
} else if (speed1 == speed2) {
  alert("os veiculos estão na mesma velocidade");
} else {
  alert("o segundo veiculo é mais rapido");
}
