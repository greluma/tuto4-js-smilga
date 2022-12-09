const class1 = document.querySelector(".class1");
// console.log(class1);

//* getAttribute(attribute): para encontrar un determinado atributo
const classValue = class1.getAttribute("class");
console.log(classValue);

const id1 = document.querySelector("#id1").getAttribute("id");
console.log(id1);

const showLink = document.querySelector("#link1").getAttribute("href");
console.log(showLink);

//* setAttribute(attribute): para cambiar un atributo

document.querySelector("#link1").setAttribute("href", "moreDummy");

const cambioDummyLink = document.querySelector("#link1").getAttribute("href");
console.log(cambioDummyLink);

class1.nextElementSibling.setAttribute("class", "class1");
// document.querySelector(".class2").setAttribute("class", "class1");

const lis = document.querySelectorAll(".class1");
console.log(lis);
let cont = 1;
lis.forEach((element) => {
  element.textContent = `Cambie la clase del ${cont} elemento y el contenido de ambos elementos dinamicamente`;
  cont++;
  console.log(element.textContent);
});
