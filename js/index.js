function piedra() {
  var op1 = document.querySelector("#op1").value;

  var pc;
  var opciones = ["piedra", "papel", "tijera"];
  var opc = function(){
    return opciones[Math.round(Math.random() * (opciones.length-1))];
  }

  pc = opc();

  var calculate;

  if ((op1 === "piedra" && pc === "tijera") || (op1 === "papel" && pc === "piedra") || (op1 === "tijera" && pc === "papel")) {
      calculate = "GANASTE";
  } else if ((pc === "piedra" && op1 === "tijera") || (pc === "papel" && op1 === "piedra") || (pc === "tijera" && op1 === "papel")) {
      calculate = "PERDISTE"
  } else {
    calculate = "EMPATE"
  }

  document.querySelector("#pc-choice").innerHTML = pc;
  document.querySelector("#resultado").innerHTML = calculate;
}
