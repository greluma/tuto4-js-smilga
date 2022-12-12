//* permite seleccionar elementos dinámicos
//* event propagation: oren en q los eventos se disparan
//* event bubbling: se propaga desde el elemento hasta la ruta
//* event capturing: se propaga desde la ruta hasta el elemento (no esta ejemplificado aquí)
//* stop propagation: puedes parar el disparo de los eventos en un elemento determinado

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log(`Current target`, e.currentTarget);
  console.log(`Target`, e.target);
  console.log("---------------------");
  if (e.target.classList.contains("link")) {
    console.log(`ES un link`);
  } else {
    console.log(`NO es un link`);
  }
}

function stopPropagation(e) {
  console.log(`You stop the propagation`);
  e.stopPropagation();
}

//*event bubbling
list.addEventListener("click", showBubbling);
//* stop propagation
// list.addEventListener("click", stopPropagation);

container.addEventListener("click", showBubbling);
document.addEventListener("click", showBubbling);
window.addEventListener("click", showBubbling);
