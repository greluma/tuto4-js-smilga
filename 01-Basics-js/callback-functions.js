//**TUTO EJEMPLO Ejemplo */

const morning = () => `Good Morning`; //callback-function
// higher-order-function: llama a la función morning
const great = (name) => {
  const myName = "Manu";
  console.log(`${morning()} ${name}, my name is ${myName}`);
};

great(`Mari`);

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
