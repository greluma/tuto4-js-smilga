//* prepend
//* innerText

const original = document.querySelector("#original");
const newHeading = document.createElement("h1");
//* innerText: otra forma de crear texto para los elementos
newHeading.innerText = "I'm the 1 new element";

document.body.insertBefore(newHeading, original);

const newHeading2 = document.createElement("h3");
//* prepend(element): lo añade al inicio del elemento: en este ejemplo al inicio del body
newHeading2.innerHTML = "I'm the 2 new element";
document.body.prepend(newHeading2);

console.log(newHeading.innerText);
console.log(newHeading.textContent);
console.log(newHeading.innerHTML);
