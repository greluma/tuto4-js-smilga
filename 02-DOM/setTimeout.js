//* en las funciones setTimeout y setInterval los parámetros de la función callback son pasados luego de el tiempo q se demore la función en ejecutarse

const showScore = (name, score) => {
  console.log(`Your name ${name}, your Score ${score}`);
};

// setTimeout(showScore, 2000, "hachi", 80);
// setInterval(
//   (name, score) => {
//     console.log(`Your name ${name}, your Score ${score}`);
//   },
//   5000,
//   "Mano",
//   90
// );

const id1 = setTimeout(showScore, 2000, "hachi", 80);
const id2 = setTimeout(showScore, 2000, "Mano", 70);
// console.log(id1);

//* para que no se ejecute o se deje de ejecutar una función
clearTimeout(id1);
