const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//*clasic for para todo
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

//*forEach se usa en las listas
lista.forEach((element) => {
  console.log(element);
});

//*forOf se usa en los strings y ... (buscar donde mas)
const nombre = "Manuel";
for (const iterator of nombre) {
  console.log(iterator);
}

//*forIn se usa en los objetos
const objeto = {
  name: "manuel",
  apellido: "prieto",
  age: 24,
};
for (const key in objeto) {
  console.log(key); //para acceder a los atributos
  console.log(objeto[key]); //para acceder a los valores
}
