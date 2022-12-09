//* calssName: para obtener los nombres de las clases
//* calssList: para obtener una lista con los nombres de las clases

const first = document.querySelector("#first").className;
console.log(first);

const listaClases = document.querySelector("#first").classList;
console.log(listaClases);

const h3s = document.querySelectorAll("h1");
// console.log(h3s);
h3s.forEach((element) => {
  //   console.log(element);
  element.className = first;
});

//* classList.add : añadir clase a la lista de clases de un elemento

listaClases.forEach((element) => {
  document.querySelector("#four").classList.add(element);
});

document
  .querySelector("#five")
  .classList.add("text", "colors", "allign", "tamanno");

//* classList.remove : añadir clase a la lista de clases de un elemento
document.querySelector("#five").classList.remove("colors");

//* classList.contains : verificar si un elemento contiene una clase (devuelve un booleano)

const verif = document.querySelector("#five").classList.contains("allign");
console.log(verif);
