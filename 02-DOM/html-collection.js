/**
 * * HTML Collection: array-like objects */
// No se pueden usar los métodos de array como forEach, forIn, ect...

/*const listH2 = document.getElementsByTagName("h2");
// console.log(listH2[1].innerHTML);
for (let i = 0; i < listH2.length; i++) {
  listH2[i].style.color = "red";
}*/

const listLi = document.getElementsByTagName("li");
console.log(listLi);
// console.log(listLi.length);
for (let i = 0; i < listLi.length; i++) {
  let li = listLi[i];
  li.style.backgroundColor = "blue";
  li.style.color = "white";
  li.style.textAlign = "center";
}

/**
 * * NodeList: collection of nodes */
// Se pueden usar los métodos de array como forEach, forIn, ect...

//Convirtiendo una HTML Collection a NodeList para aplicarle los métodos avanzados de array
const betterLI = [...listLi];
console.log(betterLI);
/*betterLI.forEach((element) => {
  console.log(element);
});*/

//querySelector y querySelectorAll son nodeList por defecto
// querySelectorAll es una lista (nodeList)
const listH2 = document.querySelectorAll("h2");
// console.log(listH2);
listH2.forEach((element) => {
  console.log(element);
});

// querySelector es un elemento
const hachi = document.querySelector("#hachi");
console.log(hachi);
hachi.style.color = "red ";
