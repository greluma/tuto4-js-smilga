/**
 * * Find Iterator:
 * retorna una sola instancia (en este caso un objeto),
 * retorna la primera coincidencia, si no encuentra retorna undefined,
 * depende de la condición.
 * muy bueno para encontrar valores únicos
 */
const people = [
  {
    id: 1,
    name: "Mari",
    age: 19,
    position: "student",
  },
  {
    id: 2,
    name: "Chris",
    age: 26,
    position: "chef",
  },
  {
    id: 3,
    name: "Mano",
    age: 24,
    position: "developer",
  },
];

//ejemplo1
const personaId = people.find((item) => item.id === 2);
console.log(personaId.name);

//ejemplo2
const names = ["bob", "Hachi", "luna", "banana"];
const specificName = names.find((item) => item === "Hachi");
console.log(specificName);
