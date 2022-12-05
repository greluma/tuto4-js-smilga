let text = " My dog is Hachi";

/**
 * *Properties
 */
console.log(text.length); //count blank spaces

/**
 * *Methods
 */

console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(2)); //devuelve el elemento con el incide indicado, devuelve la cadena [empty string si te pasas de indice]
console.log(text.charAt(text.length - 1)); //algoritmo para encontrar el ultimo carácter
console.log(text.indexOf("H")); //devuelve el indice de un carácter, devuelve -1 si no existe
console.log(text.trim()); //retira los espacaios en blanco al inicio y al final
console.log(text.startsWith(" My"));
console.log(text.endsWith("Hachi "));
console.log(text.includes("dog")); //devulve si un elemnto esta en el texto
console.log(text.slice(0, 3)); //crea una nueva cadena a partir de los indices dados, no incluye el ultimo
console.log(text.slice(4)); //si le pasas un valor devuelve la cadena a partir del valor unico
console.log(text.slice(-4)); //si le pasas un valor devuelve la cadena a partir del valor unico de atras para alante

/**
 * *Methods combination
 */
console.log(text.trim().toLowerCase().startsWith("my"));
