//pedir por valor em metros

const valueConversor = parseFloat(prompt("insira um valor em metros para ser convertido"))

const metragem = prompt("agora escola a unidade de medida \nmm) \ncm) \ndm) \ndam) \nhm) \nkm)")

const valueInMilimeter = valueConversor * 1000

const valueInCentimeter = valueConversor * 100

const valueInDecameter = valueConversor / 10

const valueInHectameter = valueConversor / 100

const valueInKilometer = valueConversor / 1000

//dar opção para escolher em qual unidade será convertido



switch (metragem){

    case "mm" :
        alert ("o valor é " + valueInMilimeter)
        break
    case "cm" :
        alert ("o valor é " + valueInCentimeter)
        break
    case "dm" :
        alert ("o valor é " + valueInDecameter)
        break
    case "hm" :
        alert ("o valor é " + valueInHectameter)
        break
    case "km" :
        alert ("o valor é " + valueInKilometer)
        break
    default:
        alert ("a metragem inserida é invalida")

}




// switch (valueConversor) {
//     case "mm":
        
//         break
// }





// - milímetro (mm)
// - centímetro (cm)
// - decímetro (dm)
// - decâmetro (dam)
// - hectômetro (hm)
// - quilômetro (km)


