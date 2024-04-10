

let iniciar = confirm("Deseja entrar em nosso menu?");

let nome, numero, declaracao;

do {
    let mennu = prompt("Escolha alguma função de nosso menu:\n a) Digitar seu nome \n b) Digitar um número \n c) Se declarar \n d) Info \n e) Encerrar");

    switch(mennu) {
        case "a":
            nome = prompt("Insira seu nome");
            break;
        case "b":
            numero = prompt("Insira seu número");
            break;
        case "c":
            declaracao = prompt("Se declare");
            break;
        case "d":
            if (nome !== undefined && numero !== undefined) {
                alert("Seu nome: " + nome + "\nSeu número: " + numero);
            } else {
                alert("Você precisa inserir seu nome e número antes de visualizar as informações.");
            }
            break;
        case "e":
            alert("O programa foi encerrado.");
            break;
        default:
            alert("Opção inválida!");
    }

} while (iniciar);
