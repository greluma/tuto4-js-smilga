let names = ["mary", "mano", "chris", "lisy"];

/**
 * *Properties
 */
console.log(names.length);
console.log(names[names.length - 1]); //ultimo elemento de la lista

/**
 * *Methods
 */
//reverse: virar la lista
console.log(names.reverse());

//unshift: añadir al inicio
names.unshift("inicio");
console.log(names);
//shift: eliminar el primero
names.shift();
console.log(names);
//push: añadir al final
names.push("final");
console.log(names);
//pop: eliminar al final
names.pop();
console.log(names);

/*splice: toma de la lista los elementos especificados a partir de los 2 argumentos
1er argumento: indice x donde empezar, 2do argumento: cuantos elementos tomar a 
partir del primer argumento*/
let specificNames = names.splice(-2, 2); // Ejemplo: a partir del indice -2, toma 2 elementos
console.log(names);
console.log(specificNames);

//concat: unir 2 arrays, o mas elementos a un array
names = names.concat("otro", "otro");
console.log(names);
moreNames = ["ulada", "gaby", "adri", "roly"];
fullNames = moreNames.concat(names);
console.log(fullNames);
