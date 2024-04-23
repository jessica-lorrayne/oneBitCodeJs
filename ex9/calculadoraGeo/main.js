// Escreva um programa em javascript para calcular a área de diferentes formas geométricas.
//O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

// - área do triângulo: base * altura / 2
// - área do retângulo: base * altura
// - área do quadrado: lado²
// - área do trapézio: (base maior + base menor) * altura / 2
// - área do círculo: pi * raio² (considere pi = 3.14)

// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.
//O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

let menu = "";
let base, altura, lado, bMaior, bMenor, raio;
let resultado = ""
const pi = 3.14;

do {
  menu = prompt(
    "selecione a opção desejada. \n1 - área do triângulo \n2 - área do retângulo"
      +"\n3 - área do quadrado \n4 - área do trapézio \n5 - área do círculo \n6 - sair"
  );

  switch(menu){
    case "1":
        triangulo()
        break
    case "2":
        retangulo()
        break
    case "3":
        quadrado()
        break
    case "4":
        trapezio()
        break
    case "5":
        circulo()
        break
    case "6":
        alert("o programa esta sendo encerrado")
        break
    default:
        alert("opçao inválida")
  }
} while (menu !== "6");

function triangulo() {
  base = parseFloat(prompt("informe a base"));
  altura = parseFloat(prompt("informe a altura"));
  resultado = (base * altura) / 2;
  return alert(resultado)
}

function retangulo() {
  base = parseFloat(prompt("informe a base"));
  altura = parseFloat(prompt("informe a altura"));
  resultado = base * altura
  return alert(resultado)
}

function quadrado() {
  altura = parseFloat(prompt("informe a altura"));
  resultado = altura ** 2
  return alert(resultado)
}

function trapezio() {
  bMaior = parseFloat(prompt("informe a base maior"));
  bMenor = parseFloat(prompt("informe a base menor"));
  altura = parseFloat(prompt("informe a altura"));
  resultado = ((bMaior + bMenor) * altura) / 2;
  return alert(resultado)
}

function circulo() {
    //pi * raio² (considere pi = 3.14)
    raio = parseFloat(prompt("informe o raio"))
    resultado = pi * raio **2
    return alert(resultado)
}
