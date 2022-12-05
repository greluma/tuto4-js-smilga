/**
 * *## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter
 */

//Importa el orden de los parametros
/*const fullName = (nameF, nameL) => {
    return `Full Name: ${nameF.toUpperCase()} ${nameL.toUpperCase()}`;
};

console.log(fullName("mano", "rodrig"));*/

//Con un objeto NO Importa el orden de los parametros
const fullName = ({ nameL, nameF }) =>
  `Full Name ${nameF.toUpperCase()} ${nameL.toUpperCase()}`;

console.log(fullName({ nameL: "rodriguez", nameF: "mano" }));
