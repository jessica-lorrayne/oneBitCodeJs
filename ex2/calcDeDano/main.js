let characterName = prompt("digite o nome do personagem");
let poweratk = parseFloat(prompt("digite o poder de ataque "));

let characterTwo = "digite o nome do segundo personagem";
let life = parseFloat(prompt("digite a vida do personagem"));
let powerDef = parseFloat(prompt("digite a defesa do personagem"));
let yourCharacterHasShield = confirm("seu personagem tem um escudo?");

let danoCausado = 0;

if (poweratk > powerDef && yourCharacterHasShield == false) {
  

  danoCausado = poweratk - powerDef;

  life -= danoCausado
  
  alert(
    "a vida atual do " +
      characterTwo +
      "é igual a " +
      life +
      " e o dano causado é igual a " +
      danoCausado
  );
} else if (poweratk > powerDef && yourCharacterHasShield == true) {
    
    danoCausado = (poweratk - powerDef) / 2;
    life -= danoCausado
    
  alert(
    "graças ao escudo, a vida atual do player é igual a " +
      life +
      " e o dano causado é igual a " +
      danoCausado
  );
} else {
  alert("graças ao seu poder de defesa, você não tomou nenhum dano");
}
