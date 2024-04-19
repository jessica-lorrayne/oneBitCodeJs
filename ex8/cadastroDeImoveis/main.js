let menu = "";
const imoveis = [];

do {

  menu = prompt(
    "qunatidade de imoveis " +
      imoveis.length +
      "\n a) ver lista de imóveis. \nb) salvar um imóvel. \nc) sair"
  );

  switch (menu) {
    case "a":
        if (imoveis.length <= 0) {
          alert("ainda nao tem imóveis cadastrados");
        } else {
            for(let i = 0 ; i < imoveis.length ; i++){
                alert("imovel: "+ (i + 1) +
                 "\nnome:" + imoveis[i].nome +
                  "\nquartos:" + imoveis[i].Quartos +
                   "\nbanheiros:" + imoveis[i].Baneiros +
                    "\ngaragem:" + imoveis[i].posssuiGaragem)
            }
        }
      break;

    case "b":

    const imovel = {}

      imovel.nome = prompt("informe seu nome");
      imovel.Baneiros = prompt("informe a quantidade de banheiros");
      imovel.Quartos = prompt("informe a qunatidade de quartos");
      imovel.posssuiGaragem = confirm("possui garagem?");

      
      const confirmar = confirm("deseja salvar este imóvel?" +
      "\nnome:"+ imovel.nome +
      "\nquantidade de banheiros:" + imovel.Baneiros +
      "\nquantidade de quartos:" + imovel.Quartos + "\npossui garagem ?" + imovel.posssuiGaragem)
      
      if(confirmar){
        alert("o imóvel foi salvo")
          imoveis.push(imovel)
         }
      break;

    case "c":
      alert("o programa esta sendo encerrado");
      break;

    default:
      alert("opção inválida");
  }
} while (menu.toLowerCase() !== "c" && menu.toLowerCase() !== "sair");

// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

// // // // // - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// // // // // - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// // // // // - O menu deve ter a opção de salvar um imóvel.
// - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//     - Nome do proprietário.
//     - Quantidade de quartos.
//     - Quantidade de banheiros.
//     - Se possui garagem.
// - O menu também deve ter a opção de mostrar todos os imóveis salvos.
