/**
 * * Reduce Iterator:
 * iterates, callback function
 * reduce a un solo valor, numero, array, objeto
 * 1 parámetro ('acc')- total de cálculos
 * 2 parámetro ('curr')- actual iteración/valor
 */
const people = [
  {
    id: 1,
    name: "Mari",
    age: 19,
    position: "student",
    salary: 200,
  },
  {
    id: 2,
    name: "Chris",
    age: 26,
    position: "chef",
    salary: 300,
  },
  {
    id: 3,
    name: "Mano",
    age: 24,
    position: "developer",
    salary: 100,
  },
];

// ejemplo
//2 parámetros para la función reduce: 1-función anónima 2-0
//2 parámetros para la función flecha: 1-acc 2-curr
//parámetro acc de la función anónima va a ser devuelto por el 2 paramento (0) de la función reduce
const total = people.reduce((acc, curr) => {
  acc += curr.salary;
  console.log(curr.salary);
  console.log(acc);
  return acc;
}, 0);

console.log(total);
