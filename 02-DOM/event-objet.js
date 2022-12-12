const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");
const link = document.querySelector("#link");

heading.addEventListener("click", (event) => {
  //* event.currentTarget: devuelve el elemento que esta siendo referenciado x el evento
  console.log(event.currentTarget);
  //* event.type: devuelve el tipo de evento desencadenante
  console.log(event.type);
  event.currentTarget.classList.toggle("blue");
});

btn.addEventListener("click", (event) => {
  console.log(event.currentTarget);
});

function preventF(e) {
  //   event.preventDefault(): previene el comportamiento por defecto (en este caso ir al inicio de la pagina, muy usado en forms)
  e.preventDefault();
}

link.addEventListener("click", preventF);
