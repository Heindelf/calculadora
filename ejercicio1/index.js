var operador = document.getElementById("operando");
const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
const display = document.getElementById("display");
const button = document.querySelector("#numero");

button.addEventListener("click", (e) => {
  if ((e.target.id == "suma")) {
    operador.textContent = "+";
  }  
  if ((e.target.id == "menos")) {
    operador.textContent = "-";
  }  
  if ((e.target.id == "multi")) {
    operador.textContent = "*";
  }  
  if ((e.target.id == "divi")) {
    operador.textContent = "/";
  }  
  if ((e.target.id == "clear")) {
    operador.textContent = "C";
  } 
    if ((e.target.id == "igual")) {
    operador.textContent = "=";
  }
}); 
