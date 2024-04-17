//o programa inicia mostrando menu  interativo
//mostrando a lista de todos os pacientes em ordem com os nomes

//o menu deve ter as opções :novo paciente :consultar paciente :sair

//novo paciente : adiciona um novo paciente ao fim da fial

//consultar paciente remove o primeiro paciente da fila e mostra o nome dele e que ele foi consultado

//ao clicar em sair o programa encerrar caso contrario volta para o menu
let menu =""
let nome, idade, motivoDaConsulta;
const fila = []
alert("bem-vindo");



do {
 
  let listName = ""

  for(let i = 0; i < fila.length; i++){
    listName += (i+1) + "º" + fila[i] + "\n"
  }

alert(listName + "\nesses são os pacientes em espera.");
  menu = prompt(
    "escolha a de acordo com sua nescessidade \nnovo paciente - a\n consultar paciente - b\nsair - c"
  );

  switch (menu) {
    case "a":
      nome = prompt("insira seu nome");
      fila.push(nome);

      break;
    case "b":
      let PacienteAtendido = fila.shift();
      alert(
        "o paciente " +
          PacienteAtendido +
          " está sendo chamado para atendimento."
      );
      break;
    case "c":
      alert("o programa esta sendo encerrado");
      break;
    default:
      alert("opção invalida");
  }
} while (menu !== "c");
