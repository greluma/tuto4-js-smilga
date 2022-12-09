/**
 * * Filter Iterator:
 * no retorna un nuevo array,
 * puede cambiar el tamaño original del array,
 * retorna basado en una condición
 */

const people = [
  {
    name: "Mari",
    age: 19,
    position: "student",
  },
  {
    name: "Chris",
    age: 26,
    position: "chef",
  },
  {
    name: "Mano",
    age: 24,
    position: "developer",
  },
];

let youngPeople = people.filter((item) => {
  return item.age < 20;
});
const developers = people.filter((item) => {
  return item.position === "developer";
});

console.log(youngPeople);
console.log(developers);
