const menu = ""
const cartas = ["rei de paus", "valete de copas","as de pingueiro"]

alert("pilha de cartas")
do {
    
    alert("as seguintes cartas estão na pilha\n" + cartas )

    menu = prompt("escolha uma interação" + "\na) adicionar uma carta" + "\nb) puxar uma carta" + "\nc) sair")
    
switch(menu){

    case "a":
        let nomeDaCarta = prompt("qual carta vc quer adicionar?")
        cartas.push(nomeDaCarta)
        break
    case "b":
        let removeACarta = cartas.shift()
        alert("a carta puxada foi - "+ + removeACarta)
        break
    case "c":
        alert("programa encerrado")
        break
    default:
        alert("opção inválida")
}


} while (menu !== "c");