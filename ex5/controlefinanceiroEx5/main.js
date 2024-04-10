
let selecionar = ""


let valorDinheiro = parseFloat(prompt("quantidade inicial de valor disponivel"))
do{
  selecionar = prompt("você deseja fazer oq com esse valor ? R$ "+ valorDinheiro +" \nadicionar - a\nsubtrair - b\n sair do programa - c")

    switch(selecionar){
        case "a":
            let adicioanr = parseFloat(prompt("insira o valor que deseja adicionar"))
            valorDinheiro += adicioanr

            alert(valorDinheiro)
        break
        case "b":
            let subtrair = parseFloat(prompt("insira o valor que deseja subtrair"))
            valorDinheiro -= subtrair

            alert(valorDinheiro)
        break
        case "c":
            alert("Você finaliza com o total de " + valorDinheiro + "\nFechando o programa.");
            break;
        default:
            alert("Opção inválida.");
    }


}while(selecionar !== "c")