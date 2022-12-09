//* createElement('element')
//* createTextNode('textContent')
//* element.appendChild('childElement')

//* createElement('ej: div'): create empty elements(sin contenido)
const bodyDiv = document.createElement("div");
const newH1 = document.createElement("h1");

//* createTextNode("lorem"): le crea el texto a un elemento
const textH1 = document.createTextNode("a simple text for my h1");

//* appendChild(element): lo añade al final del elemento
newH1.appendChild(textH1);
bodyDiv.appendChild(newH1);
//(si estas parado en el body lo añade luego de la etiqueta script)
//document.body.appendChild(bodyDiv);

//* insertBefore(new, old): lo añade delante del elemento especificado
document.body.insertBefore(bodyDiv, document.querySelector(".result"));

const replH1 = document.createElement("h1");
replH1.textContent = "soy el hijo que reemplaza";
console.log(replH1.textContent);

//* replaceChild(new, old ): reemplaza un hijo por otro
bodyDiv.replaceChild(replH1, newH1);

//haciendo mis pruebas
console.log(newH1.textContent);
newH1.classList.add("another", "blue");
console.log(newH1.classList);
