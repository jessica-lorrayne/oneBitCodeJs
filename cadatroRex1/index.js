const formulario = document.querySelector('form');
const fname = document.getElementById("fName");
const lname = document.getElementById("lName");
const campStudy = document.getElementById("campStudy");
const yearsOfBirth = document.getElementById("yearOfBirth");
const buttonSub = document.getElementById("buttonSub")


formulario.addEventListener('submit',function(e){
    e.preventDefault()

    let nome = fname.value
    let sobrenome = lname.value
    let estudo = campStudy.value
    let anoDeNascimento = yearsOfBirth.value
    

    console.log(nome,sobrenome,estudo,anoDeNascimento)


    let fullInfo = document.createElement("h1");
    fullInfo.textContent = `${nome} ${sobrenome}, ${estudo}, ${anoDeNascimento}`;
    
    document.body.appendChild(fullInfo);

   
})





