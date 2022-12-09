const result = document.querySelector("#result");

/**
 * * Children's
 */
// childNodes - retorna un nodeList todos los hijos del elemento incluyendo los espacios en blanco que son tratados como nodos de texto
const allChilds = result.childNodes;
// console.log(allChilds.length);
// console.log(allChilds);
// allChilds.forEach((element) => {
//   console.log(element);
// });

//children - retorna una html-collection de todos los hijos
//para iterarla la converti en un nodeList
const childs = [...result.children];
// console.log(childs.length);
// console.log(childs);
childs.forEach((element) => {
  element.style.border = "2px solid black";
});

/**
 * * Parent: html es el ultimo padre
 */
const parentDiv = result.parentElement;
// console.log(parentDiv);
const parentBody = parentDiv.parentElement;
// console.log(parentBody);
parentBody.parentElement.style.background = "yellow";

/**
 * * next-previous-sibling
 */

const firstLi = document.querySelector("#first");
// console.log(firstLi.nextElementSibling);
firstLi.nextElementSibling.style.color = "red";

const lastLi = document.querySelector("#last");
// console.log(lastLi.previousElementSibling);
lastLi.previousElementSibling.style.color = "red";
