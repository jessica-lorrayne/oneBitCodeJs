// Escreva um programa em javascript que simule um sistema de vagas de emprego,
// onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
//     - Listar vagas disponíveis
//     - Criar um nova vaga
//     - Visualizar uma vaga
//     - Inscrever um candidato em uma vaga
//     - Excluir uma vaga
//     - Sair
// - A opção de listar as vagas deve mostrar o índice, o nome e a
// quantidade de candidatos inscritos de todas as vagas.
// - A opção de criar uma nova vaga deve pedir um nome para a vaga,
//uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// - A opção de visualizar uma vaga deve pedir o índice da vaga e
// mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// - A opção de inscrever um candidato em uma vaga de pedir o nome
// do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar
//suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar
//todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

const candidatos = [];
const vagas = [];
let menu = ""
do {
   menu = prompt(
    "1. Listar vagas disponíveis \n 2. Criar um nova vaga \n3. Visualizar uma vaga" +
      "\n4. Inscrever um candidato em uma vaga \n5. Excluir uma vaga 6. Sair"
  );

  switch (menu) {
    case "1":
      listarVagas()
      break;
    case "2":
      criarVaga();
      break;
    case "3":
      break;
    case "4":
      inscreverCandidato();
      break;
    case "5":

      break;
    case "6":
      const confirmarSair = confirm("você deseja sair do menu?");
      if (confirmarSair) {
        alert("o programa está sendo encerrado");
      }
      break;
    default:
      alert("opção inválida");
  }
} while (menu !== "6");

function listarVagas(){

  if(vagas.length > 0){
  vagas.forEach(function(vaga){
    alert("siga a lista das vagas a seguir\n" + vaga.nomeDaVaga + "\neste é o numero de candidatos: " + candidatos.length)
  })} else{ alert("ainda não tem vagas cadastradas")}
}

function criarVaga() {

  const datalimite = prompt(
    "insira uma data limite para a vaga o formato esperado é \n YYYY/MM/DD");
  const nomeDaVaga = prompt("insira o nome da vaga:");
  const desc = prompt("insira a descrição da vaga");
  
  const dataLimiteFormatada = new Date(datalimite);
  
  let numeroId;
  let numeroExiste;

  do {
   numeroId = Math.floor(Math.random() * 200 ) + 1;
     numeroExiste = vagas.some(function(){
      vagas.numero === numeroId
     })
  } while (numeroExiste);

  const confirmarVaga = confirm(
    "Você deseja salvar a vaga com as seguintes informações?\n" +
      "Nome da vaga: " + nomeDaVaga + "\n" +
      "Descrição da vaga: " + desc + "\n" +
      "Data limite: " + dataLimiteFormatada +
      "ID:" + numeroId
  );

  

  if (confirmarVaga) {
    vagas.push({
      numero: numeroId,
      nomeDaVaga,
      desc,
      dataLimiteFormatada
    });
  }
}

function vizualizarUmaVaga(){
const indice = prompt("insira o indice da vaga")
if(indice >= 0 && indice < vagas.length){
  const vaga = vagas[indice]
  const candidatosInscritos = vaga.candidatos.map(candidato => candidatos.nome)

  alert("Nome da vaga: " + vaga.nomeDaVaga + "\n" +
  "Descrição da vaga: " + vaga.desc + "\n" +
  "Data limite: " + vaga.dataLimiteFormatada + "\n" +
  "Quantidade de candidatos: " + vaga.candidatos.length + "\n" +
  "Candidatos inscritos: " + (candidatosInscritos || "Nenhum"))
} else {
  alert("índice inválido")
}
}

function inscreverCandidato() {
  const nome = prompt("insira seu nome:");
  const id = Math.floor(Math.random() * 200) + 1;
  const confirmar = confirm(
    "você deseja inscrever-se com estes dados?\n Nome: " + nome + "\nId: " + id
  );
  if (confirmar) {
    candidatos.push({
      nome: nome,
      id: id
    });
  }
}
function removerVaga() {
  const indice = prompt("Insira o índice da vaga que deseja excluir:");
  if (indice >= 0 && indice < vagas.length) {
    const vaga = vagas[indice];
    const confirmarExclusao = confirm(
      "Você está prestes a excluir a vaga:\n" +
      "Nome da vaga: " + vaga.nomeDaVaga + "\n" +
      "Descrição da vaga: " + vaga.desc + "\n" +
      "Data limite: " + vaga.dataLimiteFormatada + "\n" +
      "Deseja continuar?"
    );
    if (confirmarExclusao) {
      vagas.splice(indice, 1);
      alert("Vaga excluída com sucesso.");
    }
  } else {
    alert("Índice de vaga inválido.");
  }
}