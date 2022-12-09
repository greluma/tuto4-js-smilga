//**TUTO EJEMPLO Ejemplo */
// callback-function: ya q es llamada por names
const dayTime = (time) => time;
// higher-order-function: llama a la función dayTime y a su vez callback-function: ya q es llamada por great
const names = (name) => `Good ${dayTime(`Morning`)} ${name}`;
// higher-order-function: llama a la función names
const great = () => {
  const myName = "Manu";
  return `${names(`Mari`).toUpperCase()}, my name is ${myName}`;
};

console.log(great().toUpperCase());

/**
 * *------------------------------------------------------------------------------------------
 */

//**MI EJEMPLO */
let num1 = 6,
  num2 = 4;
//**callback-function: función pasada como argumento de otra función
const sumar = (num1, num2) => num1 + num2;

//**higher-order-function: función que recibe otra como argumento o que devuelve una función
const multiplicar = (funcion) => funcion * funcion;
const devuelveFuncion = () => sumar(num1, num2);

//**llamadas
//función normal
console.log(sumar(num1, num2));
//función de high-order
console.log(multiplicar(sumar(num1, num2))); //esta tiene una función como parámetro
console.log(devuelveFuncion()); //esta devuelve otra función
