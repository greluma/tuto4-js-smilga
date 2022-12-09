const result = document.querySelector("#result");
//* remove: elimina elementos del DOM
// result.remove();

//* removeChild: elimina elementos hijos de
result.removeChild(result.querySelector("h1"));
//* Nota: al aplicar querySelector dentro de un elemento antes señalado como en este ejemplo
//* la selección es mas especifica
