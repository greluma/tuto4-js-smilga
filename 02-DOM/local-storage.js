//* Web Storage: provided by browser
//* session storage: mantiene la info mientras la ventana esta abierta
//* local storage: mantiene la info siempre
//* Methods: setItem, getItem, removeItem, clear

// sessionStorage.setItem("name", "john");
localStorage.setItem("name", "john");
localStorage.setItem("age", "56");
// localStorage.setItem("age", "30"); //sobrescribir un método

// console.log(localStorage.getItem("name"));
// console.log(localStorage.removeItem("age"));
// localStorage.clear();

//* Local Storage with multiple values :
//* JSON.stringify() : almacenarlos en formato JSON
//* JSON.parse():

const friends = ["mari", "chris", "hachi"];
localStorage.setItem("friends", JSON.stringify(friends));
const valFri = JSON.parse(localStorage.getItem("friends"));
console.log(valFri);

const obj = {
  name: "manolo",
  age: 24,
};
localStorage.setItem("obj", JSON.stringify(obj));
const valObj = JSON.parse(localStorage.getItem("obj"));
console.log(valObj);

localStorage.removeItem("fruits");

//* Ejemplo
let fruits;
if (!localStorage.getItem("fruits")) {
  fruits = ["apple", "banana"];
  localStorage.setItem("fruits", JSON.stringify(fruits));
}
