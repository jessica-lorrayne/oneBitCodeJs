const formulario = document.querySelector('form');

const result = document.querySelector("h1");


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const number1 = parseInt(document.getElementById("number1").value) || 0;
    const number2 = parseInt(document.getElementById("number2").value) || 0;

    const h1 = number1 + number2;

result.textContent = `${h1}`;

document.body.appendChild(result);

// clearInput()
});



// function clearInput(){
//     number1 = document.getElementById("number1").value = ""
//     number2 = document.getElementById("number2").value = ""
// }