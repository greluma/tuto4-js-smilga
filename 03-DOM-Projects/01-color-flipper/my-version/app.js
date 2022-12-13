/**
 ** Referencias
 */

const body = document.querySelector("body");
const mainBtn = document.querySelector("#main-btn");
const simpBtn = document.querySelector("#simple");
const hexBtn = document.querySelector("#hex");
const span = document.querySelector("#main-span");
// console.log(body);
// console.log(mainBtn);
// console.log(simpBtn);
// console.log(hexBtn);
// console.log(span);

//*Variables Generales
let swSiHe = true;

//*Funciones
//* Lista Colores Simple
let contSimp = 0;
function simplCol() {
  contSimp++;
  const vectCol = ["red", "blue", "aqua", "green", "yellow"];
  //*Cambio Colores
  body.style.background = vectCol[contSimp];
  mainBtn.style.background = vectCol[contSimp];
  span.textContent = vectCol[contSimp];
  if (contSimp == 4) {
    contSimp = -1;
  }
}

//* Analiza switch
function switFunc() {
  if (swSiHe) {
    simplCol();
  } else {
    hexCol();
  }
}

//* Lista Colores Hex
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function hexCol() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  body.style.background = hexColor;
  mainBtn.style.background = hexColor;
  span.textContent = hexColor;
  //   console.log(hexColor);
}

//*listeners
simpBtn.addEventListener("click", () => {
  swSiHe = true;
  //   console.log(swSiHe);
});
hexBtn.addEventListener("click", () => {
  swSiHe = false;
  //   console.log(swSiHe);
});
mainBtn.addEventListener("click", switFunc);
