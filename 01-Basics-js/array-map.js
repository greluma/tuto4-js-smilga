/**
 * * Map Iterator:
 * no retorna un nuevo array,
 * no cambia el tamaño original del array,
 * usa los valores del array original cuando crea el nuevo
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

const ages = people.map((item) => {
  return item.age;
});

const newPeople = people.map((item) => {
  return {
    nameUp: item.name.toUpperCase(),
    ageOlder: item.age + 20,
  };
});

console.log(ages);
console.log(newPeople);
