//* 'submit' event listener
//* prevent default: para que no mande los valores al servidor
//* how to get a value: para acceder a los valores usar la propiedad 'value'

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`submitted form`);
  console.log(name.value);
  console.log(password.value);
});
