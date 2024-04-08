
let entrar = confirm("você quer entrar no programa ? ", sim, nao)
let nome, numero, id, infoComplete;

do{
    let mennu = prompt("Escolha alguma função de nosso menu:\n a) Digitar seu nome \n b) Digitar um número \n c) id \n d) Info \n e) Encerrar");
switch(mennu){

    case "a":
        nome = prompt("digite seu nome")
        break

    case "b":
        numero = prompt("digite seu numero")
        break
    
    case "c":
        id = prompt("informe seu ID")
        break
    
    case "d":
        if(nome !== undefined && numero !== undefined && id !== undefined){
            alert("para receber todas suas informações, nos forneça todos os campos a seguir\n nome\nnumero\nId")
        }else{
    infoComplete = alert("nome:" + nome + "\nnumero:" + numero + "\nid" + id)}

        break
    
    case "e":
        alert("o programa está sendo encerrado")
        break

    default:
        alert("esse valor não corresponde.")



}

}while(entrar == true)